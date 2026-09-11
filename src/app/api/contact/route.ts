import { NextResponse } from "next/server";

const recipient = "bm.solutionscr@gmail.com";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (body.website || !name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
    }

    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        company: typeof body.company === "string" ? body.company.trim() : "",
        email,
        phone: typeof body.phone === "string" ? body.phone.trim() : "",
        service: typeof body.service === "string" ? body.service : "",
        message,
        _subject: `Nueva solicitud de ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "No se pudo enviar" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Error interno" }, { status: 500 });
  }
}
