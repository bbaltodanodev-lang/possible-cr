import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const mainRoutes = ["/", "/paginas-web", "/pos", "/sistemas", "/soporte"];
const legalRoutes = ["/privacidad", "/terminos"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  return [
    ...mainRoutes.map((route, index) => ({
      url: `${base}${route}`,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.8,
    })),
    ...legalRoutes.map((route) => ({
      url: `${base}${route}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
