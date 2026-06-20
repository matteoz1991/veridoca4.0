import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Building2, Users, Home, User, Heart, DollarSign, ArrowRight } from 'lucide-react'
import TemplateCard from '@/components/TemplateCard'
import Breadcrumb from '@/components/Breadcrumb'
import AdPlaceholder from '@/components/AdPlaceholder'
import { categories } from '@/data/categories'
import { getPopularTemplates } from '@/data/templates'

export const metadata: Metadata = {
  title: 'All Free Legal Document Templates — 500+ Forms',
  description: 'Browse 500+ free legal document templates organized by category. Business, employment, real estate, family, estate planning, and more. Cites primary legal sources.',
}

const popularTemplates = getPopularTemplates(20)

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  User: <User className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  FileCheck: <FileText className="w-5 h-5" />,
  DollarSign: <DollarSign className="w-5 h-5" />,
}

export default function TemplatesPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'All Templates' }]} />
          <div className="mt-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Free Legal Document Templates</h1>
              <p className="text-slate-400 text-lg">500+ free templates across 7 legal categories. Cites primary legal sources. Free in Word and PDF.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdPlaceholder slot="leaderboard" className="mb-10" />

        {/* Categories */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/templates/${cat.slug}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  {iconMap[cat.icon] ?? <FileText className="w-5 h-5" />}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm">{cat.name}</p>
                  <p className="text-slate-500 text-xs">{cat.templateCount} templates</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 ml-auto flex-shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Popular */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Most Popular Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {popularTemplates.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        </section>

        <AdPlaceholder slot="leaderboard" className="mt-12 mb-12" />

        {/* State links */}
        <section className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-2">Find Templates by State</h2>
          <p className="text-slate-400 text-sm mb-5">State-specific requirements vary significantly. Find templates with guidance tailored to your state.</p>
          <div className="flex flex-wrap gap-2">
            {['California', 'Texas', 'Florida', 'New York', 'Illinois', 'Georgia', 'Ohio', 'Pennsylvania', 'Michigan', 'Washington', 'Colorado', 'Arizona'].map((state) => (
              <Link
                key={state}
                href={`/states/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 bg-white/[0.05] hover:bg-white/[0.10] text-slate-300 hover:text-white rounded-lg text-sm font-medium border border-white/[0.08] hover:border-white/[0.15] transition-all"
              >
                {state}
              </Link>
            ))}
            <Link href="/states" className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
              All 50 States →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
