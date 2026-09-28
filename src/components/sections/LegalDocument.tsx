"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/provider";
import { legalContent } from "@/data/legal";
import type { LegalDocumentKey } from "@/data/legal";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconCheck, IconMail, IconWhatsApp } from "@/components/ui/Icons";

interface LegalDocumentProps {
  documentKey: LegalDocumentKey;
}

export function LegalDocument({ documentKey }: LegalDocumentProps) {
  const { lang, t } = useLanguage();
  const doc = legalContent[documentKey][lang];
  const otherKey: LegalDocumentKey = documentKey === "privacy" ? "terms" : "privacy";
  const otherHref = otherKey === "privacy" ? "/privacidad" : "/terminos";

  return (
    <article className="bg-page pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <nav aria-label={lang === "es" ? "Migas de pan" : "Breadcrumb"} className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-faint">
            <li>
              <Link href="/" className="rounded transition-colors hover:text-brand-200">
                {t.nav.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-body" aria-current="page">
              {doc.title}
            </li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gradient">
            {doc.eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-body sm:text-lg">
            {doc.intro}
          </p>
          <p className="mt-5 text-sm text-faint">
            {doc.updatedLabel} <time dateTime={doc.updatedIso}>{doc.updated}</time>
          </p>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
          <nav
            aria-label={doc.indexLabel}
            className="hidden lg:block lg:sticky lg:top-28 lg:self-start"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
              {doc.indexLabel}
            </h2>
            <ul className="mt-4 space-y-1 border-l border-line">
              {doc.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-slate-300 transition-colors hover:border-brand-400 hover:text-brand-200"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 space-y-10">
            {doc.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-titulo`}
                className="scroll-mt-28 border-t border-line pt-8 first:border-t-0 first:pt-0"
              >
                <h2
                  id={`${section.id}-titulo`}
                  className="text-balance text-xl font-bold tracking-tight text-white sm:text-2xl"
                >
                  <span className="mr-2 font-mono text-sm font-semibold text-brand-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${section.id}-p-${paragraphIndex}`}
                      className="text-pretty text-[15px] leading-relaxed text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.points ? (
                  <ul className="mt-5 space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li key={`${section.id}-i-${pointIndex}`} className="flex gap-3">
                        <IconCheck className="mt-0.5 size-4 shrink-0 text-brand-300" />
                        <span className="text-pretty text-[15px] leading-relaxed text-slate-300">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section
              aria-labelledby="contacto-legal"
              className="rounded-card border border-line bg-card p-6 shadow-soft sm:p-8"
            >
              <h2 id="contacto-legal" className="text-lg font-bold text-white sm:text-xl">
                {doc.contactTitle}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-300">{doc.contactText}</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 break-all text-body transition-colors hover:text-brand-200"
                  >
                    <IconMail className="size-4 shrink-0 text-faint" />
                    {siteConfig.email}
                  </a>
                </li>
                {siteConfig.whatsappNumber ? (
                  <li>
                    <a
                      href={buildWhatsAppLink(siteConfig.whatsappNumber, t.whatsapp.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.whatsapp.aria}
                      className="inline-flex items-center gap-2 text-body transition-colors hover:text-brand-200"
                    >
                      <IconWhatsApp className="size-4 shrink-0 text-emerald-300" />
                      {siteConfig.phoneDisplay}
                    </a>
                  </li>
                ) : null}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/#contacto" size="md" ariaLabel={doc.ctaContact}>
                  {doc.ctaContact}
                </Button>
                <Button href="/" variant="secondary" size="md">
                  {doc.ctaHome}
                </Button>
              </div>
            </section>

            <p className="text-sm text-faint">
              {doc.alsoLabel}{" "}
              <Link
                href={otherHref}
                className="font-semibold text-brand-300 underline-offset-4 transition-colors hover:text-brand-200 hover:underline"
              >
                {doc.alsoOther}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </article>
  );
}
