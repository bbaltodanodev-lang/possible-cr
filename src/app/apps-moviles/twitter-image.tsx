import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { servicePageSeo } from "@/data/seo";

const title = servicePageSeo["apps-moviles"].title;

export const alt = `Possible | ${title}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage(title);
}
