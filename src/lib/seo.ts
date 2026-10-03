import { siteConfig } from "@/data/site";
import { servicePageSeo } from "@/data/seo";

export function organizationSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "Possible.cr",
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/possible-icon-512.png`,
    image: `${siteConfig.url}/opengraph-image.png`,
    description: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      availableLanguage: ["Spanish", "English"],
      areaServed: siteConfig.areaServed,
    },
  };

  const socials = Object.values(siteConfig.social).filter(Boolean);
  if (socials.length > 0) {
    schema.sameAs = socials;
  }

  return schema;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    inLanguage: "es-CR",
    name: siteConfig.name,
    alternateName: "Possible.cr",
    url: siteConfig.url,
    description: siteConfig.tagline,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image.png`,
    description: siteConfig.tagline,
    email: siteConfig.email,
    areaServed: siteConfig.areaServed.map((area) => ({ "@type": "Country", name: area })),
    knowsAbout: ["Diseño de páginas web", "Desarrollo web", "Sistemas web empresariales", "Presencia digital para negocios"],
  };
}

export function servicesSchema() {
  const base = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: siteConfig.areaServed.map((area) => ({ "@type": "Country", name: area })),
  };

  return [
    {
      ...base,
      "@type": "Service",
      name: "Sistemas web empresariales",
      serviceType: "Sistemas web empresariales",
      description:
        "Desarrollo de sistemas web personalizados para gestionar ingresos, gastos, inventario, clientes y reportes de un negocio.",
    },
    {
      ...base,
      "@type": "Service",
      name: "Páginas web profesionales",
      serviceType: "Diseño y desarrollo web",
      description:
        "Diseño y desarrollo de páginas web profesionales enfocadas en presencia digital, visibilidad en Google y generación de clientes.",
    },
  ];
}

export function jsonLdScript(schema: Record<string, unknown>) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
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
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        mainEntity: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "Service", "@id": `${url}#service`, url, name: title, description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Country", name })),
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteConfig.name, item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  };
}
