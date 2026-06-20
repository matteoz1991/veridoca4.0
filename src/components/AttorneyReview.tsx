import { BookOpen } from 'lucide-react'

type Props = { lastUpdated: string }

export default function AttorneyReview({ lastUpdated }: Props) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <p className="font-semibold text-white text-sm mb-1">About This Content</p>
          <p className="text-xs text-slate-400 leading-relaxed mb-2">
            Written by the Veridoca editorial team. Research cites primary sources — state statutes, federal law, and official court decisions. Last updated: {lastUpdated}.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            For informational purposes only — not legal advice. Consult a licensed attorney in your state for advice specific to your situation.
          </p>
        </div>
      </div>
    </div>
  )
}
