import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  AlertCircle,
  BookOpen,
  HelpCircle,
  Scale,
  ArrowRight,
  Calendar,
  User,
  ExternalLink,
} from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import { getPseoPage, getAllPseoParams } from '@/data/pseo'

// ISR: re-validate at most once per day so new data rows publish without a full redeploy
export const revalidate = 86400

type Params = { locale: string; slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPseoParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const page = getPseoPage(locale, slug)
  if (!page) return {}

  const languages: Record<string, string> = {}
  for (const alt of page.hreflangAlternates) {
    languages[alt.locale] = alt.url
  }

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: {
      canonical: page.canonicalUrl,
      languages,
    },
  }
}

export default async function PseoPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { locale, slug } = await params
  const page = getPseoPage(locale, slug)
  if (!page) notFound()

  // English alternate for cross-link (first non-matching locale alternate)
  const englishAlt = page.hreflangAlternates.find(
    (a) => a.locale !== page.locale && (a.locale === 'en-US' || a.locale === 'en-GB'),
  )

  // JSON-LD: FAQPage
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Veridoca', item: 'https://veridoca.com' },
      { '@type': 'ListItem', position: 2, name: page.title, item: page.canonicalUrl },
    ],
  }

  return (
    <div className="bg-[#07090f] min-h-screen">
      {/* Hero / breadcrumb */}
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: page.title }]} />

          <div className="flex flex-wrap items-start justify-between gap-4 mt-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{page.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  Granskad: {page.lastReviewed}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <User className="w-3.5 h-3.5" />
                  {page.reviewedBy}
                </div>
              </div>
            </div>

            {englishAlt && (
              <Link
                href={englishAlt.url}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors border border-white/[0.08] rounded-lg px-3 py-2 bg-white/[0.03] flex-shrink-0"
              >
                <ExternalLink className="w-3 h-3" />
                View in English
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Intro */}
        <section className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-6">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-emerald-400" />
            <h2 className="font-bold text-white text-lg">Introduktion</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">{page.intro}</p>
        </section>

        {/* Primary CTA */}
        <div>
          <Link
            href={page.generatorPath}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            {page.generatorCtaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Required clauses */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <h2 className="font-bold text-white text-lg">Vad avtalet måste innehålla</h2>
          </div>
          <div className="space-y-3">
            {page.whatItMustContain.map((clause) => (
              <div
                key={clause.heading}
                className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-4"
              >
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                      clause.required
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-white/[0.06] text-slate-500 border-white/[0.08]'
                    }`}
                  >
                    {clause.required ? 'Obligatorisk' : 'Rekommenderad'}
                  </span>
                  <p className="text-sm font-semibold text-white">{clause.heading}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{clause.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal context */}
        <section className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <h2 className="font-bold text-white text-lg">Juridisk kontext</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm">{page.legalContext}</p>
        </section>

        {/* Common mistakes */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            <h2 className="font-bold text-white text-lg">Vanliga misstag att undvika</h2>
          </div>
          <ul className="space-y-2.5">
            {page.commonMistakes.map((mistake, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  {i + 1}
                </span>
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            <h2 className="font-bold text-white text-lg">Vanliga frågor</h2>
          </div>
          <div className="space-y-3">
            {page.faq.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-4"
              >
                <p className="text-sm font-semibold text-white mb-2">{item.question}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">{page.generatorCtaLabel}</h2>
          <p className="text-slate-400 text-sm mb-5">
            Fyll i dina uppgifter och ladda ner direkt — ingen registrering krävs
          </p>
          <Link
            href={page.generatorPath}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            {page.generatorCtaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/[0.06] pt-6">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-500">Ansvarsfriskrivning:</strong> {page.disclaimer}
          </p>
        </div>
      </div>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </div>
  )
}
