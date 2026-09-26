import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface AffiliateLinkProps {
  slug: string
  children: React.ReactNode
  className?: string
}

export default function AffiliateLink({ slug, children, className = '' }: AffiliateLinkProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Link
        href={`/go/${slug}/`}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium underline transition-colors"
      >
        {children}
        <ExternalLink className="w-3.5 h-3.5" />
      </Link>
      <span className="text-xs text-slate-500 font-medium">Reklamlänk</span>
    </span>
  )
}
