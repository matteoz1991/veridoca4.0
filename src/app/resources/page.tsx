import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Scale, MapPin, Users, ExternalLink, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import AdPlaceholder from '@/components/AdPlaceholder'

export const metadata: Metadata = {
  title: 'Legal Resources — Court Finder, Bar Associations & Legal Aid',
  description: 'Free legal resources: state court directories, bar associations, legal aid organizations, and legal glossary. Official sources for all 50 US states.',
}

const resourceSections = [
  {
    icon: Scale,
    title: 'State Court Systems',
    description: 'Official websites for every state court system and federal courts.',
    items: [
      { label: 'California Courts', href: 'https://www.courts.ca.gov' },
      { label: 'Texas Courts', href: 'https://www.txcourts.gov' },
      { label: 'Florida Courts', href: 'https://www.flcourts.org' },
      { label: 'New York Courts', href: 'https://www.nycourts.gov' },
      { label: 'US Federal Courts (PACER)', href: 'https://www.pacer.gov' },
    ],
    linkAll: '/states',
    linkAllLabel: 'Find your state\'s courts',
  },
  {
    icon: Users,
    title: 'State Bar Associations',
    description: 'Verify attorney credentials and find licensed lawyers in your state.',
    items: [
      { label: 'California Bar Association', href: 'https://www.calbar.ca.gov' },
      { label: 'Texas State Bar', href: 'https://www.texasbar.com' },
      { label: 'Florida Bar', href: 'https://www.floridabar.org' },
      { label: 'New York State Bar', href: 'https://nysba.org' },
      { label: 'American Bar Association', href: 'https://www.americanbar.org' },
    ],
    linkAll: '/states',
    linkAllLabel: 'Find your state\'s bar association',
  },
  {
    icon: BookOpen,
    title: 'Free & Low-Cost Legal Aid',
    description: 'Find legal aid organizations that provide free or reduced-cost legal help.',
    items: [
      { label: 'LawHelp.org (National Directory)', href: 'https://www.lawhelp.org' },
      { label: 'Legal Services Corporation', href: 'https://www.lsc.gov' },
      { label: 'ABA Free Legal Answers', href: 'https://abafreelegalanswers.org' },
      { label: 'Law School Clinics Finder', href: 'https://www.americanbar.org/groups/probono_public_service/resources/law_school_pro_bono/' },
      { label: 'NOLO Legal Encyclopedia', href: 'https://www.nolo.com' },
    ],
    linkAll: null,
    linkAllLabel: null,
  },
  {
    icon: MapPin,
    title: 'Court Self-Help Centers',
    description: 'Many courts have self-help centers that assist pro se (self-represented) litigants.',
    items: [
      { label: 'California Self-Help Centers', href: 'https://www.courts.ca.gov/selfhelp.htm' },
      { label: 'FindLaw Self-Help Center', href: 'https://www.findlaw.com/self-help.html' },
      { label: 'Justia Legal Guides', href: 'https://www.justia.com' },
      { label: 'Cornell Law LII', href: 'https://www.law.cornell.edu' },
    ],
    linkAll: null,
    linkAllLabel: null,
  },
]

const glossaryTerms = [
  { term: 'Affidavit', definition: 'A written statement made under oath before a notary public or other authorized official.' },
  { term: 'At-Will Employment', definition: 'An employment arrangement that can be terminated by either the employer or employee at any time, for any legal reason or no reason at all.' },
  { term: 'Codicil', definition: 'A legal document that amends (modifies) an existing will without revoking it entirely.' },
  { term: 'Consideration', definition: 'Something of value exchanged between parties to make a contract legally binding. Both parties must give and receive something of value.' },
  { term: 'Deed', definition: 'A legal document that transfers ownership of real property from one party to another.' },
  { term: 'Fiduciary', definition: 'A person with a legal obligation to act in the best interest of another party, such as an executor, trustee, or power of attorney agent.' },
  { term: 'Intestate', definition: 'Dying without a valid will. State intestacy laws determine how the deceased\'s assets are distributed.' },
  { term: 'Notarization', definition: 'The process of a notary public verifying the identity of a signer and witnessing their signature to prevent fraud.' },
  { term: 'Probate', definition: 'The legal process through which a court validates a will and supervises the distribution of the deceased\'s estate.' },
  { term: 'Testator', definition: 'The person who creates and signs a will.' },
]

export default function ResourcesPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      {/* Hero */}
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumb crumbs={[{ label: 'Legal Resources' }]} />
          <div className="mt-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Legal Resources</h1>
              <p className="text-slate-400 text-lg">Free directories, glossaries, and official resources for US legal matters</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdPlaceholder slot="leaderboard" className="mb-10" />

        {/* Resource cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {resourceSections.map((section) => (
            <div
              key={section.title}
              className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-base font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{section.description}</p>
              <ul className="space-y-2 flex-1">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-70 group-hover:opacity-100" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {section.linkAll && (
                <Link
                  href={section.linkAll}
                  className="mt-5 flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {section.linkAllLabel} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Legal Glossary */}
        <section className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Legal Glossary</h2>
          </div>
          <p className="text-slate-400 text-sm mb-7 leading-relaxed">
            Plain-English definitions of common legal terms used in Veridoca templates
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {glossaryTerms.map(({ term, definition }) => (
              <div key={term} className="border-l-2 border-emerald-500/30 pl-4 py-0.5">
                <p className="font-semibold text-white text-sm mb-0.5">{term}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{definition}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 pt-6 border-t border-white/[0.06]">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Browse our full FAQ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-2">Ready to find your template?</h2>
          <p className="text-slate-400 text-sm mb-5">500+ free legal document templates for every US state — no account required</p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            Browse All Templates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <AdPlaceholder slot="leaderboard" />
      </div>
    </div>
  )
}
