import type { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import AdPlaceholder from '@/components/AdPlaceholder'

export const metadata: Metadata = {
  title: 'Legal Document FAQ — Free Answers to Common Legal Questions',
  description: 'Answers to the most common questions about legal documents, templates, wills, leases, powers of attorney, and more. Updated 2026.',
}

const faqSections = [
  {
    title: 'General Questions',
    faqs: [
      { question: 'Are Veridoca templates really free?', answer: 'Yes. All templates are available for free download in PDF and Word format with no registration, email, or payment required. We are ad-supported.' },
      { question: 'Do I need a lawyer to use these templates?', answer: 'Not for routine matters with clear terms and cooperating parties. For complex transactions, significant assets, or contested situations, we recommend consulting a licensed attorney in your state.' },
      { question: 'Who writes the content on Veridoca?', answer: 'Content is written by the Veridoca editorial team and researched from primary sources — state statutes, federal law, and court decisions. We cite our sources on every page so you can verify claims independently. For advice specific to your situation, always consult a licensed attorney.' },
      { question: 'Can I edit the templates?', answer: 'Yes. Word (.docx) versions are fully editable. PDF versions are suitable for printing and filling by hand. We recommend downloading the Word version for any significant customization.' },
      { question: 'Do templates work in all 50 states?', answer: 'Our templates follow general US legal principles and include state-specific guidance sections. Some documents have unique requirements in certain states. Always review the state-specific section on the template page before use.' },
    ],
  },
  {
    title: 'Estate Planning',
    faqs: [
      { question: 'Does a will need to be notarized?', answer: 'In most states, no. A will is valid with two adult witnesses who are not beneficiaries. However, a self-proving affidavit (notarized supplement) makes probate significantly faster and is recommended.' },
      { question: 'How many witnesses does a will need?', answer: 'Most states require exactly 2 adult witnesses who are present simultaneously when you sign and who themselves sign in your presence. Louisiana requires a notary. Confirm your specific state\'s requirements.' },
      { question: 'What is the difference between a will and a trust?', answer: 'A will goes through probate (a public court process) before assets are distributed. A trust passes assets directly to beneficiaries without probate, providing privacy and speed. Trusts are more expensive to create but save significantly on probate costs and time for larger estates.' },
      { question: 'Can I make my own will?', answer: 'Yes. Self-drafted wills are valid in all 50 states if properly executed (signed before two adult, non-beneficiary witnesses). For simple estates with straightforward distributions, a well-drafted will template is sufficient.' },
    ],
  },
  {
    title: 'Real Estate',
    faqs: [
      { question: 'Does a lease need to be notarized?', answer: 'No. Residential lease agreements are binding once signed by landlord and all adult tenants without notarization. Some states require leases for terms longer than 1 year to be witnessed, but not notarized.' },
      { question: 'How much notice is required to end a month-to-month lease?', answer: 'Most states require 30 days notice from either landlord or tenant. California and New York require 60 days for tenants who have lived in the unit for 1 year or more. Check your specific state and city\'s requirements.' },
      { question: 'What is the maximum security deposit a landlord can charge?', answer: 'Security deposit limits vary significantly by state. Common limits: New York (1 month), California (2 months unfurnished), Massachusetts (1 month), North Carolina (2 months for fixed-term). Texas and Florida have no statutory limit.' },
      { question: 'Can a landlord enter the rental unit without notice?', answer: 'Only in genuine emergencies. For all other entries (repairs, inspections, showing to prospective tenants), most states require 24–48 hours advance written notice. Entering without notice may constitute a breach of quiet enjoyment.' },
    ],
  },
  {
    title: 'Business Documents',
    faqs: [
      { question: 'Does an NDA need to be notarized?', answer: 'No. NDAs are binding contracts that take effect when signed by all parties without notarization.' },
      { question: 'Does an LLC need an operating agreement?', answer: 'Only a few states legally require one, but every LLC should have an operating agreement regardless. It protects your liability shield, governs member relationships, and is required by most banks to open a business account.' },
      { question: 'What is the difference between a service agreement and an employment contract?', answer: 'A service agreement governs the relationship with an independent contractor — the worker is not an employee, taxes are not withheld, and no benefits are provided. An employment contract governs an employee relationship with all attendant tax withholding and benefit obligations.' },
      { question: 'Are non-compete agreements enforceable?', answer: 'It depends dramatically on the state. California, Minnesota, North Dakota, and Oklahoma have banned employee non-competes. Many states enforce reasonable non-competes with appropriate geographic scope, duration, and protectable interest. The FTC has attempted a federal ban which is currently in litigation.' },
    ],
  },
  {
    title: 'Employment',
    faqs: [
      { question: 'Is an offer letter legally binding?', answer: 'A signed offer letter can create binding obligations for the specific terms it states (salary, start date), particularly if the candidate resigned from another job in reliance on the offer. This is why offer letters should be simple and include clear at-will language.' },
      { question: 'Can I fire an employee without cause?', answer: 'In most US states, at-will employment means either party can end the relationship at any time for any legal reason. Written employment contracts may require cause for termination. Some states have public policy exceptions that limit at-will termination.' },
      { question: 'What is included in a severance agreement?', answer: 'A severance agreement typically includes: severance pay amount, continuation of benefits, release of all claims against the employer, non-disparagement, return of company property, and continued confidentiality obligations. Employees must receive at least 21 days to consider and 7 days to revoke (for ADEA releases from employees over 40).' },
    ],
  },
  {
    title: 'Family Law',
    faqs: [
      { question: 'Does a child custody agreement need court approval?', answer: 'Yes. For a custody agreement to be legally enforceable (as opposed to a private arrangement), it must be approved by a family court judge who will issue an order incorporating the terms.' },
      { question: 'Can parents waive child support by agreement?', answer: 'Generally no. Courts treat child support as the right of the child, not the parent. Parents cannot waive child support through a private agreement. A court may approve an agreement that deviates from state guidelines if it is in the child\'s best interest.' },
      { question: 'Is a prenuptial agreement enforceable?', answer: 'Yes, if properly executed. Requirements vary by state but generally include: written form, signatures before a notary or witnesses, voluntary execution (no duress), full financial disclosure, and each party having had the opportunity to review it with their own attorney.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'FAQ Hub' }]} />
          <div className="mt-4 flex items-center gap-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-black text-white">Legal Document FAQ</h1>
              <p className="text-slate-400 mt-1">Free answers to common questions about legal documents and templates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdPlaceholder slot="leaderboard" className="mb-10" />

        <div className="space-y-10">
          {faqSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              <FAQAccordion faqs={section.faqs} />
            </section>
          ))}
        </div>

        <AdPlaceholder slot="leaderboard" className="mt-10 mb-10" />

        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-white mb-2">Can't find your answer?</h2>
          <p className="text-slate-400 text-sm mb-4">Browse our legal blog for in-depth guides on every area of US law</p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 font-semibold rounded-full text-sm hover:bg-slate-100 transition-colors">
            Browse Legal Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
