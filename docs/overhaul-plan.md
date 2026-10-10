# aashir.net overhaul plan

Prepared 10 October 2026. Scope: reposition aashir.net to win advisory and build work from private credit, DeFi and fintech founders, with an AI native front door. This document is the execution spec: audit, positioning, design, copy, console behaviour, technical plan and phased delivery.

Copy in this document is final draft v1 and follows the copy rules in section 9. Everything in a `>` block is site copy, ready to paste.

---

## Implementation status (10 October 2026)

Phases 1 to 6 are built in this branch. Decisions taken while building, where the plan left a choice or turned out to be wrong:

- **Magzi is private, not verified.** The `magzi-agent` repository is private, so Magzi carries the `private` tier and has its own case note at `/work/magzi`. `alchemy-infra` joins the ledger as a second `verified` row.
- **Kleido's customer is not named.** The site says "a UK lettings agency". Change it in `data/content.ts` if you want Lips MK named.
- **Booking goes by email for now.** "Book a call" opens a prefilled email with the three intake questions. Replace `site.booking` in `data/site.ts` with a Cal.com link when you have one.
- **Prices stay off the page.** The availability answer says numbers are given on the call.
- **Godzilla game** stays reachable at `/godzilla/`, unlinked and disallowed in robots.
- **Fonts are self hosted** from Fontsource through `next/font/local`, so builds do not depend on Google Fonts.
- **Analytics** uses Vercel Web Analytics custom events (`console_ask`, `evidence_click`, `book_call_click`, `email_click`). Web Analytics is enabled on the project, and the live check confirms page views and events arrive from a real visit. Google Analytics is removed.
- **Fonts and CSS.** Newsreader ships as the weight-only variable files instead of the optical-size files, the italic face is not preloaded, and CSS is inlined into the HTML. Measured LCP on throttled mobile went from 3.5 s to 0.9 s.
- **JS budget.** The home page adds 8 kB to the Next.js and React baseline of 102 kB, 113 kB first load in total. The 70 kB target in 10.4 is below what the framework itself ships, so it is not reachable without leaving Next.js.
- **Matcher tolerates one typo per word** and passes 50 of 50 test phrasings, including ten misspellings and five nonsense inputs that correctly fall back. Run `pnpm test`.
- **Copy lint** runs in `pnpm lint` over `data/`, `app/`, `components/` and `public/llms.txt`.
- **DNS and hosting, verified live.** `aashir.net` resolves to Vercel (216.198.79.193) on Cloudflare, Google and Quad9 resolvers, and redirects to `www.aashir.net`. `www` is a Vercel CNAME. `www.aashir.net` is the canonical host.
- **Old site retired.** `aashirjaved.github.io` lost its stale CNAME and now redirects to `www.aashir.net`.
- **Live check.** `.github/workflows/live-check.yml` runs after every production deploy and on demand. It checks DNS, the old site redirect, and a full visitor journey on the live domain: every chip, typed and misspelled questions, evidence to case note to booking link, analytics events, links, redirects and metadata files.
- **Profile README** on GitHub uses the new positioning.
- **Still yours:** the LinkedIn headline and about text in section 12, and a Cal.com link if you want calendar booking instead of the prefilled email. No tool in this setup can sign in to LinkedIn or Cal.com.

---

## 0. Decisions in one screen

| Question | Decision |
|---|---|
| Which repo is the latest portfolio? | `aashir-portfolio` (Next.js 15, last commit 2 June 2026). `aashirjaved.github.io` is the 2023 Gatsby site and still carries the `CNAME aashir.net` file. See 1.1. |
| Who is the site for? | Founders and principals at private credit funds, tokenised credit and DeFi teams, and fintechs who need onboarding, compliance, risk and agent infrastructure built or reviewed. The LinkedIn message from David Cazeaux is the archetype. |
| One line positioning | Compliance and risk infrastructure for crypto and private credit. |
| Front door | A single question box: "What do you want to know about me?" with hardcoded answers that render like a briefing, each with cited evidence. |
| Visual direction | Paper and ink, two typefaces (a text serif and a mono), hairlines, one status colour. No textures, blobs, marquees or gradients. |
| What gets cut | Placeholder blog posts, newsletter block, Godzilla game from the main index, the "signal over portrait" box, floating stats, orange accent, 30 unused UI packages. |
| Delivery | Six phases, roughly nine working days of focused work. Phase 0 can ship today. |

---

## 1. Current state audit

### 1.1 Which repo serves aashir.net

Evidence from the repositories:

- `aashirjaved.github.io`: Gatsby static build, committed August 2023. Contains `CNAME` with `aashir.net`. Content: "Hello, I'm Aashir Javed. Exploring Boundless Horizons of Code", Deliveroo listed as current employer, two blog posts under `/pensieve`, a 2023 `resume.pdf`.
- `aashir-portfolio`: Next.js 15, Tailwind 3, shadcn. Homepage field on GitHub is `aashir-portfolio-gold.vercel.app`. Metadata sets `metadataBase` to `https://aashir.net` and `public/llms.txt` lists `aashir.net/about`, `/experience`, `/projects`, routes that do not exist on the Gatsby build. Last commit 2 June 2026.
- The LinkedIn snapshot in `aashir.md` (1 June 2026) still links `aashir.net/pensieve` for writing, which is a Gatsby route.

Conclusion: `aashir-portfolio` is the latest codebase and is clearly intended to serve aashir.net. Whether it does today depends on DNS, which cannot be checked from the sandbox this plan was written in. Run this on your machine:

```
dig +short aashir.net A
dig +short www.aashir.net CNAME
```

- Answers in `185.199.108.0/22` mean GitHub Pages is live, so visitors see the 2023 Gatsby site. Cut over to Vercel in Phase 0.
- An answer of `76.76.21.21` or `cname.vercel-dns.com` means Vercel is live and the Next.js site is what visitors see.

Either way, Phase 0 retires the GitHub Pages site so there is one source of truth.

### 1.2 Problems in the current Next.js site

Content

- `data/blog-data.ts` ships six invented posts with 2023 dates and `/me.png` as the cover image. `app/writing` has no `[slug]` route, so every post link is a 404. A prospect who clicks one loses trust immediately.
- The hero says "Backend and AI systems that move real product metrics." It describes an employee, not an advisor. Nothing on the page says compliance, KYC, sanctions, risk or identity, which is the work that made David write.
- Kleido, the ID Document Reader, Skairo and Magzi are absent. They are the strongest proof for this audience.
- The projects page leads with a Godzilla typing game next to production work.
- Metrics are mixed in quality. "109 MoonPay skills stars" and "1.1k followers" are not outcomes. "Stars: 2" on alchemy-infra undercuts the card it sits on.
- A newsletter block on the contact page with no newsletter behind it.
- One em dash in `app/page.tsx` and several in the contact and projects copy. Copy uses "leverage", "signal", "field work", which read as agency speak.

Design

- Five layered backgrounds on `body` (two gradients, two grids, a scanline overlay), a logo marquee, blurred colour blobs inside the hero box, and a hard offset shadow. Each is fine alone. Together they read as busy, and busy reads as junior to a fund principal.
- Mono eyebrows at 0.22em tracking are hard to read on mobile.
- Orange accent. In compliance tooling orange means warning. It is the wrong colour for this audience.
- Instrument Serif is the default serif of 2025 portfolios. It no longer differentiates.

