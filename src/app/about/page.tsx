import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileText, Star, CheckCircle, Users, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import { attorneys } from '@/data/attorneys'

export const metadata: Metadata = {
  title: 'About Veridoca — Free Attorney-Reviewed Legal Templates',
  description: 'Learn about Veridoca\'s mission to provide free, attorney-reviewed legal document templates to every American. Meet our editorial team.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'About Veridoca' }]} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4">About Veridoca</h1>
          <p className="text-slate-500 mt-2 text-lg">Making quality legal information accessible to every American</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission */}
        <section className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Veridoca was founded on a simple premise: every American deserves access to quality legal information, regardless of their income or background. Attorney fees for routine legal documents can run $200–$500 per document — costs that many families and small businesses simply cannot afford.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            We provide free, attorney-reviewed legal document templates for the most common legal needs in the United States. Every template comes with a plain-English guide explaining what the document is, when to use it, how to complete it correctly, and what your state specifically requires.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We are supported by advertising revenue, which allows us to keep all content permanently free — no subscriptions, no upsells, no email required. Our only ask is that you tell someone who needs legal help about Veridoca.
          </p>
        </section>

        {/* Trust signals */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: FileText, stat: '500+', label: 'Free Templates' },
            { icon: Shield, stat: '6', label: 'Staff Attorneys' },
            { icon: Star, stat: '50', label: 'States Covered' },
            { icon: CheckCircle, stat: '100%', label: 'Free Forever' },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="bg-white/[0.04] rounded-xl border border-white/[0.08] p-5 text-center">
              <Icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{stat}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </section>

        {/* Editorial Policy */}
        <section id="editorial-policy" className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Editorial Policy</h2>

          <h3 className="text-lg font-semibold text-slate-800 mb-2">How Content Is Researched</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Every template page is built from primary sources: state statutes, federal law, court decisions, and official government publications. We do not cite Wikipedia, other template sites, or secondary sources for legal claims. All citations include the statute name, code section, and last amended date.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-2">Attorney Review Process</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Every template page on Veridoca is reviewed by a licensed US attorney with relevant practice area expertise before publication. Reviewers verify that the content accurately reflects current law and that the template includes all required elements. State-specific pages are reviewed by attorneys licensed in that state where possible.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-2">Update Schedule</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            All content is reviewed at minimum annually. We update templates within 30 days of any significant state or federal law change affecting a covered document. We monitor legislative changes through LexisNexis alerts, state bar publications, and Google Alerts for relevant statutory changes.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-2">Error Correction</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you find an error in any of our content, please <Link href="/contact" className="text-blue-600 hover:text-blue-800">contact us</Link>. We review all error reports within 24 hours and correct verified errors within 48 business hours. We publicly note significant corrections in the update history section of affected pages.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-2">Advertiser Independence</h3>
          <p className="text-slate-600 leading-relaxed">
            Veridoca is supported by Google AdSense advertising and affiliate relationships. Our editorial content is never influenced by advertisers. We do not recommend specific attorneys, legal services, or products in editorial content in exchange for compensation. Affiliate links are always clearly disclosed.
          </p>
        </section>

        {/* Editorial Team */}
        <section id="team" className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Our Editorial Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {attorneys.map((attorney) => (
              <div key={attorney.slug} id={`team-${attorney.slug}`} className="bg-white/[0.04] rounded-xl border border-white/[0.08] p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ backgroundColor: '#1e3a5f' }}>
                    {attorney.photoInitials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{attorney.name}, {attorney.credentials}</p>
                    <p className="text-sm text-emerald-700 font-medium">{attorney.specialization}</p>
                    <p className="text-xs text-slate-500 mt-1">{attorney.barNumbers}</p>
                    <p className="text-xs text-slate-500">{attorney.lawSchool} · {attorney.yearsExperience} years experience</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{attorney.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Questions or Concerns?</h2>
          <p className="text-slate-500 text-sm mb-4">We respond to all inquiries within 2 business days</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 text-white font-semibold rounded-lg text-sm hover:bg-blue-800 transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
