import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";
import { readContactRequest, ContactRequestError } from "@/lib/contact-request";

export async function POST(request: Request) {
  const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" };
  try {
    const payload = await readContactRequest(request);
    const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({ ...payload, _subject: `Nueva solicitud de ${payload.name}`, _template: "table", _captcha: "false" }),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result || (result.success !== true && result.success !== "true")) {
      return NextResponse.json({ ok: false, error: "No se pudo enviar" }, { status: 502, headers });
    }
    return NextResponse.json({ ok: true }, { headers });
  } catch (error) {
    if (error instanceof ContactRequestError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: error.status, headers });
    }
    return NextResponse.json({ ok: false, error: "No se pudo enviar" }, { status: 502, headers });
  }
}