'use client'

import Link from 'next/link'
import Image from 'next/image'

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
      { label: 'Så tjänar vi pengar', href: '/reklam/' },
      { label: 'Kontakt', href: '/kontakt/' },
    ],
  },
  legal: {
    title: 'Juridiskt',
    links: [
      { label: 'Integritetspolicy', href: '/integritet/' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#FFFEF9] mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity" aria-label="Veridoca">
              <Image 
                src="/logo-mark.svg" 
                alt="Veridoca" 
                width={80} 
                height={80} 
                className="h-20 w-20"
              />
            </Link>
            <p className="text-[15px] text-[#8B8B8B] leading-relaxed max-w-xs">
              Oberoende guider om bredband, mobilabonnemang och hemförsäkring.
            </p>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-serif font-semibold text-[#2C2C2C] mb-4 text-[15px]">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[15px] text-[#8B8B8B] hover:text-[#C95D3F] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#E5E5E5] pt-8">
          <p className="text-[14px] text-[#8B8B8B] leading-relaxed mb-6 max-w-4xl">
            <strong className="text-[#4A4A4A]">Ansvarsfriskrivning:</strong> Informationen på Veridoca är allmän information och ska inte ses som personlig rådgivning. Priser och villkor ändras över tid—kontrollera alltid hos leverantören. Vi är inte ett försäkringsförmedlingsföretag och ger ingen rådgivning om specifika försäkringar.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[14px] text-[#8B8B8B]">
              © {new Date().getFullYear()} Veridoca
            </p>
            <div className="flex items-center gap-6">
              <Link href="/integritet/" className="text-[14px] text-[#8B8B8B] hover:text-[#C95D3F] transition-colors">
                Integritet
              </Link>
              <Link href="/reklam/" className="text-[14px] text-[#8B8B8B] hover:text-[#C95D3F] transition-colors">
                Reklam
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
