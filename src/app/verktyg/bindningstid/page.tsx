'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Share2, ArrowLeft } from 'lucide-react'

export default function BindningstidPage() {
  const [remainingMonths, setRemainingMonths] = useState(18)
  const [currentMonthlyFee, setCurrentMonthlyFee] = useState(399)
  const [exitFee, setExitFee] = useState(1000)
  const [newMonthlyFee, setNewMonthlyFee] = useState(249)

  const totalCostStay = currentMonthlyFee * remainingMonths
  const totalCostBreak = exitFee + (newMonthlyFee * remainingMonths)
  const savings = totalCostStay - totalCostBreak
  const breakEvenMonths = exitFee / (currentMonthlyFee - newMonthlyFee)
  const worthBreaking = savings > 0

  const shareUrl = () => {
    const url = new URL(window.location.href)
    url.searchParams.set('months', remainingMonths.toString())
    url.searchParams.set('current', currentMonthlyFee.toString())
    url.searchParams.set('exit', exitFee.toString())
    url.searchParams.set('new', newMonthlyFee.toString())
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
              <Zap className="w-6 h-6 text-[#FFFEF9]" />
            </div>
            <div>
              <p className="text-[14px] text-[#C95D3F] font-medium tracking-wide">VERKTYG</p>
              <h1 className="font-serif text-4xl font-semibold text-[#2C2C2C] leading-tight">
                Bindningstidskalkylator
              </h1>
            </div>
          </div>
          <p className="text-[17px] text-[#4A4A4A] leading-relaxed max-w-2xl">
            Räkna ut om det lönar sig att bryta bindningstiden och byta till ett billigare alternativ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                Månader kvar på bindningstiden
              </label>
              <input
                type="number"
                value={remainingMonths}
                onChange={(e) => setRemainingMonths(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
              />
            </div>

            <div>
              <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                Nuvarande månadskostnad (kr)
              </label>
              <input
                type="number"
                value={currentMonthlyFee}
                onChange={(e) => setCurrentMonthlyFee(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
              />
            </div>

            <div>
              <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                Avgift för att bryta bindningstiden (kr)
                <span className="text-[#8B8B8B] font-normal ml-2 block mt-1 text-[14px]">
                  Står ofta i ditt avtal eller på leverantörens webbplats
                </span>
              </label>
              <input
                type="number"
                value={exitFee}
                onChange={(e) => setExitFee(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
              />
            </div>

            <div>
              <label className="block text-[15px] text-[#2C2C2C] mb-2 font-medium">
                Nytt alternativ — månadskostnad (kr)
              </label>
              <input
                type="number"
                value={newMonthlyFee}
                onChange={(e) => setNewMonthlyFee(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-[#E5E5E5] bg-[#FFFEF9] text-[#2C2C2C] text-[17px] focus:outline-none focus:border-[#C95D3F]"
              />
            </div>
          </div>

          <div>
            <div className="bg-[#FAF9F5] border border-[#E5E5E5] p-8 sticky top-24">
              <h3 className="font-serif font-semibold text-[20px] text-[#2C2C2C] mb-6">
                Analys
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[14px] text-[#8B8B8B] mb-1">Om du stannar kvar</p>
                  <p className="font-serif font-semibold text-[24px] text-[#2C2C2C]">
                    {totalCostStay.toLocaleString('sv-SE')} kr
                  </p>
                  <p className="text-[13px] text-[#8B8B8B] mt-1">
                    {currentMonthlyFee} kr/mån × {remainingMonths} mån
                  </p>
                </div>

                <div className="border-t border-[#E5E5E5] pt-4">
                  <p className="text-[14px] text-[#8B8B8B] mb-1">Om du bryter & byter</p>
                  <p className="font-serif font-semibold text-[24px] text-[#2C2C2C]">
                    {totalCostBreak.toLocaleString('sv-SE')} kr
                  </p>
                  <div className="text-[13px] text-[#8B8B8B] mt-1 space-y-0.5">
                    <p>Brytavgift: {exitFee.toLocaleString('sv-SE')} kr</p>
                    <p>Ny kostnad: {newMonthlyFee} kr/mån × {remainingMonths} mån</p>
                  </div>
                </div>

                <div className="border-t border-[#E5E5E5] pt-4">
                  <div className={`p-4 ${worthBreaking ? 'bg-[#C95D3F]' : 'bg-[#2C2C2C]'} text-[#FFFEF9]`}>
                    {worthBreaking ? (
                      <div>
                        <p className="text-[14px] mb-1 opacity-90">Resultat: Lönsamt att bryta</p>
                        <p className="font-serif font-semibold text-[28px]">
                          Spara {savings.toLocaleString('sv-SE')} kr
                        </p>
                        {breakEvenMonths < remainingMonths && (
                          <p className="text-[13px] mt-2 opacity-90">
                            Brytavgiften tjänas in på {Math.ceil(breakEvenMonths)} månader
                          </p>
                        )}
                      </div>
                    ) : (
                      <div>
                        <p className="text-[14px] mb-1 opacity-90">Resultat: Inte lönsamt</p>
                        <p className="font-serif font-semibold text-[28px]">
                          {Math.abs(savings).toLocaleString('sv-SE')} kr dyrare
                        </p>
                        <p className="text-[13px] mt-2 opacity-90">
                          Behöver minst {Math.ceil(breakEvenMonths)} månader för att tjäna in brytavgiften
                        </p>
                      </div>
                    )}
                  </div>
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

        <div className="bg-[#FAF9F5] border-l-3 border-[#C95D3F] p-6">
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
            <strong className="text-[#2C2C2C]">Tips:</strong> Tänk på att brytavgiften kan variera beroende på hur många månader som är kvar. Vissa operatörer har en fast avgift, andra beräknar den baserat på återstående bindningstid. Läs ditt avtal noga.
          </p>
        </div>
      </div>
    </div>
  )
}
