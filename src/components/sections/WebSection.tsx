"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";

export function WebSection() {
  const { t } = useLanguage();

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
            <div className="mt-7">
              <Button href="/paginas-web" size="lg">
                {t.web.cta}
              </Button>
              <p className="mt-3 text-sm text-faint">{t.web.ctaHelper}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.web.chips.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 rounded-card border border-line bg-card p-5 shadow-soft"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300">
                  <DynamicIcon name={feature.icon} className="size-5" />
                </span>
                <span className="min-w-0 text-sm font-semibold text-strong">{feature.label}</span>
              </div>
            ))}
            <Link
              href="/paginas-web"
              className="col-span-1 flex items-center gap-3 rounded-card border border-brand-tint-strong/60 bg-brand-tint/60 p-5 transition-colors hover:bg-brand-tint-strong/60 sm:col-span-2"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                <DynamicIcon name="arrowRight" className="size-5" />
              </span>
              <span className="text-sm font-semibold text-brand-200">{t.web.linkCta}</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}