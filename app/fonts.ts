import { Press_Start_2P, VT323, IBM_Plex_Mono } from "next/font/google";

export const display = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const body = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
