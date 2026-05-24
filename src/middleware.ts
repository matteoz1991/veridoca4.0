import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n, categoryTranslations, Locale } from './i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip public files, api, _next etc.
  if (
    pathname.includes('.') || 
    pathname.startsWith('/api') || 
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const defaultUrl = new URL(
      `/${i18n.defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
      request.url
    );
    return NextResponse.redirect(defaultUrl, { status: 301 });
  }

  // Handle rewrites for translated category slugs (e.g. /sv/mallar/sekretess -> /sv/templates/sekretess)
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 2) {
    const locale = segments[0] as Locale;
    const category = segments[1];
    
    // If the category in the URL matches the translated word for "templates" in this locale
    if (category === categoryTranslations[locale]) {
      // Rewrite to the internal Next.js App Router path (/sv/templates/...)
      const restOfPath = segments.slice(2).join('/');
      const rewritePath = `/${locale}/templates${restOfPath ? `/${restOfPath}` : ''}`;
      return NextResponse.rewrite(new URL(rewritePath, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
