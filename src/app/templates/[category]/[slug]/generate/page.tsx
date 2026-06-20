import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, FileEdit } from 'lucide-react'
import { templateSchemas } from '@/data/template-fields'
import { templates } from '@/data/templates'
import DocumentGenerator from '@/components/DocumentGenerator'

interface Props {
  params: Promise<{ category: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const schema = templateSchemas[slug]
  if (!schema) return { title: 'Generate Document — Veridoca' }
  return {
    title: `Generate ${schema.title} — Fill in & Download | Veridoca`,
    description: `Fill in the fields to generate a customized ${schema.title}. Download as Word or PDF. Free, no signup required.`,
  }
}

export async function generateStaticParams() {
  return Object.keys(templateSchemas).map(slug => {
    const template = templates.find(t => t.slug === slug)
    return { category: template?.category ?? 'business', slug }
  })
}

export default async function GeneratePage({ params }: Props) {
  const { category, slug } = await params
  const schema = templateSchemas[slug]
  if (!schema) notFound()

  return (
    <div className="bg-[#07090f] min-h-screen">
      {/* Header */}
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <Link
            href={`/templates/${category}/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to template info
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.12] border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <FileEdit className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">{schema.title}</h1>
              <p className="text-sm text-slate-500 mt-0.5">Fill in the fields below — the document updates instantly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Generator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DocumentGenerator schema={schema} templateName={schema.title} />
      </div>
    </div>
  )
}
