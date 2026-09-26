'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Bredband', href: '/bredband/' },
  { label: 'Mobilabonnemang', href: '/mobilabonnemang/' },
  { label: 'Hemförsäkring', href: '/forsakring/hemforsakring/' },
  { label: 'Om', href: '/om-oss/' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-[#E5E5E5] bg-[#FFFEF9]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-semibold text-[#2C2C2C] tracking-tight">
          Veridoca
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] text-[#4A4A4A] hover:text-[#C95D3F] transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt/"
          className="hidden md:block text-[15px] px-4 py-2 bg-[#2C2C2C] text-[#FFFEF9] hover:bg-[#C95D3F] transition-colors font-medium"
        >
          Kontakt
        </Link>

        <button
          className="md:hidden p-2 text-[#4A4A4A] hover:text-[#C95D3F] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-[#FFFEF9]">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-[15px] text-[#4A4A4A] hover:text-[#C95D3F] transition-colors font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt/"
              className="block text-[15px] px-4 py-2 bg-[#2C2C2C] text-[#FFFEF9] hover:bg-[#C95D3F] transition-colors font-medium text-center"
              onClick={() => setMobileOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
