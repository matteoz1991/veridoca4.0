import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Free Legal Document Templates — Download Word & PDF | Veridoca',
    template: '%s | Veridoca',
  },
  description: 'Download 500+ free legal document templates for the US. Business contracts, leases, wills, employment agreements & more. Attorney-reviewed, state-specific, instantly available.',
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
    description: 'Download 500+ free attorney-reviewed legal document templates for the US.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Legal Document Templates — Veridoca',
    description: 'Download 500+ free attorney-reviewed legal document templates for the US.',
  },
  metadataBase: new URL('https://veridoca.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#07090f]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
