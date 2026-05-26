import { notFound } from 'next/navigation';
import { guides } from '../../../data/guides';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  if (resolvedParams.lang !== 'sv') return {};
  return {
    title: 'Juridiska Guider – Lär dig om avtal och juridik | Veridoca',
    description: 'Gratis juridiska guider om avtal, sambolagen, äktenskapsförord och mer. Lär dig när du behöver ett avtal och hur du skyddar dig juridiskt i Sverige.',
    alternates: { canonical: 'https://veridoca.com/sv/guider' },
  };
}

export default async function GuidesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  if (resolvedParams.lang !== 'sv') notFound();

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <a href="/sv" style={{ color: 'var(--text-muted)' }}>Hem</a> / Guider
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Juridiska guider</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6, maxWidth: '650px' }}>
          Gratis guider som hjälper dig förstå juridiska avtal, dina rättigheter och när du behöver olika typer av dokument.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.5rem' }}>
          {guides.map(guide => (
            <a
              key={guide.slug}
              href={`/sv/guider/${guide.slug}`}
              style={{ display: 'block', background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '2rem', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', background: 'rgba(245,158,11,0.1)', padding: '3px 10px', borderRadius: '999px' }}>
                  {guide.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{guide.readTime} min läsning</span>
              </div>
              <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: 1.4, color: 'var(--foreground)' }}>{guide.title}</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {guide.metaDescription.slice(0, 120)}...
              </p>
              <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600 }}>
                Läs guiden →
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '5rem', padding: '2.5rem', background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Redo att skapa ditt avtal?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Välj bland 25+ gratis juridiska mallar och ladda ner din PDF på minuter.
          </p>
          <a href="/sv/mallar" className="btn-primary" style={{ padding: '0.875rem 2rem', display: 'inline-block' }}>
            Se alla mallar
          </a>
        </div>
      </div>
    </div>
  );
}
