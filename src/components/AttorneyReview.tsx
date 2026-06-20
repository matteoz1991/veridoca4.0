import Link from 'next/link'
import { Shield, ExternalLink } from 'lucide-react'
import type { Attorney } from '@/types'

type Props = { attorney: Attorney; reviewDate: string }

export default function AttorneyReview({ attorney, reviewDate }: Props) {
  return (
    <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-xl p-5">
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
        >
          {attorney.photoInitials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Attorney Reviewed</span>
          </div>
          <p className="font-semibold text-white text-sm">{attorney.name}, {attorney.credentials}</p>
          <p className="text-xs text-slate-400 mb-1">{attorney.specialization}</p>
          <p className="text-xs text-slate-500 mb-2">{attorney.barNumbers}</p>
          <div className="text-xs text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{attorney.yearsExperience} years experience</span>
            <span>·</span>
            <span>Last reviewed: {reviewDate}</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-3 leading-relaxed border-t border-emerald-500/20 pt-3">
        {attorney.bio.slice(0, 180)}...{' '}
        <Link href={`/about#team-${attorney.slug}`} className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-0.5">
          Full bio <ExternalLink className="w-3 h-3" />
        </Link>
      </p>
    </div>
  )
}
