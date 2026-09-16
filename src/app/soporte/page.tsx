"use client";

import { Container } from "@/components/ui/Container";
import { SupportService } from "@/components/sections/SupportService";
import { supportContent } from "@/data/support";
import { useLanguage } from "@/i18n/provider";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";

export default function SupportPage() {
  const { lang } = useLanguage();
  const content = supportContent[lang];

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_15%_-20%,rgba(138,0,255,0.16),transparent),radial-gradient(36rem_22rem_at_90%_-10%,rgba(239,10,185,0.12),transparent)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gradient">{content.heroEyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-body sm:text-lg">
            {content.heroDescription}
          </p>
        </div>
        <SupportService />
        <FinalCta />
        <ContactSection />
      </Container>
    </section>
  );
}
