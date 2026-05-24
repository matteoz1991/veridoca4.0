import { getDictionary } from '../../../dictionaries';
import { Locale, categoryTranslations } from '../../../i18n-config';
import { templates } from '../../../data/templates';
import TemplateFilter from '../../../components/TemplateFilter';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = getDictionary(lang);
  
  return {
    title: `${dict.templatesPage.title} | Veridoca`,
    description: dict.templatesPage.subtitle,
  };
}

export default async function TemplatesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = getDictionary(lang);
  
  const categoryPath = categoryTranslations[lang] || 'templates';

  // Strip non-serializable properties (like functions) before passing to Client Component
  const serializableTemplates = templates.map(t => ({
    title: t.title,
    description: t.description,
    category: t.category,
    slugs: t.slugs
  }));

  return (
    <>
      <style>{`
        .template-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.06) !important;
          border-color: var(--primary) !important;
        }
      `}</style>
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <TemplateFilter 
          templates={serializableTemplates as any}
          lang={lang}
          categoryPath={categoryPath}
          dict={dict}
        />
      </div>
    </>
  );
}
