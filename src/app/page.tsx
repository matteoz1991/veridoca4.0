import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, TrendingDown, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Veridoca — Guider till bredband, mobilabonnemang & hemförsäkring',
  description: 'Oberoende guider på svenska om bredband, mobilabonnemang och hemförsäkring. Interaktiva sparkalkylatorer och praktisk vägledning.',
}

const tools = [
  {
    icon: Calculator,
    title: 'Mobilkalkylator',
    description: 'Se hur mycket du kan spara per år på ditt mobilabonnemang',
    href: '/verktyg/mobilkalkylator/',
    badge: 'Populär',
  },
  {
    icon: TrendingDown,
    title: 'Bredbandskalkylator',
    description: 'Räkna ut din verkliga kostnad över 12–24 månader',
    href: '/verktyg/bredbandskalkylator/',
  },
  {
    icon: Zap,
    title: 'Bindningstidskalkylator',
    description: 'Lönar det sig att bryta bindningstiden?',
    href: '/verktyg/bindningstid/',
  },
]

export default function HomePage() {
  return (
    <div className="bg-[#FFFEF9]">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <p className="text-[15px] text-[#C95D3F] font-medium mb-6 tracking-wide">
              OBEROENDE GUIDER & VERKTYG
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-[#2C2C2C] leading-[1.1] tracking-tight mb-6">
              Hitta rätt och spara pengar på bredband & mobil
            </h1>
            <p className="text-[18px] text-[#4A4A4A] leading-relaxed mb-8">
              Räkna ut vad du faktiskt betalar. Jämför dina alternativ. Få konkreta svar från någon som har jobbat i branschen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/verktyg/"
                className="inline-block px-6 py-3 bg-[#C95D3F] text-[#FFFEF9] font-medium hover:bg-[#2C2C2C] transition-colors"
              >
                Se verktyg
              </Link>
              <Link
                href="/bredband/"
                className="inline-block px-6 py-3 border border-[#E5E5E5] text-[#2C2C2C] font-medium hover:border-[#C95D3F] hover:text-[#C95D3F] transition-colors"
              >
                Läs guider
              </Link>
            </div>
          </div>

          <div className="bg-[#FAF9F5] border border-[#E5E5E5] p-8 animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#C95D3F] flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#FFFEF9]" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-[18px] text-[#2C2C2C]">
                  Snabbkoll: Mobil
                </h3>
                <p className="text-[14px] text-[#8B8B8B]">Hur mycket kan du spara?</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-[14px] text-[#4A4A4A] mb-2 font-medium">
                  Betalar idag per månad (kr)
                </label>
                <input
                  type="number"
                  defaultValue="349"
                  className="w-full px-4 py-2 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] focus:outline-none focus:border-[#C95D3F]"
                  placeholder="349"
                />
              </div>
              <div>
                <label className="block text-[14px] text-[#4A4A4A] mb-2 font-medium">
                  Alternativpris per månad (kr)
                </label>
                <input
                  type="number"
                  defaultValue="199"
                  className="w-full px-4 py-2 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] focus:outline-none focus:border-[#C95D3F]"
                  placeholder="199"
                />
              </div>
            </div>
            <div className="bg-[#FFFEF9] border-l-3 border-[#C95D3F] p-4 mb-4">
              <p className="text-[14px] text-[#8B8B8B] mb-1">Besparing per år</p>
              <p className="font-serif font-semibold text-[28px] text-[#2C2C2C]">
                1 800 kr
              </p>
            </div>
            <Link
              href="/verktyg/mobilkalkylator/"
              className="block text-center px-4 py-2 bg-[#2C2C2C] text-[#FFFEF9] font-medium hover:bg-[#C95D3F] transition-colors text-[15px]"
            >
              Fullständig kalkylator →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] py-12 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-between gap-8 text-[15px] text-[#8B8B8B]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C95D3F]"></span>
              Uppdateras regelbundet
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C95D3F]"></span>
              Inga tracking-cookies
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C95D3F]"></span>
              Transparent om affiliatelänkar
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-semibold text-[#2C2C2C] mb-4 leading-tight">
            Interaktiva verktyg
          </h2>
          <p className="text-[17px] text-[#4A4A4A] leading-relaxed max-w-2xl">
            Räkna på dina egna siffror. Inga hårdkodade priser eller påstådda erbjudanden — du fyller i vad du faktiskt betalar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group border border-[#E5E5E5] p-6 hover:border-[#C95D3F] transition-colors"
              >
                {tool.badge && (
                  <span className="inline-block text-[12px] text-[#C95D3F] font-medium mb-3 tracking-wide">
                    {tool.badge}
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FAF9F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C95D3F] transition-colors">
                    <Icon className="w-6 h-6 text-[#C95D3F] group-hover:text-[#FFFEF9] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-[19px] text-[#2C2C2C] mb-2 group-hover:text-[#C95D3F] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-semibold text-[#2C2C2C] mb-4 leading-tight">
            Tre områden
          </h2>
          <p className="text-[17px] text-[#4A4A4A] leading-relaxed">
            Jag fokuserar på de områden där jag har mest erfarenhet och där folk faktiskt behöver hjälp.
          </p>
        </div>

        <div className="space-y-12">
          <article className="grid md:grid-cols-12 gap-8 border-t border-[#E5E5E5] pt-8">
            <div className="md:col-span-2">
              <span className="text-[14px] font-medium text-[#8B8B8B] tracking-wide">01</span>
            </div>
            <div className="md:col-span-10">
              <h3 className="font-serif text-3xl font-semibold text-[#2C2C2C] mb-4">
                <Link href="/bredband/" className="hover:text-[#C95D3F] transition-colors">
                  Bredband
                </Link>
              </h3>
              <p className="text-[17px] text-[#4A4A4A] leading-relaxed mb-6 max-w-2xl">
                Fiber eller mobilt? Hur mycket hastighet behöver du egentligen? Vad kostar det faktiskt när kampanjpriset tar slut? Här får du konkreta svar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/bredband/" className="text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
                  Bredbandguiden →
                </Link>
                <Link href="/bredband/byta-leverantor/" className="text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
                  Byta leverantör →
                </Link>
              </div>
            </div>
          </article>

          <article className="grid md:grid-cols-12 gap-8 border-t border-[#E5E5E5] pt-8">
            <div className="md:col-span-2">
              <span className="text-[14px] font-medium text-[#8B8B8B] tracking-wide">02</span>
            </div>
            <div className="md:col-span-10">
              <h3 className="font-serif text-3xl font-semibold text-[#2C2C2C] mb-4">
                <Link href="/mobilabonnemang/" className="hover:text-[#C95D3F] transition-colors">
                  Mobilabonnemang
                </Link>
              </h3>
              <p className="text-[17px] text-[#4A4A4A] leading-relaxed mb-6 max-w-2xl">
                Skillnaden mellan operatör och virtuell operatör. Hur mycket surf du verkligen behöver. Vad som faktiskt spelar roll när du väljer abonnemang.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/mobilabonnemang/" className="text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
                  Mobilguiden →
                </Link>
                <Link href="/mobilabonnemang/billigt/" className="text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
                  Hitta billigt abonnemang →
                </Link>
              </div>
            </div>
          </article>

          <article className="grid md:grid-cols-12 gap-8 border-t border-[#E5E5E5] pt-8">
            <div className="md:col-span-2">
              <span className="text-[14px] font-medium text-[#8B8B8B] tracking-wide">03</span>
            </div>
            <div className="md:col-span-10">
              <h3 className="font-serif text-3xl font-semibold text-[#2C2C2C] mb-4">
                <Link href="/forsakring/hemforsakring/" className="hover:text-[#C95D3F] transition-colors">
                  Hemförsäkring
                </Link>
              </h3>
              <p className="text-[17px] text-[#4A4A4A] leading-relaxed mb-6 max-w-2xl">
                Rent informativ guide om vad hemförsäkring täcker, självrisk och frågor att ställa. Jag rankar inte försäkringsbolag och ger inga råd — det är strikt reglerat i Sverige.
              </p>
              <Link href="/forsakring/hemforsakring/" className="text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
                Läs guiden →
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#FAF9F5] py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl font-semibold text-[#2C2C2C] mb-6 leading-tight">
              Hur tjänar sidan pengar?
            </h2>
            <p className="text-[17px] text-[#4A4A4A] leading-relaxed mb-6">
              Veridoca finansieras via affiliatelänkar. När jag länkar till en operatör eller leverantör och du tecknar ett avtal, kan jag få en provision. Det kostar ingenting extra för dig.
            </p>
            <p className="text-[17px] text-[#4A4A4A] leading-relaxed mb-8">
              Alla länkar är märkta med <span className="text-[12px] text-[#8B8B8B] font-medium uppercase tracking-wide border border-[#E5E5E5] px-2 py-1 bg-[#FFFEF9]">Reklamlänk</span> så du vet exakt vilka som är affiliatelänkar.
            </p>
            <Link href="/reklam/" className="text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
              Läs mer om hur det fungerar →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold text-[#2C2C2C] mb-6 leading-tight">
            Viktigt att veta
          </h2>
          <div className="space-y-4 text-[17px] text-[#4A4A4A] leading-relaxed">
            <p>
              Guiderna på Veridoca är allmän information och ska inte ses som personlig rådgivning. Priser och villkor ändras över tid — kontrollera alltid hos leverantören.
            </p>
            <p className="text-[15px] text-[#8B8B8B] border-l-2 border-[#C95D3F] pl-6">
              <strong className="text-[#4A4A4A]">Om hemförsäkring:</strong> Jag ger inga råd om vilken försäkring du ska välja och rankar inte försäkringsbolag. För rådgivning, kontakta ett försäkringsbolag eller en oberoende försäkringsrådgivare.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
