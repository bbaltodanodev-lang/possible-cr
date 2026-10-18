import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { servicePageSeo } from "@/data/seo";

const title = servicePageSeo["paginas-web"].title;

export const alt = `Possible | ${title}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage(title);
}
