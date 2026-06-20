import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import TemplateCard from '@/components/TemplateCard'
import AdPlaceholder from '@/components/AdPlaceholder'
import { getCategoryBySlug, categories } from '@/data/categories'
import { getTemplatesByCategory } from '@/data/templates'
import { getCategoryName } from '@/lib/utils'
import { Building2, Users, Home, User, Heart, FileCheck, DollarSign, CheckCircle, Shield } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  User: <User className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  FileCheck: <FileCheck className="w-8 h-8" />,
  DollarSign: <DollarSign className="w-8 h-8" />,
}

type Props = { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) return {}
  return {
    title: `Free ${cat.name} Templates — Download Word & PDF`,
    description: `Download free ${cat.name.toLowerCase()} templates. ${cat.description} Attorney-reviewed for all US states.`,
  }
}

const categoryBenefits: Record<string, string[]> = {
  business: ['Protect your IP and trade secrets from day one', 'Establish clear payment and delivery terms', 'Define exit provisions before disputes arise', 'Covers LLC, partnership, service, and sales agreements'],
  employment: ['Stay compliant with federal and state employment law', 'Establish clear performance expectations', 'Protect your business with non-compete and confidentiality clauses', 'Covers the full employment lifecycle from hire to termination'],
  'real-estate': ['Cover all required state disclosures', 'Protect security deposits with proper documentation', 'Handle evictions legally and efficiently', 'Covers residential, commercial, landlord, and tenant documents'],
  personal: ['Establish clear authority for agents to act on your behalf', 'Create legally admissible sworn statements', 'Demand letters with teeth — courts take written demands seriously', 'Covers affidavits, POA, demand letters, and personal contracts'],
  family: ['Put children\'s best interests first with a detailed parenting plan', 'Divide assets and debts clearly to avoid future disputes', 'Document financial obligations with enforceable agreements', 'Covers divorce, custody, prenuptials, and guardianship'],
  'estate-planning': ['Ensure your assets go to the people you choose', 'Appoint trusted agents for healthcare and financial decisions', 'Avoid costly and public probate with proper planning', 'Covers wills, trusts, directives, and POA documents'],
  financial: ['Create legally enforceable debt obligations', 'Document loan terms, interest, and repayment schedules', 'Settle debts and disputes with written agreements', 'Covers promissory notes, loan agreements, and debt settlement'],
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()

  const templates = getTemplatesByCategory(category)
  const benefits = categoryBenefits[category] ?? []

  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'Templates', href: '/templates' }, { label: cat.name }]} />
          <div className="mt-6 flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
              {iconMap[cat.icon]}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">{cat.name}</h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{cat.description}</p>
            </div>
          </div>

          {benefits.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-400">{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdPlaceholder slot="leaderboard" className="mb-10" />

        <div className="bg-emerald-500/[0.07] border border-emerald-500/20 rounded-xl p-4 flex items-start gap-3 mb-8">
          <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-300">
            All {cat.name.toLowerCase()} on Veridoca are reviewed by licensed attorneys specializing in {cat.name.toLowerCase().replace(' documents', '').replace(' document', '')} law. Templates are updated within 30 days of significant law changes.
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">{templates.length} Templates Available</h2>
          <span className="text-sm text-slate-500">Sorted by popularity</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-10">
          {templates
            .sort((a, b) => b.downloadCount - a.downloadCount)
            .map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
        </div>

        <AdPlaceholder slot="leaderboard" className="mt-4 mb-10" />

        <section>
          <h2 className="text-lg font-bold text-white mb-4">Explore Other Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter((c) => c.slug !== category)
              .map((c) => (
                <a
                  key={c.slug}
                  href={`/templates/${c.slug}`}
                  className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-emerald-500/30 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-all"
                >
                  {getCategoryName(c.slug)}
                </a>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
