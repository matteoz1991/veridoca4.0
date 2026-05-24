'use client';

import { useState } from 'react';
import { DocumentTemplate } from '../data/templates';
import { Locale } from '../i18n-config';

type TemplateFilterProps = {
  templates: DocumentTemplate[];
  lang: Locale;
  categoryPath: string;
  dict: any;
};

const CATEGORIES = [
  'Företag & Affärer',
  'Privat & Övrigt',
  'Bostad & Fastighet',
  'Arbete & HR',
  'Familj & Relationer'
];

export default function TemplateFilter({ templates, lang, categoryPath, dict }: TemplateFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Alla');

  const filteredTemplates = templates.filter(template => {
    if (!template) return false;
    const templateTitle = typeof template.title === 'string' ? template.title : (template.title[lang] || template.title['en'] || template.title['sv'] || '');
    const templateDesc = typeof template.description === 'string' ? template.description : (template.description[lang] || template.description['en'] || template.description['sv'] || '');
    
    const titleMatch = templateTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const descMatch = templateDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSearch = titleMatch || descMatch;
    const matchesCategory = activeCategory === 'Alla' || template.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Group templates by their category for rendering
  const templatesByCategory: Record<string, typeof templates> = {};
  CATEGORIES.forEach(cat => {
    templatesByCategory[cat] = filteredTemplates.filter(t => t?.category === cat);
  });

  return (
    <>
      <style>{`
        .filter-header-section {
          background-color: #0b1120;
          color: white;
          padding: 4rem 2rem 0 2rem;
        }
        .filter-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .filter-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .search-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 18px;
          height: 18px;
        }
        .dark-search-input {
          width: 100%;
          background: #1e293b;
          border: 1px solid #334155;
          color: white;
          padding: 0.8rem 1rem 0.8rem 2.5rem;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: all 0.2s;
        }
        .dark-search-input:focus {
          border-color: #f59e0b;
          box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
        }
        .chip-container {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-bottom: 1.5rem;
        }
        .filter-chip {
          background: #1e293b;
          color: #cbd5e1;
          border: 1px solid #334155;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-chip:hover {
          background: #334155;
          color: white;
        }
        .filter-chip.active {
          background: #f59e0b;
          color: #000;
          border-color: #f59e0b;
          font-weight: 500;
        }
        .content-section {
          padding: 4rem 2rem;
        }
      `}</style>

      <div className="filter-header-section">
        <div className="filter-container">
          <div className="filter-top-row">
            <div>
              <h1 style={{ fontSize: '3rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>
                {dict?.templatesPage?.title || 'Dokumentbibliotek'}
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#94a3b8', margin: 0 }}>
                {dict?.templatesPage?.subtitle || `Välj kategori för att filtrera bland våra ${templates.length} juridiska mallar.`}
              </p>
            </div>
            <div className="search-wrapper">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder={dict?.templatesPage?.searchPlaceholder || "Sök t.ex. 'sambo'..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="dark-search-input"
              />
            </div>
          </div>

          <div className="chip-container">
            <button 
              className={`filter-chip ${activeCategory === 'Alla' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Alla')}
            >
              Alla
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div style={{ height: '1px', background: '#1e293b', width: '100%' }}></div>
        </div>
      </div>

      <div className="content-section">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {filteredTemplates.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.2rem' }}>{dict?.templatesPage?.noResults || 'Inga resultat.'}</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('Alla'); }}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', textDecoration: 'underline', cursor: 'pointer', marginTop: '1rem', fontSize: '1rem' }}
              >
                Rensa filter
              </button>
            </div>
          ) : (
            <>
              {CATEGORIES.map(cat => {
                const catTemplates = templatesByCategory[cat];
                if (!catTemplates || catTemplates.length === 0) return null;
                if (activeCategory !== 'Alla' && activeCategory !== cat) return null;

                return (
                  <div key={cat} style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', borderBottom: '2px solid #1e293b', paddingBottom: '1rem', color: 'var(--foreground)' }}>
                      {cat}
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                      {catTemplates.map(template => {
                        const templateTitle = typeof template.title === 'string' ? template.title : (template.title[lang] || template.title['en'] || template.title['sv']);
                        const templateDesc = typeof template.description === 'string' ? template.description : (template.description[lang] || template.description['en'] || template.description['sv']);
                        
                        return (
                          <a 
                            key={template.slugs['sv']} 
                            href={`/${lang}/${categoryPath}/${template.slugs[lang] || template.slugs['en']}`}
                            className="template-card"
                            style={{ display: 'block', padding: '2rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
                          >
                            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', marginBottom: '0.75rem', fontWeight: 600 }}>{cat}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#0f172a' }}>{templateTitle}</h3>
                            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{templateDesc}</p>
                            
                            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: '#d97706', fontWeight: 500, fontSize: '0.9rem', gap: '0.5rem' }}>
                              {dict?.header?.createDoc || 'Skapa Dokument'}
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
