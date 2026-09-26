'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calculator, Share2, ArrowLeft } from 'lucide-react'
import AffiliateLink from '@/components/AffiliateLink'

const dataNeeds = [
  { activity: 'Sociala medier (scrollning, stories)', gb: 2 },
  { activity: 'Musikstreaming (Spotify, Apple Music)', gb: 1 },
  { activity: 'Videostreaming (YouTube, TikTok)', gb: 10 },
  { activity: 'Videomöten (Zoom, Teams)', gb: 3 },
  { activity: 'Kartor & navigation', gb: 0.5 },
  { activity: 'E-post & webbsurfning', gb: 1 },
]

export default function MobilkalkylatorPage() {
  const [currentCost, setCurrentCost] = useState(349)
  const [targetCost, setTargetCost] = useState(199)
  const [lines, setLines] = useState(1)
  const [selectedActivities, setSelectedActivities] = useState<number[]>([])
  const [showEstimator, setShowEstimator] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('current')) setCurrentCost(parseInt(params.get('current') || '349'))
    if (params.get('target')) setTargetCost(parseInt(params.get('target') || '199'))
    if (params.get('lines')) setLines(parseInt(params.get('lines') || '1'))
  }, [])

  const monthlySavings = (currentCost - targetCost) * lines
  const yearlySavings = monthlySavings * 12
  const twoYearSavings = monthlySavings * 24

  const estimatedGbNeeded = selectedActivities.reduce((sum, idx) => sum + dataNeeds[idx].gb, 0)

  const shareUrl = () => {
    const url = new URL(window.location.href)
    url.searchParams.set('current', currentCost.toString())
    url.searchParams.set('target', targetCost.toString())
    url.searchParams.set('lines', lines.toString())
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
              <Calculator className="w-6 h-6 text-[#FFFEF9]" />
            </div>
            <div>
              <p className="text-[14px] text-[#C95D3F] font-medium tracking-wide">
                VERKTYG
              </p>
              <h1 className="font-serif text-4xl font-semibold text-[#2C2C2C] leading-tight">
                Mobilkalkylator
              </h1>
            </div>
          </div>
          <p className="text-[17px] text-[#4A4A4A] leading-relaxed max-w-2xl">
            Räkna ut hur mycket du kan spara per år genom att byta mobilabonnemang. Fyll i dina egna siffror.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                Betalar idag per månad (kr)
                <span className="text-[#8B8B8B] font-normal ml-2">— exempel: 349 kr</span>
              </label>
              <input
                type="number"
                value={currentCost}
                onChange={(e) => setCurrentCost(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
              />
            </div>

            <div>
              <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                Alternativpris per månad (kr)
                <span className="text-[#8B8B8B] font-normal ml-2">— exempel: 199 kr</span>
              </label>
              <input
                type="number"
                value={targetCost}
                onChange={(e) => setTargetCost(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
              />
            </div>

            <div>
              <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                Antal abonnemang/kort
              </label>
              <input
                type="number"
                value={lines}
                onChange={(e) => setLines(parseInt(e.target.value) || 1)}
                min="1"
                className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
              />
            </div>

            <button
              onClick={() => setShowEstimator(!showEstimator)}
              className="text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity"
            >
              {showEstimator ? 'Dölj' : 'Visa'} databehovsuppskattning
            </button>

            {showEstimator && (
              <div className="bg-[#FAF9F5] p-6 border border-[#E5E5E5]">
                <h3 className="font-serif font-semibold text-[18px] text-[#2C2C2C] mb-4">
                  Vad gör du på mobilen?
                </h3>
                <div className="space-y-3 mb-4">
                  {dataNeeds.map((item, idx) => (
                    <label key={idx} className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedActivities.includes(idx)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedActivities([...selectedActivities, idx])
                          } else {
                            setSelectedActivities(selectedActivities.filter(i => i !== idx))
                          }
                        }}
                        className="mt-1"
                      />
                      <div>
                        <span className="text-[15px] text-[#2C2C2C]">{item.activity}</span>
                        <span className="text-[14px] text-[#8B8B8B] ml-2">≈{item.gb} GB/mån</span>
                      </div>
                    </label>
                  ))}
                </div>
                {estimatedGbNeeded > 0 && (
                  <p className="text-[15px] text-[#2C2C2C] bg-[#FFFEF9] border-l-2 border-[#C95D3F] p-3">
                    <strong>Uppskattat behov:</strong> ca {estimatedGbNeeded} GB/mån
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <div className="bg-[#FAF9F5] border border-[#E5E5E5] p-8 sticky top-24">
              <h3 className="font-serif font-semibold text-[20px] text-[#2C2C2C] mb-6">
                Din besparing
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[14px] text-[#8B8B8B] mb-1">Per månad</p>
                  <p className="font-serif font-semibold text-[32px] text-[#2C2C2C]">
                    {monthlySavings.toLocaleString('sv-SE')} kr
                  </p>
                </div>

                <div className="border-t border-[#E5E5E5] pt-4">
                  <p className="text-[14px] text-[#8B8B8B] mb-1">Per år</p>
                  <p className="font-serif font-semibold text-[28px] text-[#C95D3F]">
                    {yearlySavings.toLocaleString('sv-SE')} kr
                  </p>
                </div>

                <div className="border-t border-[#E5E5E5] pt-4">
                  <p className="text-[14px] text-[#8B8B8B] mb-1">Över 2 år</p>
                  <p className="font-serif font-semibold text-[24px] text-[#2C2C2C]">
                    {twoYearSavings.toLocaleString('sv-SE')} kr
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
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed mb-4">
            <strong className="text-[#2C2C2C]">Observera:</strong> Detta är en kalkylator baserad på de värden du fyller i. Vi påstår inte att du kan spara en specifik summa — det beror helt på vilka priser du jämför och vilka operatörer du väljer.
          </p>
        </div>

        <div className="border-t border-[#E5E5E5] pt-12">
          <h3 className="font-serif font-semibold text-[24px] text-[#2C2C2C] mb-6">
            Nästa steg
          </h3>
          <div className="space-y-4">
            <Link href="/mobilabonnemang/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
              Läs mobilabonnemangsguiden →
            </Link>
            <Link href="/mobilabonnemang/billigt/" className="block text-[15px] text-[#C95D3F] border-b border-[#C95D3F] hover:opacity-70 transition-opacity">
              Checklista: Hitta billigt mobilabonnemang →
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-[#E5E5E5]">
            <h4 className="text-[15px] text-[#2C2C2C] font-medium mb-4">Exempel på operatörer:</h4>
            <div className="flex flex-wrap gap-4">
              <AffiliateLink slug="hallon">Hallon</AffiliateLink>
              <AffiliateLink slug="comviq">Comviq</AffiliateLink>
              <AffiliateLink slug="vimla">Vimla</AffiliateLink>
              <AffiliateLink slug="telia">Telia</AffiliateLink>
              <AffiliateLink slug="tele2">Tele2</AffiliateLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
