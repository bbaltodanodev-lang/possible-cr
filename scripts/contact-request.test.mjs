import test from "node:test";
import assert from "node:assert/strict";
import { readContactRequest } from "../src/lib/contact-request.ts";
import { checkContactRateLimit } from "../src/lib/rate-limit.ts";

const valid = { name: "Ana", email: "ana@example.com", message: "Consulta sobre una página web.", company: "", phone: "", service: "web", website: "", privacyConsent: true, privacyVersion: "2026-10-03" };
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

test("allows five requests and blocks the sixth within the window", () => {
  const now = 1_700_000_000_000;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    assert.equal(checkContactRateLimit(`test-${now}`, now).allowed, true);
  }
  const blocked = checkContactRateLimit(`test-${now}`, now);
  assert.equal(blocked.allowed, false);
  assert.ok(blocked.retryAfter > 0);
  assert.equal(checkContactRateLimit(`test-${now}`, now + 15 * 60 * 1000 + 1).allowed, true);
});

for (const [label, body, headers, status] of [
  ["missing consent", { ...valid, privacyConsent: undefined }, {}, 400],
  ["refused consent", { ...valid, privacyConsent: false }, {}, 400],
  ["old privacy version", { ...valid, privacyVersion: "2026-09-27" }, {}, 400],
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
