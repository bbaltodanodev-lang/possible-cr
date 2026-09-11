"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { systemsPricingEnhancements } from "@/data/systems-pricing";
import { cn } from "@/lib/utils";
import styles from "./SystemsPricing.module.css";

export function SystemsPricing() {
  const { t, lang } = useLanguage();
  const enhancements = systemsPricingEnhancements[lang];

  return (
    <section id="cotizacion-sistemas" className="bg-black py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            {t.systemsPricing.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t.systemsPricing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-body sm:text-lg">
            {t.systemsPricing.description}{" "}
            <span className="text-white">{t.systemsPricing.descriptionEm}</span>.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.systemsPricing.tiers.map((tier) => {
            const highlight = tier.id === "estandar";
            const custom = tier.id === "personalizado";
            const additionalFeatures =
              enhancements.additionalFeatures[tier.id as keyof typeof enhancements.additionalFeatures] ?? [];
            return (
              <article
                key={tier.id}
                aria-labelledby={`system-plan-${tier.id}`}
                className={cn(
                  "relative isolate flex min-w-0 flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300 motion-safe:hover:-translate-y-1",
                  custom
                    ? styles.customCard
                    : highlight
                    ? "border-brand-400/50 bg-brand-tint shadow-[0_0_60px_rgba(138,0,255,0.15)]"
                    : "border-white/10 bg-card",
                )}
              >
                {highlight && <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />}

                <div className="relative z-[1]">
                  <div className="mb-5 flex min-h-7 items-center">
                    {custom ? (
                      <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide", styles.customBadge)}>
                        <DynamicIcon name="zap" className="size-3.5 shrink-0" />
                        {enhancements.customBadge}
                      </span>
                    ) : highlight ? (
                      <span className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white">
                        {t.systemsPricing.mostPopular}
                      </span>
                    ) : null}
                  </div>
                  <h3
                    id={`system-plan-${tier.id}`}
                    className={cn("text-sm font-semibold uppercase tracking-wider", custom ? "text-brand-100" : "text-brand-300")}
                  >
                    {tier.name}
                  </h3>
                  <div className="mt-3 flex items-end gap-1.5">
                    <span className={cn("font-black tracking-tight", custom ? styles.customPrice : "text-4xl text-white")}>
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-faint">{tier.note}</p>

                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-4 py-2.5">
                    <DynamicIcon name="clock" className="size-4 text-neon-blue" />
                    <span className="text-sm font-medium text-body">
                      {t.systemsPricing.deliveryLabel}
                      <span className="font-bold text-white">{tier.delivery}</span>
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-body">{tier.description}</p>
                  {custom && (
                    <p className="mt-4 border-l-2 border-neon-pink/70 pl-3 text-sm font-medium leading-relaxed text-brand-100">
                      {enhancements.customTagline}
                    </p>
                  )}
                </div>

                <ul className="relative z-[1] mt-7 flex-1 space-y-3">
                  {[...tier.features, ...additionalFeatures].map((f) => (
                    <li key={f.label} className={cn("flex items-start gap-3 text-sm leading-relaxed", custom ? "text-brand-50" : "text-body")}>
                      <span className={cn("grid size-6 shrink-0 place-items-center rounded-lg", custom ? styles.customFeatureIcon : "bg-brand-tint text-brand-300")}>
                        <DynamicIcon name={f.icon} className="size-3.5" />
                      </span>
                      <span className="min-w-0">{f.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative z-[1] mt-8">
                  <Button
                    href="#contacto"
                    className={cn("w-full justify-center", custom && styles.customCta)}
                    variant={highlight || custom ? "primary" : "secondary"}
                  >
                    {tier.id === "personalizado"
                      ? t.systemsPricing.ctaPersonalizado
                      : t.systemsPricing.ctaInteresa}
                    {custom && <DynamicIcon name="arrowRight" className="size-4 shrink-0" />}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-card p-8 sm:p-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-300">
            {t.systemsPricing.includedEyebrow}
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.systemsPricing.included.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-body">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-neon-blue/15 text-neon-blue">
                  <DynamicIcon name={item.icon} className="size-3" />
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-faint">
          {t.systemsPricing.note}{" "}
          <a
            href="#contacto"
            className="text-brand-300 underline decoration-brand-300/40 underline-offset-2 hover:text-brand-200"
          >
            {t.systemsPricing.noteLink}
          </a>
        </p>
      </Container>
    </section>
  );
}
