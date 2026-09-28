import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { legalMeta } from "@/data/legal";

const meta = legalMeta.privacy;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: meta.path,
  },
  openGraph: {
    type: "article",
    url: meta.path,
    title: meta.title,
    description: meta.description,
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return <LegalDocument documentKey="privacy" />;
}
