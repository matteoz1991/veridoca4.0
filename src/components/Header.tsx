'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Scale, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: 'Templates',
    href: '/templates',
    children: [
      { label: 'Business Documents', href: '/templates/business' },
      { label: 'Employment Documents', href: '/templates/employment' },
      { label: 'Real Estate Documents', href: '/templates/real-estate' },
      { label: 'Personal Legal Documents', href: '/templates/personal' },
      { label: 'Family Documents', href: '/templates/family' },
      { label: 'Estate Planning', href: '/templates/estate-planning' },
      { label: 'Financial Documents', href: '/templates/financial' },
    ],
  },
  { label: 'By State', href: '/states' },
  { label: 'Legal Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.06]"
      style={{ background: 'rgba(7,9,15,0.88)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
          >
            <Scale className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">Veridoca</span>
        </Link>

        {/* Desktop pill nav */}
        <nav className="hidden md:flex items-center gap-0.5 bg-white/[0.05] border border-white/[0.08] rounded-full px-1.5 py-1.5">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-white/10 py-1.5 z-50 shadow-2xl shadow-black/60"
                    style={{ background: '#0c1018' }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/about"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/templates"
            className="px-5 py-2 bg-white text-slate-900 font-semibold text-sm rounded-full hover:bg-slate-100 transition-colors"
          >
            Browse Templates
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] pb-5" style={{ background: '#0c1018' }}>
          <div className="max-w-7xl mx-auto px-4 pt-3 space-y-0.5">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/[0.06] mt-2">
              <Link
                href="/templates"
                className="block text-center px-4 py-2.5 bg-white text-slate-900 font-semibold text-sm rounded-full transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
