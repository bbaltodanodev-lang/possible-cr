import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { legalMeta } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

const meta = legalMeta.privacy;

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  type: "article",
});

export default function PrivacidadPage() {
  return <LegalDocument documentKey="privacy" />;
}
