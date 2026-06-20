import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ArrowLeft } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import AdPlaceholder from '@/components/AdPlaceholder'
import TemplateCard from '@/components/TemplateCard'
import { getArticleBySlug, allArticles } from '@/data/articles'
import { getRelatedTemplates } from '@/data/templates'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: 'article' },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const relatedTemplates = getRelatedTemplates(article.relatedTemplates)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: { '@type': 'Organization', name: 'Veridoca Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Veridoca' },
    datePublished: article.publishDate,
    mainEntityOfPage: `https://veridoca.com/blog/${slug}`,
  }

  const paragraphs = article.content.split('\n\n').filter(Boolean)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[#07090f] min-h-screen">
        <div className="border-b border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Breadcrumb crumbs={[{ label: 'Blog', href: '/blog' }, { label: article.title }]} />
            <AdPlaceholder slot="leaderboard" className="mt-6" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide block mb-2">
              {article.category.replace(/-/g, ' ')}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>By Veridoca Editorial Team</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime} min read
              </span>
              <span>Published {new Date(article.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          <div className="prose-legal bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-8 mb-8">
            {paragraphs.map((paragraph, i) => {
              if (paragraph.startsWith('## ')) return <h2 key={i}>{paragraph.replace('## ', '')}</h2>
              if (paragraph.startsWith('### ')) return <h3 key={i}>{paragraph.replace('### ', '')}</h3>
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) return <p key={i}><strong>{paragraph.slice(2, -2)}</strong></p>
              if (paragraph.startsWith('# ')) return null
              return <p key={i}>{paragraph}</p>
            })}
          </div>

          <AdPlaceholder slot="leaderboard" className="mb-8" />

          {relatedTemplates.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Related Templates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedTemplates.map((t) => <TemplateCard key={t.slug} template={t} compact />)}
              </div>
            </section>
          )}

          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Legal Blog
            </Link>
            <p className="text-xs text-slate-600">
              For informational purposes only.{' '}
              <Link href="/disclaimer" className="text-emerald-400 hover:text-emerald-300">Read disclaimer.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
