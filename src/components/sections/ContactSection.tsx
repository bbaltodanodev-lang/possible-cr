"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "./ContactForm";
import { IconMail, IconWhatsApp, IconMapPin, IconClock } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/utils";

export function ContactSection() {
  const { t } = useLanguage();
  const hasWhatsApp = Boolean(siteConfig.whatsappNumber);

  return (
    <section id="contacto" className="bg-page py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-xl border border-line bg-card p-4 transition-colors hover:border-line-strong hover:bg-card-strong"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300">
                    <IconMail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-faint">
                      {t.contact.email}
                    </span>
                    <span className="text-[15px] font-semibold text-strong">{siteConfig.email}</span>
                  </span>
                </a>
              </li>

              {hasWhatsApp ? (
                <li>
                  <a
                    href={buildWhatsAppLink(siteConfig.whatsappNumber, t.whatsapp.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-line bg-card p-4 transition-colors hover:border-line-strong hover:bg-card-strong"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
                      <IconWhatsApp className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-faint">
                        {t.contact.whatsapp}
                      </span>
                      <span className="text-[15px] font-semibold text-strong">
                        {siteConfig.whatsappNumber}
                      </span>
                    </span>
                  </a>
                </li>
              ) : null}

              {siteConfig.address ? (
                <li className="flex items-center gap-4 rounded-xl border border-line bg-card p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300">
                    <IconMapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-faint">
                      {t.contact.location}
                    </span>
                    <span className="text-[15px] font-semibold text-strong">{siteConfig.address}</span>
                  </span>
                </li>
              ) : null}

              {siteConfig.openingHours ? (
                <li className="flex items-center gap-4 rounded-xl border border-line bg-card p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300">
                    <IconClock className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-faint">
                      {t.contact.hours}
                    </span>
                    <span className="text-[15px] font-semibold text-strong">
                      {siteConfig.openingHours}
                    </span>
                  </span>
                </li>
              ) : null}
            </ul>

            <p className="mt-6 text-sm text-faint">{t.contact.note}</p>
          </div>

          <div className="rounded-card border border-line bg-card p-6 shadow-soft sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}