import type { Metadata } from 'next'
import Link from 'next/link'
import { Wifi, Smartphone, Home, Shield, FileText, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Veridoca — Guider till bredband, mobilabonnemang & hemförsäkring',
  description: 'Oberoende guider på svenska om bredband, mobilabonnemang och hemförsäkring. Hjälper dig att jämföra och förstå dina alternativ.',
}

const guides = [
  {
    icon: Wifi,
    title: 'Bredband',
    description: 'Guider om fiber, mobilt bredband, bindningstid och hur du byter leverantör.',
    href: '/bredband/',
    pages: [
      { label: 'Bredbandguiden', href: '/bredband/' },
      { label: 'Byta leverantör', href: '/bredband/byta-leverantor/' },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobilabonnemang',
    description: 'Allt om surf, familjeabonnemang, operatörer och hur du hittar det billigaste abonnemanget.',
    href: '/mobilabonnemang/',
    pages: [
      { label: 'Mobilabonnemang', href: '/mobilabonnemang/' },
      { label: 'Billigt mobilabonnemang', href: '/mobilabonnemang/billigt/' },
    ],
  },
  {
    icon: Home,
    title: 'Hemförsäkring',
    description: 'Rent informativ guide om vad hemförsäkring täcker, självrisk och viktiga frågor att ställa.',
    href: '/forsakring/hemforsakring/',
    pages: [
      { label: 'Hemförsäkring', href: '/forsakring/hemforsakring/' },
    ],
  },
]

export default function HomePage() {
  return (
    <div className="bg-[#07090f]">
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[700px] rounded-full bg-emerald-500/[0.12] blur-[130px]" />
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-blue-600/[0.08] blur-[100px]" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/[0.07] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.10] text-slate-300 text-sm mb-8 backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Oberoende guider på svenska
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white mb-6">
            Hitta rätt<br />
            <span className="text-emerald-400">bredband & mobil</span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Oberoende guider om bredband, mobilabonnemang och hemförsäkring. Hjälper dig att jämföra och förstå dina alternativ.
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {['Fiber', 'Mobilt bredband', 'Mobilabonnemang', 'Hemförsäkring'].map((term) => (
              <span
                key={term}
                className="px-3.5 py-1.5 bg-white/[0.05] text-slate-400 rounded-full border border-white/[0.08]"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, text: 'Oberoende guider' },
              { icon: FileText, text: 'Uppdateras regelbundet' },
              { icon: Wifi, text: 'Bredband • Mobil • Försäkring' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <Icon className="w-4 h-4 text-emerald-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Våra guider</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Tre områden</h2>
            <p className="text-slate-400 text-lg">Allt du behöver veta om bredband, mobilabonnemang och hemförsäkring</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guides.map((guide) => {
              const Icon = guide.icon
              return (
                <Link
                  key={guide.title}
                  href={guide.href}
                  className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">{guide.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{guide.description}</p>
                    <div className="space-y-1.5">
                      {guide.pages.map((page) => (
                        <div key={page.href} className="text-sm text-slate-500">
                          → {page.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="text-emerald-400 text-sm font-medium mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                    Läs mer <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white/[0.02] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Transparent</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Så tjänar vi pengar</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Veridoca finansieras via affiliatelänkar. Alla länkar är tydligt märkta med &ldquo;Reklamlänk&rdquo;. 
              Det kostar ingenting extra för dig – vi får provision om du tecknar ett avtal via våra länkar.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/reklam/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.10] hover:border-white/[0.15] text-white font-medium rounded-xl transition-all"
            >
              Läs mer om hur det fungerar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Viktigt att veta
          </h2>
          <div className="text-slate-400 text-base leading-relaxed max-w-3xl mx-auto space-y-3">
            <p>
              Guiderna på Veridoca.com är allmän information och ska inte ses som personlig rådgivning. 
              Priser, villkor och erbjudanden ändras över tid – kontrollera alltid aktuella uppgifter hos respektive leverantör.
            </p>
            <p className="text-sm text-slate-500 pt-4">
              <strong>Hemförsäkring:</strong> Vi ger inga råd eller rekommendationer om vilken försäkring du ska välja, 
              och vi rankar inte försäkringsbolag. För rådgivning, kontakta ett försäkringsbolag eller en oberoende försäkringsrådgivare.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
