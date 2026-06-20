'use client'

import { useState } from 'react'
import { Mail, Clock, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function update(key: string, val: string) {
    setForm(p => ({ ...p, [key]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Something went wrong')
      }
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const inputCls = 'w-full px-3.5 py-2.5 bg-white/[0.05] border border-white/[0.12] rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-colors'
  const labelCls = 'block text-sm font-medium text-slate-400 mb-1.5'

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
        {/* Notice */}
        <div className="bg-amber-500/[0.08] border border-amber-500/20 rounded-xl p-4 flex items-start gap-3 mb-8">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-300 mb-1">We Cannot Provide Legal Advice</p>
            <p className="text-amber-400/80 text-sm leading-relaxed">
              Veridoca provides general legal information only. For advice specific to your situation, please consult a licensed attorney in your state.
            </p>
          </div>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-2xl p-10 text-center">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-slate-400">We&apos;ll get back to you within 2 business days.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 px-6 py-2.5 bg-white/[0.08] hover:bg-white/[0.12] text-white rounded-lg text-sm transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div className="bg-white/[0.04] rounded-2xl border border-white/[0.08] p-8">
            <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls} htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" required className={inputCls} placeholder="Jane" value={form.firstName} onChange={e => update('firstName', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" className={inputCls} placeholder="Smith" value={form.lastName} onChange={e => update('lastName', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelCls} htmlFor="email">Email Address *</label>
                <input type="email" id="email" required className={inputCls} placeholder="jane@example.com" value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
              <div>
                <label className={labelCls} htmlFor="subject">Subject</label>
                <select id="subject" className={inputCls + ' bg-[#0c1018]'} value={form.subject} onChange={e => update('subject', e.target.value)}>
                  <option value="">Select a subject…</option>
                  <option value="error-report">Report an error in a template or article</option>
                  <option value="suggestion">Template or content suggestion</option>
                  <option value="technical">Technical issue</option>
                  <option value="partnership">Partnership or press inquiry</option>
                  <option value="general">General question</option>
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="message">Message *</label>
                <textarea id="message" rows={5} required className={inputCls + ' resize-none'} placeholder="Tell us how we can help…" value={form.message} onChange={e => update('message', e.target.value)} />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/[0.08] border border-red-500/20 rounded-lg p-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        )}

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          <div className="bg-white/[0.04] rounded-xl border border-white/[0.08] p-5">
            <Mail className="w-5 h-5 text-emerald-400 mb-2" />
            <h3 className="font-semibold text-white mb-1">Email</h3>
            <p className="text-slate-500 text-sm">info@digisoul.com</p>
          </div>
          <div className="bg-white/[0.04] rounded-xl border border-white/[0.08] p-5">
            <Clock className="w-5 h-5 text-emerald-400 mb-2" />
            <h3 className="font-semibold text-white mb-1">Response Time</h3>
            <p className="text-slate-500 text-sm">Within 2 business days</p>
          </div>
        </div>
      </div>
    </div>
  )
}
