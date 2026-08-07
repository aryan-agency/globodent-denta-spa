export interface FaqItem {
  q: string;
  a: string;
}

export interface TitledItem {
  title: string;
  text: string;
}

/** Long-form SEO content for a /best-[service]-in-malviya-nagar landing page. */
export interface BestServiceContent {
  /** Matches the slug in bestServiceData.ts (no leading slash). */
  slug: string;
  /** 4–6 paragraphs: what it is, who needs it, why it matters, when recommended, oral-health impact. */
  about: string[];
  /** 8–10 benefits. */
  benefits: TitledItem[];
  /** One intro line for the symptoms section. */
  signsIntro: string;
  /** 6–9 signs/symptoms. */
  signs: string[];
  /** 5–7 ordered treatment steps. */
  process: TitledItem[];
  /** 6–8 reasons specific to this treatment at Globodent. */
  whyGlobodent: TitledItem[];
  /** 4–6 short trust bullets. */
  whyPatients: string[];
  /** 1–2 paragraphs naturally mentioning nearby South Delhi areas. */
  areas: string[];
  /** 8–15 FAQs. */
  faqs: FaqItem[];
  /** 2 closing paragraphs before the final CTA. */
  closing: string[];
}