Engineering

- `package.json` is a v0 export: 30 Radix packages, Recharts, Embla, react-hook-form, zod, framer-motion. The home page uses almost none of them.
- No OG image route. Social cards use `/me.png`.
- No analytics events on the actions that matter (question asked, booking clicked).

### 1.3 What the repositories prove you can do

This is the inventory the new site draws on. Tier is how the site will label the evidence (see 5.3).

| Proof | What it is | Why it matters to this buyer | Tier |
|---|---|---|---|
| Kleido (`kliedo`, Oct 2026, ~81k lines TS and Go) | Sanctions and AML review platform for UK lettings agencies. Cases, people, papers, runs, checks, concerns, decisions, watches. UK Sanctions List, PEP, Companies House ownership and adverse media screening through yente/OpenSanctions. Nightly re-screening. OCR document reading. Immutable audit records. OFSI packs and period reports. RBAC with five roles. Hono on Cloudflare Workers, Effect RPC, D1 and R2, PostgreSQL on an on-prem appliance, Go compliance agent. Live for Lips MK at `lipsmk.kleido.uk`. | This is a working compliance product with a live customer. It is the single most convincing artefact for a private credit buyer. | Verified, private repo, demo on request |
| ID Document Reader (`agentic-biometrics`, Sep 2026) | On-prem document intelligence service. Passports and ID cards with ICAO 9303 check digits and MRZ to printed name cross validation across transliteration tables. Driving licences (AAMVA PDF417). Bank statements with running balance chain and IBAN mod-97. Sale deeds. eMRTD chip passive authentication against CSCA anchors. Five verification tiers per field. Runs with `--network none`. | KYC document handling that a regulator or a privacy officer will accept. Shows you understand what "verified" has to mean. | Verified, private repo, demo on request |
| MoonPay, Identity Platform team | KYC, compliance, risk, authentication and authorisation, geolocation based rules engine at crypto payment scale. Public: moonpay/skills contributor, AI Agentic Engineering Hackathon popular vote, AI x Crypto meetup demo, Moonlog Volume 02 launches. | Day job is exactly the perimeter this buyer needs. Public items prove the AI side. | Employer, scope only. No vendors, volumes or internals. |
| Magzi (`magzi-agent`, private repo, Rust, Oct 2026, 70+ PRs) | Self hosted 24/7 agent on WhatsApp and Telegram. Plugin architecture, retrieval first with LLM fallback, code that is proven by its own test before it is kept, a supervision sidecar that turns production errors into repair packets, voice, browser automation. | Depth in agent engineering, and an opinion about verification that matches compliance thinking. | Private repo, demo on request |
| Skairo (`skairo-platform`, Oct 2026) | Trust and booking network for UK self fly aircraft hire. Reusable verified credential file, rules engine against owner minima, expiry watch, deposits held in the middle, human approval on every booking. Business plan, competitive landscape, three journey wireframes. | Shows product thinking about verification, eligibility rules and a two sided market with money in escrow. Pre product, so it is a secondary mention. | Pre product, documents only |
| Motorway | Led the split into decoupled AuthN and AuthZ services, +7% top of funnel conversion. Motorway Pro, +15% platform volume. Operational excellence group, 15% lower annual AWS cost. | Auth boundaries and cost discipline. | Self reported, CV |
| Deliveroo | Customer care automation with agents and fine tuned models on Go APIs. 2x CSAT, handling time halved. Ran SEV game days for 100+ engineers. | Agents in production inside a marketplace, and incident discipline. | Self reported, CV |
| Zalando, Nordcloud, CARE | 1000+ RPS warehouse gateway, 15% latency cut. Multi cloud migration. ISO 27001 and MISRA C firmware updates, P@SHA ICT award. | Scale and regulated engineering history. | Self reported, CV |
| Whatify | Public data financial diagnosis tool, 300+ weekly users. | A live consumer product you run alone. | Verified, live URL |
| Smaller client work (Lips MK operations hub and site, PropRM, aviation sites) | Delivery for small businesses. | Proof you can run a client relationship end to end. Mention as a line, not a card. | Self reported |

Side note on confidentiality: the MoonPay identity work and the Kleido customer name need your sign off before they go on a public page. The copy below describes MoonPay only in phrases MoonPay itself uses in public job listings and newsroom posts (sign in through KYC clearance, KYC tiers, risk scoring, sanctions screening, jurisdiction dependent behaviour, onboarding conversion against fraud risk and regulatory compliance) and names no vendors, counts or internals. Research sources are in Appendix B. Lips MK is already named in your public repo descriptions, but check your engagement terms.

---

## 2. Who the site is for and what they need to see

### 2.1 The buyer

David's message tells you the shape of the buyer:

- Runs a private credit firm. Money, LPs, auditors and a regulator somewhere behind him.
- "Developing some DeFi / AI related projects" as an extension of the business. Tokenised credit, on-chain distribution, or automation of underwriting and operations.
- Wants "freelance/advisory support" that "could lead to a role". He is buying judgement first, hands second.
- Reached out from LinkedIn after reading your background. He will open the site on his phone before the call.

What he needs the site to answer in under thirty seconds:

1. Has this person built regulated money infrastructure, not just used the words?
2. Does he understand my world: onboarding, accreditation, sanctions, transfer restrictions, audit?
3. Can he make AI useful without creating a compliance liability?
4. How do I engage him, and what does it cost?
5. Is he serious and available?

### 2.2 What this buyer does not need

- A skills cloud. He does not care about Kafka.
- A typing game.
- Blog posts about React Server Components.
- Metrics he cannot interpret (RPS, stars, follower counts).
- Enthusiasm. He wants calm competence.

---

## 3. Positioning

### 3.1 The sentence

> Compliance and risk infrastructure for crypto and private credit.

Variants tested and rejected:

- "Backend and AI systems that move real product metrics." Current. Generic, employee framing.
- "Engineer for regulated money on-chain." Clever, but "regulated money" is not a phrase buyers use.
- "I build the compliance perimeter for funds going on-chain." Good for a bio line, too narrow for a headline because it drops AI and fintech.

### 3.2 The supporting line

> KYC, sanctions screening, risk rules and authorisation at payment scale. Production AI agents where they earn their place. Available for advisory and build work.

### 3.3 Three offers

Named plainly, in the buyer's vocabulary. Each has a one sentence promise, a list of what is included, and the evidence that backs it.

1. Onboarding and compliance controls
2. Risk, rules and authorisation
3. AI in operations

Full copy in section 7.

### 3.4 Principles that double as differentiators

These come straight from how Kleido, Skairo and the ID reader are built. They are true, and no competitor says them.

> The system prepares the file. A person makes the call.
> Nothing leaves your perimeter that does not need to.
> Every decision is logged and reproducible.

---

## 4. Reference patterns

Research covered twelve admired personal sites of design engineers and senior engineers, four fractional CTO sites in fintech, and the main open source "AI native portfolio" templates. Most pages could not be fetched directly from the sandbox, so details come from the sites' indexed text, their public repositories and gallery write ups. Sources in Appendix B.

### 4.1 What the admired sites do

