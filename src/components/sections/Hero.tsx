"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Logo } from "@/components/ui/Logo";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-aurora"
      />

      <Container className="relative pb-20 pt-16 text-center sm:pt-24 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto flex w-full justify-center">
            <div className="animate-[glow-pulse_4s_ease-in-out_infinite] rounded-[2rem] border border-white/10 bg-black/60 p-4 backdrop-blur-sm sm:p-6">
              <Logo hero className="w-[min(80vw,560px)]" />
            </div>
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[4.4rem] lg:leading-[1]">
            Possible
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-body sm:text-xl">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/sistemas" size="lg">
              {t.hero.ctaSystems}
            </Button>
            <Button href="/#paginas-web" size="lg" variant="secondary">
              {t.hero.ctaContact}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[13px] text-body">
            {t.hero.badges.map((badge) => (
              <Badge key={badge} className="bg-white/5 text-white ring-white/10">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
