import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { sans, mono } from "./fonts";
import { site } from "@/data/site";
import { Nav } from "@/components/nav";
import "./globals.css";

const title = `${site.name}. ${site.positioning}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description: site.description, creator: "@aasjav" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F3" },
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
  ],
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Senior Software Engineer",
  worksFor: { "@type": "Organization", name: "MoonPay" },
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  knowsAbout: ["KYC", "AML", "Sanctions screening", "Risk rules", "Authorisation", "Tokenised private credit", "AI agents"],
  sameAs: [site.links.linkedin, site.links.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          // Apply a saved theme before first paint so there is no flash.
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink">
        <a
          href="#main"
          className="mono sr-only z-50 bg-ink px-3 py-2 text-paper focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to content
        </a>
        <Nav />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        {process.env.VERCEL_ENV ? <Analytics /> : null}
      </body>
    </html>
  );
}
