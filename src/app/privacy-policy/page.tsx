import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy — Veridoca',
  description: 'Veridoca\'s privacy policy explaining how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  const updated = 'June 1, 2026'
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-3xl font-bold text-slate-900 mt-4">Privacy Policy</h1>
          <p className="text-slate-500 mt-1 text-sm">Last updated: {updated}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8 prose-legal">
          <h2>1. Information We Collect</h2>
          <p><strong>Information you provide directly:</strong> When you contact us via our contact form, we collect your name and email address. We do not require registration to download any template.</p>
          <p><strong>Automatically collected information:</strong> Like most websites, we automatically collect certain information when you visit Veridoca.com, including your IP address (anonymized), browser type, device type, pages visited, time spent on pages, and referring URLs. This information is collected through Google Analytics and is used to improve the site.</p>
          <p><strong>Cookies:</strong> We use cookies for (1) Google Analytics to understand site traffic patterns, (2) Google AdSense to serve contextually relevant advertising, and (3) basic site functionality. We do not use cookies to track you across other websites for marketing purposes beyond what AdSense requires.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Operate and improve Veridoca.com</li>
            <li>Respond to your inquiries and feedback</li>
            <li>Understand how users interact with our content to improve it</li>
            <li>Serve contextually relevant advertising through Google AdSense</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not sell your personal information to any third party. We do not use your information to send unsolicited marketing emails.</p>

          <h2>3. Google AdSense and Advertising</h2>
          <p>Veridoca.com uses Google AdSense to display advertising. Google uses cookies to serve ads based on your prior visits to Veridoca and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to Veridoca and/or other sites on the Internet.</p>

          <h2>4. Third-Party Links</h2>
          <p>Our website contains links to third-party websites (state court systems, bar associations, legal aid organizations). We are not responsible for the privacy practices of those websites. We encourage you to read their privacy policies.</p>

          <h2>5. Data Retention</h2>
          <p>Contact form submissions are retained for 12 months and then deleted. Google Analytics data is retained for 26 months per Google's default settings.</p>

          <h2>6. Your Rights (CCPA / GDPR)</h2>
          <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) including the right to know what personal information we collect, the right to delete it, and the right to opt out of its sale (we do not sell personal information). EU/UK residents have rights under GDPR including access, rectification, erasure, and portability.</p>
          <p>To exercise any of these rights, contact us at privacy@veridoca.com.</p>

          <h2>7. Children's Privacy</h2>
          <p>Veridoca.com is not directed to children under 13 and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. The updated date at the top of this page reflects when it was last revised. Material changes will be noted prominently on the site.</p>

          <h2>9. Contact</h2>
          <p>Questions about this privacy policy: privacy@veridoca.com</p>
        </div>
      </div>
    </div>
  )
}
