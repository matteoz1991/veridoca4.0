import { notFound } from 'next/navigation';
import { templates } from '../../../../data/templates';
import { categoryTranslations, localeRegions, Locale } from '../../../../i18n-config';
import type { Metadata, ResolvingMetadata } from 'next';
import TemplateTool from '../../../../components/TemplateTool';

type Props = {
  params: Promise<{ lang: string; slug: string }>
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang as Locale;
  const slug = params.slug;

  const template = templates.find(t => Object.values(t.slugs).includes(slug));
  if (!template) return {};

  const categoryPath = categoryTranslations[lang] || 'templates';
  const localSlug = template.slugs[lang] || template.slugs['en'];
  const fullUrl = `https://veridoca.com/${lang}/${categoryPath}/${localSlug}`;
  
  const titleStr = typeof template.title === 'string' ? template.title : (template.title[lang] ?? template.title['sv'] ?? template.title['en'] ?? '');
  const descStr = typeof template.description === 'string' ? template.description : (template.description[lang] ?? template.description['sv'] ?? template.description['en'] ?? '');

  return {
    title: `${titleStr} | Veridoca`,
    description: descStr,
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title: `${titleStr} | Veridoca`,
      description: descStr,
      url: fullUrl,
      siteName: 'Veridoca',
      locale: localeRegions[lang],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${titleStr} | Veridoca`,
      description: descStr,
    }
  };
}

export default async function TemplatePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const lang = resolvedParams.lang as Locale;
  
  // Find the template where any of its translated slugs matches the URL
  const template = templates.find(t => Object.values(t.slugs).includes(slug));
  
  if (!template) {
    notFound();
  }

  return <TemplateTool slug={slug} lang={lang} />;
}
