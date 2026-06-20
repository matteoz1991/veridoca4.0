import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Clock, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import AdPlaceholder from '@/components/AdPlaceholder'
import { allArticles, getFeaturedArticles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Legal Blog — Attorney-Written Guides & Resources',
  description: 'Free attorney-written legal guides covering landlord-tenant law, employment law, estate planning, business law, and family law. Updated 2026.',
}

const articleCategories = [
  { slug: 'legal-guides', label: 'Legal Guides' },
  { slug: 'business-law', label: 'Business Law' },
  { slug: 'employment-law', label: 'Employment Law' },
  { slug: 'real-estate-law', label: 'Real Estate Law' },
  { slug: 'family-law', label: 'Family Law' },
]

const featured = getFeaturedArticles(4)
const rest = allArticles.filter((a) => !a.featured)

export default function BlogPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'Legal Blog' }]} />
          <div className="mt-5 flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-emerald-400" />
            <div>
              <h1 className="text-3xl font-black text-white">Legal Blog & Guides</h1>
              <p className="text-slate-400 mt-1">Attorney-written legal guides to help you understand your rights and obligations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdPlaceholder slot="leaderboard" className="mb-10" />

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-medium">All Topics</button>
          {articleCategories.map((c) => (
            <button key={c.slug} className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white rounded-full text-sm font-medium transition-colors">
              {c.label}
            </button>
          ))}
        </div>

        {/* Featured */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2">
                    {article.category.replace(/-/g, ' ')}
                  </span>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-emerald-300 transition-colors leading-tight">{article.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime} min read
                    </span>
                    <span className="text-emerald-400 font-medium group-hover:text-emerald-300 flex items-center gap-1 transition-colors">
                      Read guide <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <AdPlaceholder slot="leaderboard" className="mb-10" />

        {/* All articles */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">All Legal Guides</h2>
          <div className="space-y-2">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.14] transition-all group"
              >
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                    {article.category.replace(/-/g, ' ')}
                  </span>
                  <h3 className="font-semibold text-white mt-0.5 group-hover:text-emerald-300 transition-colors">{article.title}</h3>
                  <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">{article.excerpt}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-600 flex-shrink-0 mt-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime} min
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
