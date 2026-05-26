export const i18n = {
  defaultLocale: 'sv',
  locales: ['sv', 'en', 'us', 'uk', 'de', 'fr', 'es', 'no', 'dk', 'nl'],
} as const;

export type Locale = typeof i18n.locales[number];

// Used for hreflang and HTML lang attributes
export const localeRegions: Record<Locale, string> = {
  sv: 'sv',
  en: 'en',
  us: 'en-US',
  uk: 'en-GB',
  de: 'de',
  fr: 'fr',
  es: 'es',
  no: 'nb-NO',
  dk: 'da-DK',
  nl: 'nl'
};

// Used to translate the /templates URL segment
export const categoryTranslations: Record<Locale, string> = {
  sv: 'mallar',
  en: 'templates',
  us: 'templates',
  uk: 'templates',
  de: 'vorlagen',
  fr: 'modeles',
  es: 'plantillas',
  no: 'maler',
  dk: 'skabeloner',
  nl: 'sjablonen'
};
