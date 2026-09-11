"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 88;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}

export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.length > 1) {
      const id = hash.slice(1);
      let done = false;
      const attempt = () => {
        if (done) return;
        if (document.getElementById(id)) {
          done = true;
          scrollToSection(id);
        }
      };
      queueMicrotask(attempt);
      const frame = requestAnimationFrame(() => requestAnimationFrame(attempt));
      const fallback = window.setTimeout(attempt, 250);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(fallback);
      };
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}