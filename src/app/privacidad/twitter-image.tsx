import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { legalMeta } from "@/data/legal";

const title = legalMeta.privacy.title;

export const alt = `Possible Studio | ${title}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage(title);
}
