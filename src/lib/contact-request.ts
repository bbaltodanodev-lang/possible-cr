const MAX_BODY_BYTES = 24_000;

export class ContactRequestError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function readContactRequest(request: Request) {
  const origin = request.headers.get("origin");
  if ((origin && origin !== new URL(request.url).origin) || request.headers.get("sec-fetch-site") === "cross-site") {
    throw new ContactRequestError(403, "Origen no permitido");
  }
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    throw new ContactRequestError(415, "Se requiere JSON");
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    throw new ContactRequestError(413, "Solicitud demasiado grande");
  }
  if (!request.body) throw new ContactRequestError(400, "Datos incompletos");

  // Count actual bytes too: Content-Length is optional and cannot be trusted.
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new ContactRequestError(413, "Solicitud demasiado grande");
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
  } finally {
    reader.releaseLock();
  }

  let body: unknown;
  try { body = JSON.parse(text); }
  catch { throw new ContactRequestError(400, "JSON inválido"); }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new ContactRequestError(400, "Datos incompletos");
  }
  const fields = body as Record<string, unknown>;
  if (fields.website) throw new ContactRequestError(400, "Datos inválidos");
  function field(key: string, max: number, required = false) {
    const value = fields[key];
    if (value === undefined && !required) return "";
    if (typeof value !== "string" || value.length > max || (required && !value.trim()) || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) {
      throw new ContactRequestError(400, "Datos inválidos");
    }
    return value.trim();
  }
  const name = field("name", 120, true);
  const email = field("email", 254, true);
  const company = field("company", 160);
  const phone = field("phone", 40);
  const service = field("service", 80);
  const message = field("message", 5000, true);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(name + company + phone + service)) {
    throw new ContactRequestError(400, "Datos inválidos");
  }
  return { name, email, company, phone, service, message };
}
