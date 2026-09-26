'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TrendingDown, Share2, ArrowLeft } from 'lucide-react'
import AffiliateLink from '@/components/AffiliateLink'

export default function BredbandskalkylatorPage() {
  const [currentPrice, setCurrentPrice] = useState(399)
  const [newPrice, setNewPrice] = useState(299)
  const [campaignPrice, setCampaignPrice] = useState(199)
  const [campaignMonths, setCampaignMonths] = useState(12)
  const [setupFee, setSetupFee] = useState(0)
  const [bindingMonths, setBindingMonths] = useState(24)
  const [period, setPeriod] = useState<12 | 24>(24)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('current')) setCurrentPrice(parseInt(params.get('current') || '399'))
    if (params.get('new')) setNewPrice(parseInt(params.get('new') || '299'))
  }, [])

  const totalCostCurrent = currentPrice * period
  const totalCostNew = setupFee + (campaignPrice * campaignMonths) + (newPrice * (period - campaignMonths))
  const totalSavings = totalCostCurrent - totalCostNew
  const monthlySavings = totalSavings / period

  const shareUrl = () => {
    const url = new URL(window.location.href)
    url.searchParams.set('current', currentPrice.toString())
    url.searchParams.set('new', newPrice.toString())
    navigator.clipboard.writeText(url.toString())
    alert('Länk kopierad till urklipp!')
  }

  return (
    <div className="bg-[#FFFEF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Link href="/verktyg/" className="inline-flex items-center gap-2 text-[15px] text-[#8B8B8B] hover:text-[#C95D3F] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Tillbaka till verktyg
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#C95D3F] flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-[#FFFEF9]" />
            </div>
            <div>
              <p className="text-[14px] text-[#C95D3F] font-medium tracking-wide">VERKTYG</p>
              <h1 className="font-serif text-4xl font-semibold text-[#2C2C2C] leading-tight">
                Bredbandskalkylator
              </h1>
            </div>
          </div>
          <p className="text-[17px] text-[#4A4A4A] leading-relaxed max-w-2xl">
            Se din verkliga kostnad över 12–24 månader. Inkluderar kampanjpriser, uppläggningsavgift och bindningstid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                Nuvarande pris per månad (kr)
              </label>
              <input
                type="number"
                value={currentPrice}
                onChange={(e) => setCurrentPrice(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
              />
            </div>

            <div className="border-t border-[#E5E5E5] pt-6">
              <h3 className="font-serif font-semibold text-[18px] text-[#2C2C2C] mb-4">
                Nytt alternativ
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                    Kampanjpris (kr/mån)
                    <span className="text-[#8B8B8B] font-normal ml-2">— t.ex. första året</span>
                  </label>
                  <input
                    type="number"
                    value={campaignPrice}
                    onChange={(e) => setCampaignPrice(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
                  />
                </div>

                <div>
                  <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                    Kampanjperiod (månader)
                  </label>
                  <input
                    type="number"
                    value={campaignMonths}
                    onChange={(e) => setCampaignMonths(Math.min(parseInt(e.target.value) || 0, period))}
                    max={period}
                    className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
                  />
                </div>

                <div>
                  <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                    Ordinarie pris efter kampanj (kr/mån)
                  </label>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
                  />
                </div>

                <div>
                  <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                    Uppläggningsavgift / startavgift (kr)
                  </label>
                  <input
                    type="number"
                    value={setupFee}
                    onChange={(e) => setSetupFee(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
                  />
                </div>

                <div>
                  <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                    Jämför över period
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setPeriod(12)}
                      className={`flex-1 px-4 py-2 border text-[15px] font-medium transition-colors ${
                        period === 12
                          ? 'border-[#C95D3F] bg-[#C95D3F] text-[#FFFEF9]'
                          : 'border-[#E5E5E5] text-[#2C2C2C] hover:border-[#C95D3F]'
                      }`}
                    >
                      12 mån
                    </button>
                    <button
                      onClick={() => setPeriod(24)}
                      className={`flex-1 px-4 py-2 border text-[15px] font-medium transition-colors ${
                        period === 24
                          ? 'border-[#C95D3F] bg-[#C95D3F] text-[#FFFEF9]'
                          : 'border-[#E5E5E5] text-[#2C2C2C] hover:border-[#C95D3F]'
                      }`}
                    >
                      24 mån
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#FAF9F5] border border-[#E5E5E5] p-8 sticky top-24">
              <h3 className="font-serif font-semibold text-[20px] text-[#2C2C2C] mb-6">
                Totalkostnad över {period} månader
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[14px] text-[#8B8B8B] mb-1">Nuvarande</p>
                  <p className="font-serif font-semibold text-[28px] text-[#2C2C2C]">
                    {totalCostCurrent.toLocaleString('sv-SE')} kr
                  </p>
                </div>

                <div className="border-t border-[#E5E5E5] pt-4">
                  <p className="text-[14px] text-[#8B8B8B] mb-1">Nytt alternativ</p>
                  <p className="font-serif font-semibold text-[28px] text-[#2C2C2C] mb-2">
                    {totalCostNew.toLocaleString('sv-SE')} kr
                  </p>
                  <div className="text-[13px] text-[#8B8B8B] space-y-1">
                    <p>Uppläggning: {setupFee} kr</p>
                    <p>Kampanj ({campaignMonths} mån): {(campaignPrice * campaignMonths).toLocaleString('sv-SE')} kr</p>
                    <p>Ordinarie ({period - campaignMonths} mån): {(newPrice * (period - campaignMonths)).toLocaleString('sv-SE')} kr</p>
                  </div>
                </div>

                <div className="border-t border-[#E5E5E5] pt-4">
                  <p className="text-[14px] text-[#8B8B8B] mb-1">
                    {totalSavings >= 0 ? 'Besparing' : 'Merkostnad'}
                  </p>
                  <p className={`font-serif font-semibold text-[32px] ${totalSavings >= 0 ? 'text-[#C95D3F]' : 'text-[#2C2C2C]'}`}>
                    {Math.abs(totalSavings).toLocaleString('sv-SE')} kr
                  </p>
                  <p className="text-[14px] text-[#8B8B8B] mt-2">
                    ≈ {Math.round(Math.abs(monthlySavings))} kr/mån i snitt
                  </p>
                </div>
              </div>

              <button
                onClick={shareUrl}
                className="w-full mt-6 px-4 py-2 border border-[#E5E5E5] text-[#2C2C2C] text-[15px] font-medium hover:border-[#C95D3F] hover:text-[#C95D3F] transition-colors flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Dela beräkning
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#FAF9F5] border-l-3 border-[#C95D3F] p-6 mb-8">
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
            <strong className="text-[#2C2C2C]">Varför räknar vi totalkostnad?</strong> Många kampanjerbjudanden ser bra ut de första månaderna, men blir dyrare när kampanjpriset tar slut. Här ser du vad det faktiskt kostar över hela perioden.
          </p>
        </div>

        <div className="border-t border-[#E5E5E5] pt-12">
          <h3 className="font-serif font-semibold text-[24px] text-[#2C2C2C] mb-6">
            Nästa steg
          </h3>
          <div className="space-y-4 mb-8">
            <Link href="/bredband/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
              Läs bredbandguiden →
            </Link>
            <Link href="/bredband/byta-leverantor/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
              Hur man byter bredbandsleverantör →
            </Link>
          </div>

          <div className="pt-8 border-t border-[#E5E5E5]">
            <h4 className="text-[15px] text-[#2C2C2C] font-medium mb-4">Exempel på leverantörer:</h4>
            <div className="flex flex-wrap gap-4">
              <AffiliateLink slug="bahnhof">Bahnhof</AffiliateLink>
              <AffiliateLink slug="bredbandsbolaget">Bredbandsbolaget</AffiliateLink>
              <AffiliateLink slug="telia">Telia</AffiliateLink>
              <AffiliateLink slug="tele2">Tele2</AffiliateLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
