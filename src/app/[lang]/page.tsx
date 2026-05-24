import { getDictionary } from '../../dictionaries';
import { Locale, categoryTranslations } from '../../i18n-config';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = getDictionary(lang).home;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '6rem 1rem' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        
        {/* Decorative elements representing legal documents */}
        <div style={{ position: 'relative', height: '250px', display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          {/* Back document (White) */}
          <div style={{ position: 'absolute', top: '20px', transform: 'rotate(-5deg)', background: '#fff', padding: '1.2rem', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '200px', height: '240px', zIndex: 1, left: 'calc(50% - 140px)', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: '#333' }}>Standard NDA</div>
            <div style={{ width: '100%', height: '6px', background: '#e5e7eb', borderRadius: '3px', marginBottom: '8px' }}></div>
            <div style={{ width: '85%', height: '6px', background: '#e5e7eb', borderRadius: '3px', marginBottom: '8px' }}></div>
            <div style={{ width: '95%', height: '6px', background: '#e5e7eb', borderRadius: '3px', marginBottom: '20px' }}></div>
            <div style={{ width: '40%', height: '6px', background: '#e5e7eb', borderRadius: '3px', marginBottom: '8px' }}></div>
            <div style={{ width: '100%', height: '6px', background: '#e5e7eb', borderRadius: '3px', marginBottom: '8px' }}></div>
            
            <div style={{ position: 'absolute', bottom: '20px', left: '1.2rem', right: '1.2rem', borderTop: '1px dashed #ccc', paddingTop: '10px' }}>
               <div style={{ fontSize: '0.6rem', color: '#999', marginBottom: '4px', textTransform: 'uppercase' }}>Signature</div>
               <div style={{ width: '60%', height: '2px', background: '#333' }}></div>
            </div>
          </div>
          
          {/* Front document (Dark theme/Veridoca primary) */}
          <div style={{ position: 'absolute', top: '0', transform: 'rotate(5deg)', background: '#1e293b', border: '1px solid #334155', color: '#fff', padding: '1.2rem', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', width: '220px', height: '220px', zIndex: 2, right: 'calc(50% - 150px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.9 }}>Veridoca</div>
            </div>
            
            <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>Legal Validity</div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.9rem', alignItems: 'center' }}>
              <span style={{ opacity: 0.9 }}>GDPR Compliant</span>
              <span style={{ background: '#4ade80', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', color: '#064e3b', fontWeight: 600 }}>100%</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.9rem', alignItems: 'center' }}>
              <span style={{ opacity: 0.9 }}>E-Signature</span>
              <span style={{ background: '#4ade80', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', color: '#064e3b', fontWeight: 600 }}>Secured</span>
            </div>

            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.15)', margin: '15px 0' }}></div>
            <div style={{ fontSize: '0.75rem', opacity: 0.7, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Bank-grade Security
            </div>
          </div>
        </div>

        <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
          {dict.titleLine1}<br />{dict.titleLine2}
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
          {dict.subtitle}
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href={`/${lang}/${categoryTranslations[lang] || 'templates'}`} className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>{dict.createNow}</a>
          <a href={`/${lang}/${categoryTranslations[lang] || 'templates'}`} className="btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>{dict.viewTemplates}</a>
        </div>
      </div>

    </div>
  );
}
