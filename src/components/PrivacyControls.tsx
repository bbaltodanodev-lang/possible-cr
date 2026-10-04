"use client";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { useLanguage } from "@/i18n/provider";
import { privacyUi, privacyStorageKey, privacyVersion } from "@/data/privacy-controls";

export function PrivacyControls() {
  const { lang } = useLanguage();
  const text = privacyUi[lang];
  const [choice, setChoice] = useState<boolean | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem(privacyStorageKey) || "null");
        if (saved?.version === privacyVersion && typeof saved.analytics === "boolean") {
          setChoice(saved.analytics);
          return;
        }
      } catch { /* Storage may be unavailable. Ask for a session choice. */ }
      setOpen(true);
    }, 0);
    const show = () => setOpen(true);
    window.addEventListener("possible:privacy-settings", show);
    return () => { clearTimeout(timer); window.removeEventListener("possible:privacy-settings", show); };
  }, []);
  function save(analytics: boolean) {
    try { localStorage.setItem(privacyStorageKey, JSON.stringify({ version: privacyVersion, analytics })); } catch { /* Session-only choice. */ }
    if (!analytics) {
      for (const entry of document.cookie.split(";")) {
        const name = entry.split("=")[0].trim();
        if (!/^_ga(?:_|$)/.test(name)) continue;
        document.cookie = `${name}=; Max-Age=0; Path=/`;
        const parts = location.hostname.split(".");
        for (let i = 0; i < parts.length - 1; i++) document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${parts.slice(i).join(".")}`;
      }
    }
    setChoice(analytics);
    setOpen(false);
    if (!analytics && choice === true) window.location.reload();
  }
  return <>
    {choice === true && <><GoogleAnalytics /><Analytics /><SpeedInsights /></>}
    {open && <section aria-labelledby="privacy-choice-title" className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-2xl rounded-2xl border border-line bg-page p-5 text-strong shadow-2xl sm:p-6">
      <h2 id="privacy-choice-title" className="text-lg font-semibold">{text.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-body">{text.text}</p>
      <a href="/privacidad#cookies-y-tecnologias" className="mt-3 inline-block text-sm text-brand-300 underline">{text.policy}</a>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => save(false)} className="rounded-full border border-line px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-brand-300">{text.reject}</button>
        <button type="button" onClick={() => save(true)} className="rounded-full border border-line px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-brand-300">{text.accept}</button>
      </div>
    </section>}
  </>;
}
