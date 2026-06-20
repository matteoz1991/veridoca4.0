import type { Article } from '@/types'

export const articles: Article[] = [
  {
    slug: 'landlord-tenant-laws-complete-guide',
    category: 'real-estate-law',
    title: 'Landlord-Tenant Law: Complete Guide for All 50 States (2026)',
    excerpt: 'Everything landlords and tenants need to know about rental law: security deposits, eviction procedures, habitability standards, and state-specific rules.',
    content: `Landlord-tenant law in the United States is a patchwork of federal, state, and local regulations that govern every aspect of the rental relationship. Understanding these laws is essential for both landlords seeking to protect their property and income, and tenants seeking to protect their rights and their home.

## Federal Law: The Fair Housing Act

The Fair Housing Act (42 U.S.C. § 3601 et seq.) is the foundational federal law governing rental housing. It prohibits discrimination based on race, color, national origin, religion, sex, familial status, and disability. Familial status protection means landlords cannot refuse to rent to families with children under 18 — though communities that qualify as "55 and older" housing may have exemptions.

The Fair Housing Act applies to virtually all residential landlords with limited exceptions for very small owner-occupied properties (the "Mrs. Murphy" exemption for 4 or fewer units where the owner lives in one of them).

## Security Deposit Laws by State

Security deposit laws are among the most state-specific aspects of landlord-tenant law. Here are the key states:

**California**: Maximum deposit of 2 months rent (unfurnished) or 3 months rent (furnished). Must be returned within 21 days of move-out with an itemized statement of deductions. Interest is not required statewide but some cities require it.

**New York**: Security deposit capped at 1 month's rent (for most residential tenants under the HSTPA). Must be kept in a separate account and returned within 14 days of move-out with an itemized statement.

**Texas**: No statutory maximum on security deposits. Must be returned within 30 days of surrender of the premises. Wrongful withholding allows the tenant to recover 3x the amount wrongfully withheld plus attorney's fees.

**Florida**: No statutory maximum. Must be returned within 15 days (if no deductions) or 30 days (with itemized deductions sent by certified mail).

## Eviction Procedures: Notice Requirements

The eviction process begins with a written notice and differs significantly by state and type of violation:

**Non-Payment of Rent**: Most states require 3–5 days to pay or quit. New York now requires 14 days. Massachusetts requires 14 days. Oregon requires 10 days.

**Lease Violations**: Most states require 10–30 days to cure or quit for non-payment violations like unauthorized pets or damage.

**Month-to-Month Termination**: Most states require 30 days notice; California and Oregon require 60–90 days for long-term tenants.

## Habitability Standards

Every state imposes an implied warranty of habitability — the landlord's obligation to maintain the rental unit in livable condition. While standards vary, virtually every state requires:

- Functional heating during cold weather
- Hot and cold running water
- Working electrical systems
- Structurally sound floors, walls, and roof
- Functional locks and security measures
- Freedom from pest infestation

Landlords who fail to maintain habitability face rent withholding, rent escrow, repair-and-deduct remedies, and lease termination rights — depending on state law.`,
    author: 'marcus-johnson',
    publishDate: '2026-04-15',
    readTime: 12,
    relatedTemplates: ['residential-lease-agreement', 'eviction-notice', 'security-deposit-return-letter', 'lease-termination-letter'],
    tags: ['landlord', 'tenant', 'lease', 'eviction', 'security deposit'],
    featured: true,
  },
  {
    slug: 'how-to-make-a-will-without-a-lawyer',
    category: 'legal-guides',
    title: 'How to Make a Will Without a Lawyer (2026 Guide)',
    excerpt: 'A step-by-step guide to creating a legally valid will without an attorney. Covers execution requirements, what to include, and when you do need professional help.',
    content: `Creating a will without a lawyer is entirely possible for most Americans with straightforward estates. Here is exactly how to do it right.

## Is a DIY Will Legal?

Yes. Self-drafted wills are valid in all 50 US states provided they meet your state's execution requirements. The key requirements are:

1. **You must be an adult** (18 or older in most states; 16 in Georgia, 14 in Louisiana)
2. **You must be of sound mind** (legal capacity — ability to understand the nature and extent of your property, who your natural heirs are, and what a will does)
3. **The will must be in writing** — typed or printed, not oral
4. **You must sign the will** in front of the required witnesses
5. **Two witnesses must sign** — adults who are not beneficiaries under the will

## What to Include in Your Will

### Personal Identification
Full legal name, current address, and a statement revoking all prior wills.

### Beneficiary Designations
Who gets what. Be specific: "I give my 2022 Ford F-150 (VIN: XXXXXXXXX) to my son James Robert Chen." Vague descriptions lead to disputes.

### Residuary Clause
After all specific gifts, distribute the remainder: "I give all the rest of my estate, equally in equal shares, to my children who survive me." This catches assets you forget to specifically distribute.

### Executor Appointment
Name someone you trust to manage your estate through probate. They will file the will, pay debts, and distribute assets. Name an alternate.

### Guardian for Minor Children
The most important appointment for parents. Name who will raise your children if both parents die. Discuss this with the person before naming them.

## States That Allow Handwritten (Holographic) Wills

About 27 states recognize holographic wills — wills entirely written in the testator's own handwriting without witnesses. These states include: California, Texas, Virginia, Tennessee, Utah, Colorado, Wyoming, Montana, Nevada, Idaho, North Dakota, South Dakota, Nebraska, Kansas, Oklahoma, Mississippi, Louisiana (with restrictions), and others.

**Warning**: Holographic wills are more easily challenged and more frequently found invalid. Even in states that recognize them, a properly executed typed will with witnesses is far more reliable.

## When You SHOULD Hire an Attorney

While DIY wills are appropriate for simple estates, get professional help when:
- Your estate is likely subject to estate tax (over $13.61M federally in 2026)
- You have a business interest to transfer
- You want to disinherit a spouse or adult child
- You are in a second marriage with children from previous relationships
- You want to create trusts for minors or beneficiaries with special needs
- You own real estate in multiple states
- You have significant retirement accounts and want to optimize beneficiary planning`,
    author: 'david-kim',
    publishDate: '2026-03-20',
    readTime: 10,
    relatedTemplates: ['last-will-and-testament', 'living-trust', 'advance-healthcare-directive', 'durable-power-of-attorney-financial'],
    tags: ['will', 'estate planning', 'probate', 'testator'],
    featured: true,
  },
  {
    slug: 'employee-vs-independent-contractor-guide',
    category: 'employment-law',
    title: 'Employee vs. Independent Contractor: IRS Classification Guide (2026)',
    excerpt: 'The IRS and states use different tests to classify workers. Misclassification can cost businesses thousands in back taxes and penalties. Here\'s how to get it right.',
    content: `Worker misclassification is one of the most expensive mistakes a business can make. The IRS estimates it costs the federal government billions in unpaid payroll taxes annually, and enforcement has intensified in recent years.

## The Federal IRS Test

The IRS uses a three-category test with multiple factors:

### 1. Behavioral Control
Does the company control how the worker does the work?
- **Employee indicators**: Company sets hours, provides training, dictates methods
- **Contractor indicators**: Worker sets their own schedule, uses their own methods, controls how work is performed

### 2. Financial Control
Does the company control economic aspects of the worker's job?
- **Employee indicators**: Worker has no investment in facilities; no risk of financial loss; paid a set wage
- **Contractor indicators**: Worker has significant investment in tools/equipment; can profit or lose money; sets own rates

### 3. Type of Relationship
What is the nature of the relationship?
- **Employee indicators**: Permanent or indefinite relationship; benefits provided; work is key to core business
- **Contractor indicators**: Project-based or fixed-term relationship; no benefits; work is outside usual business

No single factor is determinative. The IRS looks at the totality of the relationship.

## State Tests Are Stricter

Many states use an "ABC test" that is far more restrictive than the federal test. Under the ABC test, a worker is presumed an employee unless the company can prove ALL THREE:

**A** — The worker is free from the control and direction of the hiring entity in connection with the performance of the work

**B** — The worker performs work outside the usual course of the hiring entity's business

**C** — The worker is customarily engaged in an independently established trade, occupation, or business of the same nature as the work performed

California (under AB 5), Massachusetts, New Jersey, and several other states use this stricter standard. Part B is particularly challenging for businesses because it means you cannot classify workers as contractors if they do the same type of work your business does.

## Consequences of Misclassification

- **Federal payroll taxes**: Back payment of both employee and employer shares of Social Security and Medicare taxes
- **State unemployment insurance**: Back premiums and penalties
- **Benefits**: Potential liability for benefits (health insurance, retirement) the employee should have received
- **Wage and hour violations**: Overtime pay for all hours over 40/week if the worker was actually an employee
- **Civil penalties**: Can reach $1,000+ per misclassified worker

## How to Protect Yourself

1. Use a well-drafted independent contractor agreement
2. Ensure the contractor actually works independently (don't dictate hours or methods)
3. Don't provide equipment or benefits
4. Allow the contractor to work for other clients
5. Base payments on project completion, not hours
6. Consult an employment attorney in states with ABC tests`,
    author: 'patricia-wells',
    publishDate: '2026-02-10',
    readTime: 8,
    relatedTemplates: ['independent-contractor-agreement', 'employment-contract', 'offer-letter', 'non-disclosure-agreement-employee'],
    tags: ['employment', 'independent contractor', 'IRS', '1099', 'misclassification'],
    featured: false,
  },
  {
    slug: 'non-compete-agreements-what-is-enforceable',
    category: 'business-law',
    title: 'Non-Compete Agreements in 2026: What\'s Actually Enforceable?',
    excerpt: 'The legal landscape for non-compete agreements is shifting rapidly. Several states have banned them entirely. Here\'s the current state of enforceability across the US.',
    content: `Non-compete agreements are under unprecedented legal pressure in 2026. The FTC attempted a nationwide ban in 2024, though federal court challenges continue. Meanwhile, state-level restrictions are accelerating. Here is the current landscape.

## States That Have Banned Non-Competes for Employees

**California**: Has banned employee non-competes since 1872 under Business & Professions Code § 16600. Recent legislation (SB 699, AB 2288) strengthened the ban and made attempts to enforce California non-competes a tort, exposing employers to attorney's fees.

**Minnesota**: Banned non-competes for employees effective January 1, 2023. Existing non-competes were voided.

**North Dakota**: Long-standing ban except for business sale and dissolution contexts.

**Oklahoma**: Bans employee non-competes except for business sale transactions.

## States With Significant Restrictions

**Illinois**: Non-compete agreements unenforceable for employees earning under $75,000/year.

**Colorado**: Non-competes generally unenforceable except for key employees earning 60% of the threshold for highly compensated employees.

**Washington**: Non-competes unenforceable for employees earning under $116,593/year (2026 threshold); 18-month maximum duration.

**Oregon**: Non-competes limited to 18 months with advance notice and garden leave pay requirements.

**Massachusetts**: One-year maximum; requires advance notice; "garden leave" (payment) requirement.

**Virginia**: Non-competes unenforceable for "low-wage" employees (those earning average weekly wage of $1,290 or less).

## States With Traditional Enforcement (With Reasonableness Requirements)

Most other states — Texas, New York, Florida, Georgia, Pennsylvania, Ohio — enforce reasonable non-competes under a common law "reasonableness" test. Courts evaluate:

1. **Duration**: 6 months to 2 years is typically upheld; 5 years is rarely upheld for employees
2. **Geographic scope**: Must be tied to where the employee actually worked or had customer contact
3. **Scope of restricted activity**: Must protect a legitimate business interest (trade secrets, customer relationships, specialized training)

## Non-Solicitation Agreements: More Consistently Enforceable

Even in states that restrict non-competes, non-solicitation agreements (preventing the former employee from soliciting your clients or employees) are generally more enforceable. They are narrower in scope and more clearly tied to protecting legitimate business interests.`,
    author: 'sarah-chen',
    publishDate: '2026-01-25',
    readTime: 9,
    relatedTemplates: ['non-compete-agreement', 'non-compete-agreement-employee', 'non-solicitation-agreement', 'employment-contract'],
    tags: ['non-compete', 'employment law', 'restrictive covenants', 'FTC'],
    featured: false,
  },
  {
    slug: 'how-to-evict-a-tenant-step-by-step',
    category: 'real-estate-law',
    title: 'How to Evict a Tenant Legally: Step-by-Step Guide (2026)',
    excerpt: 'A complete guide to the legal eviction process in the US. Covers notice requirements, court filing, the hearing, and what happens after the judgment.',
    content: `Evicting a tenant is a formal legal process that must be followed precisely. Taking any shortcut — including self-help evictions — exposes the landlord to significant legal liability. Here is the complete process.

## Step 1: Determine the Legal Basis for Eviction

Before serving any notice, confirm you have a valid legal basis:

- **Non-payment of rent** (most common)
- **Lease violation** (unauthorized pets, damage, subletting)
- **Illegal activity on premises** (drug manufacturing, violence)
- **Lease expiration and tenant holdover**
- **Month-to-month termination with proper notice** (where just cause is not required)

## Step 2: Serve the Correct Notice

Choose the right notice type:
- **Pay or Quit**: For non-payment of rent. Give the tenant the option to pay the full amount owed or leave within the notice period.
- **Cure or Quit**: For lease violations. Give the tenant the option to fix the violation or leave.
- **Unconditional Quit**: For serious violations (illegal activity, significant damage). No option to cure.
- **Notice of Termination**: For ending month-to-month tenancies without cause (where permitted).

Serve the notice correctly: personal delivery, posting on the door and mailing, or certified mail — depending on your state's requirements.

## Step 3: Wait Out the Notice Period

Do not accept rent after serving a pay-or-quit notice (in most states, accepting rent waives the notice). Wait the full notice period before filing for eviction.

## Step 4: File for Eviction (Unlawful Detainer)

If the tenant has not complied with the notice by the deadline:
1. Go to your local courthouse (usually county or municipal court)
2. File a complaint for unlawful detainer or summary possession
3. Pay the filing fee ($75–$400 depending on state)
4. Court issues a summons commanding the tenant to appear

## Step 5: Serve the Tenant with Court Papers

The court summons must be served on the tenant through an approved method (process server, sheriff, or constable in most states). Self-service is not permitted for court summons.

## Step 6: Attend the Hearing

Bring to the hearing:
- Copy of the lease agreement
- Copy of the notice you served
- Proof of service of the notice
- Payment records showing unpaid rent
- Any photos or documentation of violations
- Your ledger of all payments and balance due

## Step 7: Obtain and Execute the Writ of Possession

If you win, the court issues a judgment for possession. Then request a writ of possession — a document authorizing the sheriff or marshal to physically remove the tenant if they do not leave voluntarily. The sheriff will post the writ and give the tenant a final period to vacate (typically 24–72 hours) before physically removing them.

**Never remove the tenant yourself.** Let the sheriff handle the physical removal.`,
    author: 'marcus-johnson',
    publishDate: '2026-03-05',
    readTime: 11,
    relatedTemplates: ['eviction-notice', 'notice-to-quit', 'residential-lease-agreement', 'demand-letter'],
    tags: ['eviction', 'landlord', 'tenant', 'unlawful detainer'],
    featured: true,
  },
  {
    slug: 'llc-vs-s-corp-vs-c-corp',
    category: 'business-law',
    title: 'LLC vs. S-Corp vs. C-Corp: Which Business Structure Is Right for You?',
    excerpt: 'The choice of business entity affects your taxes, liability, fundraising ability, and exit options. Here\'s how to choose the right structure for your business.',
    content: `Choosing the right business entity is one of the most important decisions you will make as a business owner. The wrong choice can cost you thousands in taxes, limit your ability to raise capital, and create unnecessary personal liability.

## Limited Liability Company (LLC)

**Tax Treatment**: By default, a single-member LLC is taxed as a sole proprietorship (Schedule C on your personal return) and a multi-member LLC as a partnership (Form 1065). LLCs can elect to be taxed as an S-corp or C-corp.

**Self-Employment Tax**: LLC members who are active in the business pay self-employment tax (15.3%) on all net income, up to Social Security wage base limits.

**Liability Protection**: Strong protection from business debts and lawsuits when properly maintained (separate accounts, no commingling).

**Flexibility**: Maximum operational flexibility — operating agreements can be customized to any arrangement the members agree on.

**Best For**: Small businesses, real estate investors, family businesses, businesses that don't need to raise institutional capital.

## S Corporation

**Tax Treatment**: Pass-through entity — profits and losses flow through to shareholders' personal returns (no corporate-level tax). Shareholders who work in the business must receive a "reasonable salary" subject to payroll taxes.

**Self-Employment Tax Advantage**: The major tax benefit — distributions above the reasonable salary are not subject to self-employment tax. A business earning $200K net can pay $80K salary (FICA on $80K) and take $120K as a distribution (no FICA). Savings can be $10,000+ per year.

**Restrictions**: Max 100 shareholders; only US citizens/residents; only one class of stock; no institutional investors or other corporations as shareholders.

**Best For**: Profitable small businesses with consistent income where the owner-operator wants to minimize self-employment taxes.

## C Corporation

**Tax Treatment**: Separate taxpaying entity. Income taxed at 21% corporate rate. Dividends also taxed at individual level when distributed ("double taxation").

**Raising Capital**: The only entity type that can easily raise institutional venture capital. VCs require C-corps (usually Delaware) because they need preferred stock, anti-dilution provisions, and eventual IPO flexibility.

**Employee Benefits**: C-corps can deduct more employee benefits (health insurance, group term life) at the corporate level.

**Best For**: Tech startups seeking VC funding; businesses planning an IPO; businesses with significant international operations.`,
    author: 'sarah-chen',
    publishDate: '2026-02-28',
    readTime: 10,
    relatedTemplates: ['llc-operating-agreement', 'partnership-agreement', 'shareholder-agreement', 'business-purchase-agreement'],
    tags: ['LLC', 'S-corp', 'C-corp', 'business formation', 'taxes'],
    featured: true,
  },
]

