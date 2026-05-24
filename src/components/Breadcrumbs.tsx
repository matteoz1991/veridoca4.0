import Link from 'next/link';

interface BreadcrumbsProps {
  lang: string;
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({ lang, items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.85rem' }}>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link href={`/${lang}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Hem</Link>
          <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              {isLast ? (
                <span style={{ color: 'var(--foreground)', fontWeight: 500 }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href || '#'} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                  <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