| Site | What to take from it |
|---|---|
| paco.me (Paco Coursey, Linear) | "Crafting interfaces. Building polished software and web experiences." Strict monochrome, no accent, no borders, no cards. Inter and Söhne for UI, Newsreader for the few phrases he wants remembered. Whitespace does the separating. Our type system follows this exactly, with Newsreader carrying prose instead of only highlights. |
| leerob.com (Lee Robinson) | A 60 character text column, Inter, tight tracking, one blue hover colour. A very senior profile in two sentences and a list of essays. Proof that restraint reads as seniority. |
| rauno.me (Rauno Freiberg, Vercel) | One signature interaction, the home page is an instrument. Everything else is still. Our console is the one instrument. |
| benji.org (Benji Taylor, ex Base and Aave) | The most crypto relevant reference. Bio paragraph, open source tools, case studies written as long visual essays with counts. Our case notes follow the essay form at a shorter length. |
| linusrogge.com (Linus Rogge) | Serif and sans from one foundry, a colophon, case studies with one outcome line. One of his case studies is Regpit, an AML compliance platform redesign that "supported a pre-seed round". Our evidence rows carry an outcome line the same way. |
| emilkowal.ski (Emil Kowalski, Linear) | One line descriptors per project ("An opinionated toast component for React"). Our ledger rows use the same descriptor discipline. |
| brittanychiang.com | Sticky left rail plus scrolling right column with dated experience rows. The layout is so widely forked it now signals template. We keep the idea of a rail as a section index and nothing else from it. |

### 4.2 What the fractional CTO sites do

sanj.dev, vadimkravcenko.com, rossboardman.com and ag404.tech are not design references. They are useful for offer architecture: a 30 minute intro call, a named entry product (workshop, audit, due diligence review), a published engagement shape (days per week, roadmap length), price bands in some cases, and scarcity stated once ("1 open slot", "at most 2 clients at a time"). None of them is also a crafted site, and no solo "compliance engineering advisor for tokenised credit" page surfaced at all. That is the gap aashir.net fills.

### 4.3 What the AI chat portfolios do, and why ours is different

The dominant template (toukoum.fr and its clones) is a memoji, "Hey, I'm X", an "Ask me anything" pill, and five chips labelled Me, Projects, Skills, Fun, Contact. Answers render as a rich card plus two to four short paragraphs, one tool per turn, first person, ending with a question. None of the admired design engineer sites uses an AI chat at all.

What we keep from the template: a single input as the first interaction, chips that send a fuller question than their label, short first person answers with a structured element, a cap on length.

What we change: no avatar, no greeting, no generic chips. The placeholder is the question you asked for, "What do you want to know about me?", and the chips are the five questions a fund principal asks on a first call. Answers end in an evidence row with tier labels instead of a card carousel. The whole thing is set in mono and serif on paper, closer to a command palette than a chat app. Guardrails that the good implementations treat as table stakes (grounding only in a profile file, message caps, graceful limits) are built in from Phase 3 even though the answers are hardcoded.

### 4.4 Patterns adopted

- One sentence of positioning, visible without scrolling, in the largest type on the page.
- A short list of what the person does, not a list of technologies.
- Proof presented as a ledger with one line descriptors and an outcome, not cards with gradients.
- One accent or none.
- One signature interaction that only this person could have built.
- Contact as a decision, with a booking link and an engagement shape, not a form that opens a mail client.
- A colophon line in the footer naming the typefaces and the stack. Quiet credibility.
- Typography and hairlines carry the design. No boxes.

### 4.5 Anti patterns avoided

Memoji chat heroes and typing placeholders. Hero gradients, blobs and glassmorphism. Skill icon walls, GitHub stat cards and logo marquees. Animated counters. "Passionate" and adjective stacks. Scroll reveal on every section. Fake testimonials. Newsletter boxes with nothing behind them. The Brittany Chiang layout clone.

## 5. Concept: the briefing console

### 5.1 The idea

The site behaves like the tools you build. A visitor does not read a brochure. They run a check. They type a question, or tap a suggested one, and get a short briefing with cited evidence and a confidence label. The page below the console is the full file, for people who prefer to scroll.

This is AI native in presentation and honest in implementation. Answers are hardcoded in Phase 3. The interface, data model and analytics are built so a model can be dropped in later without changing the design.

### 5.2 Behaviour

- The console is the hero. Name, positioning line, then the input.
- Placeholder: `What do you want to know about me?`
- Five suggested questions as chips under the input. On mobile the chips scroll horizontally.
- Press `/` anywhere to focus the input. `Enter` submits. `Esc` clears. Up arrow recalls the last question.
- On submit the question is matched to an intent (section 8). The answer renders word by word at about 28 ms per word, with a caret. Reduced motion preference renders instantly.
- Each answer ends with an evidence row: one to three links, each with a tier label.
- Answers stack in a thread below the input, newest at the bottom, so a visitor can ask three things and see them together. A thread of more than four collapses the oldest.
- No answer found: a short honest fallback with the email address. No invented content.
- A thin session ledger at the bottom of the console shows what was asked, in mono, timestamped to the minute. It is cosmetic and local only. It reinforces the audit idea and costs nothing.

### 5.3 Evidence tiers

Borrowed from the ID Document Reader's field tiers, simplified to four labels. They appear next to every proof item on the site, not just in the console.

| Label | Meaning | Used for |
|---|---|---|
| `verified` | Public repository, live URL or public post you can open | moonpay/skills, alchemy-infra, Whatify |
| `private` | Real code or product that cannot be opened publicly. Demo on request. | Kleido, ID Document Reader, Magzi |
| `employer` | Work done inside a company. Scope described, details withheld. | MoonPay identity platform |
| `reported` | Outcome stated by you, from your CV | Motorway, Deliveroo, Zalando figures |

This is the most unusual thing on the site and it fits the audience exactly. A compliance buyer reads tier labels every day. It also protects you: you never overclaim, and you say so.

### 5.4 Why this will hold attention

- The visitor acts within two seconds of landing. Interaction beats reading.
- Suggested questions are the questions they were going to ask on the call. Reading your answers in advance makes the call shorter and the decision easier.
- The word by word reveal is slow enough to feel considered and fast enough not to annoy. Total answer length is capped at 90 words.
- Every answer ends with a link to proof, so the next click is always obvious.

---

## 6. Design system

### 6.1 Typography

Two families. No sans serif. This is the main visual decision and it is deliberate: serif for anything a human reads at length, mono for anything structural or data like. It matches Kleido's type family so your product and your name share a system.

| Role | Face | Size and leading |
|---|---|---|
| Display (positioning line, section titles) | Newsreader, variable, optical size 24 to 72, weight 400 | 44 to 72 px, line height 1.02, tracking -0.01em |
| Prose (answers, offers, case notes) | Newsreader, optical size 16, weight 400 | 18 px on mobile, 19 px on desktop, line height 1.5 |
| UI and data (nav, labels, tiers, ledger, chips, tables) | JetBrains Mono 400 and 500 | 12.5 to 13.5 px, line height 1.4, tracking 0.02em, uppercase only for tier labels and section numbers at 0.06em |

Rules

- Never above 0.08em tracking. The current 0.22em is the main reason the mono text feels cold.
- Tabular numerals on everything mono: `font-variant-numeric: tabular-nums`.
- Italic Newsreader is allowed once per page, for the one line you want remembered.
- Max measure for prose: 64 characters.

Fonts load through `next/font/google` (Newsreader and JetBrains Mono are both on Google Fonts). Self host if the load adds more than 80 ms to LCP.

