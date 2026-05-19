import type { Metadata, Viewport } from 'next'
import Analytics from '@/components/analytics'
import { generateMetadata as getMetadata } from './layout-metadata'
import { display, body, mono } from './fonts'
import { ScrollProgress } from '@/components/crt'
import './globals.css'
import { Suspense } from 'react'

export const viewport: Viewport = {
  themeColor: '#0f0d0b',
  colorScheme: 'dark',
};

export const generateMetadata = (): Metadata => {
  return getMetadata({ params: undefined, pathname: '/' });
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} dark`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f0d0b" />
        <link rel="icon" href="/me.png" />
        <link rel="apple-touch-icon" href="/me.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-body bg-bg text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-3 focus:py-2 focus:bg-screen focus:border focus:border-accent focus:text-bright focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
        >
          skip to content
        </a>
        <div className="crt-noise" aria-hidden />
        <div className="crt-overlay" aria-hidden />
        <ScrollProgress />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <div>{children}</div>
      </body>
    </html>
  )
}
