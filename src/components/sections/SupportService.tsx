"use client";

import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";
import { supportContent } from "@/data/support";
import { useLanguage } from "@/i18n/provider";
import { buildWhatsAppLink } from "@/lib/utils";

export function SupportService() {
  const { lang } = useLanguage();
  const content = supportContent[lang];
  const hasWhatsApp = Boolean(siteConfig.whatsappNumber);
  const contactHref = hasWhatsApp
    ? buildWhatsAppLink(siteConfig.whatsappNumber, content.contactMessage)
    : "/#contacto";

  return (
    <section
      id="soporte"
      aria-labelledby="soporte-title"
      className="mx-auto mt-6 max-w-4xl rounded-3xl border border-white/10 bg-card p-6 shadow-soft transition-all duration-300 hover:border-brand-400/40 hover:shadow-[0_0_50px_rgba(138,0,255,0.18)] sm:p-8"
    >
      <span className="grid size-14 place-items-center rounded-2xl bg-brand-tint text-brand-300">
        <DynamicIcon name="shield" className="size-6" />
      </span>
      <h3 id="soporte-title" className="mt-6 text-2xl font-bold tracking-tight text-white">
        {content.title}
      </h3>
      <p className="mt-3 text-lg font-semibold text-strong">{content.tagline}</p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">{content.description}</p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {content.includes.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-tint text-brand-300">
              <DynamicIcon name={item.icon} className="size-4.5" />
            </span>
            <div>
              <h4 className="text-[15px] font-semibold text-strong">{item.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-faint">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5">
        <p className="text-sm font-semibold leading-relaxed text-amber-200">
          {content.hostingNotice}
        </p>
      </div>

      <div className="mt-10 border-t border-white/10 pt-8">
        <h4 className="text-xl font-bold tracking-tight text-white">{content.plansTitle}</h4>
        <p className="mt-2 text-sm leading-relaxed text-body">{content.plansDescription}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.plans.map((plan) => (
            <article
              key={plan.id}
              className="rounded-2xl border border-line bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-[0_0_30px_rgba(138,0,255,0.18)]"
            >
              <h5 className="text-base font-semibold text-brand-300">{plan.name}</h5>
              <p className="mt-3 text-2xl font-bold text-white">
                {plan.price}{plan.cadence ? <span className="text-sm font-medium text-faint"> {plan.cadence}</span> : null}
              </p>
              <p className={plan.id === "integral" ? "mt-3 text-sm font-semibold leading-relaxed text-white" : "mt-3 text-sm leading-relaxed text-body"}>
                {plan.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs font-semibold leading-relaxed text-amber-300">
          {content.warning}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-line bg-card-strong p-6 sm:flex-row sm:items-center">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-strong">{content.contactTitle}</h4>
          <p className="mt-2 text-sm leading-relaxed text-body">{content.contactDescription}</p>
        </div>
        <Button
          href={contactHref}
          target={hasWhatsApp ? "_blank" : undefined}
          rel={hasWhatsApp ? "noopener noreferrer" : undefined}
          className="shrink-0"
        >
          {content.contactCta}
          <DynamicIcon name={hasWhatsApp ? "whatsapp" : "arrowRight"} className="size-4" />
        </Button>
      </div>
    </section>
  );
}
