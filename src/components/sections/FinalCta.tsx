"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-brand-gradient px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_15%_-30%,rgba(255,255,255,0.25),transparent),radial-gradient(30rem_18rem_at_90%_120%,rgba(30,27,75,0.35),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-brand-100">
              {t.finalCta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="#contacto"
                size="lg"
                variant="primary"
                className="shadow-[0_12px_32px_-8px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/30"
              >
                {t.finalCta.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
