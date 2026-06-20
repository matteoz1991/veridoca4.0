import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

type Crumb = { label: string; href?: string }
type Props = { crumbs: Crumb[] }

export default function Breadcrumb({ crumbs }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-slate-500">
      <Link href="/" className="hover:text-slate-300 transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {crumbs.map((crumb, i) => (
        <div key={i} className="flex items-center gap-1">
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          {crumb.href && i < crumbs.length - 1 ? (
            <Link href={crumb.href} className="hover:text-slate-300 transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-slate-300 font-medium truncate max-w-[200px]">{crumb.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
