import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { servicePageSeo } from "@/data/seo";

const { title, description } = servicePageSeo["pos"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pos" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: siteConfig.name,
    url: "/pos",
    title,
    description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
