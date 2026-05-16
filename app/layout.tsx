import type { Metadata, Viewport } from 'next'
import Analytics from '@/components/analytics'
import { generateMetadata as getMetadata } from './layout-metadata'
import { display, body, mono } from './fonts'
import './globals.css'
import { Suspense } from 'react'
import { Nav } from '@/components/editorial/nav'

export const viewport: Viewport = {
  themeColor: '#faf8f4',
  colorScheme: 'light',
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
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#faf8f4" />
        <link rel="icon" href="/me.png" />
        <link rel="apple-touch-icon" href="/me.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-body bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-3 focus:py-2 focus:bg-ink focus:text-paper focus:text-sm focus:rounded-full"
        >
          Skip to content
        </a>
        <Nav />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
