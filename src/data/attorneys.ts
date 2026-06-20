import type { Attorney } from '@/types'

export const attorneys: Attorney[] = [
  {
    slug: 'sarah-chen',
    name: 'Sarah Chen',
    credentials: 'J.D.',
    barNumbers: 'California Bar #298471 | New York Bar #5674321',
    specialization: 'Business & Contract Law',
    yearsExperience: 12,
    lawSchool: 'UCLA School of Law',
    bio: 'Sarah Chen is a business and contract attorney with 12 years of experience advising startups, SMBs, and Fortune 500 companies on commercial agreements, NDAs, and intellectual property matters. She has reviewed thousands of business contracts and brings practical, plain-English guidance to every document on Veridoca.',
    photoInitials: 'SC',
  },
  {
    slug: 'marcus-johnson',
    name: 'Marcus Johnson',
    credentials: 'J.D., LL.M.',
    barNumbers: 'Texas Bar #24098765 | Federal Bar',
    specialization: 'Real Estate & Property Law',
    yearsExperience: 18,
    lawSchool: 'University of Texas School of Law',
    bio: 'Marcus Johnson is a real estate attorney and former title company counsel with 18 years of experience in residential and commercial property law across multiple states. His practical knowledge of landlord-tenant disputes, deed transfers, and purchase agreements makes him the definitive voice on Veridoca\'s real estate content.',
    photoInitials: 'MJ',
  },
  {
    slug: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    credentials: 'J.D.',
    barNumbers: 'Florida Bar #12345678 | Georgia Bar #876543',
    specialization: 'Family Law & Domestic Relations',
    yearsExperience: 14,
    lawSchool: 'University of Florida Levin College of Law',
    bio: 'Elena Rodriguez focuses on family law, including divorce, child custody, and domestic relations. With 14 years representing both petitioners and respondents in family court, she understands the emotional and legal stakes of every family document. Elena ensures Veridoca\'s family law templates reflect current state standards across all jurisdictions.',
    photoInitials: 'ER',
  },
  {
    slug: 'david-kim',
    name: 'David Kim',
    credentials: 'J.D., CFP',
    barNumbers: 'New York Bar #4523109 | New Jersey Bar #234567',
    specialization: 'Estate Planning & Trusts',
    yearsExperience: 16,
    lawSchool: 'Fordham University School of Law',
    bio: 'David Kim is a dual-credentialed estate planning attorney and Certified Financial Planner with 16 years of experience drafting wills, trusts, healthcare directives, and comprehensive estate plans. His integrated approach to legal and financial planning gives Veridoca users unparalleled guidance on protecting their assets and legacy.',
    photoInitials: 'DK',
  },
  {
    slug: 'patricia-wells',
    name: 'Patricia Wells',
    credentials: 'J.D.',
    barNumbers: 'Illinois Bar #6301234 | Wisconsin Bar #87654',
    specialization: 'Employment & Labor Law',
    yearsExperience: 20,
    lawSchool: 'Northwestern Pritzker School of Law',
    bio: 'Patricia Wells is a seasoned employment and labor law attorney with 20 years advising employers and employees on workplace legal matters. She has drafted thousands of employment contracts, HR policies, and termination documents, and has deep expertise in state-by-state employment law variations that directly affect the documents on Veridoca.',
    photoInitials: 'PW',
  },
  {
    slug: 'james-okafor',
    name: 'James Okafor',
    credentials: 'J.D.',
    barNumbers: 'California Bar #345678 | Nevada Bar #78901',
    specialization: 'Financial & Debt Law',
    yearsExperience: 11,
    lawSchool: 'UC Berkeley School of Law',
    bio: 'James Okafor specializes in financial law, consumer debt, and commercial lending, with 11 years representing both creditors and debtors. His practical knowledge of promissory notes, loan agreements, and debt collection law ensures Veridoca\'s financial documents are legally sound and compliant with federal and state regulations.',
    photoInitials: 'JO',
  },
]

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return attorneys.find(a => a.slug === slug)
}
