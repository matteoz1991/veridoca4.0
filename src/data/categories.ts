import type { Category } from '@/types'

export const categories: Category[] = [
  {
    slug: 'business',
    name: 'Business Documents',
    description: 'Contracts, agreements, and forms to protect your business — from NDAs and operating agreements to vendor contracts and IP assignments.',
    icon: 'Building2',
    color: 'blue',
    templateCount: 20,
    topTemplates: ['non-disclosure-agreement', 'independent-contractor-agreement', 'llc-operating-agreement', 'partnership-agreement', 'service-agreement'],
  },
  {
    slug: 'employment',
    name: 'Employment Documents',
    description: 'HR forms, offer letters, employment contracts, and termination paperwork to keep your hiring and firing legally compliant.',
    icon: 'Users',
    color: 'purple',
    templateCount: 20,
    topTemplates: ['offer-letter', 'employment-contract', 'termination-letter', 'severance-agreement', 'employee-handbook'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate Documents',
    description: 'Lease agreements, eviction notices, deeds, and property purchase contracts for landlords, tenants, and property owners.',
    icon: 'Home',
    color: 'orange',
    templateCount: 20,
    topTemplates: ['residential-lease-agreement', 'month-to-month-lease', 'eviction-notice', 'quitclaim-deed', 'real-estate-purchase-agreement'],
  },
  {
    slug: 'personal',
    name: 'Personal Legal Documents',
    description: 'Power of attorney, affidavits, demand letters, and authorization forms for individuals handling personal legal matters.',
    icon: 'User',
    color: 'teal',
    templateCount: 15,
    topTemplates: ['power-of-attorney', 'durable-power-of-attorney', 'general-affidavit', 'demand-letter', 'vehicle-bill-of-sale'],
  },
  {
    slug: 'family',
    name: 'Family Documents',
    description: 'Child custody, divorce, parenting plans, prenuptial agreements, and guardianship forms for family legal matters.',
    icon: 'Heart',
    color: 'pink',
    templateCount: 15,
    topTemplates: ['child-custody-agreement', 'parenting-plan', 'divorce-settlement-agreement', 'prenuptial-agreement', 'child-support-agreement'],
  },
  {
    slug: 'estate-planning',
    name: 'Estate Planning Documents',
    description: 'Wills, trusts, healthcare directives, and powers of attorney to protect your assets and honor your wishes after death or incapacity.',
    icon: 'FileCheck',
    color: 'indigo',
    templateCount: 15,
    topTemplates: ['last-will-and-testament', 'living-trust', 'living-will', 'advance-healthcare-directive', 'small-estate-affidavit'],
  },
  {
    slug: 'financial',
    name: 'Financial Documents',
    description: 'Promissory notes, loan agreements, debt settlement letters, and payment plans to formalize financial arrangements.',
    icon: 'DollarSign',
    color: 'emerald',
    templateCount: 15,
    topTemplates: ['promissory-note', 'personal-loan-agreement', 'debt-settlement-agreement', 'payment-plan-agreement', 'business-loan-agreement'],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}
