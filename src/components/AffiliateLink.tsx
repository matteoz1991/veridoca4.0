import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface AffiliateLinkProps {
  slug: string
  children: React.ReactNode
  className?: string
}

export default function AffiliateLink({ slug, children, className = '' }: AffiliateLinkProps) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <Link
        href={`/go/${slug}/`}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="text-[#C95D3F] hover:opacity-70 font-medium border-b border-[#C95D3F] transition-opacity inline-flex items-baseline gap-1"
      >
        {children}
        <ExternalLink className="w-3 h-3 inline" />
      </Link>
      <span className="text-[12px] text-[#8B8B8B] font-medium uppercase tracking-wide">Reklamlänk</span>
    </span>
  )
}
