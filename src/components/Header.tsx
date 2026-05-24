import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { categoryTranslations, Locale } from '../i18n-config';
import { templates } from '../data/templates';
import { getDictionary } from '../dictionaries';

export default function Header({ lang }: { lang: string }) {
  const getTemplateUrl = (svSlug: string) => {
    const t = templates.find(temp => temp.slugs['sv'] === svSlug);
    const localCategory = categoryTranslations[lang as Locale] || 'templates';
    const localSlug = t ? t.slugs[lang as Locale] : svSlug;
    return `/${lang}/${localCategory}/${localSlug}`;
  };

  const dict = getDictionary(lang as Locale).header;

  return (
    <header className="header-container">
      <div className="logo-section">
        <Link href={`/${lang}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '4px', transform: 'rotate(45deg)' }}></div>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600 }}>Veridoca</span>
        </Link>
      </div>

      <nav className="nav-links">
        
        {/* Företag Mega Menu */}
        <div className="nav-item">
          {dict.business}
          <div className="mega-menu" style={{ width: '600px', gridTemplateColumns: '1fr' }}>
            <div className="mega-content" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <div className="mega-category">
                  <div className="mega-category-title">
                    <span>🏢</span> {dict.companyOps}
                  </div>
                  <div className="mega-link-list">
                    <a href={getTemplateUrl('sekretessavtal-nda')} className="mega-link">Sekretessavtal (NDA)</a>
                    <a href={getTemplateUrl('samarbetsavtal')} className="mega-link">Samarbetsavtal</a>
                    <a href={getTemplateUrl('aktieagaravtal')} className="mega-link">Aktieägaravtal</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="mega-category">
                  <div className="mega-category-title">
                    <span>🤝</span> {dict.hr}
                  </div>
                  <div className="mega-link-list">
                    <a href={getTemplateUrl('anstallningsavtal')} className="mega-link">Anställningsavtal</a>
                    <a href={getTemplateUrl('konsultavtal')} className="mega-link">Konsultavtal</a>
                    <a href={`/${lang}/${categoryTranslations[lang as Locale] || 'templates'}`} className="mega-link">{dict.moreTemplates}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Privatperson Mega Menu */}
        <div className="nav-item">
          {dict.private}
          
          <div className="mega-menu">
            <div className="mega-sidebar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>★</span> {dict.popular}
              </div>
              <div className="mega-sidebar-links">
                <a href={getTemplateUrl('testamente')} className="sidebar-link">Testamente</a>
                <a href={getTemplateUrl('framtidsfullmakt')} className="sidebar-link">Framtidsfullmakt</a>
                <a href={getTemplateUrl('enkelt-skuldebrev')} className="sidebar-link">Enkelt skuldebrev</a>
                <a href={getTemplateUrl('samboavtal')} className="sidebar-link">Samboavtal</a>
              </div>
            </div>
            
            <div className="mega-content">
              {/* Column 1 */}
              <div>
                <div className="mega-category">
                  <div className="mega-category-title">
                    <span>⚖️</span> {dict.inheritance}
                  </div>
                  <div className="mega-link-list">
                    <a href={getTemplateUrl('testamente')} className="mega-link">Testamente</a>
                  </div>
                </div>
                
                <div className="mega-category" style={{ marginTop: '1.5rem' }}>
                  <div className="mega-category-title">
                    <span>👨‍👩‍👧‍👦</span> {dict.family}
                  </div>
                  <div className="mega-link-list">
                    <a href={getTemplateUrl('samboavtal')} className="mega-link">Samboavtal</a>
                  </div>
                </div>

                <div className="mega-category" style={{ marginTop: '1.5rem' }}>
                  <div className="mega-category-title">
                    <span>📝</span> {dict.powers}
                  </div>
                  <div className="mega-link-list">
                    <a href={getTemplateUrl('framtidsfullmakt')} className="mega-link">Framtidsfullmakt</a>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <div className="mega-category">
                  <div className="mega-category-title">
                    <span>🏠</span> {dict.housing}
                  </div>
                  <div className="mega-link-list">
                    <a href={`/${lang}/${categoryTranslations[lang as Locale] || 'templates'}`} className="mega-link">{dict.moreTemplates}</a>
                  </div>
                </div>

                <div className="mega-category" style={{ marginTop: '1.5rem' }}>
                  <div className="mega-category-title">
                    <span>🎁</span> {dict.loans}
                  </div>
                  <div className="mega-link-list">
                    <a href={getTemplateUrl('enkelt-skuldebrev')} className="mega-link">Enkelt skuldebrev</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </nav>

      <div className="auth-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{dict.free}</span>
        
        <LanguageSwitcher currentLang={lang} />

        <a href={`/${lang}/${categoryTranslations[lang as Locale] || 'templates'}`} className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>{dict.createDoc}</a>
      </div>
    </header>
  );
}
