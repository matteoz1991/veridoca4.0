export type Category = {
  slug: string
  name: string
  description: string
  icon: string
  color: string
  templateCount: number
  topTemplates: string[]
}

export type Attorney = {
  slug: string
  name: string
  credentials: string
  barNumbers: string
  specialization: string
  yearsExperience: number
  lawSchool: string
  bio: string
  photoInitials: string
}

export type Template = {
  slug: string
  category: string
  name: string
  seoTitle: string
  metaDescription: string
  h1: string
  intro: string
  whatIsIt: string
  whenToUse: string[]
  legalConsiderations: string[]
  stateNotes: string
  steps: { title: string; description: string }[]
  commonMistakes: string[]
  faqs: { question: string; answer: string }[]
  relatedSlugs: string[]
  downloadCount: number
  lastUpdated: string
  attorneySlug: string
  popular?: boolean
}

export type State = {
  slug: string
  name: string
  abbreviation: string
  population: number
  keyLaws: { title: string; description: string }[]
  topTemplates: string[]
  courtWebsite: string
  barAssociation: string
  secOfState: string
}

export type Article = {
  slug: string
  category: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: number
  relatedTemplates: string[]
  tags: string[]
  featured?: boolean
}
