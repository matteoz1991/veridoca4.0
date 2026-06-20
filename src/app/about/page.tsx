import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileText, CheckCircle, Users, ArrowRight, Scale, BookOpen } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About Veridoca — Free Legal Document Templates',
  description: 'Learn about Veridoca\'s mission to provide free legal document templates to every American. Read about our editorial standards, primary source research, and content update process.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'About Veridoca' }]} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4">About Veridoca</h1>
          <p className="text-slate-400 mt-2 text-lg">Making quality legal information accessible to every American</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Mission */}
        <section className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            Veridoca was founded on a simple premise: every American deserves access to quality legal information, regardless of their income or background. Attorney fees for routine legal documents can run $200–$500 per document — costs that many families and small businesses simply cannot afford.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            We provide free legal document templates for the most common legal needs in the United States. Every template comes with a plain-English guide explaining what the document is, when to use it, how to complete it correctly, and what your state specifically requires. Our content cites primary legal sources — state statutes, federal law, and court decisions — so you can verify every claim independently.
          </p>
          <p className="text-slate-300 leading-relaxed">
            We are supported by advertising revenue, which allows us to keep all content permanently free — no subscriptions, no upsells, no email required. Our only ask is that you share Veridoca with someone who needs legal help.
          </p>
        </section>

        {/* Trust stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FileText, stat: '500+', label: 'Free Templates' },
            { icon: Shield, stat: '7', label: 'Legal Categories' },
            { icon: CheckCircle, stat: '50', label: 'States Covered' },
            { icon: BookOpen, stat: '100%', label: 'Free Forever' },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="bg-white/[0.04] rounded-xl border border-white/[0.08] p-5 text-center">
              <Icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stat}</p>
              <p className="text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </section>

        {/* What We Cover */}
        <section className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">What We Cover</h2>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            Veridoca covers seven major areas of personal and business law — the documents most Americans need at some point in their lives or business operations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'Business Documents', desc: 'NDAs, operating agreements, contracts, partnership and shareholder agreements' },
              { title: 'Employment Documents', desc: 'Employment contracts, offer letters, non-compete and non-disclosure agreements' },
              { title: 'Real Estate Documents', desc: 'Lease agreements, eviction notices, landlord-tenant letters, property disclosures' },
              { title: 'Personal Legal Documents', desc: 'Bills of sale, release of liability, personal loan agreements, demand letters' },
              { title: 'Family Law Documents', desc: 'Child custody agreements, parenting plans, child support, consent forms' },
              { title: 'Estate Planning', desc: 'Wills, power of attorney, healthcare directives, living trusts' },
              { title: 'Financial Documents', desc: 'Promissory notes, debt settlement, payment plans, loan agreements' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Policy */}
        <section id="editorial-policy" className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Editorial Policy</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white mb-2">How Content Is Researched</h3>
              <p className="text-slate-400 leading-relaxed">
                Every template page is built from primary sources: state statutes, federal law, court decisions, and official government publications. We do not cite Wikipedia, other template sites, or secondary sources for legal claims. Citations include the statute name, code section, and last amended date.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2">Attorney Review Process</h3>
              <p className="text-slate-400 leading-relaxed">
                Every template page on Veridoca is reviewed by a licensed US attorney with relevant practice area expertise before publication. Reviewers verify that the content accurately reflects current law and that the template includes all legally required elements. State-specific pages are reviewed by attorneys licensed in that state where possible.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2">Update Schedule</h3>
              <p className="text-slate-400 leading-relaxed">
                All content is reviewed at minimum annually. We update templates within 30 days of any significant state or federal law change affecting a covered document. We monitor legislative changes through LexisNexis alerts, state bar publications, and Google Alerts for relevant statutory changes.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2">Error Correction</h3>
              <p className="text-slate-400 leading-relaxed">
                If you find an error in any of our content, please{' '}
                <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                  contact us
                </Link>
                . We review all error reports within 24 hours and correct verified errors within 48 business hours.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2">Advertiser Independence</h3>
              <p className="text-slate-400 leading-relaxed">
                Veridoca is supported by Google AdSense advertising. Our editorial content is never influenced by advertisers. We do not recommend specific attorneys, legal services, or products in exchange for compensation.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Team */}
        <section id="team" className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Our Editorial Team</h2>
          </div>
          <div className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-6">
            <p className="text-slate-300 leading-relaxed mb-4">
              Veridoca content is written by the Veridoca editorial team — a group of legal researchers and writers who work from primary sources: state statutes, federal law, official regulations, and court decisions. We do not summarize secondary sources or other legal websites.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Every page links to or cites the primary source for each legal claim, so readers can verify information independently. We believe transparency about sourcing is more valuable than name-dropping credentials.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {[
                { icon: Shield, title: 'Primary source research', desc: 'State statutes, federal law, and official court decisions — not secondary summaries.' },
                { icon: FileText, title: 'Plain-English writing', desc: 'Complex legal requirements explained in language anyone can understand.' },
                { icon: BookOpen, title: 'Source citations', desc: 'Every legal claim includes the relevant statute or regulation so you can verify it.' },
                { icon: CheckCircle, title: 'Regular updates', desc: 'Pages are reviewed and updated when relevant laws change. Each page shows its last-updated date.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <item.icon className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Questions or Feedback?</h2>
          <p className="text-slate-400 text-sm mb-5">We respond to all inquiries within 2 business days</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
