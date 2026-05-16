import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-2": "rgb(var(--paper-2) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-2": "rgb(var(--ink-2) / <alpha-value>)",
        "ink-mute": "rgb(var(--ink-mute) / <alpha-value>)",
        "ink-faint": "rgb(var(--ink-faint) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        "rule-soft": "rgb(var(--rule-soft) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
        ok: "rgb(var(--ok) / <alpha-value>)",
        background: "rgb(var(--paper) / <alpha-value>)",
        foreground: "rgb(var(--ink) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          foreground: "rgb(var(--ink) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          foreground: "rgb(var(--ink) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          foreground: "rgb(var(--paper) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--paper-2) / <alpha-value>)",
          foreground: "rgb(var(--ink) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--paper-2) / <alpha-value>)",
          foreground: "rgb(var(--ink-mute) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--paper) / <alpha-value>)",
        },
        border: "rgb(var(--rule) / <alpha-value>)",
        input: "rgb(var(--rule) / <alpha-value>)",
        ring: "rgb(var(--ink) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "6px",
        xl: "8px",
        "2xl": "12px",
        full: "9999px",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
