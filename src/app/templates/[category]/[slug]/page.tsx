import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, AlertTriangle, ChevronRight, FileEdit } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import DownloadSection from '@/components/DownloadSection'
import AttorneyReview from '@/components/AttorneyReview'
import TemplateCard from '@/components/TemplateCard'
import AdPlaceholder from '@/components/AdPlaceholder'
import { getTemplateBySlug, getRelatedTemplates, templates as allTemplates } from '@/data/templates'
import { getAttorneyBySlug } from '@/data/attorneys'
import { getCategoryName } from '@/lib/utils'
import { templateSchemas } from '@/data/template-fields'

type Props = { params: Promise<{ category: string; slug: string }> }

export async function generateStaticParams() {
  return allTemplates.map((t) => ({ category: t.category, slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const t = getTemplateBySlug(slug)
  if (!t) return {}
  return {
    title: t.seoTitle,
    description: t.metaDescription,
    openGraph: { title: t.seoTitle, description: t.metaDescription, type: 'article' },
  }
}

export default async function TemplatePage({ params }: Props) {
  const { category, slug } = await params
  const template = getTemplateBySlug(slug)
  if (!template || template.category !== category) notFound()

  const attorney = getAttorneyBySlug(template.attorneySlug)
  const related = getRelatedTemplates(template.relatedSlugs)
  const categoryName = getCategoryName(template.category)
  const hasGenerator = !!templateSchemas[slug]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: template.h1,
    description: template.metaDescription,
    author: attorney ? { '@type': 'Person', name: `${attorney.name}, ${attorney.credentials}` } : undefined,
    publisher: { '@type': 'Organization', name: 'Veridoca' },
    dateModified: template.lastUpdated,
    mainEntityOfPage: `https://veridoca.com/templates/${category}/${slug}`,
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: template.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="bg-[#07090f] min-h-screen">
        <div className="border-b border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Breadcrumb crumbs={[
              { label: 'Templates', href: '/templates' },
              { label: categoryName, href: `/templates/${category}` },
              { label: template.name },
            ]} />
            <div className="mt-6">
              <AdPlaceholder slot="leaderboard" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">{template.h1}</h1>
                {hasGenerator && (
                  <Link
                    href={`/templates/${category}/${slug}/generate`}
                    className="inline-flex items-center gap-2 mt-3 mb-4 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-emerald-900/30"
                  >
                    <FileEdit className="w-4 h-4" />
                    Fill in &amp; Generate Document
                  </Link>
                )}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Attorney-Reviewed
                  </span>
                  <span>Updated {template.lastUpdated}</span>
                  <span>{template.downloadCount.toLocaleString()} downloads</span>
                  <span>Word + PDF</span>
                </div>
              </div>

              <div className="prose-legal">
                <section>
                  <p className="text-lg text-slate-300 leading-relaxed">{template.intro}</p>
                </section>

                <div className="my-8 flex justify-center">
                  <AdPlaceholder slot="rectangle" />
                </div>

                <section>
                  <h2>What Is a {template.name}?</h2>
                  <p>{template.whatIsIt}</p>
                </section>

                <section>
                  <h2>When Do You Need a {template.name}?</h2>
                  <ul>
                    {template.whenToUse.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </section>

                <section>
                  <h2>Legal Considerations</h2>
                  <ul>
                    {template.legalConsiderations.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </section>

                <div className="my-8">
                  <AdPlaceholder slot="leaderboard" />
                </div>

                <section>
                  <h2>State-Specific Requirements</h2>
                  <p>{template.stateNotes}</p>
                  <div className="bg-amber-500/[0.08] border border-amber-500/20 rounded-xl p-4 flex items-start gap-3 not-prose mt-4">
                    <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-300 mb-1">State Law Varies Significantly</p>
                      <p className="text-sm text-amber-400/80">Requirements for this document differ by state. Browse state-specific versions or consult a local attorney for high-stakes transactions.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2>How to Complete This Document — Step by Step</h2>
                  <ol>
                    {template.steps.map((step, i) => (
                      <li key={i}>
                        <strong>{step.title}</strong>
                        <br />
                        {step.description}
                      </li>
                    ))}
                  </ol>
                </section>

                <section>
                  <h2>Common Mistakes to Avoid</h2>
                  <ul>
                    {template.commonMistakes.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </section>
              </div>

              <div className="mt-10 mb-10" id="download">
                <DownloadSection templateName={template.name} downloadCount={template.downloadCount} slug={template.slug} />
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={template.faqs} />
              </section>

              {attorney && (
                <div className="mb-10">
                  <AttorneyReview attorney={attorney} reviewDate={template.lastUpdated} />
                </div>
              )}

              {related.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">Related Templates</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {related.map((t) => <TemplateCard key={t.slug} template={t} compact />)}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-xl p-5">
                  <h3 className="font-bold text-white mb-3">Download Free Template</h3>
                  <div className="space-y-2 mb-3">
                    <a href={`/downloads/${slug}.pdf`} download className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors text-sm">
                      PDF Download
                    </a>
                    <a href={`/downloads/${slug}.docx`} download className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm">
                      Word (.docx)
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 text-center">No registration · Instant · Free</p>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                  <h3 className="font-bold text-white mb-3 text-sm">On This Page</h3>
                  <nav className="space-y-1">
                    {[`What Is a ${template.name}?`, 'When Do You Need One?', 'Legal Considerations', 'State Requirements', 'Step-by-Step Guide', 'Common Mistakes', 'Download Template', 'FAQ'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 cursor-pointer py-0.5 transition-colors">
                        <ChevronRight className="w-3 h-3 text-slate-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </nav>
                </div>

                <AdPlaceholder slot="sidebar" />

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                  <h3 className="font-bold text-white mb-3 text-sm">State-Specific Version</h3>
                  <p className="text-xs text-slate-500 mb-3">Guidance tailored to your state's laws</p>
                  <div className="space-y-1">
                    {['California', 'Texas', 'Florida', 'New York', 'Illinois'].map((state) => (
                      <Link key={state} href={`/states/${state.toLowerCase().replace(' ', '-')}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 hover:bg-white/[0.04] rounded-lg px-2 py-1.5 transition-colors">
                        <ChevronRight className="w-3 h-3 text-slate-600 flex-shrink-0" />
                        {state}
                      </Link>
                    ))}
                    <Link href="/states" className="text-xs text-emerald-400 hover:text-emerald-300 block pt-1 px-2 transition-colors">
                      All 50 states →
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
