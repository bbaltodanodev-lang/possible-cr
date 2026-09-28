export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  points?: string[];
}

export interface LegalDocumentContent {
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  updated: string;
  updatedIso: string;
  indexLabel: string;
  sections: LegalSection[];
  contactTitle: string;
  contactText: string;
  ctaHome: string;
  ctaContact: string;
  alsoLabel: string;
  alsoOther: string;
}

export type LegalDocumentKey = "privacy" | "terms";