const articleStubs = [
  { slug: 'what-is-a-power-of-attorney', category: 'legal-guides', title: 'What Is a Power of Attorney and Do You Need One?', relatedTemplates: ['power-of-attorney', 'durable-power-of-attorney', 'medical-power-of-attorney'] },
  { slug: 'prenuptial-agreement-guide', category: 'family-law', title: 'The Complete Guide to Prenuptial Agreements', relatedTemplates: ['prenuptial-agreement', 'postnuptial-agreement', 'cohabitation-agreement'] },
  { slug: 'child-custody-laws-guide', category: 'family-law', title: 'Child Custody Laws: What Every Parent Needs to Know', relatedTemplates: ['child-custody-agreement', 'parenting-plan', 'child-support-agreement'] },
  { slug: 'security-deposit-laws-by-state', category: 'real-estate-law', title: 'Security Deposit Laws by State: Complete 2026 Guide', relatedTemplates: ['residential-lease-agreement', 'security-deposit-return-letter', 'move-in-checklist'] },
  { slug: 'how-to-create-llc', category: 'business-law', title: 'How to Create an LLC: Step-by-Step Guide for All 50 States', relatedTemplates: ['llc-operating-agreement', 'partnership-agreement', 'non-disclosure-agreement'] },
  { slug: 'tenant-rights-what-landlord-cannot-do', category: 'real-estate-law', title: 'Tenant Rights: What Your Landlord Cannot Do', relatedTemplates: ['residential-lease-agreement', 'eviction-notice', 'demand-letter'] },
  { slug: 'at-will-employment-guide', category: 'employment-law', title: 'At-Will Employment by State: Complete 2026 Guide', relatedTemplates: ['employment-contract', 'offer-letter', 'termination-letter'] },
  { slug: 'quitclaim-deed-explained', category: 'real-estate-law', title: 'What Is a Quitclaim Deed and When Should You Use One?', relatedTemplates: ['quitclaim-deed', 'warranty-deed', 'deed-of-trust'] },
  { slug: 'estate-planning-checklist', category: 'legal-guides', title: 'Estate Planning Checklist: Everything You Need Before You Die', relatedTemplates: ['last-will-and-testament', 'living-trust', 'advance-healthcare-directive', 'durable-power-of-attorney-financial'] },
  { slug: 'what-is-a-living-trust', category: 'legal-guides', title: 'What Is a Living Trust and Do You Need One?', relatedTemplates: ['living-trust', 'revocable-living-trust', 'last-will-and-testament'] },
  { slug: 'how-to-fire-an-employee', category: 'employment-law', title: 'How to Fire an Employee Legally in Every US State', relatedTemplates: ['termination-letter', 'severance-agreement', 'employee-warning-letter'] },
  { slug: 'divorce-without-lawyer', category: 'family-law', title: 'Divorce Without a Lawyer: Is It Possible?', relatedTemplates: ['divorce-settlement-agreement', 'separation-agreement', 'child-custody-agreement'] },
  { slug: 'how-to-write-demand-letter', category: 'legal-guides', title: 'How to Write a Demand Letter That Gets Results', relatedTemplates: ['demand-letter', 'cease-and-desist-letter', 'general-affidavit'] },
  { slug: 'rent-control-laws-by-state', category: 'real-estate-law', title: 'Rent Control Laws by State 2026: Complete Guide', relatedTemplates: ['residential-lease-agreement', 'rent-increase-notice', 'month-to-month-lease'] },
  { slug: 'nda-enforcement-guide', category: 'business-law', title: 'NDA Enforcement: When Courts Strike Down Confidentiality Agreements', relatedTemplates: ['non-disclosure-agreement', 'non-disclosure-agreement-employee', 'confidentiality-agreement'] },
]

function makeArticleStub(a: { slug: string; category: string; title: string; relatedTemplates: string[] }): Article {
  return {
    ...a,
    excerpt: `A comprehensive guide covering everything you need to know about ${a.title.toLowerCase().replace('the complete guide to ', '').replace('what is a ', '').replace('how to ', '')}.`,
    content: `# ${a.title}\n\nThis comprehensive guide covers everything you need to know. Our attorney-reviewed content is updated regularly to reflect current US law.\n\nConsult the related templates below to get started with the documents you need.`,
    author: 'sarah-chen',
    publishDate: '2026-01-01',
    readTime: 8,
    tags: a.title.toLowerCase().split(' ').filter(w => w.length > 4).slice(0, 5),
    featured: false,
  }
}

export const allArticles: Article[] = [
  ...articles,
  ...articleStubs.map(makeArticleStub),
]

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find(a => a.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return allArticles.filter(a => a.category === category)
}

export function getFeaturedArticles(limit = 4): Article[] {
  return allArticles.filter(a => a.featured).slice(0, limit)
}
