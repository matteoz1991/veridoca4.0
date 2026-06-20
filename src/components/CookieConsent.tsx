'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, ChevronDown, ChevronUp, Shield } from 'lucide-react'

type ConsentPrefs = {
  necessary: true
  advertising: boolean
  analytics: boolean
  savedAt: number
}

const STORAGE_KEY = 'veridoca_cookie_consent'

function loadPrefs(): ConsentPrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ConsentPrefs) : null
  } catch {
    return null
  }
}

function applyConsent(prefs: ConsentPrefs) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any
  const g = (v: boolean) => (v ? 'granted' : 'denied')
  // Google Consent Mode v2
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      ad_storage: g(prefs.advertising),
      ad_user_data: g(prefs.advertising),
      ad_personalization: g(prefs.advertising),
      analytics_storage: g(prefs.analytics),
    })
  }
  // AdSense non-personalized fallback
  if (!prefs.advertising) {
    w.adsbygoogle = w.adsbygoogle || []
    w.adsbygoogle.requestNonPersonalizedAds = 1
  }
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className={`relative w-10 h-5 rounded-full transition-colors flex-shrink-0 ${on ? 'bg-emerald-600' : 'bg-white/[0.15]'}`}
    >
      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${on ? 'left-[22px]' : 'left-0.5'}`} />
    </button>
  )
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [prefs, setPrefs] = useState<ConsentPrefs>({ necessary: true, advertising: true, analytics: true, savedAt: 0 })

  useEffect(() => {
    const stored = loadPrefs()
    if (stored) {
      applyConsent(stored)
    } else {
      const t = setTimeout(() => setVisible(true), 700)
      return () => clearTimeout(t)
    }

    // "Cookie Settings" button in footer fires this event
    const handler = () => {
      const stored = loadPrefs()
      if (stored) setPrefs(stored)
      setExpanded(true)
      setVisible(true)
    }
    window.addEventListener('openCookieSettings', handler)
    return () => window.removeEventListener('openCookieSettings', handler)
  }, [])

  function save(p: ConsentPrefs) {
    const final = { ...p, savedAt: Date.now() }
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(final)) } catch {}
    applyConsent(final)
    setVisible(false)
    setExpanded(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-3 sm:p-5">
      <div
        className="max-w-xl mx-auto rounded-2xl border border-white/[0.12] overflow-hidden shadow-2xl shadow-black/70"
        style={{ background: 'rgba(12,16,24,0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-2">
          <div className="flex items-center gap-2">
            <Cookie className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white text-sm">Cookie Preferences</span>
          </div>
          <button
            onClick={() => save({ ...prefs, advertising: false, analytics: false })}
            className="p-1 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-white/[0.08] transition-colors"
            aria-label="Reject non-essential and close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pb-3">
          <p className="text-slate-400 text-sm leading-relaxed">
            We use cookies for advertising (Google AdSense) and analytics. Accepting helps keep Veridoca free.{' '}
            <Link href="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 text-xs">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Expandable preferences */}
        <div className="px-5">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors pb-3"
          >
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {expanded ? 'Hide details' : 'Manage preferences'}
          </button>

          {expanded && (
            <div className="space-y-2 pb-3 border-t border-white/[0.06] pt-3">
              {/* Necessary */}
              <div className="flex items-center justify-between gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Shield className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <p className="text-xs font-semibold text-white">Necessary</p>
                    <span className="text-[10px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">Always on</span>
                  </div>
                  <p className="text-xs text-slate-500">Site functionality, security, preferences.</p>
                </div>
                <div className="w-10 h-5 bg-emerald-700/50 rounded-full flex-shrink-0 opacity-50 cursor-not-allowed" />
              </div>

              {/* Advertising */}
              <div className="flex items-center justify-between gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white mb-0.5">Advertising</p>
                  <p className="text-xs text-slate-500">Google AdSense — helps us keep all templates free.</p>
                </div>
                <Toggle on={prefs.advertising} onChange={v => setPrefs(p => ({ ...p, advertising: v }))} />
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white mb-0.5">Analytics</p>
                  <p className="text-xs text-slate-500">Helps us understand which templates are most useful.</p>
                </div>
                <Toggle on={prefs.analytics} onChange={v => setPrefs(p => ({ ...p, analytics: v }))} />
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 px-5 pb-5 pt-1">
          <button
            onClick={() => save({ necessary: true, advertising: true, analytics: true, savedAt: 0 })}
            className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            Accept All
          </button>
          {expanded ? (
            <button
              onClick={() => save(prefs)}
              className="flex-1 py-2 px-3 bg-white/[0.08] hover:bg-white/[0.13] text-white font-semibold rounded-xl text-sm transition-colors border border-white/[0.10]"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => save({ necessary: true, advertising: false, analytics: false, savedAt: 0 })}
              className="flex-1 py-2 px-3 bg-white/[0.08] hover:bg-white/[0.13] text-white font-semibold rounded-xl text-sm transition-colors border border-white/[0.10]"
            >
              Reject All
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
