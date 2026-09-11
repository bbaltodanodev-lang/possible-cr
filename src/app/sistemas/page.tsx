"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/Icons";
import { Personalization } from "@/components/sections/Personalization";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { Benefits } from "@/components/sections/Benefits";
import { SystemsPricing } from "@/components/sections/SystemsPricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/data/site";

export default function SistemasPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_15%_-20%,rgba(0,123,255,0.18),transparent),radial-gradient(36rem_22rem_at_90%_-10%,rgba(138,0,255,0.16),transparent)]"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gradient">
              {t.systems.heroEyebrow}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
              {t.systems.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-body sm:text-lg">
              {t.systems.heroBeforeStrong}
              <span className="font-semibold text-white">{t.systems.heroStrong}</span>
              {t.systems.heroAfterStrong}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {t.systems.chips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-2 text-sm font-medium text-body"
                >
                  <DynamicIcon name={chip.icon} className="size-4 text-neon-blue" />
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#cotizacion-sistemas" size="lg">
                {t.systems.ctaPrecios}
              </Button>
              <Button href="#incluye" size="lg" variant="secondary">
                {t.systems.ctaIncluye}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="incluye" className="bg-page py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={t.systems.includesEyebrow}
            title={t.systems.includesTitle}
            description={t.systems.includesDescription}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.systems.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-card border border-line bg-card p-6 shadow-soft transition-shadow duration-200 hover:shadow-float"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-300">
                  <DynamicIcon name={feature.icon} className="size-5" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-strong">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-faint">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Personalization />
      <DashboardSection />
      <Benefits />

      <section className="bg-page py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={t.systems.ccdrsEyebrow}
            title={t.systems.ccdrsTitle}
            description={t.systems.ccdrsDescription}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {t.systems.ccdrsProjects.map((project) => (
              <div
                key={project.title}
                className="flex items-start gap-4 rounded-card border border-line bg-card p-6 shadow-soft"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                  <DynamicIcon name={project.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-strong">{project.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-faint">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SystemsPricing />
      <FinalCta />
      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sistemas empresariales",
            serviceType: "Desarrollo de software a la medida",
            provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            areaServed: "Costa Rica",
            description:
              "Sistemas web a la medida para negocios: ingresos, gastos, ganancias, clientes, inventario y reportes.",
          }),
        }}
      />
    </>
  );
}
