"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import styles from "./SystemsPricing.module.css";

export function WebPricing() {
  const { t } = useLanguage();

  return (
    <section id="cotizacion-web" className="bg-black py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neon-pink">
            {t.webPricing.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t.webPricing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-body sm:text-lg">
            {t.webPricing.description}{" "}
            <span className="text-white">{t.webPricing.descriptionEm}</span>.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.webPricing.tiers.map((tier) => {
            const highlight = tier.id === "profesional";
            const custom = tier.id === "avanzada";
            return (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1",
                  custom
                    ? styles.customCard
                    : highlight
                      ? "border-brand-400/50 bg-brand-tint shadow-[0_0_60px_rgba(138,0,255,0.15)]"
                      : "border-white/10 bg-card",
                )}
              >
                {(highlight || custom) && <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />}
                {highlight && (
                  <span
                    className="absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #b000a8, #ef0ab9, #ff167a)",
                    }}
                  >
                    {t.webPricing.mostPopular}
                  </span>
                )}

                <div>
                  <p className={cn("text-sm font-semibold uppercase tracking-wider", custom ? "text-brand-100" : "text-brand-300")}>
                    {tier.name}
                  </p>
                  <div className="mt-3 flex items-end gap-1.5">
                    <span className={cn("text-4xl font-black tracking-tight", custom ? styles.customPrice : "text-white")}>
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-faint">{tier.note}</p>

                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-4 py-2.5">
                    <DynamicIcon name="clock" className={cn("size-4", custom ? "text-neon-blue" : "text-brand-300")} />
                    <span className="text-sm font-medium text-body">
                      {t.webPricing.deliveryLabel}
                      <span className="font-bold text-white">{tier.delivery}</span>
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-body">{tier.description}</p>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((f, i) => (
                    <li key={i} className={cn("flex items-center gap-3 text-sm", custom ? "text-brand-50" : "text-body")}>
                      <span
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-lg",
                          custom ? styles.customFeatureIcon : "bg-brand-tint text-brand-300",
                        )}
                      >
                        <DynamicIcon name={f.icon} className="size-3.5" />
                      </span>
                      {f.label}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#contacto"
                    className={cn("w-full justify-center", custom && styles.customCta)}
                    variant={highlight || custom ? "primary" : "secondary"}
                  >
                    {tier.id === "avanzada"
                      ? t.webPricing.ctaPersonalizado
                      : t.webPricing.ctaInteresa}
                    {custom && <DynamicIcon name="arrowRight" className="size-4 shrink-0" />}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 mb-10 flex w-full flex-col gap-5 rounded-2xl border border-brand-400/50 bg-brand-tint p-5 shadow-[0_0_60px_rgba(138,0,255,0.15)] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6">
          <div className="min-w-0 text-center sm:text-left">
            <h3 className="mt-2 text-base font-bold text-white">{t.webPricing.supportTitle}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
            {t.webPricing.supportNotice}
            </p>
          </div>
          <a
            href="/soporte"
            className="inline-flex shrink-0 self-center rounded-full bg-brand-gradient px-6 py-2.5 text-xs font-bold text-white shadow-[0_0_24px_rgba(239,10,185,0.2)] transition-transform hover:scale-[1.03] sm:self-auto"
          >
            {t.webPricing.supportLink}
          </a>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-card p-8 sm:p-10">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-300">
            {t.webPricing.includedEyebrow}
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.webPricing.included.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-body">
                <span
                  className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-300"
                >
                  <DynamicIcon name={item.icon} className="size-3" />
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-faint">
          {t.webPricing.note}{" "}
          <a
            href="#contacto"
            className="text-brand-300 underline decoration-brand-300/40 underline-offset-2 hover:text-brand-200"
          >
            {t.webPricing.noteLink}
          </a>
        </p>
      </Container>
    </section>
  );
}
