import Link from 'next/link';
import { getDictionary } from '../dictionaries';
import { Locale } from '../i18n-config';

export default function Footer({ lang }: { lang: string }) {
  const currentYear = new Date().getFullYear();
  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <footer style={{ background: 'var(--sidebar-bg)', color: 'white', padding: '4rem 2rem 2rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '4px', transform: 'rotate(45deg)' }}></div>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600 }}>Veridoca</span>
          </div>
          <p style={{ color: '#a0aec0', lineHeight: 1.6, fontSize: '0.9rem' }}>
            {dict.footer.description}
          </p>
        </div>

        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem' }}>{dict.header.business}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link href={`/${lang}/templates/sekretessavtal-nda`} style={{ color: '#a0aec0', textDecoration: 'none' }}>Sekretessavtal (NDA)</Link></li>
            <li><Link href={`/${lang}/templates/samarbetsavtal`} style={{ color: '#a0aec0', textDecoration: 'none' }}>Samarbetsavtal</Link></li>
            <li><Link href={`/${lang}/templates/aktieagaravtal`} style={{ color: '#a0aec0', textDecoration: 'none' }}>Aktieägaravtal</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem' }}>{dict.header.private}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link href={`/${lang}/templates/testamente`} style={{ color: '#a0aec0', textDecoration: 'none' }}>Testamente</Link></li>
            <li><Link href={`/${lang}/templates/enkelt-skuldebrev`} style={{ color: '#a0aec0', textDecoration: 'none' }}>Enkelt skuldebrev</Link></li>
            <li><Link href={`/${lang}/templates/framtidsfullmakt`} style={{ color: '#a0aec0', textDecoration: 'none' }}>Framtidsfullmakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem' }}>{dict.footer.infoAndLegal}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link href={`/${lang}/about`} style={{ color: '#a0aec0', textDecoration: 'none' }}>{dict.footer.aboutUs}</Link></li>
            <li><Link href={`/${lang}/contact`} style={{ color: '#a0aec0', textDecoration: 'none' }}>{dict.footer.contact}</Link></li>
            <li><Link href={`/${lang}/privacy-policy`} style={{ color: '#a0aec0', textDecoration: 'none' }}>{dict.footer.privacyPolicy}</Link></li>
            <li><Link href={`/${lang}/terms-of-service`} style={{ color: '#a0aec0', textDecoration: 'none' }}>{dict.footer.termsOfService}</Link></li>
            <li><Link href={`/${lang}/disclaimer`} style={{ color: '#a0aec0', textDecoration: 'none' }}>{dict.footer.disclaimer}</Link></li>
            <li><Link href={`/${lang}/impressum`} style={{ color: '#a0aec0', textDecoration: 'none' }}>{dict.footer.impressum}</Link></li>
          </ul>
        </div>

      </div>
      
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: '#718096' }}>
        <div>&copy; {currentYear} Veridoca (Digisoul Media). {dict.footer.copyright}</div>
        <div>
          {dict.footer.adSupported}
        </div>
      </div>
    </footer>
  );
}
