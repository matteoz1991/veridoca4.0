import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Service — Veridoca',
  description: 'Veridoca\'s terms of service governing use of our free legal document templates and website.',
}

export default function TermsPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'Terms of Service' }]} />
          <h1 className="text-3xl font-bold text-slate-900 mt-4">Terms of Service</h1>
          <p className="text-slate-500 mt-1 text-sm">Last updated: June 1, 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8 prose-legal">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using Veridoca.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the website.</p>

          <h2>2. Description of Service</h2>
          <p>Veridoca.com provides free legal document templates and general legal information for informational and educational purposes only. The templates, articles, and other content on Veridoca.com do not constitute legal advice and are not a substitute for the advice of a licensed attorney.</p>

          <h2>3. No Attorney-Client Relationship</h2>
          <p>Use of Veridoca.com does not create an attorney-client relationship between you and Veridoca or any attorney who has reviewed content on the site. The attorney reviewers who have reviewed our content are not your attorneys and have not reviewed your specific situation. For legal advice specific to your circumstances, consult a licensed attorney in your jurisdiction.</p>

          <h2>4. License to Use Templates</h2>
          <p>Veridoca grants you a limited, non-exclusive, non-transferable, royalty-free license to download and use the templates on Veridoca.com for your own personal and business legal matters. You may not:</p>
          <ul>
            <li>Sell, resell, or redistribute the templates to others for compensation</li>
            <li>Include our templates in competing template services or software</li>
            <li>Remove or obscure any copyright notices or watermarks</li>
            <li>Claim the templates as your own original work</li>
          </ul>

          <h2>5. Accuracy and Currency of Information</h2>
          <p>While we make every effort to ensure the accuracy and currency of information on Veridoca.com, we make no guarantees that the information is complete, accurate, or up to date. Laws change frequently and legal requirements vary by state, jurisdiction, and specific circumstances. Always verify legal requirements through official sources or with a licensed attorney before relying on any information from Veridoca.com.</p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>VERIDOCA.COM AND ALL CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. VERIDOCA DOES NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES.</p>

          <h2>7. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VERIDOCA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR TEMPLATES, EVEN IF VERIDOCA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. VERIDOCA'S TOTAL LIABILITY SHALL NOT EXCEED $100.</p>

          <h2>8. Third-Party Links</h2>
          <p>Veridoca.com contains links to third-party websites. These links are provided for convenience only. Veridoca has no control over third-party websites and is not responsible for their content, privacy practices, or accuracy.</p>

          <h2>9. Governing Law</h2>
          <p>These Terms of Service are governed by the laws of the State of Delaware, without regard to its conflict of law provisions.</p>

          <h2>10. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms.</p>

          <h2>11. Contact</h2>
          <p>Questions about these terms: legal@veridoca.com</p>
        </div>
      </div>
    </div>
  )
}
