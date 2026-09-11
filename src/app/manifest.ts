import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#020210",
    theme_color: "#020210",
    icons: [
      { src: "/brand/bm-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/bm-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
