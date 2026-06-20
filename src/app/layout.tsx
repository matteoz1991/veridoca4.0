import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Free Legal Document Templates — Download Word & PDF | Veridoca',
    template: '%s | Veridoca',
  },
  description: 'Download 500+ free legal document templates for the US. Business contracts, leases, wills, employment agreements & more. State-specific, cites primary legal sources. No registration required.',
  keywords: ['legal document templates', 'free legal forms', 'contract templates', 'lease agreement', 'will template', 'power of attorney'],
  authors: [{ name: 'Veridoca Editorial Team' }],
  creator: 'Veridoca',
  publisher: 'Veridoca',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://veridoca.com',
    siteName: 'Veridoca',
    title: 'Free Legal Document Templates — Veridoca',
    description: 'Download 500+ free legal document templates for the US. State-specific, cites primary legal sources.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Legal Document Templates — Veridoca',
    description: 'Download 500+ free legal document templates for the US. State-specific, cites primary legal sources.',
  },
  metadataBase: new URL('https://veridoca.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#07090f]">
        {/* Google Consent Mode v2 — must fire before AdSense */}
        <Script id="gcm-init" strategy="beforeInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent','default',{
            ad_storage:'denied',
            ad_user_data:'denied',
            ad_personalization:'denied',
            analytics_storage:'denied',
            wait_for_update:500
          });
        `}</Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7329226931623109"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
