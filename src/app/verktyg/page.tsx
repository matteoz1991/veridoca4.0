import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, TrendingDown, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Verktyg — Sparkalkylatorer för bredband & mobil',
  description: 'Interaktiva kalkylatorer för att räkna ut besparingar på mobilabonnemang, bredband och bindningstider.',
}

const tools = [
  {
    icon: Calculator,
    title: 'Mobilkalkylator',
    description: 'Räkna ut hur mycket du kan spara per år på ditt mobilabonnemang',
    href: '/verktyg/mobilkalkylator/',
    badge: 'Populär',
  },
  {
    icon: TrendingDown,
    title: 'Bredbandskalkylator',
    description: 'Se din verkliga kostnad över 12–24 månader inkl. kampanjpriser och avgifter',
    href: '/verktyg/bredbandskalkylator/',
  },
  {
    icon: Zap,
    title: 'Bindningstidskalkylator',
    description: 'Räkna ut när det lönar sig att bryta bindningstiden',
    href: '/verktyg/bindningstid/',
  },
]

export default function VerktygPage() {
  return (
    <div className="bg-[#FFFEF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="mb-12">
          <p className="text-[14px] text-[#C95D3F] font-medium mb-4 tracking-wide">
            INTERAKTIVA VERKTYG
          </p>
          <h1 className="font-serif text-5xl font-semibold text-[#2C2C2C] leading-[1.1] tracking-tight mb-6">
            Sparkalkylatorer
          </h1>
          <p className="text-[18px] text-[#4A4A4A] leading-relaxed max-w-2xl">
            Räkna på dina egna siffror. Inga hårdkodade priser eller påstådda erbjudanden — du fyller i vad du faktiskt betalar.
          </p>
        </div>

        <div className="space-y-6">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group block border border-[#E5E5E5] p-8 hover:border-[#C95D3F] transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#FAF9F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C95D3F] transition-colors">
                    <Icon className="w-8 h-8 text-[#C95D3F] group-hover:text-[#FFFEF9] transition-colors" />
                  </div>
                  <div className="flex-1">
                    {tool.badge && (
                      <span className="inline-block text-[12px] text-[#C95D3F] font-medium mb-2 tracking-wide">
                        {tool.badge}
                      </span>
                    )}
                    <h2 className="font-serif font-semibold text-[24px] text-[#2C2C2C] mb-3 group-hover:text-[#C95D3F] transition-colors">
                      {tool.title}
                    </h2>
                    <p className="text-[17px] text-[#4A4A4A] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                  <span className="text-[#C95D3F] text-[24px] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-16 p-6 bg-[#FAF9F5] border-l-3 border-[#C95D3F]">
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
            <strong className="text-[#2C2C2C]">Observera:</strong> Kalkylatorerna räknar på de värden du fyller i. Vi hårdkodar inga operatörspriser eller påstår oss veta vad du kan spara — du anger dina egna siffror och får utfallet baserat på dem.
          </p>
        </div>
      </div>
    </div>
  )
}
