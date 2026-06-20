export type CountryCode = 'SE' | 'US' | 'GB' | 'ES' | 'FR' | 'DE'
export type Locale = 'sv' | 'en-US' | 'en-GB' | 'es' | 'fr' | 'de'
export type PageType = 'template' | 'guide'

export interface Clause {
  heading: string
  description: string
  required: boolean
}

export interface FaqItem {
  question: string
  answer: string
}

export interface LegalDocPage {
  documentType: string
  country: CountryCode
  locale: Locale
  slug: string
  pageType: PageType
  title: string
  metaDescription: string
  primaryKeyword: string
  secondaryKeywords: string[]
  canonicalUrl: string
  hreflangAlternates: { locale: Locale; url: string }[]
  intro: string
  whatItMustContain: Clause[]
  commonMistakes: string[]
  legalContext: string
  faq: FaqItem[]
  relatedDocuments: string[]
  generatorCtaLabel: string
  generatorPath: string
  lastReviewed: string
  reviewedBy: string
  disclaimer: string
}
