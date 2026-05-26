import { Locale } from '../i18n-config';

export const getCurrencyForLocale = (locale: Locale): string => {
  switch (locale) {
    case 'sv': return 'SEK';
    case 'en': return 'USD';
    case 'us': return 'USD';
    case 'uk': return 'GBP';
    case 'no': return 'NOK';
    case 'dk': return 'DKK';
    case 'de':
    case 'fr':
    case 'es':
    case 'nl': return 'EUR';
    default: return 'SEK';
  }
};

export const formatCurrency = (amount: number | string, locale: Locale): string => {
  if (!amount) return '';
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(num)) return '';

  const currency = getCurrencyForLocale(locale);
  // Map our locales to proper BCP 47 language tags for Intl
  const bcp47: Record<Locale, string> = {
    sv: 'sv-SE',
    en: 'en-US',
    us: 'en-US',
    uk: 'en-GB',
    de: 'de-DE',
    fr: 'fr-FR',
    es: 'es-ES',
    no: 'nb-NO',
    dk: 'da-DK',
    nl: 'nl-NL'
  };

  return new Intl.NumberFormat(bcp47[locale], {
    style: 'currency',
    currency: currency,
  }).format(num);
};

export const formatDate = (dateString: string, locale: Locale): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const bcp47: Record<Locale, string> = {
    sv: 'sv-SE',
    en: 'en-US',
    us: 'en-US',
    uk: 'en-GB',
    de: 'de-DE',
    fr: 'fr-FR',
    es: 'es-ES',
    no: 'nb-NO',
    dk: 'da-DK',
    nl: 'nl-NL'
  };

  return new Intl.DateTimeFormat(bcp47[locale], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
};
