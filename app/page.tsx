import {
  CRTScreen,
  NavBar,
  StatusBar,
  LogoStrip,
  LcdStat,
  PixelButton,
  Tag,
  CRTLink,
  PageFooter,
  AsciiDivider,
  Cursor,
  Reveal,
  NotableCard,
} from "@/components/crt";
import { PersonSchema, WebsiteSchema } from "@/components/structured-data";
import { blogPosts } from "@/data/blog-data";

const recentWork = [
  {
    co: "MoonPay",
    role: "Senior Software Engineer",
    year: "now",
    pts: [
      "Shipping consumer crypto products at scale across iOS, Android, web",
      "Polygon transaction path · 8.5× faster after rebuild",
      "Balance experience rebuilt with ACH / SEPA / Faster Payments",
    ],
    stack: "react · next.js · go · python · aws",
  },
  {
    co: "Motorway",
    role: "Senior Backend Engineer · Core Eng Lead",
    year: "2024",
    pts: [
      "Decoupled AuthN/AuthZ → +7% conversion",
      "AI incident mgmt → −40% MTTR",
      "−15% AWS spend",
    ],
    stack: "go · python · react · aws · llm",
  },
  {
    co: "Deliveroo",
    role: "SWE II · Customer Care Platform",
    year: "2022",
    pts: [
      "Production AI agents · 10k+ cases/day at 95% accuracy",
      "2× CSAT · 50% lower handling time",
      "£2M annual savings",
    ],
    stack: "go · react · llm fine-tune · k8s",
  },
  {
    co: "Zalando",
    role: "Software Engineer · Customer Fulfillment",
    year: "2021",
    pts: ["1000+ RPS Java APIs · −15% latency", "ML demand forecast · +25% inventory accuracy"],
    stack: "java · react · postgres · k8s",
  },
];

