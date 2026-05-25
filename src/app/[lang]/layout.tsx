import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veridoca - Free Legal Documents",
  description: "Generate and download free, professional legal documents instantly. No login required.",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const { lang } = params;

  return (
    <html lang={lang} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7329226931623109"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Script id="google-consent-mode" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `
        }} />
        <Header lang={lang} />
        <main>{props.children}</main>
        <Footer lang={lang} />
        <CookieBanner lang={lang} />
      </body>
    </html>
  );
}
