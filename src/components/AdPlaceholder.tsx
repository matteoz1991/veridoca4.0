type Props = { slot: 'leaderboard' | 'rectangle' | 'sidebar'; className?: string }

const sizes: Record<Props['slot'], { label: string; className: string }> = {
  leaderboard: { label: '728×90', className: 'w-full max-w-[728px] h-[90px] mx-auto' },
  rectangle: { label: '336×280', className: 'w-full max-w-[336px] h-[280px] mx-auto' },
  sidebar: { label: '300×250', className: 'w-full max-w-[300px] h-[250px] mx-auto' },
}

export default function AdPlaceholder({ slot, className = '' }: Props) {
  const size = sizes[slot]
  return (
    <div className={`${size.className} ${className} bg-white/[0.03] border border-dashed border-white/[0.10] rounded-xl flex items-center justify-center text-slate-600 text-xs`}>
      Advertisement {size.label}
    </div>
  )
}
