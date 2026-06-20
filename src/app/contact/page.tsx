import type { Metadata } from 'next'
import { Mail, Clock, AlertCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Contact Veridoca — Get in Touch',
  description: 'Contact the Veridoca team with questions, feedback, or to report errors in our legal templates. We respond within 2 business days.',
}

export default function ContactPage() {
  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb crumbs={[{ label: 'Contact' }]} />
          <h1 className="text-3xl font-bold text-white mt-4">Contact Veridoca</h1>
          <p className="text-slate-500 mt-2">We respond to all inquiries within 2 business days</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Important notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 mb-8">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-800 mb-1">We Cannot Provide Legal Advice</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Veridoca provides general legal information only. We cannot answer questions about your specific legal situation, review your completed documents, or provide attorney-client advice. For legal advice specific to your situation, please consult a licensed attorney in your state.
            </p>
          </div>
        </div>

        <div className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8">
          <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required className="w-full px-3.5 py-2.5 bg-white/[0.05] border border-white/[0.12] rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required className="w-full px-3.5 py-2.5 bg-white/[0.05] border border-white/[0.12] rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Smith" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full px-3.5 py-2.5 bg-white/[0.05] border border-white/[0.12] rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="jane@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="subject">Subject</label>
              <select id="subject" name="subject" className="w-full px-3.5 py-2.5 bg-white/[0.05] border border-white/[0.12] rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                <option value="">Select a subject...</option>
                <option value="error-report">Report an error in a template or article</option>
                <option value="suggestion">Template or content suggestion</option>
                <option value="technical">Technical issue (download not working, etc.)</option>
                <option value="partnership">Partnership or press inquiry</option>
                <option value="general">General question</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-3.5 py-2.5 bg-white/[0.05] border border-white/[0.12] rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" placeholder="If reporting an error, please include the URL of the affected page and a description of the issue..." />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          <div className="bg-white/[0.04] rounded-xl border border-white/[0.08] p-5">
            <Mail className="w-5 h-5 text-blue-600 mb-2" />
            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
            <p className="text-slate-500 text-sm">contact@veridoca.com</p>
          </div>
          <div className="bg-white/[0.04] rounded-xl border border-white/[0.08] p-5">
            <Clock className="w-5 h-5 text-blue-600 mb-2" />
            <h3 className="font-semibold text-slate-900 mb-1">Response Time</h3>
            <p className="text-slate-500 text-sm">Within 2 business days</p>
          </div>
        </div>
      </div>
    </div>
  )
}
