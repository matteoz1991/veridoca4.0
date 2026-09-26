'use client'

import Link from 'next/link'
import { Wifi, Shield, FileText } from 'lucide-react'

const footerLinks = {
  guides: {
    title: 'Guider',
    links: [
      { label: 'Bredband', href: '/bredband/' },
      { label: 'Byta bredbandsleverantör', href: '/bredband/byta-leverantor/' },
      { label: 'Mobilabonnemang', href: '/mobilabonnemang/' },
      { label: 'Billigt mobilabonnemang', href: '/mobilabonnemang/billigt/' },
      { label: 'Hemförsäkring', href: '/forsakring/hemforsakring/' },
    ],
  },
  about: {
    title: 'Om Veridoca',
    links: [
      { label: 'Om oss', href: '/om-oss/' },
      { label: 'Så tjänar vi pengar (Reklam)', href: '/reklam/' },
      { label: 'Kontakt', href: '/kontakt/' },
    ],
  },
  legal: {
    title: 'Juridiskt',
    links: [
      { label: 'Integritetspolicy (GDPR)', href: '/integritet/' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]" style={{ background: '#07090f' }}>
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { icon: Shield, text: 'Oberoende guider' },
              { icon: FileText, text: 'Uppdateras regelbundet' },
              { icon: Wifi, text: 'Bredband • Mobil • Försäkring' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400">
                <Icon className="w-4 h-4 text-emerald-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
            >
              <Wifi className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">Veridoca</span>
          </Link>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            Oberoende guider på svenska om bredband, mobilabonnemang och hemförsäkring.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
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

        <div className="border-t border-white/[0.06] pt-8">
          <p className="text-slate-600 text-xs leading-relaxed mb-5">
            <strong className="text-slate-500">Ansvarsfriskrivning:</strong> Informationen på Veridoca.com är allmän information och ska inte ses som personlig rådgivning. Priser, villkor och erbjudanden ändras över tid. Kontrollera alltid aktuella uppgifter hos respektive leverantör eller försäkringsbolag. Veridoca.com är inte ett försäkringsförmedlingsföretag och ger ingen rådgivning om specifika försäkringar.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Veridoca.com. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/integritet/" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Integritet</Link>
              <Link href="/reklam/" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Reklam</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
