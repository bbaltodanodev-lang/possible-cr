import test from "node:test";
import assert from "node:assert/strict";
import { readContactRequest } from "../src/lib/contact-request.ts";

const valid = { name: "Ana", email: "ana@example.com", message: "Consulta sobre una página web.", company: "", phone: "", service: "web", website: "" };
function request(body, headers = {}) {
  return new Request("https://possible.cr/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://possible.cr", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("accepts a valid same-origin submission and trims fields", async () => {
  const result = await readContactRequest(request({ ...valid, name: " Ana " }));
  assert.equal(result.name, "Ana");
  assert.equal(result.message, valid.message);
  assert.equal("website" in result, false);
});

for (const [label, body, headers, status] of [
  ["cross-origin", valid, { origin: "https://attacker.example" }, 403],
  ["cross-site fetch", valid, { "sec-fetch-site": "cross-site" }, 403],
  ["wrong media type", valid, { "content-type": "text/plain" }, 415],
  ["malformed JSON", "{", {}, 400],
  ["null JSON", "null", {}, 400],
  ["array JSON", "[]", {}, 400],
  ["honeypot", { ...valid, website: "spam" }, {}, 400],
  ["invalid email", { ...valid, email: "invalid" }, {}, 400],
  ["oversized optional field", { ...valid, company: "a".repeat(161) }, {}, 400],
  ["header injection", { ...valid, name: "Ana\r\nInjected" }, {}, 400],
  ["oversized body without Content-Length", " ".repeat(24_001), {}, 413],
  ["oversized declared length", valid, { "content-length": "24001" }, 413],
]) {
  test(`rejects ${label}`, async () => {
    await assert.rejects(readContactRequest(request(body, headers)), (error) => error.status === status);
  });
}
