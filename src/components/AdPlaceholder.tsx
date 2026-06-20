'use client'

import { useEffect, useRef } from 'react'

type Props = { slot: 'leaderboard' | 'rectangle' | 'sidebar'; className?: string }

const AD_CLIENT = 'ca-pub-7329226931623109'

const sizes: Record<Props['slot'], { minHeight: string; className: string }> = {
  leaderboard: { minHeight: '90px', className: 'w-full max-w-[728px] mx-auto' },
  rectangle:   { minHeight: '280px', className: 'w-full max-w-[336px] mx-auto' },
  sidebar:     { minHeight: '250px', className: 'w-full max-w-[300px] mx-auto' },
}

export default function AdPlaceholder({ slot, className = '' }: Props) {
  const insRef = useRef<HTMLModElement>(null)
  const size = sizes[slot]

  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).adsbygoogle.push({})
    } catch {
      // adsbygoogle not loaded yet — Auto Ads will handle placement
    }
  }, [])

  return (
    <div className={`${size.className} ${className} overflow-hidden`}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: size.minHeight }}
        data-ad-client={AD_CLIENT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
