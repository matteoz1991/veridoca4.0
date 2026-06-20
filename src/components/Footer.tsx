'use client'

import Link from 'next/link'
import { Scale, Shield, FileText, Users } from 'lucide-react'

const footerLinks = {
  templates: {
    title: 'Templates',
    links: [
      { label: 'Business Documents', href: '/templates/business' },
      { label: 'Employment Documents', href: '/templates/employment' },
      { label: 'Real Estate Documents', href: '/templates/real-estate' },
      { label: 'Personal Legal Documents', href: '/templates/personal' },
      { label: 'Family Documents', href: '/templates/family' },
      { label: 'Estate Planning', href: '/templates/estate-planning' },
      { label: 'Financial Documents', href: '/templates/financial' },
    ],
  },
  popular: {
    title: 'Popular Templates',
    links: [
      { label: 'Residential Lease Agreement', href: '/templates/real-estate/residential-lease-agreement' },
      { label: 'Non-Disclosure Agreement', href: '/templates/business/non-disclosure-agreement' },
      { label: 'Last Will and Testament', href: '/templates/estate-planning/last-will-and-testament' },
      { label: 'Power of Attorney', href: '/templates/personal/power-of-attorney' },
      { label: 'Child Custody Agreement', href: '/templates/family/child-custody-agreement' },
      { label: 'LLC Operating Agreement', href: '/templates/business/llc-operating-agreement' },
      { label: 'Employment Contract', href: '/templates/employment/employment-contract' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Legal Blog', href: '/blog' },
      { label: 'FAQ Hub', href: '/faq' },
      { label: 'Legal Resources', href: '/resources' },
      { label: 'Templates by State', href: '/states' },
      { label: 'About Veridoca', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Editorial Policy', href: '/about#editorial-policy' },
    ],
  },
}

const topStates = [
  { name: 'California', slug: 'california' },
  { name: 'Texas', slug: 'texas' },
  { name: 'Florida', slug: 'florida' },
  { name: 'New York', slug: 'new-york' },
  { name: 'Illinois', slug: 'illinois' },
  { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Georgia', slug: 'georgia' },
  { name: 'Ohio', slug: 'ohio' },
  { name: 'Michigan', slug: 'michigan' },
  { name: 'Washington', slug: 'washington' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]" style={{ background: '#07090f' }}>
      {/* Trust bar */}
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { icon: Shield, text: 'Attorney-Reviewed' },
              { icon: FileText, text: '500+ Free Templates' },
              { icon: Users, text: 'All 50 States Covered' },
              { icon: Scale, text: 'No Registration Required' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400">
                <Icon className="w-4 h-4 text-emerald-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Logo + mission */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
            >
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">Veridoca</span>
          </Link>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            Free, attorney-reviewed legal document templates for every situation. Empowering Americans to handle routine legal paperwork with confidence.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* State links */}
        <div className="border-t border-white/[0.06] pt-8 mb-8">
          <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Templates by State</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {topStates.map((state) => (
              <Link
                key={state.slug}
                href={`/states/${state.slug}`}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                {state.name}
              </Link>
            ))}
            <Link href="/states" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors font-medium">
              View All →
            </Link>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="border-t border-white/[0.06] pt-8">
          <p className="text-slate-600 text-xs leading-relaxed mb-5">
            <strong className="text-slate-500">Legal Disclaimer:</strong> The information on Veridoca.com is for general informational purposes only and does not constitute legal advice. Use of this site does not create an attorney-client relationship. Laws vary by state and change frequently. Always consult a licensed attorney in your jurisdiction for advice specific to your situation.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Veridoca.com. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Terms</Link>
              <Link href="/disclaimer" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Disclaimer</Link>
              <button
                onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                className="text-slate-600 hover:text-slate-300 text-xs transition-colors"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
