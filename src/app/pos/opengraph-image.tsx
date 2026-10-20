import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { servicePageSeo } from "@/data/seo";

const title = servicePageSeo["pos"].title;

export const alt = `Possible Studio | ${title}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage(title);
}
