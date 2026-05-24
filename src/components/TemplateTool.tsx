"use client";

import React, { useState } from 'react';
import { templates } from '../data/templates';
import Breadcrumbs from './Breadcrumbs';
import { Locale } from '../i18n-config';

export default function TemplateTool({ slug, lang }: { slug: string; lang: Locale }) {
  const template = templates.find(t => Object.values(t.slugs).includes(slug));
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!template) return null;

  const templateTitle = typeof template.title === 'string' ? template.title : (template.title[lang] || template.title['en'] || template.title['sv']);
  const templateDesc = typeof template.description === 'string' ? template.description : (template.description[lang] || template.description['en'] || template.description['sv']);
  const templateFields = Array.isArray(template.fields) ? template.fields : (template.fields[lang] || template.fields['en'] || template.fields['sv']);
  const templateFaqs = Array.isArray(template.faqs) ? template.faqs : (template.faqs ? (template.faqs[lang] || template.faqs['en'] || template.faqs['sv']) : undefined);
  
  // seoArticle checking is trickier since it's a ReactNode or an object mapping to ReactNode.
  // We assume if it has a 'sv' or 'en' property, it's a Record.
  const isSeoRecord = template.seoArticle && !React.isValidElement(template.seoArticle) && typeof template.seoArticle === 'object' && ('sv' in template.seoArticle || 'en' in template.seoArticle);
  const templateSeoArticle = isSeoRecord ? (template.seoArticle as Record<string, React.ReactNode>)[lang] || (template.seoArticle as Record<string, React.ReactNode>)['en'] || (template.seoArticle as Record<string, React.ReactNode>)['sv'] : template.seoArticle as React.ReactNode;

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    try {
      const element = document.querySelector('.document-paper');
      if (!element) return;
      
      // html2canvas blank page bug workaround: scroll to top and explicitly set windowHeight/scrollY
      const originalScrollY = window.scrollY;
      window.scrollTo(0, 0);
      
      // Dynamically import html2pdf to avoid Next.js SSR issues
      const html2pdf = (await import('html2pdf.js')).default;
      
      const opt = {
        margin:       15,
        filename:     `${templateTitle.toLowerCase().replace(/[^a-z0-9]/gi, '-')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
          scale: 2, 
          useCORS: true,
          scrollY: 0,
          windowHeight: document.documentElement.scrollHeight
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      // Generate PDF as Blob
      const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');
      
      // Manually trigger download to ensure correct filename
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = opt.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      window.scrollTo(0, originalScrollY);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Kunde inte generera PDF. Försök igen.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <>
      {templateFaqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": templateFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      )}
      
      <div className="template-tool-section" style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
        {/* Left Sidebar: Form Builder */}
        <div className="form-sidebar no-print">
          <Breadcrumbs 
            lang={lang} 
            items={[
              { label: 'Dokument', href: `/${lang}/templates` },
              { label: templateTitle }
            ]} 
          />
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {template.category}
            </div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{templateTitle}</h1>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{templateDesc}</p>
          </div>

          <div className="form-fields">
            {templateFields.map(field => (
              <div key={field.id} className="form-group">
                <label htmlFor={field.id} className="form-label">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    className="form-input"
                    placeholder={field.placeholder}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    rows={4}
                  />
                ) : (
                  <input
                    id={field.id}
                    type={field.type}
                    className="form-input"
                    placeholder={field.placeholder}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            <button 
              className="btn-primary" 
              style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', opacity: isGeneratingPdf ? 0.7 : 1, cursor: isGeneratingPdf ? 'not-allowed' : 'pointer' }} 
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
            >
              {isGeneratingPdf ? (
                <>
                  <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                  </svg>
                  <style>{`
                    @keyframes spin {
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
                  {lang === 'sv' ? 'Genererar PDF...' : 'Generating PDF...'}
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  {lang === 'sv' ? 'Ladda ner som PDF' : 'Download as PDF'}
                </>
              )}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
              {lang === 'sv' ? '100% gratis. Inget konto krävs.' : '100% free. No account required.'}
            </p>
          </div>
        </div>

        {/* Right Content: Live Preview */}
        <div className="preview-container">
          <div className="document-paper">
            {template.content(formData, lang)}
          </div>
        </div>
      </div>

      {/* SEO Thick Content Section */}
      <div className="seo-content-section no-print" style={{ background: 'white', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {templateSeoArticle && (
            <article className="seo-article">
              {templateSeoArticle}
            </article>
          )}

          {templateFaqs && (
            <div className="faqs-section" style={{ marginTop: '4rem' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Vanliga Frågor (FAQ)</h2>
              {templateFaqs.map((faq, index) => (
                <details key={index} style={{ marginBottom: '1rem', background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <summary style={{ fontWeight: 600, cursor: 'pointer', outline: 'none' }}>{faq.question}</summary>
                  <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          )}

          {template.author && (
            <div className="author-byline" style={{ marginTop: '4rem', padding: '2rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '64px', height: '64px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {template.author.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Granskat av {template.author.name}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{template.author.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
