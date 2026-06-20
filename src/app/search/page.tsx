'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import { Search, FileText, BookOpen, X } from 'lucide-react'
import { templates } from '@/data/templates'
import { articles } from '@/data/articles'

type ResultType = 'template' | 'article'

interface SearchResult {
  type: ResultType
  slug: string
  title: string
  excerpt: string
  category: string
  href: string
}

const templateItems: SearchResult[] = templates.map(t => ({
  type: 'template',
  slug: t.slug,
  title: t.name,
  excerpt: t.intro.slice(0, 140) + '…',
  category: t.category,
  href: `/templates/${t.category}/${t.slug}`,
}))

const articleItems: SearchResult[] = articles.map(a => ({
  type: 'article',
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  category: a.category,
  href: `/blog/${a.slug}`,
}))

const allItems = [...templateItems, ...articleItems]

const fuse = new Fuse(allItems, {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'excerpt', weight: 1 },
    { name: 'category', weight: 0.5 },
  ],
  threshold: 0.35,
  includeScore: true,
})

const CATEGORY_LABELS: Record<string, string> = {
  business: 'Business',
  employment: 'Employment',
  'real-estate': 'Real Estate',
  personal: 'Personal',
  family: 'Family',
  'estate-planning': 'Estate Planning',
  financial: 'Financial',
}

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'template' | 'article'>('all')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const fuseResults = fuse.search(query.trim())
    return fuseResults
      .filter(r => filter === 'all' || r.item.type === filter)
      .map(r => r.item)
  }, [query, filter])

  const templateResults = results.filter(r => r.type === 'template')
  const articleResults = results.filter(r => r.type === 'article')

  return (
    <div className="bg-[#07090f] min-h-screen">
      {/* Hero search bar */}
      <div
        className="border-b border-white/[0.06] py-16 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(16,185,129,0.04) 0%, transparent 100%)' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/[0.06] blur-[100px] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative">
          <h1 className="text-3xl sm:text-4xl font-black text-white text-center mb-2 tracking-tight">
            Search Legal Templates
          </h1>
          <p className="text-slate-500 text-center mb-8">500+ free documents, 21 articles</p>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder='Try "NDA", "lease", "power of attorney"…'
              className="w-full pl-12 pr-12 py-4 bg-white/[0.06] border border-white/[0.12] rounded-2xl text-white placeholder-slate-600 text-base focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 mt-4 justify-center">
            {(['all', 'template', 'article'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-500 hover:text-white border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {f === 'all' ? 'All' : f === 'template' ? 'Templates' : 'Articles'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Empty state */}
        {!query && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-slate-600" />
            </div>
            <p className="text-slate-500">Start typing to search templates and articles</p>
          </div>
        )}

        {/* No results */}
        {query && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white font-semibold mb-2">No results for &ldquo;{query}&rdquo;</p>
            <p className="text-slate-500 text-sm">Try different keywords or browse templates by category</p>
            <Link href="/templates" className="mt-4 inline-block text-emerald-400 hover:text-emerald-300 text-sm">
              Browse all templates →
            </Link>
          </div>
        )}

        {/* Results */}
        {query && results.length > 0 && (
          <div className="space-y-8">
            <p className="text-slate-500 text-sm">{results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;</p>

            {/* Template results */}
            {templateResults.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Templates ({templateResults.length})</h2>
                </div>
                <div className="space-y-2">
                  {templateResults.map(r => (
                    <Link
                      key={r.slug}
                      href={r.href}
                      className="flex items-start gap-4 p-4 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:bg-white/[0.07] hover:border-emerald-500/20 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors text-sm">{r.title}</span>
                          <span className="text-xs px-2 py-0.5 bg-white/[0.06] rounded-full text-slate-500">
                            {CATEGORY_LABELS[r.category] ?? r.category}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{r.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Article results */}
            {articleResults.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Articles ({articleResults.length})</h2>
                </div>
                <div className="space-y-2">
                  {articleResults.map(r => (
                    <Link
                      key={r.slug}
                      href={r.href}
                      className="flex items-start gap-4 p-4 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:bg-white/[0.07] hover:border-blue-500/20 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BookOpen className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm mb-0.5">{r.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{r.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
