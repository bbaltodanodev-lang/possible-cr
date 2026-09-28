"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/i18n/provider";
import { cn } from "@/lib/utils";
import { IconArrowUp } from "@/components/ui/Icons";

/** Distancia de scroll (px) a partir de la cual aparece el botón. */
const SHOW_AFTER = 520;

export function BackToTopButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });

    // Devuelve el foco al contenido para que el teclado no quede en un
    // control invisible tras el desplazamiento.
    const main = document.getElementById("contenido");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
      main.addEventListener("blur", () => main.removeAttribute("tabindex"), { once: true });
    }
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.footer.backToTop}
      title={t.footer.backToTop}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-[5.5rem] right-5 z-40 grid size-12 place-items-center rounded-full",
        "border border-line bg-card/90 text-strong shadow-float backdrop-blur-md",
        "transition-[opacity,transform,border-color,background-color,box-shadow] duration-300 ease-out",
        "hover:border-brand-400/60 hover:bg-card-strong hover:text-brand-200",
        "hover:shadow-[0_0_28px_rgba(138,0,255,0.45)]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <IconArrowUp className="size-5" />
    </button>
  );
}
