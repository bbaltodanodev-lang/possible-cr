import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { pageLastModified } from "@/data/seo";
import { legalContent, legalMeta } from "@/data/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = (Object.keys(pageLastModified) as (keyof typeof pageLastModified)[]).map((route) => ({
    url: route === "/" ? siteConfig.url : `${siteConfig.url}${route}`,
    lastModified: pageLastModified[route],
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const legalRoutes = (["privacy", "terms"] as const).map((key) => ({
    url: `${siteConfig.url}${legalMeta[key].path}`,
    lastModified: legalContent[key].es.updatedIso,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...mainRoutes, ...legalRoutes];
}
