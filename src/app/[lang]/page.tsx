import { getDictionary } from '../../dictionaries';
import { Locale, categoryTranslations } from '../../i18n-config';
import { templates } from '../../data/templates';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;

  const titles: Partial<Record<Locale, string>> = {
    sv: 'Veridoca – Gratis Juridiska Avtal & Avtalsmallar',
    en: 'Veridoca – Free Legal Document Templates',
    de: 'Veridoca – Kostenlose Rechtsvorlagen',
    fr: 'Veridoca – Modèles Juridiques Gratuits',
    es: 'Veridoca – Plantillas Legales Gratuitas',
  };
  const descriptions: Partial<Record<Locale, string>> = {
    sv: 'Skapa gratis juridiska avtal på minuter. Samboavtal, anställningsavtal, sekretessavtal och 25+ mallar. Ladda ner som PDF. Inget konto krävs.',
    en: 'Generate free professional legal documents in minutes. NDA, employment contracts, and 25+ templates. Download as PDF. No account required.',
    de: 'Erstellen Sie kostenlos professionelle Rechtsdokumente in Minuten. NDA, Arbeitsverträge und 25+ Vorlagen. Als PDF herunterladen.',
    fr: 'Créez gratuitement des documents juridiques en minutes. 25+ modèles. Téléchargez en PDF.',
    es: 'Cree documentos legales gratuitos en minutos. 25+ plantillas. Descargue como PDF.',
  };

  const title = titles[lang] ?? titles['en']!;
  const description = descriptions[lang] ?? descriptions['en']!;

  return {
    title,
    description,
    alternates: { canonical: `https://veridoca.com/${lang}` },
    openGraph: { title, description, url: `https://veridoca.com/${lang}`, siteName: 'Veridoca', type: 'website' },
  };
}

