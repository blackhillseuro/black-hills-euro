import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import { SITE } from '@/lib/siteData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Mobile European Maintenance & Diagnostics – Rapid City, SD`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'Mobile European maintenance and diagnostics in Rapid City, SD. BMW, Mercedes-Benz, Audi, VW, Porsche, Volvo, and Land Rover. We come to your home or office.',
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* pb-20 md:pb-0 offsets the sticky mobile CTA bar */}
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
