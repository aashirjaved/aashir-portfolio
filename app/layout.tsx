import type { Metadata, Viewport } from 'next'
import Analytics from '@/components/analytics'
import { generateMetadata as getMetadata } from './layout-metadata'
import { display, body, mono } from './fonts'
import './globals.css'
import { Suspense } from 'react'

export const viewport: Viewport = {
  themeColor: '#1a0e00',
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
        <meta name="theme-color" content="#1a0e00" />
        <link rel="icon" href="/me.png" />
        <link rel="apple-touch-icon" href="/me.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-body bg-bg text-fg antialiased">
        <div className="crt-noise" aria-hidden />
        <div className="crt-overlay" aria-hidden />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <div className="crt-flicker">{children}</div>
      </body>
    </html>
  )
}
