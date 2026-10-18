import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, servicePageSchema, jsonLdScript } from "@/lib/seo";
import { servicePageSeo } from "@/data/seo";

const { title, description } = servicePageSeo["crm"];

export const metadata: Metadata = pageMetadata({ title, description, path: "/crm" });

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav aria-label="Ruta de navegación" className="mx-auto w-full max-w-6xl px-6 pt-6 text-sm text-body">
        <Link href="/" className="hover:text-white">Possible</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{title}</span>
      </nav>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(servicePageSchema("crm")) }} />
    </>
  );
}
