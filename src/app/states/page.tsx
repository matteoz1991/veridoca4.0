import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import AdPlaceholder from '@/components/AdPlaceholder'
import { allStates } from '@/data/states'

export const metadata: Metadata = {
  title: 'Legal Document Templates by State — All 50 States',
  description: 'State-specific legal document templates, laws, and guidance for all 50 US states and D.C. Find templates tailored to your state\'s requirements.',
}

export default function StatesPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'Templates by State' }]} />
          <div className="mt-5 flex items-center gap-4">
            <MapPin className="w-8 h-8 text-emerald-400" />
            <div>
              <h1 className="text-3xl font-black text-white">Legal Templates by State</h1>
              <p className="text-slate-400 mt-1">State-specific requirements, key laws, and customized templates for all 50 states + D.C.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdPlaceholder slot="leaderboard" className="mb-10" />

        <div className="bg-amber-500/[0.08] border border-amber-500/20 rounded-xl p-4 mb-8 text-sm text-amber-300/80">
          <strong className="text-amber-300">Why state matters:</strong> Legal document requirements vary significantly between states. Lease terms, security deposit limits, eviction notice periods, non-compete enforceability, and estate planning requirements all differ by state.
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
          {allStates.map((state) => (
            <Link
              key={state.slug}
              href={`/states/${state.slug}`}
              className="flex flex-col items-center p-4 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-emerald-500/30 rounded-xl text-center transition-all group"
            >
              <span className="text-2xl font-black text-slate-400 group-hover:text-emerald-400 transition-colors">
                {state.abbreviation}
              </span>
              <span className="text-xs font-medium text-slate-600 group-hover:text-slate-300 mt-1 transition-colors leading-tight">
                {state.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
