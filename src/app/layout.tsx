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
    default: 'Veridoca — Guider till bredband, mobilabonnemang & hemförsäkring',
    template: '%s | Veridoca',
  },
  description: 'Oberoende guider på svenska om bredband, mobilabonnemang och hemförsäkring. Hjälper dig att jämföra och förstå dina alternativ.',
  keywords: ['bredband', 'mobilabonnemang', 'hemförsäkring', 'fiber', 'mobilt bredband', 'operatörer', 'Sverige'],
  authors: [{ name: 'Veridoca' }],
  creator: 'Veridoca',
  publisher: 'Veridoca',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://veridoca.com',
    siteName: 'Veridoca',
    title: 'Veridoca — Guider till bredband, mobilabonnemang & hemförsäkring',
    description: 'Oberoende guider på svenska om bredband, mobilabonnemang och hemförsäkring.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veridoca — Guider till bredband, mobilabonnemang & hemförsäkring',
    description: 'Oberoende guider på svenska om bredband, mobilabonnemang och hemförsäkring.',
  },
  metadataBase: new URL('https://veridoca.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#07090f]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
