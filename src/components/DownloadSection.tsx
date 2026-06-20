import { Download, FileText, FileCheck, Eye, Lock } from 'lucide-react'
import { formatDownloadCount } from '@/lib/utils'

type Props = { templateName: string; downloadCount: number; slug: string }

export default function DownloadSection({ templateName, downloadCount, slug }: Props) {
  return (
    <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Download className="w-5 h-5 text-emerald-400" />
        <h2 className="text-xl font-bold text-white">Download Free Template</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">
        Attorney-reviewed · Updated 2026 · {formatDownloadCount(downloadCount)} downloads · No registration required
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <a
          href={`/downloads/${slug}.pdf`}
          download
          className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          <FileText className="w-4 h-4" />
          Download PDF
        </a>
        <a
          href={`/downloads/${slug}.docx`}
          download
          className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          <FileCheck className="w-4 h-4" />
          Download Word (.docx)
        </a>
        <a
          href={`/preview/${slug}`}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.06] hover:bg-white/[0.10] text-slate-200 font-semibold rounded-xl border border-white/[0.12] transition-colors text-sm"
        >
          <Eye className="w-4 h-4" />
          Preview Template
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-emerald-500" />
          No email required
        </div>
        <div className="flex items-center gap-1.5">
          <Download className="w-3.5 h-3.5 text-emerald-500" />
          Instant download
        </div>
        <div className="flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-emerald-500" />
          Free forever
        </div>
      </div>

      <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-emerald-500/[0.15] leading-relaxed">
        This template is a starting point and does not constitute legal advice. Review with an attorney before use in high-stakes transactions.
      </p>
    </div>
  )
}
