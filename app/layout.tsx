import type { Metadata, Viewport } from 'next'
import Analytics from '@/components/analytics'
import { generateMetadata as getMetadata } from './layout-metadata'
import { display, body, mono } from './fonts'
import './globals.css'
import { Suspense } from 'react'
import { Nav } from '@/components/editorial/nav'

export const viewport: Viewport = {
  themeColor: '#f6f7f1',
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
        <meta name="theme-color" content="#f6f7f1" />
        <link rel="icon" href="/me.png" />
        <link rel="apple-touch-icon" href="/me.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--paper:246 247 241;--paper-2:232 237 228;--surface:255 255 250;--ink:13 18 16;--ink-2:46 58 53;--ink-mute:97 111 104;--ink-faint:164 174 167;--rule:203 211 203;--rule-soft:222 228 220;--accent:231 73 40;--accent-soft:255 219 204;--ok:22 150 111;--font-body:"Avenir Next","Gill Sans","Helvetica Neue"}html,body{background:rgb(246,247,241);color:rgb(13,18,16)}body{font-family:var(--font-body),ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:17px;line-height:1.55;margin:0;-webkit-font-smoothing:antialiased}`,
          }}
        />
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
