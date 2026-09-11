"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/Icons";
import { WebPricing } from "@/components/sections/WebPricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/data/site";

export default function PaginasWebPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_15%_-20%,rgba(239,10,185,0.14),transparent),radial-gradient(36rem_22rem_at_90%_-10%,rgba(255,22,122,0.14),transparent)]"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gradient">
              {t.pages.heroEyebrow}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
              {t.pages.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-body sm:text-lg">
              {t.pages.heroBeforeStrong}
              <span className="font-semibold text-white">{t.pages.heroStrong1}</span>
              {t.pages.heroMidStrong}
              <span className="font-semibold text-white">{t.pages.heroStrong2}</span>
              {t.pages.heroAfterStrong}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {t.pages.chips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-2 text-sm font-medium text-body"
                >
                  <DynamicIcon name={chip.icon} className="size-4 text-neon-pink" />
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#cotizacion-web" size="lg">
                {t.pages.ctaPrecios}
              </Button>
              <Button href="#incluye" size="lg" variant="secondary">
                {t.pages.ctaIncluye}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={t.pages.reasonsEyebrow}
            title={t.pages.reasonsTitle}
            description={t.pages.reasonsDescription}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.pages.reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-card border border-line bg-card p-6 shadow-soft transition-shadow duration-200 hover:shadow-float"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-300">
                  <DynamicIcon name={reason.icon} className="size-5" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-strong">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-faint">{reason.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="incluye" className="bg-page py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={t.pages.includesEyebrow}
            title={t.pages.includesTitle}
            description={t.pages.includesDescription}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {t.pages.services.map((service) => (
              <div
                key={service.title}
                className="rounded-card border border-line bg-card p-6 shadow-soft transition-shadow duration-200 hover:shadow-float"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-300">
                  <DynamicIcon name={service.icon} className="size-5" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-strong">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-faint">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WebPricing />
      <FinalCta />
      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Páginas web profesionales",
            serviceType: "Diseño y desarrollo de sitios web",
            provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            areaServed: "Costa Rica",
            description:
              "Páginas web con diseño profesional, responsive y optimizadas para que tus clientes te encuentren en Internet.",
          }),
        }}
      />
    </>
  );
}