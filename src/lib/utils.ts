import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDownloadCount(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`
  return count.toString()
}

export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    business: 'bg-blue-100 text-blue-800',
    employment: 'bg-purple-100 text-purple-800',
    'real-estate': 'bg-orange-100 text-orange-800',
    personal: 'bg-teal-100 text-teal-800',
    family: 'bg-pink-100 text-pink-800',
    'estate-planning': 'bg-indigo-100 text-indigo-800',
    financial: 'bg-emerald-100 text-emerald-800',
  }
  return colors[category] ?? 'bg-slate-100 text-slate-800'
}

export function getCategoryName(slug: string): string {
  const names: Record<string, string> = {
    business: 'Business Documents',
    employment: 'Employment Documents',
    'real-estate': 'Real Estate Documents',
    personal: 'Personal Legal Documents',
    family: 'Family Documents',
    'estate-planning': 'Estate Planning Documents',
    financial: 'Financial Documents',
  }
  return names[slug] ?? slug
}
