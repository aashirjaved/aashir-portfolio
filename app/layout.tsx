import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Analytics from '@/components/analytics'
import { generateMetadata as getMetadata } from './layout-metadata'
import './globals.css'

// Load Inter font with subsets
const inter = Inter({ subsets: ['latin'] })

// Generate metadata using the function from layout-metadata.tsx
export const generateMetadata = ({ params, pathname = '' }: { params?: any; pathname?: string }): Metadata => {
  return getMetadata({ params, pathname });
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/me.png" />
        <link rel="apple-touch-icon" href="/me.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
