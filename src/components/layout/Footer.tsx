"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/provider";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { DynamicIcon, IconMail, IconWhatsApp, IconMapPin, IconClock } from "@/components/ui/Icons";

const socialLinks = [
  { id: "instagram", href: siteConfig.social.instagram, label: "Instagram" },
  { id: "facebook", href: siteConfig.social.facebook, label: "Facebook" },
  { id: "linkedin", href: siteConfig.social.linkedin, label: "LinkedIn" },
  { id: "x", href: siteConfig.social.x, label: "X" },
].filter((social) => social.href !== "");

const columnTitleClass = "text-xs font-semibold uppercase tracking-[0.14em] text-white";
const footerLinkClass = "inline-flex text-sm text-slate-300 transition-colors hover:text-brand-200";

export function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/#soluciones" },
    { label: t.nav.projects, href: "/#proyectos" },
    { label: t.nav.contact, href: "/#contacto" },
  ];

  const serviceItems = [
    { label: t.nav.systems, href: "/sistemas" },
    { label: t.nav.web, href: "/paginas-web" },
    { label: t.nav.pos, href: "/pos" },
    { label: t.nav.support, href: "/soporte" },
  ];

  const legalItems = [
    { label: t.footer.privacy, href: "/privacidad" },
    { label: t.footer.terms, href: "/terminos" },
  ];

  return (
    <footer className="relative border-t border-line bg-page">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-brand-gradient opacity-70"
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12 lg:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-3 lg:col-span-4">
            <Link
              href="/"
              aria-label={t.footer.brandAria}
              className="inline-flex items-center gap-3 rounded-xl"
            >
              <Logo priority={false} />
              <span className="text-lg font-black tracking-tight text-white">
                {t.footer.brandName}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-slate-300">
              {t.footer.tagline}
            </p>
          </div>

          {/* Enlaces */}
          <nav aria-label={t.footer.navHeading} className="lg:col-span-2">
            <h2 className={columnTitleClass}>{t.footer.navHeading}</h2>
            <ul className="mt-4 space-y-3">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Servicios */}
          <nav aria-label={t.footer.servicesHeading} className="lg:col-span-3">
            <h2 className={columnTitleClass}>{t.footer.servicesHeading}</h2>
            <ul className="mt-4 space-y-3">
              {serviceItems.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="lg:col-span-3">
            <h2 className={columnTitleClass}>{t.footer.contactHeading}</h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-start gap-3 text-slate-300 transition-colors hover:text-brand-200"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300 transition-colors group-hover:bg-brand-tint-strong">
                    <IconMail className="size-4" />
                  </span>
                  <span className="min-w-0 break-words pt-2">{siteConfig.email}</span>
                </a>
              </li>

              {siteConfig.whatsappNumber ? (
                <li>
                  <a
                    href={buildWhatsAppLink(siteConfig.whatsappNumber, t.whatsapp.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.whatsapp.aria}
                    className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-brand-200"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
                      <IconWhatsApp className="size-4" />
                    </span>
                    <span className="pt-2">{siteConfig.phoneDisplay}</span>
                  </a>
                </li>
              ) : null}

              <li className="flex items-center gap-3 text-slate-300">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300">
                  <IconMapPin className="size-4" />
                </span>
                <span className="pt-2">{siteConfig.country}</span>
              </li>

              {siteConfig.openingHours ? (
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300">
                    <IconClock className="size-4" />
                  </span>
                  <span className="pt-2">{siteConfig.openingHours}</span>
                </li>
              ) : null}

              {siteConfig.address ? (
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300">
                    <IconMapPin className="size-4" />
                  </span>
                  <span className="pt-2">{siteConfig.address}</span>
                </li>
              ) : null}
            </ul>

            {socialLinks.length > 0 ? (
              <div className="mt-6">
                <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-faint">
                  {t.footer.socialHeading}
                </h3>
                <ul className="mt-3 flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <li key={social.id}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="grid size-10 place-items-center rounded-full bg-card text-faint ring-1 ring-inset ring-line transition-colors hover:text-brand-200 hover:ring-line-strong"
                      >
                        <DynamicIcon
                          name={social.id === "x" ? "share" : social.id}
                          className="size-4"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div aria-hidden="true" className="mt-12 h-px w-full bg-brand-gradient opacity-45" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.rights}
          </p>
          <nav aria-label={t.footer.legalHeading}>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded text-xs text-slate-300 underline-offset-4 transition-colors hover:text-brand-200 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
