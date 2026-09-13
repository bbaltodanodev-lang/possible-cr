"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/i18n/provider";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { IconChevronDown, IconClose, IconMenu } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type SpyKey = "home" | "web" | "proyectos" | "contacto";

const spySections: { id: string; key: SpyKey }[] = [
  { id: "paginas-web", key: "web" },
  { id: "proyectos", key: "proyectos" },
  { id: "contacto", key: "contacto" },
];

function getCurrentSpy(): SpyKey {
  if (typeof window === "undefined") return "home";
  let current: SpyKey = "home";
  for (const { id, key } of spySections) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 140) current = key;
  }
  return current;
}

export function Navbar() {
  const { t, lang } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [spy, setSpy] = useState<SpyKey>("home");
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setSpy(getCurrentSpy());
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setSpy(getCurrentSpy());
      setServicesOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, lang]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onClickOutside = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  let activeKey: string;
  if (pathname === "/sistemas") activeKey = "sistemas";
  else if (pathname === "/paginas-web") activeKey = "web";
  else if (pathname === "/soporte") activeKey = "soporte";
  else if (pathname === "/") activeKey = spy;
  else activeKey = "home";

  const servicesActive = activeKey === "sistemas" || activeKey === "web" || activeKey === "soporte";

  const servicesMenu = [
    { key: "sistemas", label: t.nav.systems, href: "/sistemas" },
    { key: "web", label: t.nav.web, href: "/paginas-web" },
    { key: "soporte", label: t.nav.support, href: "/soporte" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/85 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <Link href="/" className="rounded-lg" aria-label="BM Solutions – Home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <Link
              href="/"
              aria-current={activeKey === "home" ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                activeKey === "home"
                  ? "bg-white/5 text-brand-gradient"
                  : "text-body hover:bg-white/5 hover:text-strong",
              )}
            >
              {t.nav.home}
            </Link>
          </li>
          <li className="relative" ref={servicesRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                servicesActive
                  ? "bg-white/5 text-brand-gradient"
                  : "text-body hover:bg-white/5 hover:text-strong",
              )}
            >
              {t.nav.services}
              <IconChevronDown
                className={cn("size-4 opacity-70 transition-transform", servicesOpen && "rotate-180")}
              />
            </button>
            <div
              role="menu"
              aria-label={t.nav.services}
              className={cn(
                "absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-line bg-page p-1.5 shadow-2xl transition-[opacity,transform] duration-150",
                servicesOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none translate-y-1 opacity-0",
              )}
            >
              {servicesMenu.map((item) => {
                const isActive = activeKey === item.key;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setServicesOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      item.key === "soporte"
                        ? "text-brand-gradient"
                        : isActive
                        ? "bg-brand-tint font-semibold text-brand-300"
                        : "text-body hover:bg-white/5 hover:text-strong",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </li>
          <li>
            <Link
              href="/#proyectos"
              aria-current={activeKey === "proyectos" ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                activeKey === "proyectos"
                  ? "bg-white/5 text-brand-gradient"
                  : "text-body hover:bg-white/5 hover:text-strong",
              )}
            >
              {t.nav.projects}
            </Link>
          </li>
          <li>
            <Link
              href="/#contacto"
              aria-current={activeKey === "contacto" ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                activeKey === "contacto"
                  ? "bg-white/5 text-brand-gradient"
                  : "text-body hover:bg-white/5 hover:text-strong",
              )}
            >
              {t.nav.contact}
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button href="/#contacto" size="md" ariaLabel={t.nav.cta}>
            {t.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl text-strong transition-colors hover:bg-white/5"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            aria-label={isOpen ? t.nav.ariaClose : t.nav.ariaOpen}
          >
            {isOpen ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        className={cn(
          "overflow-hidden border-line transition-[max-height,opacity] duration-200 ease-out lg:hidden",
          isOpen ? "max-h-96 border-b bg-page" : "max-h-0 opacity-0",
        )}
      >
        <ul className="space-y-1 px-5 pb-5 pt-2">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              aria-current={activeKey === "home" ? "page" : undefined}
              className={cn(
                "block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                activeKey === "home"
                  ? "bg-brand-tint font-semibold text-brand-300"
                  : "text-strong hover:bg-white/5",
              )}
            >
              {t.nav.home}
            </Link>
          </li>
          <li>
            <p
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-[15px] text-faint",
                servicesActive && "font-semibold text-brand-300",
              )}
            >
              {t.nav.services}
            </p>
            <ul className="ml-3 space-y-1 border-l border-line pl-3">
              {servicesMenu.map((item) => {
                const isActive = activeKey === item.key;
                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block rounded-xl px-4 py-2.5 text-[15px] font-medium transition-colors",
                        item.key === "soporte"
                          ? "text-brand-gradient"
                          : isActive
                          ? "bg-brand-tint font-semibold text-brand-300"
                          : "text-strong hover:bg-white/5",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <Link
              href="/#proyectos"
              onClick={() => setIsOpen(false)}
              aria-current={activeKey === "proyectos" ? "page" : undefined}
              className={cn(
                "block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                activeKey === "proyectos"
                  ? "bg-brand-tint font-semibold text-brand-300"
                  : "text-strong hover:bg-white/5",
              )}
            >
              {t.nav.projects}
            </Link>
          </li>
          <li>
            <Link
              href="/#contacto"
              onClick={() => setIsOpen(false)}
              aria-current={activeKey === "contacto" ? "page" : undefined}
              className={cn(
                "block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                activeKey === "contacto"
                  ? "bg-brand-tint font-semibold text-brand-300"
                  : "text-strong hover:bg-white/5",
              )}
            >
              {t.nav.contact}
            </Link>
          </li>
          <li className="pt-3">
            <Button href="/#contacto" className="w-full" onClick={() => setIsOpen(false)}>
              {t.nav.cta}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
