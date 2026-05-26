import { MetadataRoute } from 'next';
import { templates } from '../data/templates';
import { guides } from '../data/guides';
import { i18n, localeRegions, categoryTranslations, Locale } from '../i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veridoca.com';
  
  const staticRoutes = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/about',
    '/contact',
    '/disclaimer',
    '/impressum',
  ];

  const routes: MetadataRoute.Sitemap = [];

  // 1. Generate Static Routes
  staticRoutes.forEach((route) => {
    // Build the alternates object for this static route
    const alternates: Record<string, string> = {
      'x-default': `${baseUrl}/en${route}`
    };
    
    i18n.locales.forEach(locale => {
      alternates[localeRegions[locale]] = `${baseUrl}/${locale}${route}`;
    });

    i18n.locales.forEach((locale) => {
      routes.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: alternates
        }
      });
    });
  });

  // 2. Generate Template Routes
  templates.forEach((template) => {
    // Build the alternates object for this template
    const alternates: Record<string, string> = {
      'x-default': `${baseUrl}/en/${categoryTranslations['en']}/${template.slugs['en']}`
    };

    i18n.locales.forEach(locale => {
      const category = categoryTranslations[locale] || 'templates';
      const slug = template.slugs[locale] || template.slugs['en'];
      alternates[localeRegions[locale]] = `${baseUrl}/${locale}/${category}/${slug}`;
    });

    i18n.locales.forEach((locale) => {
      const category = categoryTranslations[locale] || 'templates';
      const slug = template.slugs[locale] || template.slugs['en'];
      
      routes.push({
        url: `${baseUrl}/${locale}/${category}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: {
          languages: alternates
        }
      });
    });
  });

  // 3. Generate Guide Routes (sv only)
  routes.push({
    url: `${baseUrl}/sv/guider`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  });
  guides.forEach(guide => {
    routes.push({
      url: `${baseUrl}/sv/guider/${guide.slug}`,
      lastModified: new Date(guide.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.75,
    });
  });

  return routes;
}
