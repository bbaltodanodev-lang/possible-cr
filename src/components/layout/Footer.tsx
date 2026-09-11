"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/provider";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { DynamicIcon, IconMail, IconPhone, IconMapPin, IconClock } from "@/components/ui/Icons";

const socialLinks = [
  { id: "instagram", href: siteConfig.social.instagram, label: "Instagram" },
  { id: "facebook", href: siteConfig.social.facebook, label: "Facebook" },
  { id: "linkedin", href: siteConfig.social.linkedin, label: "LinkedIn" },
  { id: "x", href: siteConfig.social.x, label: "X" },
].filter((social) => social.href !== "");

export function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.systems, href: "/sistemas" },
    { label: t.nav.web, href: "/#paginas-web" },
    { label: t.nav.projects, href: "/#proyectos" },
    { label: t.nav.contact, href: "/#contacto" },
  ];

  return (
    <footer className="border-t border-line bg-page">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div className="max-w-sm">
            <Link href="/" aria-label="BM Solutions – Home">
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{t.footer.tagline}</p>
            {socialLinks.length > 0 ? (
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full bg-card text-faint ring-1 ring-inset ring-line transition-colors hover:text-brand-200 hover:ring-line-strong"
                  >
                    <DynamicIcon name={social.id === "x" ? "share" : social.id} className="size-4" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <nav aria-label={t.footer.navHeading}>
            <h3 className="text-sm font-semibold text-white">{t.footer.navHeading}</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-brand-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.contactHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-brand-200">
                  <IconMail className="size-4 shrink-0 text-faint" />
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.whatsappNumber ? (
                <li>
                  <Link href="/#contacto" className="inline-flex items-center gap-2 transition-colors hover:text-brand-200">
                    <IconPhone className="size-4 shrink-0 text-faint" />
                    {siteConfig.whatsappNumber}
                  </Link>
                </li>
              ) : null}
              {siteConfig.openingHours ? (
                <li className="flex items-center gap-2">
                  <IconClock className="size-4 shrink-0 text-faint" />
                  {siteConfig.openingHours}
                </li>
              ) : null}
              {siteConfig.address ? (
                <li className="flex items-center gap-2">
                  <IconMapPin className="size-4 shrink-0 text-faint" />
                  {siteConfig.address}
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.rights}
          </p>
          <p className="text-xs text-faint">{siteConfig.country}</p>
        </div>
      </Container>
    </footer>
  );
}