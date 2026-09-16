"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { DynamicIcon } from "@/components/ui/Icons";

const links: Record<string, string> = {
  sistemas: "/sistemas",
  web: "/paginas-web",
  pos: "/pos",
};

export function SolutionsSection() {
  const { t } = useLanguage();

  return (
    <section id="soluciones" className="relative bg-black py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gradient">
            {t.solutions.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.solutions.titleTop}
          </h2>
          <p className="mt-2 text-pretty text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl lg:whitespace-nowrap">
            <span className="tracking-wide">{t.solutions.titleBottom}</span>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.solutions.description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {t.solutions.items.map((item) => {
            const href = links[item.id];
            return (
              <Link
                key={item.id}
                href={href}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-[0_0_50px_rgba(138,0,255,0.18)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(24rem 14rem at 20% 0%, rgba(138,0,255,0.14), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-tint text-brand-300 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                    <DynamicIcon name={item.icon} className="size-6" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors duration-300 group-hover:text-brand-200">
                    {item.cta}
                    <DynamicIcon
                      name="arrowRight"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
