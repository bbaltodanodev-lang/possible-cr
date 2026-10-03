import type { Metadata } from "next";
import Link from "next/link";
import { servicePageSchema, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { servicePageSeo } from "@/data/seo";

const { title, description } = servicePageSeo["soporte"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/soporte" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: siteConfig.name,
    url: "/soporte",
    title,
    description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav aria-label="Ruta de navegación" className="mx-auto w-full max-w-6xl px-6 pt-6 text-sm text-body">
        <Link href="/" className="hover:text-white">Possible</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{title}</span>
      </nav>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(servicePageSchema("soporte")) }} />
    </>
  );
}
