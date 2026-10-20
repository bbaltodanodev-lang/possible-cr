import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { servicePageSeo } from "@/data/seo";
import { extraServices } from "@/data/extra-services";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const areaServed = siteConfig.areaServed.map((name) => ({ "@type": "Country", name }));

/**
 * Metadatos comunes de una página: canonical, Open Graph y Twitter.
 * Las imágenes 1200x630 las aporta el archivo opengraph-image/twitter-image de cada ruta.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "es_CR",
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

export function organizationSchema() {
  const socials = Object.values(siteConfig.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": organizationId,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/brand/possible-icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}/brand/possible-logo.png`,
    description: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed,
    knowsAbout: [
      "Diseño de páginas web",
      "Desarrollo web",
      "Sistemas web empresariales",
      "Sistemas POS",
      "CRM a la medida",
      "Automatización de WhatsApp Business",
      "Desarrollo de apps móviles",
      "Soporte y mantenimiento web",
    ],
    founder: { "@type": "Person", name: siteConfig.founder.name, url: siteConfig.founder.url, sameAs: [siteConfig.founder.url] },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      availableLanguage: ["Spanish", "English"],
      areaServed,
    },
    sameAs: [
      ...socials,
      ...siteConfig.relatedSites.map((site) => site.url),
      siteConfig.founder.url,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    inLanguage: "es-CR",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    description: siteConfig.tagline,
    publisher: { "@id": organizationId },
  };
}

function serviceNode(path: keyof typeof servicePageSeo) {
  const { title, description, serviceType } = servicePageSeo[path];
  const url = `${siteConfig.url}/${path}`;
  const scopes = path in extraServices ? extraServices[path as keyof typeof extraServices].es.scopes : [];
  const offers = scopes.map(([name, price]) => ({
    "@type": "Offer",
    name,
    price: price.replace(/[^0-9.]/g, ""),
    priceCurrency: "USD",
  }));
  return {
    ...(offers.length > 0 ? { offers } : {}),
    "@type": "Service",
    "@id": `${url}#service`,
    url,
    name: title,
    serviceType,
    description,
    provider: { "@id": organizationId },
    areaServed,
  };
}

/** Portada: WebPage + un Service por servicio. */
export function homeSchema() {
  const url = `${siteConfig.url}/`;
  const services = (Object.keys(servicePageSeo) as (keyof typeof servicePageSeo)[]).map(serviceNode);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: siteConfig.name,
        inLanguage: "es-CR",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
      },
      ...services,
    ],
  };
}

export function servicePageSchema(path: keyof typeof servicePageSeo) {
  const { title, description } = servicePageSeo[path];
  const url = `${siteConfig.url}/${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": url, url, name: title, description,
        inLanguage: "es-CR",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      serviceNode(path),
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteConfig.name, item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  };
}

export function jsonLdScript(schema: Record<string, unknown>) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
