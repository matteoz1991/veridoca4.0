import { notFound } from 'next/navigation';
import { guides } from '../../../../data/guides';
import type { Metadata } from 'next';

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { lang, slug } = await props.params;
  if (lang !== 'sv') return {};
  const guide = guides.find(g => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Veridoca`,
    description: guide.metaDescription,
    alternates: { canonical: `https://veridoca.com/sv/guider/${slug}` },
    openGraph: {
      title: `${guide.title} | Veridoca`,
      description: guide.metaDescription,
      url: `https://veridoca.com/sv/guider/${slug}`,
      siteName: 'Veridoca',
      type: 'article',
    },
  };
}

export default async function GuidePage(props: Props) {
  const { lang, slug } = await props.params;
  if (lang !== 'sv') notFound();
  const guide = guides.find(g => g.slug === slug);
  if (!guide) notFound();

  const publishDate = new Date(guide.publishedAt).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: guide.title,
            description: guide.metaDescription,
            datePublished: guide.publishedAt,
            author: { '@type': 'Organization', name: 'Veridoca' },
            publisher: { '@type': 'Organization', name: 'Veridoca', url: 'https://veridoca.com' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: guide.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />

      <div style={{ minHeight: 'calc(100vh - 80px)', padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <a href="/sv" style={{ color: 'var(--text-muted)' }}>Hem</a>
            {' / '}
            <a href="/sv/guider" style={{ color: 'var(--text-muted)' }}>Guider</a>
            {' / '}
            <span style={{ color: 'var(--foreground)' }}>{guide.title}</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', background: 'rgba(245,158,11,0.1)', padding: '3px 10px', borderRadius: '999px' }}>
              {guide.category}
            </span>
            <h1 style={{ fontSize: '2.25rem', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.3 }}>{guide.title}</h1>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <span>Publicerad: {publishDate}</span>
              <span>{guide.readTime} min läsning</span>
              <span>Veridoca Legal Team</span>
            </div>
          </div>

          {/* Article content */}
          <article
            className="seo-article"
            style={{
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              fontSize: '1rem',
            }}
          >
            {guide.content}
          </article>

          {/* FAQ */}
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Vanliga frågor</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {guide.faqs.map(faq => (
                <details
                  key={faq.question}
                  style={{ background: 'var(--accent)', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)' }}
                >
                  <summary style={{ fontWeight: 600, cursor: 'pointer', listStyle: 'none', color: 'var(--foreground)', fontSize: '0.975rem' }}>
                    {faq.question}
                  </summary>
                  <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.925rem' }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '1rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Skapa ditt avtal gratis</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Välj bland 25+ juridiskt granskade mallar och ladda ner din PDF direkt. Inget konto krävs.
            </p>
            <a href="/sv/mallar" className="btn-primary" style={{ padding: '0.875rem 2rem', display: 'inline-block' }}>
              Se alla mallar
            </a>
          </div>

          {/* Other guides */}
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Fler guider</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {guides.filter(g => g.slug !== slug).slice(0, 3).map(g => (
                <a
                  key={g.slug}
                  href={`/sv/guider/${g.slug}`}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', background: 'var(--accent)', borderRadius: '0.75rem', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--foreground)', fontSize: '0.925rem' }}
                >
                  <span>{g.title}</span>
                  <span style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>{g.readTime} min →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