### 6.2 Colour

| Token | Light | Dark | Use |
|---|---|---|---|
| `paper` | `#F5F3EC` | `#0E0E0C` | page |
| `paper-2` | `#ECE9E0` | `#151512` | console surface, table header |
| `ink` | `#111311` | `#EDE8DC` | text |
| `ink-2` | `#3E423E` | `#C9C3B6` | secondary text |
| `ink-mute` | `#777B75` | `#8C877C` | labels |
| `rule` | `#D3D0C6` | `#2A2A26` | hairlines |
| `clear` | `#1B7F5A` | `#5DC38F` | the one status colour: live dot, `verified` tier, focus ring |

One accent. It is green because it means "clear" in your domain. Orange, red and amber appear nowhere, including hover states. Links are ink with a 1 px underline in `rule` that becomes `ink` on hover.

Dark mode follows the system. No toggle in Phase 1. Add a toggle only if analytics show a reason.

### 6.3 Layout

- Content column 680 px for prose. Wide column 1080 px for the evidence ledger and the background table.
- A left rail on screens over 1100 px: section numbers `00` to `05` in mono, the current one in `ink`, the rest in `ink-mute`. Clicking scrolls. On mobile the rail collapses to a bottom bar with the same numbers.
- 16 px side gutter on mobile, 32 px at tablet, 48 px at desktop.
- Vertical rhythm on an 8 px grid. Section spacing 96 px desktop, 64 px mobile.
- Hairlines (1 px `rule`) separate rows. No boxes, no cards, no shadows, no rounded containers except the input (6 px radius) and chips (999 px).

### 6.4 Motion

Everything is CSS or a single IntersectionObserver. Framer Motion is removed.

- Console answer: word by word reveal, caret blink at 1 Hz, stops when the answer completes.
- Hairlines under section titles draw from left to right over 400 ms when the section enters the viewport. Once.
- Ledger rows fade in over 160 ms.
- Chips: background to `paper-2` on hover, 120 ms. No transforms.
- Nothing moves on scroll apart from the rail indicator.
- `prefers-reduced-motion: reduce` disables the reveal and the hairline draw.

### 6.5 Components

Build these, delete the rest of `components/editorial` and all unused `components/ui`.

| Component | Purpose |
|---|---|
| `Console` | Input, chips, thread, ledger. Client component. |
| `Answer` | One answer: text reveal, evidence row. |
| `Tier` | The four tier labels. |
| `Ledger` | Table layout with mono header and hairline rows. Used for evidence and background. |
| `Offer` | Title, promise, included list, evidence links. |
| `Rail` | Section index. |
| `Section` | Number, title, hairline, children. |
| `Prose` | Measure limited text block. |
| `ContactBlock` | Email, booking link, LinkedIn, intake prompt. |
| `Footer` | One line. |

---

## 7. Information architecture and page copy

Single page home with five sections, three secondary routes.

```
/                 home: console, offers, evidence, engagement, background, contact
/work/kleido      case note
/work/id-reader   case note
/work/moonpay     scope note (short)
/cv               printable CV, replaces /resume
/llms.txt         updated
```

Routes removed: `/about`, `/experience`, `/projects`, `/writing`, `/resume` (301 to `/cv`), `/godzilla` (keep the files, unlink, or move to `/play` with `noindex`).

Nav: `Work` `Engagement` `Background` `Contact` and a `Book a call` button. Logo is the name in Newsreader.

### 7.1 Section 00, Console

Eyebrow (mono):

> Aashir Javed · London · Senior Engineer, Identity Platform, MoonPay

Positioning (display):

> Compliance and risk infrastructure for crypto and private credit.

Supporting line (prose):

> KYC, sanctions screening, risk rules and authorisation at payment scale. Production AI agents where they earn their place. Available for advisory and build work.

Input placeholder:

> What do you want to know about me?

Chips:

> What have you shipped in compliance?
> Can you build our onboarding and KYC?
> How would you work with a fund?
> Where does AI belong in underwriting?
> Are you available, and what does it cost?

Under the input, small mono:

> Answers are written by me and cite their evidence. Press / to ask.

### 7.2 Section 01, Where I help

Title:

> Where I help

Intro:

> Three kinds of work. Each one ends with something your auditor, your LPs and your engineers can all read.

Offer 1

> **Onboarding and compliance controls**
> Investor and borrower onboarding that passes audit and does not lose the investor on the way.
> Included: KYC and KYB with beneficial owner mapping, accredited investor and qualified purchaser gating, document verification, sanctions and PEP screening, wallet allowlisting, ongoing monitoring, case files with an immutable record, reporting packs. Measured on completion rate and drop off as well as on findings.
> Evidence: Kleido, ID Document Reader, MoonPay identity platform.

Offer 2

> **Risk, rules and authorisation**
> Rules you can explain to a regulator and change without a release.
> Included: eligibility and limit engines, jurisdiction tiering, authentication and authorisation boundaries, permissioned access to on-chain products, transfer restrictions at the token level, identity registries and compliance modules for restricted tokens.
> Evidence: MoonPay identity platform, Motorway auth split, Skairo rules design.

Offer 3

> **AI in operations**
> Agents that prepare the work and never make the decision.
> Included: document ingestion and extraction, underwriting preparation, covenant and compliance certificate monitoring, portfolio monitoring and reporting agents, evaluation suites, private models on your own infrastructure when data cannot leave.
> Evidence: ID Document Reader, Magzi, Deliveroo care automation.

### 7.3 Section 02, Evidence

Title:

> Evidence

Intro:

> Each row carries a label. Verified means you can open it. Private means it exists and I can show it on a call. Employer means scope only. Reported means my figure from my CV.

Ledger columns: `What` `For` `Outcome` `Tier`

Rows (final copy):

| What | For | Outcome | Tier |
|---|---|---|---|
| Kleido, sanctions and AML review platform | UK lettings agencies, live for one customer on an on-prem appliance | Sanctions, PEP, company ownership and adverse media screening in one run. Nightly re-screening. Auditable case files and OFSI packs. | private |
| ID Document Reader | Any KYC pipeline that cannot send documents to a cloud | Passports, licences, bank statements and chip reads, each field labelled with how it was verified. Runs with networking disabled. | private |
| Identity Platform, MoonPay | A licensed crypto payments business at consumer scale | The systems that establish who a customer is, from sign in through KYC clearance: authentication, KYC tiers, risk scoring, sanctions screening, and rules that change by jurisdiction. | employer |
| Magzi, self hosted agent | Owner operated businesses | 24/7 agent on WhatsApp and Telegram. Code it writes is kept only when its own test passes. A supervisor turns production errors into repair tasks. | verified |
| moonpay/skills | AI agents moving money through MoonPay | Public skills for on-ramps, swaps and wallets. Contributor. | verified |
| Auth split, Motorway | A used car marketplace | Decoupled authentication and authorisation services. 7% more top of funnel conversion. | reported |
| Care automation, Deliveroo | A three sided marketplace | Agents and fine tuned models in production. CSAT doubled, handling time halved. | reported |
| Whatify | Public | Financial diagnosis from public data. 300+ weekly users. | verified |

Each `private` row links to its case note. Each `verified` row links out. The `employer` row links to the short scope note.

### 7.4 Section 03, Engagement

