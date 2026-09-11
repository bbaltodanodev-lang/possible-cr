import { siteConfig } from "@/data/site";

export function organizationSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.tagline,
    email: siteConfig.email,
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
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.tagline,
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}

export function servicesSchema() {
  const base = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
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
  return JSON.stringify(schema);
}