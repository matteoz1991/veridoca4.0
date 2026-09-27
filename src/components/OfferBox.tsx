import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import type { AffiliatePartner } from '@/config/affiliates'

interface OfferBoxProps {
  partner: AffiliatePartner
  title: string
  description: string
  ctaText?: string
}

export default function OfferBox({ 
  partner, 
  title, 
  description, 
  ctaText = 'Besök hemsidan'
}: OfferBoxProps) {
  if (!partner.active || !partner.trackingUrl || !partner.goPath) {
    return null
  }

  return (
    <div className="my-8 border-2 border-[#E5E5E5] bg-white rounded-lg p-6 shadow-sm">
      {partner.logo && (
        <div className="mb-5">
          <div className="relative inline-block" style={{ 
            width: `${Math.min(partner.logo.width, 180)}px`,
            height: `${Math.round((Math.min(partner.logo.width, 180) / partner.logo.width) * partner.logo.height)}px`
          }}>
            <Image
              src={partner.logo.path}
              alt={partner.logo.alt}
              width={partner.logo.width}
              height={partner.logo.height}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
      
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-1">
          <h3 className="text-[18px] font-semibold text-[#2C2C2C] mb-2">
            {title}
          </h3>
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <a
          href={partner.goPath}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="affiliate-cta-button inline-flex items-center gap-2 px-5 py-3 bg-[#C95D3F] text-[#FFFEF9] hover:bg-[#2C2C2C] transition-colors font-medium text-[15px] rounded"
        >
          {ctaText}
          <ExternalLink className="w-4 h-4" />
        </a>
        <span className="text-[12px] text-[#8B8B8B] font-medium uppercase tracking-wide">
          Reklamlänk
        </span>
      </div>
    </div>
  )
}
