import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        screen: "rgb(var(--screen) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        dim: "rgb(var(--dim) / <alpha-value>)",
        bright: "rgb(var(--bright) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
        ok: "rgb(var(--ok) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        background: "rgb(var(--bg) / <alpha-value>)",
        foreground: "rgb(var(--fg) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--screen) / <alpha-value>)",
          foreground: "rgb(var(--fg) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--screen) / <alpha-value>)",
          foreground: "rgb(var(--fg) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--bg) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--screen) / <alpha-value>)",
          foreground: "rgb(var(--fg) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--screen) / <alpha-value>)",
          foreground: "rgb(var(--dim) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--danger) / <alpha-value>)",
          foreground: "rgb(var(--bg) / <alpha-value>)",
        },
        border: "rgb(var(--rule) / <alpha-value>)",
        input: "rgb(var(--rule) / <alpha-value>)",
        ring: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "monospace"],
        body: ["var(--font-body)", "monospace"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
      boxShadow: {
        glow: "0 0 12px rgba(255,176,0,0.45), 0 0 28px rgba(255,111,0,0.25)",
        bevel:
          "inset 1px 1px 0 rgba(255,210,122,0.5), inset -2px -2px 0 rgba(0,0,0,0.6), 0 0 0 1px rgb(var(--accent))",
        crt: "0 0 80px rgba(0,0,0,0.7) inset, 0 0 200px rgba(0,0,0,0.6) inset",
      },
      keyframes: {
        flicker: {
          "0%,92%,100%": { opacity: "1" },
          "93%": { opacity: "0.94" },
          "94%": { opacity: "1" },
          "95%": { opacity: "0.97" },
          "96%": { opacity: "1" },
        },
        "cursor-blink": {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        type: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 6.2s infinite steps(1)",
        "cursor-blink": "cursor-blink 1.05s steps(1) infinite",
        type: "type 1.6s steps(40, end) forwards",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
