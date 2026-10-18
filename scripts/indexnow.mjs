// Envía las URLs del sitemap publicado a IndexNow (Bing, Yandex, Seznam, Naver...).
// Uso, después de cada despliegue: node scripts/indexnow.mjs [https://dominio]
// La clave pública vive en src/data/seo.ts (indexNowKey) y en public/<clave>.txt.
import { readFile } from "node:fs/promises";

const site = (process.argv[2] || process.env.NEXT_PUBLIC_SITE_URL || "https://possible-cr.vercel.app").replace(/\/$/, "");
const seo = await readFile(new URL("../src/data/seo.ts", import.meta.url), "utf8");
const key = seo.match(/indexNowKey = "([a-f0-9]+)"/)?.[1];
if (!key) throw new Error("No se encontró indexNowKey en src/data/seo.ts");

const keyResponse = await fetch(`${site}/${key}.txt`);
if (!keyResponse.ok || (await keyResponse.text()).trim() !== key) {
  throw new Error(`El archivo de clave ${site}/${key}.txt no está publicado todavía.`);
}

const sitemap = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) throw new Error("El sitemap no tiene URLs.");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${key}.txt`, urlList }),
});
console.log(`IndexNow respondió ${response.status} ${response.statusText} para ${urlList.length} URLs.`);
if (!response.ok && response.status !== 202) process.exitCode = 1;
