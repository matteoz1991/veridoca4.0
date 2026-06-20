import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, ExternalLink, Scale, Building2, Shield } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import AdPlaceholder from '@/components/AdPlaceholder'
import TemplateCard from '@/components/TemplateCard'
import { getStateBySlug, allStates } from '@/data/states'
import { getRelatedTemplates } from '@/data/templates'

type Props = { params: Promise<{ state: string }> }

export async function generateStaticParams() {
  return allStates.map((s) => ({ state: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params
  const s = getStateBySlug(state)
  if (!s) return {}
  return {
    title: `Free ${s.name} Legal Document Templates — State-Specific Forms`,
    description: `Download free ${s.name} legal document templates. State-specific guidance on leases, wills, business contracts, employment forms, and more. Updated 2026.`,
  }
}

export default async function StatePage({ params }: Props) {
  const { state } = await params
  const stateData = getStateBySlug(state)
  if (!stateData) notFound()

  const topTemplates = getRelatedTemplates(stateData.topTemplates)

  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'States', href: '/states' }, { label: stateData.name }]} />
          <div className="mt-5 flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-black text-emerald-400">{stateData.abbreviation}</span>
            </div>
            <div>
              <h1 className="text-3xl font-black text-white mb-1">{stateData.name} Legal Document Templates</h1>
              <p className="text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                State-specific legal guidance · Updated 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdPlaceholder slot="leaderboard" className="mb-10" />

        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Key {stateData.name} Laws You Need to Know</h2>
              <p className="text-slate-400 mb-6">
                {stateData.name}&apos;s legal landscape has specific requirements that affect how common legal documents must be drafted and executed.
              </p>
              <div className="space-y-3">
                {stateData.keyLaws.map((law, i) => (
                  <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Scale className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{law.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{law.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <AdPlaceholder slot="leaderboard" className="mb-10" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Most-Used {stateData.name} Legal Templates</h2>
              <p className="text-slate-400 mb-6">The most commonly downloaded legal documents by {stateData.name} residents and businesses:</p>
              {topTemplates.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topTemplates.map((t) => <TemplateCard key={t.slug} template={t} />)}
                </div>
              ) : (
                <p className="text-slate-400">
                  <Link href="/templates" className="text-emerald-400 hover:text-emerald-300">Browse all templates</Link> for {stateData.name}.
                </p>
              )}
            </section>

            <div className="bg-amber-500/[0.08] border border-amber-500/20 rounded-xl p-5 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-300 mb-1">Important Note About {stateData.name} Law</p>
                  <p className="text-amber-400/80 text-sm leading-relaxed">
                    {stateData.name} law changes frequently. Always verify with the official {stateData.name} statutes or a licensed {stateData.name} attorney before relying on this information for a high-stakes transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-24 space-y-5">
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  Official {stateData.abbreviation} Resources
                </h3>
                <div className="space-y-3">
                  {[
                    { label: `${stateData.name} Court System`, href: stateData.courtWebsite },
                    { label: `${stateData.name} Bar Association`, href: stateData.barAssociation },
                    { label: 'Secretary of State', href: stateData.secOfState },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                      {label}
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <AdPlaceholder slot="sidebar" />

              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <h3 className="font-bold text-white mb-3 text-sm">Other States</h3>
                <div className="flex flex-wrap gap-1.5">
                  {['CA', 'TX', 'FL', 'NY', 'IL', 'GA', 'OH', 'PA', 'MI', 'WA'].map((abbr) => {
                    const s = allStates.find((st) => st.abbreviation === abbr)
                    if (!s) return null
                    return (
                      <Link key={abbr} href={`/states/${s.slug}`} className="px-2.5 py-1 bg-white/[0.05] hover:bg-white/[0.10] text-slate-400 hover:text-white rounded-lg text-xs font-medium border border-white/[0.08] transition-all">
                        {abbr}
                      </Link>
                    )
                  })}
                  <Link href="/states" className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-medium border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                    All →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