export default function Home() {
  const recentPosts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
      <NavBar />
      <CRTScreen>
        {/* Status bar — replaces boot sequence, instant value */}
        <StatusBar
          items={[
            { label: "node", value: "online", tone: "ok" },
            { label: "loc", value: "london, uk" },
            { label: "now", value: "moonpay · sse", tone: "accent" },
            { label: "open to", value: "staff · founding eng" },
            { label: "uptime", value: "8 yrs" },
          ]}
        />

        {/* HERO — name, value prop, stats, logos, CTA all above fold */}
        <section className="pt-8 pb-2">
          <div className="font-mono text-xs sm:text-sm text-dim uppercase tracking-[0.25em] mb-3">
            {"> whoami"}
          </div>
          <h1 className="font-display text-[clamp(1.4rem,4.6vw,2.4rem)] uppercase glow-strong leading-[1.15]">
            AASHIR JAVED
            <Cursor />
          </h1>
          <p className="mt-4 font-mono text-[1.05rem] sm:text-[1.15rem] text-bright leading-relaxed max-w-[58ch]">
            Senior software engineer <span className="text-accent">shipping products at scale</span>.
            AI in the loop where it earns its keep.
          </p>
          <p className="mt-3 font-mono text-sm text-dim max-w-[58ch]">
            Currently <span className="text-bright">MoonPay</span> · prev. Motorway, Deliveroo,
            Zalando, IBM/Nordcloud.
          </p>

          {/* Stats — anchored first numbers a hiring manager sees */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-7">
            <LcdStat value="£7M+" label="Cost saved" />
            <LcdStat value="10k+" label="AI cases / day" />
            <LcdStat value="100+" label="Engineers mentored" />
          </div>

          {/* Logo strip — authority bias */}
          <LogoStrip />

          {/* Single primary CTA + one secondary */}
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <PixelButton href="/contact">$ hire me →</PixelButton>
            <PixelButton href="/projects" variant="ghost">$ see work</PixelButton>
            <span className="ml-auto font-mono text-xs text-dim hidden sm:inline">
              avg reply: 24 — 48h
            </span>
          </div>
        </section>

        <AsciiDivider variant="rule" className="my-12" />

        {/* WHAT I SHIP — compact grid, not 3 stacked terminals */}
        <Reveal><section>
          <div className="font-mono text-[10px] sm:text-xs text-dim uppercase tracking-[0.25em] mb-2">
            {"> 01. what i ship"}
          </div>
          <h2 className="font-display text-[clamp(1rem,2.6vw,1.4rem)] uppercase glow leading-tight mb-5">
            BUILT, SHIPPED, MEASURED
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="frame frame-amber p-5 bg-screen/40 flex flex-col gap-3">
              <div className="font-display text-[10px] text-accent glow uppercase">FULL-STACK</div>
              <p className="font-mono text-sm text-fg/95">React · Next · Go · Python end-to-end.</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {["react", "next.js", "go", "python", "ts"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
            <div className="frame frame-amber p-5 bg-screen/40 flex flex-col gap-3">
              <div className="font-display text-[10px] text-accent glow uppercase">CLOUD / DEVOPS</div>
              <p className="font-mono text-sm text-fg/95">AWS · Terraform · K8s when state demands it.</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {["aws", "terraform", "k8s", "docker", "ci/cd"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
            <div className="frame frame-amber p-5 bg-screen/40 flex flex-col gap-3">
              <div className="font-display text-[10px] text-accent glow uppercase">AI / ML</div>
              <p className="font-mono text-sm text-fg/95">Agents in production. RAG, evals, fine-tuning.</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {["llm", "agents", "rag", "fine-tune", "mlops"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </section></Reveal>

        <AsciiDivider variant="rule" className="my-12" />

        {/* RECENT WORK — teasers, not full case files */}
        <Reveal><section>
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <div className="font-mono text-[10px] sm:text-xs text-dim uppercase tracking-[0.25em]">
                {"> 02. recent work"}
              </div>
              <h2 className="font-display text-[clamp(1rem,2.6vw,1.4rem)] uppercase glow leading-tight">
                IMPACT, NOT JOB TITLES
              </h2>
            </div>
            <CRTLink href="/projects" className="font-mono text-sm whitespace-nowrap">
              all work →
            </CRTLink>
          </div>
          <div className="space-y-3">
            {recentWork.map((w) => (
              <article
                key={w.co}
                className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 py-3 border-b border-rule/50 last:border-0"
              >
                <div className="font-display text-[10px] text-accent glow uppercase pt-0.5">
                  {w.year}
                </div>
                <div>
                  <div className="font-mono text-bright text-sm sm:text-base uppercase tracking-wider">
                    {w.co} <span className="text-rule">·</span>{" "}
                    <span className="text-fg">{w.role}</span>
                  </div>
                  <ul className="mt-1.5 space-y-0.5 max-w-[64ch]">
                    {w.pts.slice(0, 2).map((p) => (
                      <li key={p} className="font-mono text-sm text-fg/90">
                        <span className="text-accent select-none mr-2">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 font-mono text-xs text-dim">{w.stack}</div>
                </div>
              </article>
            ))}
          </div>
        </section></Reveal>

        <AsciiDivider variant="rule" className="my-12" />

        {/* NOTABLE — surfaced from LinkedIn / X / live builds */}
        <Reveal><section>
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <div className="font-mono text-[10px] sm:text-xs text-dim uppercase tracking-[0.25em]">
                {"> 03. notable"}
              </div>
              <h2 className="font-display text-[clamp(1rem,2.6vw,1.4rem)] uppercase glow leading-tight">
                IN THE WILD
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <NotableCard
              kind="ship"
              title="MOONLOG · VOL 02"
              href="https://www.linkedin.com/pulse/moonlog-volume-02-moonpay-vo1ae/"
              meta="MoonPay · 2026"
              description="Latest consumer-app product release: redesigned Buy/Sell, 8.5× faster Polygon transactions, rebuilt Balance with ACH/SEPA/Faster Payments, refreshed Liquid Glass UI."
              stats={[
                { label: "Polygon", value: "8.5×" },
                { label: "Rails", value: "ACH·SEPA·FPS" },
              ]}
            />
            <NotableCard
              kind="win"
              title="AI HACKATHON · 1ST"
              href="https://www.linkedin.com/posts/adam-ferguson-7259b6121_two-months-ago-aashir-javed-omer-bresinski-share-7437869877543129088-3Z8q"
              meta="2026 · w/ Omer Bresinski"
              description="Built a winning AI product over a weekend. Two engineers, one idea, hardware to model to demo in under 48 hours."
              stats={[{ label: "Place", value: "1st" }]}
            />
            <NotableCard
              kind="post"
              title="GROK · RADIO PRODUCT"
              href="https://x.com/aasjav/status/2013716104271536622"
              meta="X · @aasjav"
              description="Spec, prototype, and product thinking for a Grok-powered radio interface. Voice as the new keyboard."
            />
            <NotableCard
              kind="build"
              title="WHATIFY · FINANCIAL SIM"
              href="https://whatify.ai"
              meta="side build · 2026"
              description="Stop guessing, start deciding. Side-by-side scenario simulation for major life decisions — homes, careers, family — stress-tested against rate spikes and cost overruns."
              stats={[
                { label: "Waitlist", value: "3.8k+" },
                { label: "Setup", value: "2 min" },
                { label: "Forecast", value: "5 yr" },
              ]}
            />
          </div>
        </section></Reveal>

        <AsciiDivider variant="rule" className="my-12" />

        {/* WRITING — 3 latest, link out */}
        <Reveal><section>
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <div className="font-mono text-[10px] sm:text-xs text-dim uppercase tracking-[0.25em]">
                {"> 04. writing"}
              </div>
              <h2 className="font-display text-[clamp(1rem,2.6vw,1.4rem)] uppercase glow leading-tight">
                NOTES FROM PRODUCTION
              </h2>
            </div>
            <CRTLink href="/writing" className="font-mono text-sm whitespace-nowrap">
              archive →
            </CRTLink>
          </div>
          <ul className="space-y-2">
            {recentPosts.map((p, i) => (
              <li
                key={p.slug}
                className="grid grid-cols-[2.5rem_1fr_auto] gap-3 py-2 border-b border-rule/50 last:border-0"
              >
                <span className="font-display text-[10px] text-accent">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <CRTLink href={`/writing/${p.slug}`} className="text-bright no-underline hover:text-accent font-mono">
                  {p.title}
                </CRTLink>
                <span className="font-mono text-xs text-dim whitespace-nowrap">
                  {p.readingTime.replace(" min read", "m")}
                </span>
              </li>
            ))}
          </ul>
        </section></Reveal>

        <AsciiDivider variant="rule" className="my-12" />

        {/* CLOSING CTA — peak-end rule, strong end */}
        <Reveal><section className="frame frame-amber p-5 sm:p-6 bg-screen/40">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-dim mb-2">
            $ ./ready-when-you-are
          </div>
          <p className="font-mono text-fg/95 max-w-[58ch]">
            Hiring staff / founding eng? Shipping AI in production? Drop a line.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <PixelButton href="mailto:me@aashir.net" external>
              $ mail me@aashir.net
            </PixelButton>
            <PixelButton href="/resume" variant="ghost">$ man aashir</PixelButton>
          </div>
        </section></Reveal>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
