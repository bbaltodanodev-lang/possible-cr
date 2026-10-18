import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Logo original de la marca (1089x248): solo se escala, nunca se redibuja.
const LOGO_WIDTH = 1089;
const LOGO_HEIGHT = 248;
const LOGO_RENDER_WIDTH = 620;

/** Tarjeta social 1200x630: fondo negro de la marca, logo de Possible y título de la página. */
export async function renderOgImage(title: string) {
  const logo = await readFile(join(process.cwd(), "public/brand/possible-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const host = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          padding: "64px 80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse solo admite <img>. */}
        <img
          src={logoSrc}
          alt=""
          width={LOGO_RENDER_WIDTH}
          height={Math.round((LOGO_RENDER_WIDTH * LOGO_HEIGHT) / LOGO_WIDTH)}
        />
        <div
          style={{
            marginTop: 56,
            fontSize: 52,
            lineHeight: 1.2,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 1040,
            textWrap: "balance",
          }}
        >
          {title}
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#cbd5e1" }}>{host}</div>
      </div>
    ),
    ogSize,
  );
}
