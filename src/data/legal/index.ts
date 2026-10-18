import type { Locale } from "@/i18n/dictionaries";
import type { LegalDocumentContent, LegalDocumentKey } from "./types";
import { privacyEs } from "./privacy-es";
import { privacyEn } from "./privacy-en";
import { termsEs1 } from "./terms-es-1";
import { termsEs2 } from "./terms-es-2";
import { termsEn1 } from "./terms-en-1";
import { termsEn2 } from "./terms-en-2";

export type { LegalDocumentContent, LegalDocumentKey, LegalSection } from "./types";

export const legalMeta: Record<
  LegalDocumentKey,
  { title: string; description: string; path: string }
> = {
  privacy: {
    title: "Política de Privacidad",
    description:
      "Cómo Possible recopila, usa, almacena y protege la información que compartes en este sitio, en los formularios de contacto y en las cotizaciones.",
    path: "/privacidad",
  },
  terms: {
    title: "Términos y Condiciones",
    description:
      "Condiciones de uso del sitio y de los servicios de Possible: sistemas empresariales, páginas web, sistemas POS y soporte y mantenimiento web.",
    path: "/terminos",
  },
};

const termsEs: LegalDocumentContent = {
  eyebrow: "Condiciones de uso",
  title: "Términos y Condiciones",
  intro:
    "Estos Términos y Condiciones regulan el uso del sitio web de Possible y los servicios que ofrecemos: sistemas empresariales, páginas web, sistemas POS y soporte y mantenimiento web. La contratación requiere una propuesta escrita y tu aceptación expresa.",
  updatedLabel: "Última actualización:",
  updated: "3 de octubre de 2026",
  updatedIso: "2026-10-03",
  indexLabel: "Contenido de estos términos",
  sections: [...termsEs1, ...termsEs2],
  contactTitle: "¿Tienes dudas sobre estos términos?",
  contactText:
    "Escríbenos y te explicamos el alcance del servicio, el proceso de contratación y las condiciones de tu proyecto.",
  ctaHome: "Volver al inicio",
  ctaContact: "Escríbenos",
  alsoLabel: "También puedes consultar",
  alsoOther: "Política de Privacidad",
};

const termsEn: LegalDocumentContent = {
  eyebrow: "Conditions of use",
  title: "Terms and Conditions",
  intro:
    "These Terms and Conditions govern the use of the Possible website and the services we offer: business systems, websites, POS systems and web support and maintenance. Contracting requires a written proposal and your express acceptance.",
  updatedLabel: "Last updated:",
  updated: "October 3, 2026",
  updatedIso: "2026-10-03",
  indexLabel: "On this page",
  sections: [...termsEn1, ...termsEn2],
  contactTitle: "Do you have questions about these terms?",
  contactText:
    "Write to us and we will explain the service scope, the contracting process and the conditions of your project.",
  ctaHome: "Back to homepage",
  ctaContact: "Write to us",
  alsoLabel: "You may also read",
  alsoOther: "Privacy Policy",
};

export const legalContent: Record<LegalDocumentKey, Record<Locale, LegalDocumentContent>> = {
  privacy: { es: privacyEs, en: privacyEn },
  terms: { es: termsEs, en: termsEn },
};
