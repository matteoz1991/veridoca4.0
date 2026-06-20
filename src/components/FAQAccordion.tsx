'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type FAQ = {
  question: string
  answer: string
}

type Props = {
  faqs: FAQ[]
  className?: string
}

export default function FAQAccordion({ faqs, className }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={cn('space-y-2', className)}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.04] hover:bg-white/[0.06] transition-colors"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-white pr-4 text-sm sm:text-base">
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200',
                openIndex === i && 'rotate-180 text-emerald-400'
              )}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4">
              <div className="h-px bg-white/[0.06] mb-4" />
              <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
