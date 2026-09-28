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
      "Cómo Possible recopila, utiliza, almacena y protege la información que compartes a través de este sitio web, los formularios de contacto y las solicitudes de cotización.",
    path: "/privacidad",
  },
  terms: {
    title: "Términos y Condiciones",
    description:
      "Condiciones de uso de este sitio web y de los servicios de Possible: sistemas empresariales, páginas web, sistemas POS y soporte y mantenimiento web.",
    path: "/terminos",
  },
};

const termsEs: LegalDocumentContent = {
  eyebrow: "Condiciones de uso",
  title: "Términos y Condiciones",
  intro:
    "Estos Términos y Condiciones regulan el uso del sitio web de Possible y los servicios que ofrecemos: sistemas empresariales, páginas web, sistemas POS y soporte y mantenimiento web. Al navegar este sitio o al contratarnos, aceptas estas condiciones.",
  updatedLabel: "Última actualización:",
  updated: "27 de septiembre de 2026",
  updatedIso: "2026-09-27",
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
    "These Terms and Conditions govern the use of the Possible website and the services we offer: business systems, websites, POS systems and web support and maintenance. By browsing this site or by hiring us, you accept these conditions.",
  updatedLabel: "Last updated:",
  updated: "September 27, 2026",
  updatedIso: "2026-09-27",
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
