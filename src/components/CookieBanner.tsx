"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner({ lang }: { lang: string }) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const updateConsentMode = (status: 'granted' | 'denied') => {
    // Google Consent Mode v2 Integration
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
        analytics_storage: status
      });
    }
  };

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    updateConsentMode('granted');
    setShowBanner(false);
  };

  const denyAll = () => {
    localStorage.setItem('cookie-consent', 'denied');
    updateConsentMode('denied');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--sidebar-bg)', color: 'white', padding: '1.5rem 2rem', zIndex: 1000, boxShadow: '0 -10px 25px rgba(0,0,0,0.2)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '1200px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '800px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Vi värnar om din integritet</h3>
            Vi och våra partners (inklusive Google AdSense) använder cookies och liknande tekniker för att anpassa innehåll, visa relevanta annonser och analysera vår trafik. 
            Enligt GDPR och Google Consent Mode v2 behöver vi ditt samtycke. Du kan när som helst ändra dina val i vår <Link href={`/${lang}/privacy-policy`} style={{ textDecoration: 'underline', color: 'var(--accent)' }}>Integritetspolicy</Link>.
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={() => setShowSettings(!showSettings)} style={{ color: '#e2e8f0', textDecoration: 'underline', fontSize: '0.9rem' }}>
              Anpassa val
            </button>
            <button onClick={denyAll} className="btn-outline" style={{ borderColor: '#e2e8f0', color: 'white' }}>
              Neka alla
            </button>
            <button onClick={acceptAll} className="btn-primary" style={{ background: 'var(--primary)', color: '#000' }}>
              Acceptera alla
            </button>
          </div>
        </div>

        {showSettings && (
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input type="checkbox" checked disabled /> Nödvändiga cookies (Krävs för att sidan ska fungera)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input type="checkbox" defaultChecked /> Marknadsföring (Google AdSense)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked /> Analys (Besöksstatistik)
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
