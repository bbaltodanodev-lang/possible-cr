"use client";

import { useLanguage } from "@/i18n/provider";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/utils";
import { IconWhatsApp } from "@/components/ui/Icons";

export function WhatsAppButton() {
  const { t } = useLanguage();

  if (!siteConfig.whatsappNumber) return null;

  return (
    <a
      href={buildWhatsAppLink(siteConfig.whatsappNumber, t.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-float transition-transform duration-200 hover:scale-105"
    >
      <IconWhatsApp className="size-7" />
    </a>
  );
}