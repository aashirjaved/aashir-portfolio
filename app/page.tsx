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
} from "@/components/crt";
import { PersonSchema, WebsiteSchema } from "@/components/structured-data";
import { blogPosts } from "@/data/blog-data";

const recentWork = [
  {
    co: "Motorway",
    role: "Senior Backend Engineer · Core Eng Lead",
    year: "2024 — now",
    pts: ["Decoupled AuthN/AuthZ → +7% conversion", "AI incident mgmt → −40% MTTR", "−15% AWS spend"],
    stack: "go · python · react · aws · llm",
  },
  {
    co: "Deliveroo",
    role: "SWE II · Customer Care Platform",
    year: "2022 — 2024",
    pts: ["Production AI agents · 10k+ cases/day at 95% accuracy", "2× CSAT, 50% lower handling time", "£2M annual savings"],
    stack: "go · react · llm fine-tune · k8s",
  },
  {
    co: "Zalando",
    role: "Software Engineer · Customer Fulfillment",
    year: "2021 — 2022",
    pts: ["1000+ RPS Java APIs, −15% latency", "ML demand forecast · +25% inventory accuracy"],
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
            { label: "open to", value: "senior · staff · founding eng", tone: "accent" },
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
          <p className="mt-4 font-mono text-[1.05rem] sm:text-[1.15rem] text-bright leading-relaxed max-w-[60ch]">
            Senior backend engineer building <span className="text-accent">production systems</span>{" "}
            that survive Monday morning. <span className="text-accent">LLMs</span> in places they
            have to behave. <span className="text-accent">Cloud</span> that does not page you at 3am.
          </p>
          <p className="mt-3 font-mono text-sm text-dim max-w-[60ch]">
            Currently leading Core Engineering at{" "}
            <span className="text-fg">Motorway</span>. Previously Deliveroo, Zalando, IBM/Nordcloud.
            Eight years across full-stack, infra, and AI.
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
        <section>
          <div className="font-mono text-[10px] sm:text-xs text-dim uppercase tracking-[0.25em] mb-2">
            {"> 01. what i ship"}
          </div>
          <h2 className="font-display text-[clamp(1rem,2.6vw,1.4rem)] uppercase glow leading-tight mb-5">
            BUILT, SHIPPED, MEASURED
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="frame frame-amber p-4 bg-screen/40">
              <div className="font-display text-[10px] text-accent glow uppercase mb-2">FULL-STACK</div>
              <p className="font-mono text-sm text-fg/95 leading-relaxed mb-3">
                React/Next on the front. Go, Python on the back. TypeScript end-to-end where it earns it.
              </p>
              <div className="flex flex-wrap gap-1">
                {["react", "next.js", "go", "python", "typescript"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
            <div className="frame frame-amber p-4 bg-screen/40">
              <div className="font-display text-[10px] text-accent glow uppercase mb-2">CLOUD / DEVOPS</div>
              <p className="font-mono text-sm text-fg/95 leading-relaxed mb-3">
                AWS by trade. Terraform for everything reproducible. Kubernetes when state demands it.
              </p>
              <div className="flex flex-wrap gap-1">
                {["aws", "terraform", "k8s", "docker", "ci/cd"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
            <div className="frame frame-amber p-4 bg-screen/40">
              <div className="font-display text-[10px] text-accent glow uppercase mb-2">AI / ML</div>
              <p className="font-mono text-sm text-fg/95 leading-relaxed mb-3">
                Production LLM agents. RAG, evals, fine-tuning when the off-the-shelf falls short.
              </p>
              <div className="flex flex-wrap gap-1">
                {["llm", "agents", "rag", "fine-tune", "mlops"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AsciiDivider variant="rule" className="my-12" />

        {/* RECENT WORK — teasers, not full case files */}
        <section>
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
                  <ul className="mt-1.5 space-y-0.5">
                    {w.pts.map((p) => (
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
        </section>

        <AsciiDivider variant="rule" className="my-12" />

        {/* WRITING — 3 latest, link out */}
        <section>
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <div className="font-mono text-[10px] sm:text-xs text-dim uppercase tracking-[0.25em]">
                {"> 03. writing"}
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
        </section>

        <AsciiDivider variant="rule" className="my-12" />

        {/* CLOSING CTA — peak-end rule, strong end */}
        <section className="frame frame-amber p-5 sm:p-6 bg-screen/40">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-dim mb-2">
            $ ./ready-when-you-are
          </div>
          <p className="font-mono text-fg/95 max-w-[58ch]">
            Hiring senior backend / staff / founding-eng for something serious? Building with LLMs
            in production? Drop a line — fastest replies via email.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <PixelButton href="mailto:me@aashir.net" external>
              $ mail me@aashir.net
            </PixelButton>
            <PixelButton href="/resume" variant="ghost">$ man aashir</PixelButton>
          </div>
        </section>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
