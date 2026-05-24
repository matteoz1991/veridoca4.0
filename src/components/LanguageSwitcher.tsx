"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n, Locale } from '../i18n-config';

const flags: Record<Locale, string> = {
  sv: '🇸🇪',
  en: '🌐', // International
  us: '🇺🇸',
  uk: '🇬🇧',
  de: '🇩🇪',
  fr: '🇫🇷',
  es: '🇪🇸'
};

const names: Record<Locale, string> = {
  sv: 'Svenska',
  en: 'English (Intl)',
  us: 'English (US)',
  uk: 'English (UK)',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español'
};

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  // Simple switcher that takes user to the homepage of the target language
  // to avoid complex 404s with translated slugs on deep pages.
  return (
    <div className="language-switcher" style={{ position: 'relative', display: 'inline-block' }}>
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          cursor: 'pointer',
          padding: '0.5rem 0.75rem',
          borderRadius: '6px',
          background: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'var(--foreground)'
        }}
        onClick={(e) => {
          const dropdown = e.currentTarget.nextElementSibling as HTMLElement;
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }}
      >
        <span>{flags[currentLang as Locale] || '🌐'}</span>
        <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{currentLang.toUpperCase()}</span>
      </div>

      <div 
        className="language-dropdown" 
        style={{ 
          display: 'none',
          position: 'absolute', 
          top: '100%', 
          right: 0, 
          marginTop: '0.5rem',
          background: 'white', 
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          minWidth: '160px',
          zIndex: 100
        }}
      >
        {i18n.locales.map((locale) => (
          <a 
            key={locale} 
            href={`/${locale}`}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              padding: '0.75rem 1rem',
              textDecoration: 'none',
              color: '#0f172a',
              fontSize: '0.9rem',
              background: currentLang === locale ? '#f1f5f9' : 'transparent',
              fontWeight: currentLang === locale ? 600 : 400
            }}
          >
            <span>{flags[locale]}</span>
            <span>{names[locale]}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
