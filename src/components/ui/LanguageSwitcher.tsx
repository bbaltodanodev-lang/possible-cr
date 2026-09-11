"use client";

import { useLanguage } from "@/i18n/provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className={cn("flex shrink-0 items-center rounded-full border border-line bg-card p-1", className)}
    >
      {(["es", "en"] as const).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setLang(locale)}
          aria-pressed={lang === locale}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors",
            lang === locale
              ? "bg-brand-gradient text-white"
              : "text-faint hover:text-strong",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}