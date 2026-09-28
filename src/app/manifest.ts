import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#F4AA21",
    icons: [
      { src: "/brand/possible-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/possible-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
