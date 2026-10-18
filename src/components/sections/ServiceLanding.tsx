"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";
import { extraServices } from "@/data/extra-services";
import type { ExtraServiceSlug } from "@/data/extra-services";

const featureIcons = ["layout", "trendingUp", "users", "shield", "barChart"] as const;

/** Página de servicio con la misma estructura que /pos: hero, beneficios, alcances y contacto. */
export function ServiceLanding({ slug }: { slug: ExtraServiceSlug }) {
  const { lang } = useLanguage();
  const t = extraServices[slug][lang];

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_15%_-20%,rgba(22,139,255,0.16),transparent),radial-gradient(36rem_22rem_at_90%_-10%,rgba(138,0,255,0.16),transparent)]" />
        <Container className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gradient">{t.eyebrow}</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-body sm:text-lg">{t.description}</p>
          <div className="mt-8"><Button href="/#contacto" size="lg">{t.cta}<DynamicIcon name="arrowRight" className="size-4" /></Button></div>
        </Container>
      </section>
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.benefitsTitle}</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.benefits.map(([icon, title, description]) => (
              <article key={title} className="rounded-2xl border border-line bg-card p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-300"><DynamicIcon name={icon} className="size-5" /></span>
                <h3 className="mt-4 text-[15px] font-semibold text-strong">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-faint">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-page py-20 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.scopeTitle}</h2>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {t.scopes.map(([name, price, description, features], i) => (
              <article key={name} className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${i === 1 ? "border-brand-400/60 bg-brand-tint shadow-[0_0_60px_rgba(138,0,255,0.2)]" : i === 2 ? "border-brand-300/60 bg-gradient-to-br from-brand-tint to-card shadow-[0_0_60px_rgba(0,123,255,0.18)]" : "border-white/10 bg-card"}`}>
                {i === 2 && <span className="mb-5 flex w-fit items-center gap-2 rounded-full border border-brand-300/40 bg-brand-tint px-3 py-1 text-xs font-bold text-brand-100"><DynamicIcon name="zap" className="size-3.5" />{t.customBadge}</span>}
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">{name}</h3>
                <p className={`mt-3 font-black tracking-tight ${i === 2 ? "text-5xl text-brand-100" : "text-4xl text-white"}`}>{price}</p>
                <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-body"><DynamicIcon name="clock" className="size-4 text-neon-blue" />{t.deliveryLabel}<span className="font-bold text-white">{t.delivery}</span></div>
                <p className="mt-5 min-h-12 text-sm leading-relaxed text-body">{description}</p>
                {i === 2 && <p className="mt-4 border-l-2 border-neon-pink/70 pl-3 text-sm font-medium text-brand-100">{t.customNote}</p>}
                <ul className="mt-7 flex-1 space-y-3 text-sm text-body">
                  {features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-lg bg-brand-tint text-brand-300"><DynamicIcon name={featureIcons[featureIndex % featureIcons.length]} className="size-3.5" /></span><span>{feature}</span></li>
                  ))}
                </ul>
                <Button href="/#contacto" className="mt-8 w-full justify-center" variant={i > 0 ? "primary" : "secondary"}>{i === 2 ? t.customCta : t.cta}<DynamicIcon name="arrowRight" className="size-4" /></Button>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
      <ContactSection />
    </>
  );
}