Title:

> Engagement

Intro:

> Three formats. Start with the first one.

> **Diagnostic call.** 45 minutes, no charge. Bring the problem and its constraints. You leave with a written view of what to build, buy or skip.
> **Diligence sprint.** Two weeks, fixed fee. I review what you have or plan: architecture, vendors, compliance design, data handling. Deliverable is a written go or no go view, a decision document and a build plan your team can run.
> **Fractional lead.** One to three days a week, monthly. I own one workstream end to end with your team: onboarding, risk rules, or agent operations.

Principles (the italic line is allowed here):

> *The system prepares the file. A person makes the call.*
> Nothing leaves your perimeter that does not need to.
> Every decision is logged and reproducible.

What I do not do:

> Custody keys. Give legal advice. Let a model sign off a compliance outcome.

Optional line if true, placed under the three formats: "I take at most two engagements at a time." Scarcity stated once, plainly, is the one sales device the fractional CTO sites use that works.

Pricing: the sprint and retainer carry a "fixed fee" and "monthly" label without numbers on the page. Numbers go in the diagnostic call. If you want numbers on the page, the console answer in 8.3 has a slot for them.

### 7.5 Section 04, Background

Title:

> Background

Ledger columns: `Years` `Where` `What`

> 2025 to now · MoonPay, London · Senior Engineer, Identity Platform. KYC, compliance, risk, auth, geolocation rules.
> 2024 to 2025 · Motorway, London · Core engineering. Auth split, Motorway Pro, AWS cost.
> 2022 to 2024 · Deliveroo, London · Customer care platform. Agents in production, SEV game days.
> 2021 to 2022 · Zalando, Helsinki · Warehouse integration gateway at 1000+ requests a second.
> 2020 to 2021 · Nordcloud (IBM), Helsinki · Multi cloud migration for a transport client.
> 2017 to 2019 · CARE, Islamabad · Industry 4.0 systems, MQTT security, firmware updates under ISO 27001.

One line under the table:

> B.E. Computer Engineering, NUST. AWS Certified Developer. EIT Digital scholar. P@SHA ICT award.

### 7.6 Section 05, Contact

Title:

> Contact

> Send the context. I reply within two working days.
> Email: me@aashir.net
> Book a call: [Cal.com link]
> LinkedIn: /in/aashirjaved

Intake prompt under the booking link, mono:

> Useful to include: what you are building, where you are in it, and whether you need advice, a build, or both.

Footer:

> Aashir Javed · London · 2026

### 7.7 Case notes

Each case note is 300 to 450 words on a 680 px column with a ledger of facts at the top.

`/work/kleido`

Facts ledger: `Status` live, one customer · `Form` on-prem appliance and hosted · `Stack` TypeScript, Effect, Hono, Cloudflare Workers, PostgreSQL, Go · `Role` sole engineer

> **Kleido**
> Sanctions and AML review for UK lettings agencies.
>
> A letting agent has to prove, for every landlord and tenant, that nobody on the file is sanctioned, politically exposed, hidden behind a company, or in the news for the wrong reasons. Most agencies do this with a spreadsheet and a subscription they half trust.
>
> Kleido gives them one place to open a case, add the people on it, collect their papers, run every check together, decide what to do about a concern, and keep the file. Four case types, four person states. Checks are immutable. A new run writes new checks. People who clear go on a watch and are re-screened every night against the current lists.
>
> The screening layer combines the UK Sanctions List, PEP data, Companies House ownership and adverse media through an open sanctions engine. Documents are read by an OCR service and the identity fields are extracted and matched. Reports come out as person files, case files, concern files and OFSI packs.
>
> The first customer runs it as an appliance on their own hardware with PostgreSQL, a Go agent and a release pipeline that promotes through a homelab ring first. The product rule that shaped every screen: the system prepares the file, a person makes the call.
>
> What transfers to a fund: investor and borrower onboarding, beneficial ownership, ongoing monitoring, and a file a regulator can read.

`/work/id-reader`

Facts ledger: `Status` private, demo on request · `Form` one Docker image, no network · `Stack` Python, OpenCV, ONNX, ZXing · `Role` sole engineer

> **ID Document Reader**
> Document intelligence that never leaves the building.
>
> Send it a passport, a driving licence, a bank statement or a deed. It returns all the text, the structured fields, a portrait, and for every field a label that says how it was verified. A passport number is checksum verified because an ICAO check digit proved it. A surname on the same page is not, because no check covers it. A chip read is cryptographically verified only when the data groups hash, the signature verifies and the signer chains to a trusted anchor.
>
> It reads the name twice, once from the machine readable zone and once from the printed page, and cross validates them through the transliteration tables each issuing state is allowed to use. A genuine mismatch is raised for review rather than resolved away.
>
> It runs as a single container with networking disabled. Nothing about a document is logged. Large jobs go through an idempotent queue so a retry joins the running job instead of starting a second one.
>
> What transfers to a fund: KYC document capture without a cloud vendor in the data path, and a vocabulary for "verified" that holds up in an audit.

`/work/moonpay`

Facts ledger: `Status` current · `Team` Identity Platform · `Scope` KYC, compliance, risk, authentication, authorisation, geolocation rules

> **MoonPay, Identity Platform**
> I work on the team that decides who may transact, where, and under what limits.
>
> That covers the systems that establish and verify who a customer is, from sign in through KYC clearance: authentication, KYC tiers, risk scoring, sanctions screening, and a rules engine where the same feature behaves differently by jurisdiction. The job is balancing onboarding conversion, fraud risk and regulatory compliance at once. MoonPay holds a New York BitLicense, a MiCA licence and an FCA registration, so the perimeter has to satisfy several regulators at the same time. The detail stays inside MoonPay. The public side is a hackathon win, an AI x Crypto meetup demo of a personal agent executing a transaction, and contributions to MoonPay's public agent skills.
>
> What transfers to a fund: how a regulated crypto business draws its compliance perimeter and keeps it moving at consumer scale.

### 7.8 /cv

Printable, one page, same type system. Pull from `aashir.md`. Replace `/resume`. Include a PDF link generated from the page, not the 2023 PDF.

---

## 8. Console specification

### 8.1 Data model

`data/console.ts`

```ts
export type Tier = "verified" | "private" | "employer" | "reported";

export interface Evidence {
  label: string;      // "Kleido case note"
  href: string;       // "/work/kleido"
  tier: Tier;
}

export interface Intent {
  id: string;
  triggers: string[]; // lowercase keywords and phrases
  question: string;   // canonical phrasing, shown in the thread
  answer: string;     // 40 to 90 words, first person
  evidence: Evidence[];
  chip?: boolean;     // appears as a suggested question
}
```

### 8.2 Matching

- Normalise: lowercase, strip punctuation, collapse whitespace.
- Score each intent: +3 for each full trigger phrase found, +1 for each trigger word found. Ties go to the intent with more phrase hits.
- Threshold 2. Below it, return the fallback.
- Exact chip click bypasses matching.
- Log the raw question and the chosen intent id to analytics as `console_ask`. Never store the raw text on a server in Phase 3; there is no server.

Keep the matcher under 40 lines. A model can replace it in Phase 7 behind the same `ask(question): Promise<Answer>` signature.

### 8.3 Intents and answers

Thirteen intents plus the fallback. Answers are final draft v1.

