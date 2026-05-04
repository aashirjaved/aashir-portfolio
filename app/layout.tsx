import type { Metadata } from 'next'
import { Press_Start_2P, Share_Tech_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Analytics from '@/components/analytics'
import { generateMetadata as getMetadata } from './layout-metadata'
import { CRTOverlay } from '@/components/crt/crt-overlay'
import './globals.css'
import { Suspense } from 'react'

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
  display: 'swap',
})

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-share-tech',
  display: 'swap',
})

export const generateMetadata = ({ params, pathname = '' }: { params?: any; pathname?: string }): Metadata => {
  return getMetadata({ params, pathname });
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${pressStart.variable} ${shareTechMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/me.png" />
        <link rel="apple-touch-icon" href="/me.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${shareTechMono.className} crt-scanlines crt-vignette crt-noise crt-sweep crt-flicker`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <CRTOverlay />
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
