"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { DynamicIcon } from "@/components/ui/Icons";

export function WebSection() {
  const { t } = useLanguage();
  const serviceIcons = ["zap", "palette", "layout", "shield"];
  const serviceLinks = ["/pos", "/paginas-web", "/sistemas", "/soporte"];
  const serviceColors = "border-brand-300/70 bg-gradient-to-br from-[#17122f] via-[#110d26] to-[#090812] shadow-[0_0_28px_rgba(138,0,255,0.16)] hover:border-neon-pink/90 hover:shadow-[0_0_42px_rgba(239,10,185,0.32)]";

  return (
    <section id="paginas-web" className="relative overflow-hidden bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gradient">
              {t.web.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.web.title}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-body sm:text-lg">
              {t.web.description}
            </p>
            <p className="mt-7 text-sm text-faint">{t.web.ctaHelper}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.web.chips.map((feature, index) => (
              <Link
                key={feature.label}
                href={serviceLinks[index]}
                className={`group relative isolate flex items-center gap-3 overflow-hidden rounded-card border p-5 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] ${serviceColors}`}
              >
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-brand-gradient opacity-25 blur-2xl transition-opacity duration-300 motion-safe:animate-pulse group-hover:opacity-70" />
                <span className="relative z-[1] grid size-10 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300 transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                  <DynamicIcon name={serviceIcons[index]} className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <span className="relative z-[1] min-w-0 text-sm font-semibold text-strong">{feature.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