**shipped-compliance** (chip)
Triggers: shipped, compliance, built, aml, sanctions, kyc, track record, experience in compliance
> I built Kleido, a sanctions and AML review platform that one UK agency runs in production on their own hardware. It screens people against the UK Sanctions List, PEP data, company ownership and adverse media, re-screens nightly and keeps an auditable file. I also built an on-prem document reader for passports, licences and bank statements. At MoonPay I work on the identity platform: KYC, risk, auth and geolocation rules.
Evidence: Kleido case note (private), ID Document Reader (private), MoonPay scope (employer)

**build-onboarding** (chip)
Triggers: onboarding, kyc, kyb, investor, accredited, accreditation, can you build, verification, whitelist, whitelisting
> Yes. Onboarding is the work I do most. For a fund that means investor and borrower KYC and KYB, document capture and verification, sanctions and PEP screening, accreditation evidence, a wallet or account whitelist, and ongoing monitoring. I build it so every decision has a record, and so the parts that touch personal documents can run inside your perimeter. Start with the diagnostic call and I will tell you what to build and what to buy.
Evidence: Kleido case note (private), ID Document Reader (private), Engagement (/#engagement)

**work-with-fund** (chip)
Triggers: how do you work, fund, process, engagement, advisory, fractional, freelance, consulting, with us, team
> Three ways. A 45 minute diagnostic call, free, where you bring the problem and leave with a written view. A two week diligence sprint, fixed fee, that ends in a decision document and a build plan. Or a fractional lead role, one to three days a week, where I own one workstream with your team. Most funds start with the call, then the sprint, then decide whether they need me for longer.
Evidence: Engagement (/#engagement)

**ai-underwriting** (chip)
Triggers: ai, underwriting, llm, agents, model, automation, machine learning, where does ai belong
> AI belongs in preparation, not decision. It should read the documents, extract the fields, flag the gaps, draft the memo and watch for changes. A person should approve the borrower, the investor and the exception. I build it that way because it is what an auditor will accept and because it is what works. Every agent I ship has an evaluation suite, a log of what it did, and a fallback when the model is unavailable.
Evidence: ID Document Reader (private), Magzi (verified), Deliveroo care automation (reported)

**availability-cost** (chip)
Triggers: available, availability, cost, price, pricing, rate, fee, how much, budget, when can you start
> I am available for advisory and build work alongside my role at MoonPay, and I am open to a full role for the right team. The diagnostic call is free. The diligence sprint is a fixed fee agreed before we start. The fractional retainer is priced per day, monthly. I give numbers on the call once I understand the scope, and I do not change them afterwards.
Evidence: Book a call (/#contact)

**defi-crypto**
Triggers: defi, crypto, on-chain, onchain, blockchain, web3, smart contract, wallet, stablecoin
> I have worked in crypto payments at MoonPay since 2025, on the identity side that decides who may transact and where. For a credit fund going on-chain the hard problems are not the contracts. They are who is allowed to hold the token, what happens when a sanctioned wallet shows up, which jurisdictions you can serve, and keeping the off-chain file in step with the on-chain state. That is where I am useful.
Evidence: MoonPay scope (employer), moonpay/skills (verified)

**tokenised-credit**
Triggers: tokenised, tokenized, token, rwa, real world asset, private credit, permissioned, allowlist, whitelist, transfer restriction, erc-3643, securitize, centrifuge, nav, feeder, accredited, qualified purchaser
> Tokenised private credit is mostly a permissioning problem. The issuer allowlists a wallet after KYC and accreditation. The token enforces transfer restrictions, lock ups, holder caps and jurisdiction rules on every transfer, through an identity registry and a compliance module in the ERC-3643 style, or a plain permissioned ERC-20. NAV is computed off-chain and published on-chain. I design and build the onboarding, the registry and the rules, and keep the audit trail on both sides. I do not write the token contract for you unless we agree that is the job.
Evidence: MoonPay scope (employer), Kleido case note (private)

**risk-rules**
Triggers: risk, rules engine, rules, limits, geolocation, geo, jurisdiction, authorisation, authorization, authz, authentication, auth, permissions
> I build rules engines that a compliance officer can read and change without an engineering release: eligibility, limits, geography, jurisdiction, and who may do what. At MoonPay that is geolocation driven rules inside the identity platform. At Motorway I led the split into separate authentication and authorisation services, which lifted top of funnel conversion by 7%.
Evidence: MoonPay scope (employer), Motorway (reported)

**privacy-onprem**
Triggers: privacy, on-prem, on premise, self hosted, data residency, gdpr, data cannot leave, cloud, vendor
> If documents or personal data cannot leave your environment, I build for that. The document reader runs as one container with networking disabled. Kleido runs as an appliance on the customer's hardware. Magzi runs on a home server with private models. I treat the cloud as optional, which means you keep the choice.
Evidence: ID Document Reader (private), Kleido case note (private), Magzi (verified)

**background**
Triggers: background, cv, resume, career, history, who are you, about you, experience, where have you worked
> Senior engineer in London. MoonPay identity platform now. Before that Motorway core engineering, Deliveroo customer care platform, Zalando fulfilment, Nordcloud cloud migration, and industrial automation at CARE in Islamabad. Computer engineering at NUST, AWS certified. I have shipped in regulated and high volume environments for nine years.
Evidence: Background (/#background), CV (/cv)

**stack**
Triggers: stack, languages, tech, technology, typescript, go, rust, python, cloudflare, aws, postgres
> TypeScript and Go for most product work, Rust where it needs to run forever on a small box, Python for document and model pipelines. Cloudflare Workers, AWS, PostgreSQL. I pick for the team that has to maintain it, not for me.
Evidence: Kleido case note (private), Magzi (verified)

**role**
Triggers: role, job, full time, hire, join, employee, cto, head of
> I am open to the right full role, and I prefer to start with a short engagement first. Two weeks of real work tells both of us more than six interviews. If it goes well, we talk.
Evidence: Engagement (/#engagement)

**contact**
Triggers: contact, email, call, book, talk, reach, linkedin, meet
> Email me at me@aashir.net or book a call from the contact section. I reply within two working days. Include what you are building, where you are in it, and whether you need advice, a build, or both.
Evidence: Contact (/#contact)

**fallback**
> I have not written an answer for that yet. Email me at me@aashir.net and I will reply in person, usually within two working days.
Evidence: Contact (/#contact)

### 8.4 Rendering

What the console must not look like: the memoji plus "Hey, I'm X" plus "Ask me anything" pill plus Me, Projects, Skills, Fun, Contact chips. That template has hundreds of clones and reads as junior. Ours has no avatar, a domain specific question set, mono tier labels and an evidence row. The nearest idiom is a command palette, not a chat bubble.


- Thread item: question in mono, `ink-mute`, prefixed by `>` ; answer in Newsreader 18 px; evidence row in mono 12.5 px with tier labels.
- Reveal: split answer into words, append one every 28 ms with `requestAnimationFrame` batching. Caret is a 2 px `clear` block.
- Chip click: fills the input, submits, scrolls the thread into view on mobile.
- Ledger line format: `12:43  asked  shipped-compliance`.

### 8.5 Analytics events

`console_ask {intent, matched: boolean, source: "chip" | "typed"}`, `evidence_click {href, tier}`, `book_call_click`, `email_click`, `case_note_view {slug}`. Use Vercel Analytics custom events or Plausible. Remove Google Analytics.

---

## 9. Copy rules

Enforced by a script, not by memory.

1. No em dashes, no en dashes as punctuation. Use a full stop, a comma, or a colon.
2. Sentences under 22 words. One idea each.
3. First person, present tense for what you do, past tense for what you did.
4. British spelling. Authorisation, organisation, programme.
5. Numbers only when you can defend them on a call. Every number carries a tier.
6. Banned words: passionate, leverage, journey, seamless, cutting edge, unlock, empower, delve, robust, scalable (as praise), synergy, innovative, world class, best in class, excited, thrilled, signal (as a noun for proof), field work, magic.
7. No exclamation marks. No emoji. No rhetorical questions in body copy.
8. No "we" unless there is a company. The site is you.
9. Headings are nouns or noun phrases. Not "Let's talk". "Contact".
10. Say what it is before what it means. "Kleido, sanctions and AML review" before "passes audit".

`scripts/copy-lint.mjs` runs in `pnpm lint` and fails the build on any em dash, en dash surrounded by spaces, banned word, or exclamation mark in `app/**`, `data/**`, `public/llms.txt`.

---

## 10. Technical plan

### 10.1 Keep

Next.js 15 app router, React 19, Tailwind 3.4, TypeScript, Vercel. `next/font`. `lib/utils.ts` for `cn`. Structured data component, rewritten.

### 10.2 Remove

- All `@radix-ui/*` except `react-tooltip` if the tier labels get a hover explanation. Otherwise all.
- `recharts`, `embla-carousel-react`, `react-hook-form`, `@hookform/resolvers`, `zod`, `input-otp`, `react-resizable-panels`, `cmdk`, `date-fns`, `framer-motion`, `tailwindcss-animate`, `class-variance-authority`.
- `components/ui/*` except what `Console` needs (likely nothing).
- `components/editorial/*` apart from pieces reused inside the new components.
- `components/newsletter.tsx`, `components/analytics.tsx` (Google).
- `data/blog-data.ts` and `app/writing`.
- `app/about`, `app/experience`, `app/projects`, `app/resume` (redirect).
- `public/placeholder-*`, `public/profile-cyberpunk.png`, `public/Aashir-Javed-Resume.pdf` (replace with generated PDF or remove).
- The `<style dangerouslySetInnerHTML>` block in `layout.tsx`. Tokens live in `globals.css` only.

### 10.3 Add

- `data/console.ts`, `data/evidence.ts`, `data/background.ts`, `data/offers.ts`. Copy lives in data files, not JSX, so the copy lint and future model have one place to read.
- `app/opengraph-image.tsx` using `next/og`: paper background, name in Newsreader, positioning line, nothing else.
- `app/work/[slug]/page.tsx` with MDX or plain TSX for the three case notes.
- `app/cv/page.tsx` with print stylesheet.
- `scripts/copy-lint.mjs`.
- `next.config.mjs` redirects: `/resume` to `/cv`, `/projects` to `/#evidence`, `/experience` to `/#background`, `/about` to `/`, `/contact` to `/#contact`, `/writing` to `/`.
- `public/llms.txt` rewritten from the new copy. `public/sitemap.xml` regenerated with only live routes.
- Vercel Analytics with custom events, or Plausible.

### 10.4 Budgets

| Metric | Target |
|---|---|
| LCP, mobile 4G | under 1.6 s |
| Home page JS, gzipped | under 70 KB |
| Fonts | two families, four files, `display: swap`, preloaded |
| Lighthouse | 100 performance, 100 accessibility, 100 SEO |
| CLS | 0 |

### 10.5 Accessibility

- Console input has a visible label for screen readers and `aria-live="polite"` on the thread.
- Tier labels have `title` and a visually hidden expansion.
- Focus rings in `clear`, 2 px, 3 px offset.
- Contrast: `ink-mute` on `paper` must pass 4.5:1. Adjust the value if it does not.
- Keyboard shortcut `/` does not fire while typing in any input.

### 10.6 SEO and metadata

Title: `Aashir Javed. Compliance and risk infrastructure for crypto and private credit.`
Description: `Senior engineer on MoonPay's identity platform. KYC, sanctions screening, risk rules and authorisation. Advisory and build work for private credit, DeFi and fintech teams. London.`
Person schema: `jobTitle` Senior Software Engineer, `worksFor` MoonPay, `knowsAbout` KYC, AML, sanctions screening, authorisation, AI agents. Remove the keyword list; it does nothing.

---

## 11. Phases

Estimates assume one focused engineer. Each phase ends with a deployable preview.

### Phase 0, same day. Stop the bleeding.

- [x] Run the DNS check in 1.1. If GitHub Pages is live, point `aashir.net` at Vercel and add the domain in the Vercel project. Keep `www` as a redirect.
- [x] In `aashirjaved.github.io`, replace `index.html` with a redirect to `https://aashir.net` and delete `CNAME`. Archive the repo.
- [x] Delete `data/blog-data.ts` usage from the home page and the writing page. Remove the writing nav item.
- [x] Remove the newsletter block from contact.
- [x] Replace the em dash in `app/page.tsx` and the ones in `app/contact/page.tsx`.
- [x] Deploy. Acceptance: no 404 links on the site, no placeholder images, `aashir.net` serves the Next.js build.

### Phase 1, one day. Copy locked.

- [ ] Review every `>` block in section 7 and 8 with you. Decide the Lips MK and MoonPay wording. Decide whether prices go on the page.
- [x] Create `data/*.ts` files from the approved copy.
- [x] Add `scripts/copy-lint.mjs` and wire it into `pnpm lint`.
- [x] Acceptance: `pnpm lint` passes on the data files.

### Phase 2, two days. Design system.

- [x] Fonts: Newsreader and JetBrains Mono through `next/font`. Remove Instrument Serif and the Avenir stack.
- [x] Tokens in `globals.css` per 6.2. Dark mode through `prefers-color-scheme`.
- [x] Remove the body backgrounds, scanlines, blobs, marquee, offset shadows and `visual-card`.
- [x] Build `Section`, `Rail`, `Ledger`, `Tier`, `Prose`, `Offer`, `ContactBlock`, `Footer`.
- [x] Rebuild the home page with sections 01 to 05 using static copy. The console slot holds the positioning line and a disabled input.
- [x] Acceptance: screenshots at 390, 768, 1280 and 1600 px in both schemes. No horizontal scroll. Lighthouse accessibility 100.

### Phase 3, two days. Console.

- [x] `Console`, `Answer`, matcher, reveal, chips, ledger, keyboard shortcuts, reduced motion.
- [x] Unit test the matcher against 40 phrasings (write them from the trigger lists plus 10 misspellings). Target: 90% matched to the intended intent, zero false confident matches on nonsense input.
- [x] Analytics events.
- [x] Acceptance: every chip returns the right answer; typing "do you do kyc for investors" returns `build-onboarding`; typing "what is the weather" returns the fallback. Verified live in Chromium with a mobile viewport.

### Phase 4, two days. Case notes and CV.

- [x] `/work/kleido`, `/work/id-reader`, `/work/moonpay` from section 7.7.
- [x] `/cv` with print stylesheet and a PDF export link.
- [x] Redirects in `next.config.mjs`.
- [x] Acceptance: all evidence links resolve; print preview of `/cv` fits one A4 page.

### Phase 5, one day. Launch surface.

- [x] `opengraph-image.tsx`, served live at `/opengraph-image`.
- [ ] Verify with the LinkedIn post inspector and a Slack unfurl.
- [ ] Cal.com booking link with a 45 minute event named "Diagnostic call" and three intake questions matching 7.6. Interim: "Book a call" opens a prefilled email with the same three questions.
- [x] `llms.txt`, sitemap, robots, structured data.
- [x] Dependency removal per 10.2. Confirm the JS budget.
- [x] Acceptance: no Radix or Recharts in the bundle. Lighthouse mobile with real throttling (slow 4G, 4x CPU) on the production build: performance 98 to 99, accessibility, best practices and SEO 100, LCP 0.9 s, CLS 0. Lighthouse's simulated mode estimates LCP at 2.7 s because its model charges the preloaded fonts to the headline. The live check gates on the measured LCP after every deploy.

### Phase 6, one day. QA and release.

- [ ] Copy read aloud once, end to end, by you. Cut anything that sounds like a brochure.
- [x] Cross engine pass on the live site: Chromium at four widths, WebKit (Safari engine) on an iPhone profile, Firefox. Runs after every deploy.
- [ ] Spot check on physical devices: an iPhone in Safari and an Android phone in Chrome.
- [x] Reduced motion pass.
- [ ] Ask two people in the target audience to use the console for two minutes and say what they would ask next. Add any missing intent.
- [x] Merge, deploy, verify `aashir.net` (verified live by the live check workflow).
- [ ] Tag `v2.0.0` on main. Tag pushes were blocked from the session that built this, so run `git tag v2.0.0 && git push origin v2.0.0` once.

### Phase 7, later. Real model behind the console.

Only after the hardcoded version has run for a few weeks and the analytics show which questions miss.

- `app/api/ask/route.ts`: retrieval over `llms.txt` and the case notes, system prompt that forbids claims not in the corpus, 150 word cap, rate limit by IP, no logging of question text beyond the intent label.
- Same `ask()` signature. The UI does not change.
- Keep the hardcoded answers as the first match; the model only handles the fallback.

---

## 12. Off site alignment

The site is the second click. The first is LinkedIn, and the third is GitHub.

LinkedIn headline (current: "LLMs | Fintech | Web3 | Cloud | Full-stack"):

> Compliance and risk infrastructure for crypto and private credit · Identity Platform, MoonPay · Advisory and build work

LinkedIn about, first two lines:

> I build the part of a financial product that decides who may transact, where, and under what limits. KYC, sanctions screening, risk rules, authorisation, and the AI that prepares the file without making the call.

GitHub profile README, first line, replacing "Building production AI agents at the edge of crypto payments":

> Compliance and risk infrastructure for crypto and private credit. Identity Platform at MoonPay. Builds Kleido, an AML review platform, and Magzi, a self hosted agent.

Remove the streak widget and the skill icons. Keep the three links.

---

## 13. Open questions for you

1. DNS result from 1.1.
2. May the site name Lips MK, or should it say "a UK lettings agency"?
3. Confirm the MoonPay scope sentence is acceptable to publish: "KYC, compliance, risk, authentication and authorisation, geolocation based rules engine".
4. Cal.com or Calendly, and which calendar.
5. Do prices go on the page, or only on the call? Default is on the call.
6. Keep the Godzilla game at an unlisted `/play`, or remove it?
7. Any public talk or post from the AI x Crypto meetup that can be linked as `verified` evidence?
8. Do you want a photo? Default is no photo on the home page and a small one on `/cv`. The console carries the personality.

---

## Appendix A. Buyer vocabulary

Use these words on the site and on calls. They are the words the buyer's own documents use.

| Area | Terms |
|---|---|
| Investor side | accredited investor, qualified purchaser, Reg D 506(c), Reg S, feeder fund, evergreen, transfer agent, fund administrator, broker dealer, subscription line, NAV facility, borrowing base, waterfall, compliance certificate, covenant lite, reporting covenants |
| Onboarding | KYC, KYB, UBO mapping, PEP, sanctions screening, adverse media, risk tiering, onboarding tiering, completion rate, time to invest, drop off, investor passport, reusable identity, case management |
| Tokenisation | permissioned RWA, restricted token, transfer allowlist, lock up, holder cap, freeze and forced transfer, identity registry, claims, compliance module, ERC-3643, permissioned collateral, NAV published on-chain, hub and spoke, risk curator |
| Monitoring | KYT, wallet screening, sanctions proximity, Travel Rule, covenant monitoring, loan agent notices, borrowing base certificate, portfolio monitoring, investor reporting |
| AI in private credit | underwriting preparation, document ingestion, agentic workflows with retrieval and tool calling, guardrails, human in the loop, evaluation |

Do not present "compliance perimeter" as the buyer's phrase. It is descriptive and fine in a sentence, not as a product name.

What private markets managers visibly hire for in AI: agent workflows across due diligence, portfolio monitoring, reporting and legal review, built with retrieval and tool calling under compliance guardrails. What tokenisation platforms visibly hire for: registries, allowlists, permissioned accounts and compliance aware mint and burn. Both map onto your identity platform and agent work, which is why the three offers are shaped as they are.

## Appendix B. Research sources

Reference sites: paco.me and paco.me/writing/redesign-2021, opendesign.cc/en/sites/paco, leerob.com and github.com/leerob/next-mdx-blog, rauno.me, benji.org, linusrogge.com/colophon, emilkowal.ski, brittanychiang.com and github.com/bchiang7/v4, maximeheckel.com, jhey.dev, awwwards.com/sites/portfolio-2025.

Fractional CTO offers: sanj.dev/work-with-me, vadimkravcenko.com/fractional-cto, rossboardman.com/fractional-cto, ag404.tech, reyem.tech/pricing, pangea.ai/cto, healytechnologies.com.

AI portfolio templates: github.com/toukoum/portfolio, github.com/samshanmukh/portfolio/pull/3, github.com/kerilpatel/portfolio-ai-chatbot, github.com/ar-0911/portfolio/pull/2.

Tokenised credit and compliance: docs.yield.xyz/docs/securitize, research.4pillars.io (Securitize infrastructure), halborn.com/audits/securitize/dstoken-e07b34, centrifuge.io/blog/centrifuge-v3-balancing-trust-with-composability, developer.centrifuge.io/user/investor, docs.maple.finance/legal/kyc, aave.com/blog/horizon-launch, quillaudits.com/blog/rwa/erc-3643-explained, tokeny.com/erc3643-vs-erc1400, fatf-gafi.org targeted update 2026, carta.com/learn/private-funds/management/nav-finance, mayerbrown.com NAV credit facility primer, cognaize.com/industries/private-credit, spglobal.com CreditCompanion research (Feb 2026), ihireengineering.com Hamilton Lane Agentic AI Solutions Engineer listing.

MoonPay public references: moonpay.com/newsroom/ny-bitlicense, moonpay.com/en-gb/newsroom/uk, jobs.lever.co/moonpay Product Manager Identity and Senior/Staff Software Engineer Enterprise listings (2026), dev.moonpay.com/docs/country-coverage, support.moonpay.com unsupported countries and US states pages.

Note: Goldfinch moved to maintenance mode in June 2026. Do not cite it as a live target.
