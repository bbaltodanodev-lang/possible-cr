"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { dictionaries } from "./dictionaries";
import type { Locale, Messages } from "./dictionaries";

const STORAGE_KEY = "possible-lang";

interface LanguageContextValue {
  lang: Locale;
  t: Messages;
  setLang: (locale: Locale) => void;
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // almacenamiento no disponible
  }
  return "es";
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // The server always renders Spanish. Read localStorage after hydration so the
  // first client render is identical to the server-rendered HTML.
  const [lang, setLangState] = useState<Locale>("es");

  useEffect(() => {
    const storedLocale = getInitialLocale();
    const id = window.setTimeout(() => setLangState(storedLocale), 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((locale: Locale) => {
    setLangState(locale);
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // almacenamiento no disponible
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider.");
  }
  return context;
}
