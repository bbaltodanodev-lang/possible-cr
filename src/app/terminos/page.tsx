import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { legalMeta } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

const meta = legalMeta.terms;

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  type: "article",
});

export default function TerminosPage() {
  return <LegalDocument documentKey="terms" />;
}
