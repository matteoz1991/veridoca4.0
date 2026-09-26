import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Veridoca — Guider till bredband, mobilabonnemang & hemförsäkring',
  description: 'Oberoende guider på svenska om bredband, mobilabonnemang och hemförsäkring. Hjälper dig att jämföra och förstå dina alternativ.',
}

export default function HomePage() {
  return (
    <div className="bg-[#FFFEF9]">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          <p className="text-[15px] text-[#C95D3F] font-medium mb-6 tracking-wide">
            OBEROENDE GUIDER
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-semibold text-[#2C2C2C] leading-[1.05] tracking-tight mb-8">
            Hitta rätt bredband, mobilabonnemang och försäkring
          </h1>
          <p className="text-[19px] text-[#4A4A4A] leading-relaxed max-w-2xl mb-10">
            Praktiska guider skrivna av någon som faktiskt har jobbat i branschen. Inga rankings, inga påhittade jämförelser—bara information du faktiskt behöver.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-12 text-[15px]">
          {['Fiber', 'Mobilt bredband', 'Operatörer', 'Hemförsäkring'].map((term) => (
            <span
              key={term}
              className="px-4 py-2 border border-[#E5E5E5] text-[#4A4A4A]"
            >
              {term}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-between gap-12 text-[15px] text-[#8B8B8B]">
            <div>Uppdateras regelbundet</div>
            <div>Inga tracking-cookies</div>
            <div>Transparent om affiliatelänkar</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl font-semibold text-[#2C2C2C] mb-6 leading-tight">
              Tre områden
            </h2>
            <p className="text-[17px] text-[#4A4A4A] leading-relaxed mb-12">
              Jag fokuserar på de tre områden där jag har mest erfarenhet och där jag vet att folk faktiskt behöver hjälp.
            </p>
          </div>
        </div>

        <div className="space-y-16">
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
                Fiber, mobilt bredband, bindningstider. Vad du faktiskt ska tänka på när du tecknar eller byter avtal. Ingen fluff.
              </p>
              <div className="space-y-2">
                <Link href="/bredband/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] inline-block hover:opacity-70 transition-opacity">
                  Bredbandguiden →
                </Link>
                <Link href="/bredband/byta-leverantor/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] inline-block hover:opacity-70 transition-opacity">
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
                Hur mycket surf du verkligen behöver. Skillnaden mellan operatörer och virtuella operatörer. Vad som faktiskt spelar roll.
              </p>
              <div className="space-y-2">
                <Link href="/mobilabonnemang/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] inline-block hover:opacity-70 transition-opacity">
                  Mobilabonnemang →
                </Link>
                <Link href="/mobilabonnemang/billigt/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] inline-block hover:opacity-70 transition-opacity">
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
                Rent informativ guide om vad hemförsäkring täcker, självrisk och frågor att ställa. Jag rankar inte försäkringsbolag och ger inga råd—det är strikt reglerat i Sverige.
              </p>
              <div className="space-y-2">
                <Link href="/forsakring/hemforsakring/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] inline-block hover:opacity-70 transition-opacity">
                  Läs guiden →
                </Link>
              </div>
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
              Alla länkar är märkta med <span className="text-[12px] text-[#8B8B8B] font-medium uppercase tracking-wide border border-[#E5E5E5] px-2 py-1">Reklamlänk</span> så du vet exakt vilka som är affiliatelänkar.
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
              Guiderna på Veridoca är allmän information och ska inte ses som personlig rådgivning. Priser och villkor ändras över tid—kontrollera alltid hos leverantören.
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
