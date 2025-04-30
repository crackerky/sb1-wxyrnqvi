import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://superb-brioche-b49f89.netlify.app'),
  title: 'Evolvix | パーソナルトレーニング＆目標達成サポート | 湘南藤沢',
  description: '慶應義塾大学湘南藤沢キャンパスを拠点とする専門的なパーソナルトレーニングと目標達成コーチング。科学的根拠に基づくトレーニング、栄養指導、メンタルコーチングで、あなたの目標達成をサポートします。',
  keywords: 'パーソナルトレーニング, フィットネスコーチ, 目標達成, 慶應義塾大学, 湘南藤沢, ストレングストレーニング, 栄養指導, ダイエット, ボディメイク, トレーニング, ジム, 藤沢市',
  openGraph: {
    title: 'Evolvix | パーソナルトレーニング＆目標達成サポート | 湘南藤沢',
    description: '慶應義塾大学湘南藤沢キャンパスを拠点とする専門的なパーソナルトレーニングと目標達成コーチング。',
    url: 'https://superb-brioche-b49f89.netlify.app',
    siteName: 'Evolvix',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://superb-brioche-b49f89.netlify.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Evolvix",
              "image": "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
              "@id": "https://superb-brioche-b49f89.netlify.app",
              "url": "https://superb-brioche-b49f89.netlify.app",
              "telephone": "090-8861-9971",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "遠藤5322",
                "addressLocality": "藤沢市",
                "addressRegion": "神奈川県",
                "postalCode": "252-0882",
                "addressCountry": "JP"
              },
              "priceRange": "¥¥",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}