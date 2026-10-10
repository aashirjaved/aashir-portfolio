import localFont from "next/font/local";

export const sans = localFont({
  src: [{ path: "../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2", style: "normal" }],
  weight: "100 900",
  display: "swap",
  variable: "--font-sans",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const mono = localFont({
  src: [{ path: "../node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2", style: "normal" }],
  weight: "100 900",
  display: "swap",
  preload: false,
  variable: "--font-mono",
  fallback: ["ui-monospace", "monospace"],
});
