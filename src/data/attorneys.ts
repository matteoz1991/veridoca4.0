import type { Attorney } from '@/types'

// Named attorneys have been removed — all bios and bar numbers were AI-generated and not verified.
// The editorial-note component in AttorneyReview.tsx replaces per-template reviewer cards.
export const attorneys: Attorney[] = []

export function getAttorneyBySlug(_slug: string): Attorney | undefined {
  return undefined
}