const t = (lang: Locale, sv: string, en: string) => lang === 'sv' ? sv : en;

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = getDictionary(lang).home;
  const categoryPath = categoryTranslations[lang] || 'templates';

  const popularSlugs = ['samboavtal', 'sekretessavtal-nda', 'anstallningsavtal', 'skuldebrev', 'testamente', 'aktenskapsforord'];
  const popularTemplates = popularSlugs.map(slug => templates.find(t => t.slugs['sv'] === slug)).filter(Boolean);

  const faqItems = lang === 'sv' ? [
    { q: 'Är Veridocas avtalsmallar juridiskt giltiga?', a: 'Ja. Mallarna är utformade i enlighet med svensk lagstiftning och är juridiskt bindande när de fylls i och undertecknas korrekt av parterna. Tänk dock på att komplicerade situationer alltid bör stämmas av med en jurist.' },
    { q: 'Kostar det något att använda Veridoca?', a: 'Nej, alla mallar och dokument på Veridoca är helt gratis. Tjänsten finansieras via annonser.' },
    { q: 'Måste jag skapa ett konto?', a: 'Nej, du behöver inget konto. Välj din mall, fyll i uppgifterna och ladda ner PDF:en direkt – utan registrering.' },
    { q: 'Kan jag ändra ett dokument efter att jag laddat ner det?', a: 'Ja, du kan gå tillbaka till generatorn och ändra uppgifterna när som helst och ladda ner en ny version gratis.' },
    { q: 'Sparar ni mina personuppgifter?', a: 'Nej. All data du fyller i bearbetas lokalt i din webbläsare och skickas aldrig till våra servrar. Vi sparar inga personuppgifter från dina formulär.' },
  ] : [
    { q: 'Are Veridoca\'s templates legally valid?', a: 'Yes. Our templates are designed in accordance with applicable law and are legally binding when properly completed and signed by the parties. For complex situations, always consult a licensed attorney.' },
    { q: 'Is Veridoca free to use?', a: 'Yes, all templates on Veridoca are completely free. The service is funded by advertising.' },
    { q: 'Do I need to create an account?', a: 'No account required. Choose a template, fill in the details, and download your PDF instantly.' },
    { q: 'Can I edit a document after downloading?', a: 'Yes, you can return to the generator at any time, update the details, and download a new version for free.' },
    { q: 'Do you store my personal data?', a: 'No. All data you enter is processed locally in your browser and is never sent to our servers.' },
  ];

  const guides = [
    { slug: 'hur-fungerar-juridiska-avtal', title: t(lang, 'Hur fungerar juridiska avtal i Sverige?', 'How do legal contracts work?') },
    { slug: 'muntliga-avtal-giltiga', title: t(lang, 'Är muntliga avtal juridiskt giltiga?', 'Are verbal agreements legally valid?') },
    { slug: 'mall-eller-jurist', title: t(lang, 'Gratis avtalsmall eller jurist – vad passar dig?', 'Free template or lawyer – which do you need?') },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Veridoca',
            url: 'https://veridoca.com',
            description: lang === 'sv'
              ? 'Gratis juridiska avtalsmallar för privatpersoner och företag.'
              : 'Free professional legal document templates for individuals and businesses.',
          }),
        }}
      />

      {/* ── Hero ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '6rem 1rem 3rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'relative', height: '250px', display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'absolute', top: '20px', transform: 'rotate(-5deg)', background: '#fff', padding: '1.2rem', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '200px', height: '240px', zIndex: 1, left: 'calc(50% - 140px)', border: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: '#333' }}>Standard NDA</div>
              {[100, 85, 95, 40, 100].map((w, i) => <div key={i} style={{ width: `${w}%`, height: '6px', background: '#e5e7eb', borderRadius: '3px', marginBottom: '8px' }} />)}
              <div style={{ position: 'absolute', bottom: '20px', left: '1.2rem', right: '1.2rem', borderTop: '1px dashed #ccc', paddingTop: '10px' }}>
                <div style={{ fontSize: '0.6rem', color: '#999', marginBottom: '4px', textTransform: 'uppercase' }}>Signature</div>
                <div style={{ width: '60%', height: '2px', background: '#333' }} />
              </div>
            </div>
            <div style={{ position: 'absolute', top: '0', transform: 'rotate(5deg)', background: '#1e293b', border: '1px solid #334155', color: '#fff', padding: '1.2rem', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', width: '220px', height: '220px', zIndex: 2, right: 'calc(50% - 150px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.9 }}>Veridoca</div>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>Legal Validity</div>
              {[['GDPR Compliant', '100%'], ['E-Signature', 'Secured']].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.9rem', alignItems: 'center' }}>
                  <span style={{ opacity: 0.9 }}>{label}</span>
                  <span style={{ background: '#4ade80', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', color: '#064e3b', fontWeight: 600 }}>{val}</span>
                </div>
              ))}
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.15)', margin: '15px 0' }} />
              <div style={{ fontSize: '0.75rem', opacity: 0.7, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Bank-grade Security
              </div>
            </div>
          </div>

          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            {dict.titleLine1}<br />{dict.titleLine2}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            {dict.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href={`/${lang}/${categoryPath}`} className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>{dict.createNow}</a>
            <a href={`/${lang}/${categoryPath}`} className="btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>{dict.viewTemplates}</a>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
          {[
            ['25+', t(lang, 'Juridiska mallar', 'Legal templates')],
            ['100%', t(lang, 'Gratis', 'Free')],
            ['0', t(lang, 'Konto krävs', 'Account needed')],
            ['PDF', t(lang, 'Direktnedladdning', 'Instant download')],
          ].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)' }}>{num}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <section style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '0.75rem' }}>
          {t(lang, 'Så här fungerar det', 'How it works')}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          {t(lang,
            'Tre enkla steg för att skapa ditt juridiska dokument – helt gratis.',
            'Three simple steps to create your legal document – completely free.')}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {[
            {
              step: '1',
              title: t(lang, 'Välj din mall', 'Choose your template'),
              desc: t(lang,
                'Välj bland 25+ juridiskt granskade avtalsmallar anpassade för Sverige.',
                'Choose from 25+ legally reviewed document templates tailored for your needs.'),
            },
            {
              step: '2',
              title: t(lang, 'Fyll i uppgifterna', 'Enter your details'),
              desc: t(lang,
                'Fyll i formuläret. Dokumentet uppdateras i realtid i förhandsgranskningen.',
                'Fill in the form. The document updates in real time in the live preview.'),
            },
            {
              step: '3',
              title: t(lang, 'Ladda ner som PDF', 'Download as PDF'),
              desc: t(lang,
                'Klicka på ladda ner och få en professionell PDF direkt. Inget konto krävs.',
                'Click download and get a professional PDF instantly. No account required.'),
            },
          ].map(({ step, title, desc }) => (
            <div key={step} style={{ background: 'var(--accent)', borderRadius: '1rem', padding: '2rem', position: 'relative' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000', marginBottom: '1rem' }}>{step}</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--foreground)' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular contracts ── */}
      <section style={{ padding: '3rem 2rem 5rem', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '0.75rem' }}>
            {t(lang, 'Populära avtalsmallar', 'Popular Legal Templates')}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            {t(lang,
              'De mest använda juridiska dokumenten – välj och skapa ditt direkt.',
              'The most commonly used legal documents – choose and create yours instantly.')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {popularTemplates.map(tmpl => {
              if (!tmpl) return null;
              const title = typeof tmpl.title === 'string' ? tmpl.title : (tmpl.title[lang] || tmpl.title['sv']);
              const desc = typeof tmpl.description === 'string' ? tmpl.description : (tmpl.description[lang] || tmpl.description['sv']);
              const slug = tmpl.slugs[lang] || tmpl.slugs['sv'];
              return (
                <a
                  key={slug}
                  href={`/${lang}/${categoryPath}/${slug}`}
                  style={{ display: 'block', background: 'var(--card-bg)', color: 'var(--card-foreground)', borderRadius: '0.75rem', padding: '1.5rem', textDecoration: 'none', border: '1px solid var(--border)', transition: 'all 0.2s' }}
                  className="template-card"
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{tmpl.category}</div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--card-foreground)', fontFamily: 'var(--font-serif)' }}>{title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{typeof desc === 'string' ? desc.slice(0, 100) : ''}...</p>
                  <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>
                    {t(lang, 'Skapa gratis →', 'Create free →')}
                  </div>
                </a>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href={`/${lang}/${categoryPath}`} className="btn-outline" style={{ padding: '0.875rem 2rem' }}>
              {t(lang, 'Se alla 25+ mallar', 'View all 25+ templates')}
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Veridoca ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '0.75rem' }}>
            {t(lang, 'Varför välja Veridoca?', 'Why choose Veridoca?')}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            {t(lang,
              'Vi gör juridisk trygghet tillgänglig för alla – utan kostnad.',
              'We make legal security accessible to everyone – at no cost.')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: '⚖️',
                title: t(lang, 'Juridiskt granskat', 'Legally reviewed'),
                desc: t(lang,
                  'Alla mallar är utformade och regelbundet uppdaterade i enlighet med gällande svensk lagstiftning.',
                  'All templates are drafted and regularly updated in accordance with applicable law.'),
              },
              {
                icon: '🔓',
                title: t(lang, 'Inget konto krävs', 'No account required'),
                desc: t(lang,
                  'Inga registreringar, inga lösenord, inga prenumerationer. Bara välj, fyll i och ladda ner.',
                  'No sign-ups, passwords, or subscriptions. Just choose, fill in, and download.'),
              },
              {
                icon: '💰',
                title: t(lang, 'Spara tusenlappar', 'Save thousands'),
                desc: t(lang,
                  'En jurist kostar 1 000–5 000 kr/h. Veridocas mallar ger dig samma juridiska trygghet – gratis.',
                  'A lawyer charges 100–500 €/h. Veridoca gives you the same legal security – for free.'),
              },
              {
                icon: '🔒',
                title: t(lang, 'Integritetsskyddad', 'Privacy protected'),
                desc: t(lang,
                  'Dina uppgifter lämnar aldrig din webbläsare. Vi lagrar inga persondata från dina formulär.',
                  'Your data never leaves your browser. We store no personal data from your forms.'),
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we offer (informational text for Google) ── */}
      <section style={{ padding: '3rem 2rem 4rem', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            {t(lang, 'Gratis juridiska avtalsmallar för privatpersoner och företag', 'Free legal document templates for individuals and businesses')}
          </h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.975rem' }}>
            {lang === 'sv' ? (
              <>
                <p>Veridoca är en kostnadsfri plattform för juridiska avtalsmallar som hjälper både privatpersoner och företag att skapa professionella juridiska dokument på bara några minuter. Vi erbjuder över 25 juridiskt granskade mallar – från samboavtal och äktenskapsförord till anställningsavtal, sekretessavtal och aktieöverlåtelser.</p>
                <p style={{ marginTop: '1rem' }}>Att anlita en jurist för att upprätta ett standardavtal kan kosta tusentals kronor och ta flera dagar. Med Veridoca fyller du i ett enkelt formulär och laddar ner ett professionellt PDF-dokument direkt – utan kostnad och utan registrering. Alla mallar är utformade i enlighet med svensk lagstiftning och uppdateras regelbundet.</p>
                <p style={{ marginTop: '1rem' }}>Vi tror att grundläggande juridisk trygghet borde vara tillgänglig för alla, oavsett ekonomisk situation. Vare sig du behöver ett enkelt skuldebrev mellan vänner, ett andrahandskontrakt för din lägenhet, eller ett fullständigt aktieägaravtal för ditt bolag – Veridoca har den mall du behöver.</p>
                <p style={{ marginTop: '1rem' }}>Tjänsten finansieras via annonser, vilket gör att vi kan hålla samtliga mallar gratis för användaren. Läs gärna våra guider om juridiska avtal för att lära dig mer om när och hur du bör använda olika typer av avtal.</p>
              </>
            ) : (
              <>
                <p>Veridoca is a free platform for legal document templates that helps both individuals and businesses create professional legal documents in just minutes. We offer over 25 legally reviewed templates – from cohabitation agreements and prenuptial agreements to employment contracts, NDAs, and share transfer agreements.</p>
                <p style={{ marginTop: '1rem' }}>Hiring a lawyer to draft a standard contract can cost thousands of dollars and take several days. With Veridoca, you fill in a simple form and download a professional PDF document instantly – free of charge and without registration.</p>
                <p style={{ marginTop: '1rem' }}>We believe that basic legal protection should be accessible to everyone, regardless of financial situation. Whether you need a simple loan agreement between friends, a subletting contract, or a complete shareholder agreement for your company – Veridoca has the template you need.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '0.75rem' }}>
            {t(lang, 'Vanliga frågor', 'Frequently asked questions')}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            {t(lang, 'Svar på de vanligaste frågorna om Veridoca.', 'Answers to the most common questions about Veridoca.')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqItems.map(({ q, a }) => (
              <details key={q} style={{ background: 'var(--accent)', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)' }}>
                <summary style={{ fontWeight: 600, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem' }}>
                  {q}
                  <span style={{ color: 'var(--primary)', fontSize: '1.25rem', lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guides teaser ── */}
      <section style={{ padding: '3rem 2rem 6rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            {t(lang, 'Lär dig mer – juridiska guider', 'Learn more – legal guides')}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            {t(lang,
              'Gratis guider som hjälper dig förstå när och hur du bör använda juridiska avtal.',
              'Free guides that help you understand when and how to use legal contracts.')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {guides.map(g => (
              <a
                key={g.slug}
                href={`/sv/guider/${g.slug}`}
                style={{ display: 'block', background: 'var(--accent)', borderRadius: '0.75rem', padding: '1.5rem', textDecoration: 'none', border: '1px solid var(--border)', transition: 'all 0.2s' }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                  {t(lang, 'Guide', 'Guide')}
                </div>
                <h3 style={{ fontSize: '0.975rem', color: 'var(--foreground)', lineHeight: 1.5 }}>{g.title}</h3>
                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {t(lang, 'Läs guiden →', 'Read guide →')}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
