import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

const title = "Diseño web, sistemas y POS en Costa Rica";

export const alt = `Possible Studio | ${title}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage(title);
}
