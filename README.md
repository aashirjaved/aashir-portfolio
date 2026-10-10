# aashir.net

Personal site of Aashir Javed. Compliance and risk infrastructure for crypto and private credit.

The home page is a briefing console. A visitor asks a question or picks one, and gets a short answer with cited evidence. Every proof item carries a tier: verified, private, employer or reported. The plan behind the site is in [`docs/overhaul-plan.md`](docs/overhaul-plan.md).

## Run

```
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint       # copy rules and type check
pnpm test       # console matcher, 50 phrasings
pnpm build
```

## Where things live

| What | Where |
| --- | --- |
| Console questions, answers, evidence | `data/console.ts` |
| Offers, evidence ledger, background, case notes | `data/content.ts` |
| Name, positioning, email, booking link | `data/site.ts` |
| Intent matcher | `lib/match.ts` |
| Console UI | `components/console.tsx` |
| Copy rules | `scripts/copy-lint.mjs` |

All copy lives in `data/`. Edit it there and run `pnpm lint` before pushing. The lint fails on em dashes, spaced hyphens used as dashes, exclamation marks and a list of banned words.

## Stack

Next.js 15 app router, React 19, Tailwind CSS 3. Newsreader and JetBrains Mono, self hosted through Fontsource. Vercel hosting and Web Analytics.
