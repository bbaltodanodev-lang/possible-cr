import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { ScrollManager } from "@/components/ui/ScrollManager";
import { LanguageProvider } from "@/i18n/provider";
import { siteConfig, defaultMetadata } from "@/data/site";
import { organizationSchema, professionalServiceSchema, websiteSchema, jsonLdScript } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultMetadata.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultMetadata.description,
  keywords: [...defaultMetadata.keywords],
  category: "technology",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "/",
    siteName: siteConfig.name,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Possible | Soluciones digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F4AA21",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        <LanguageProvider>
          <ScrollManager />
          <Navbar />
          <main id="contenido" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <BackToTopButton />
        </LanguageProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(professionalServiceSchema()) }}
        />
      </body>
    </html>
  );
}
