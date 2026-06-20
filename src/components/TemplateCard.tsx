import Link from 'next/link'
import { FileText, Star, ArrowRight } from 'lucide-react'
import { getCategoryName } from '@/lib/utils'
import type { Template } from '@/types'

type Props = { template: Template; compact?: boolean }

export default function TemplateCard({ template, compact = false }: Props) {
  const href = `/templates/${template.category}/${template.slug}`

  if (compact) {
    return (
      <Link href={href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all group">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <FileText className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">{template.name}</p>
          <p className="text-xs text-slate-500">{getCategoryName(template.category)}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 flex-shrink-0 ml-auto transition-colors" />
      </Link>
    )
  }

  return (
    <Link href={href} className="group flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-200">
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 capitalize">
          {getCategoryName(template.category)}
        </span>
        {template.popular && (
          <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-medium flex-shrink-0">
            <Star className="w-3 h-3 fill-amber-400" />
            Popular
          </span>
        )}
      </div>

      <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-emerald-300 transition-colors">
        {template.name}
      </h3>

      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
        {template.intro}
      </p>

      <div className="flex items-center justify-end pt-2.5 border-t border-white/[0.06]">
        <span className="text-xs font-medium text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1 transition-colors">
          Free Download <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  )
}
