import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Disclaimer — Veridoca',
  description: 'Legal disclaimer for Veridoca.com. Important information about the limitations of our legal document templates and information.',
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'Disclaimer' }]} />
          <h1 className="text-3xl font-bold text-slate-900 mt-4">Legal Disclaimer</h1>
          <p className="text-slate-500 mt-1 text-sm">Last updated: June 1, 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Key disclaimer highlight */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 flex items-start gap-3 mb-8">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 text-lg mb-2">Important Legal Notice</p>
            <p className="text-amber-700 leading-relaxed">
              The information and templates on Veridoca.com are provided for general informational and educational purposes only and do not constitute legal advice. Use of this site and any template or information does not create an attorney-client relationship. Always consult a licensed attorney in your jurisdiction for advice specific to your legal situation.
            </p>
          </div>
        </div>

        <div className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8 prose-legal">
          <h2>Not Legal Advice</h2>
          <p>The content on Veridoca.com — including all template documents, articles, guides, FAQs, and other written materials — is provided for general informational and educational purposes only. It does not constitute legal advice, legal opinions, or legal recommendations for any specific situation.</p>
          <p>Legal advice is advice from a licensed attorney about your specific legal situation. General information about the law — even accurately researched information citing primary sources — is not legal advice because it has not been applied to the facts of your specific situation by an attorney who represents you.</p>

          <h2>No Attorney-Client Relationship</h2>
          <p>No attorney-client relationship is created by your use of Veridoca.com, by downloading a template, or by contacting us. Veridoca is a legal information resource, not a law firm, and does not provide legal representation of any kind.</p>

          <h2>No Representation of Accuracy or Completeness</h2>
          <p>Although we make reasonable efforts to ensure the accuracy and currency of the information on Veridoca.com, we make no warranties or representations about the accuracy, completeness, or currency of any information. Laws change frequently, legal requirements vary by jurisdiction, and the application of law to specific facts requires individualized legal analysis that this site does not provide.</p>

          <h2>State Law Variations</h2>
          <p>Legal requirements for the documents available on Veridoca.com vary significantly from state to state, and in many cases from city to city within a state. A template that is appropriate for use in one state may not comply with the legal requirements of another state. Always verify requirements with official state statutes, county court websites, or a licensed attorney in the relevant jurisdiction.</p>

          <h2>When to Consult an Attorney</h2>
          <p>You should consult a licensed attorney in your state when:</p>
          <ul>
            <li>The legal matter involves significant assets or potential liability</li>
            <li>The other party in the transaction has an attorney</li>
            <li>You are uncertain about any provision or requirement</li>
            <li>There is any possibility of dispute or litigation</li>
            <li>The document involves complex tax implications</li>
            <li>Multiple states are involved</li>
            <li>The document involves minors, incapacitated persons, or other vulnerable parties</li>
            <li>You are going through divorce, contested custody, or any contentious family law matter</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>Veridoca.com, its owners, employees, and attorney reviewers shall not be liable for any damages — including without limitation direct, indirect, incidental, special, consequential, or punitive damages — arising from your use of this website, any template, or any information, whether based on warranty, contract, tort, or any other legal theory, even if advised of the possibility of such damages.</p>

          <h2>Third-Party Information</h2>
          <p>Veridoca.com links to third-party websites including government sites, bar associations, and legal aid organizations. We are not responsible for the accuracy or currency of information on third-party websites.</p>

          <h2>Attorney Referrals</h2>
          <p>When Veridoca.com links to attorney referral services or individual attorneys, such links do not constitute an endorsement or recommendation of any specific attorney or legal service. The decision to hire an attorney should be based on your own research and evaluation.</p>
        </div>
      </div>
    </div>
  )
}
