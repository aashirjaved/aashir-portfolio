import localFont from "next/font/local";

export const serif = localFont({
  src: [
    { path: "../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2", style: "normal" },
    { path: "../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-italic.woff2", style: "italic" },
  ],
  weight: "200 800",
  display: "swap",
  variable: "--font-serif",
  fallback: ["Georgia", "serif"],
});

export const mono = localFont({
  src: [{ path: "../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2", style: "normal" }],
  weight: "100 800",
  display: "swap",
  variable: "--font-mono",
  fallback: ["ui-monospace", "monospace"],
});
