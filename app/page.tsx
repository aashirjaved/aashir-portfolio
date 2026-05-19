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
  Reveal,
  NotableCard,
} from "@/components/crt";
import { PersonSchema, WebsiteSchema } from "@/components/structured-data";
import { blogPosts } from "@/data/blog-data";

const recentWork = [
  {
    co: "MoonPay",
    role: "Senior Software Engineer",
    year: "Now",
    pts: [
      "Rebuilt critical transaction paths for consumer crypto products across iOS, Android, and web.",
      "Shipped an 8.5× faster Polygon flow with less friction and better reliability.",
      "Led Balance experience improvements spanning ACH, SEPA, and Faster Payments.",
    ],
    stack: ["React", "Next.js", "Go", "Python", "AWS"],
  },
  {
    co: "Motorway",
    role: "Senior Backend Engineer · Core Engineering Lead",
    year: "2024",
    pts: [
      "Decoupled AuthN/AuthZ in a way that improved checkout conversion by 7%.",
      "Built AI-assisted incident tooling that cut MTTR by 40%.",
      "Reduced infrastructure spend by 15% without harming delivery speed.",
    ],
    stack: ["Go", "Python", "AWS", "Platform", "LLMs"],
  },
  {
    co: "Deliveroo",
    role: "Software Engineer II",
    year: "2022",
    pts: [
      "Put AI agents into production across 10k+ support cases per day at 95% accuracy.",
      "Doubled CSAT while halving handling time.",
      "Generated roughly £2M in annual savings.",
    ],
    stack: ["Go", "React", "Kubernetes", "LLM fine-tuning"],
  },
];

const principles = [
  "Ship product outcomes, not engineering theatre.",
  "Use AI where it compounds leverage, not where it adds noise.",
  "Make systems readable enough to survive Monday morning.",
];

export default function Home() {
  const recentPosts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
      <NavBar />
      <CRTScreen width="wide">
        <StatusBar
          items={[
            { label: "based", value: "London, UK" },
            { label: "current", value: "MoonPay", tone: "accent" },
            { label: "focus", value: "Staff · Founding Engineer" },
            { label: "experience", value: "8 years", tone: "ok" },
          ]}
        />

        <section className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.45fr)_380px] lg:gap-14 lg:py-16">
          <Reveal>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">
                Engineering portfolio
              </div>
              <h1 className="mt-5 max-w-[12ch] text-[clamp(4rem,11vw,8.6rem)] leading-[0.88] text-bright">
                Aashir Javed
              </h1>
              <p className="mt-6 max-w-[19ch] text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.08] text-fg/92">
                I build product systems that scale cleanly, move fast, and still feel intentional.
              </p>
              <p className="mt-6 max-w-[63ch] text-base leading-8 text-fg/78 sm:text-lg">
                Senior software engineer with deep full-stack, platform, and AI-in-production
                experience. I care about product judgment, operating leverage, and shipping work
                that survives real users rather than slide decks.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PixelButton href="/contact">Start a conversation</PixelButton>
                <PixelButton href="/projects" variant="ghost">
                  Selected work
                </PixelButton>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <aside className="frame panel-grid h-fit p-6 sm:p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-dim">
                Current operating mode
              </div>
              <div className="mt-5 border-t border-rule/80 pt-5">
                <div className="font-display text-3xl leading-none text-bright">Building serious things.</div>
                <p className="mt-4 text-sm leading-7 text-fg/80">
                  Consumer fintech, infrastructure, AI agents, internal platforms, and the messy
                  seam where product ambition meets operational reality.
                </p>
              </div>
              <div className="mt-6 space-y-3 border-t border-rule/80 pt-5">
                {principles.map((principle) => (
                  <div key={principle} className="flex gap-3 text-sm leading-7 text-fg/84">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </section>

        <section className="grid gap-3 sm:grid-cols-3">
          <LcdStat value="£7M+" label="Cost savings delivered" />
          <LcdStat value="10k+" label="AI cases per day" />
          <LcdStat value="100+" label="Engineers mentored" />
        </section>

        <section className="mt-12">
          <LogoStrip />
        </section>

        <Reveal>
          <section className="mt-20 grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">
                What I bring
              </div>
              <h2 className="mt-4 max-w-[10ch] text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]">
                Taste in systems.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <article className="frame p-5 sm:p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  Product engineering
                </div>
                <p className="mt-4 text-sm leading-7 text-fg/82">
                  Full-stack execution with strong product instincts. Enough speed to prototype,
                  enough discipline to harden what matters.
                </p>
              </article>
              <article className="frame p-5 sm:p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  Platform and reliability
                </div>
                <p className="mt-4 text-sm leading-7 text-fg/82">
                  Clean service boundaries, practical cloud architecture, and systems that are
                  debuggable under pressure.
                </p>
              </article>
              <article className="frame p-5 sm:p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  AI in production
                </div>
                <p className="mt-4 text-sm leading-7 text-fg/82">
                  Agents, evals, retrieval, and workflow design where the economics and UX justify
                  the complexity.
                </p>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <article className="frame panel-grid p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">
                Featured impact
              </div>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.94]">
                Faster transactions. Better rails. Less friction.
              </h2>
              <p className="mt-5 max-w-[60ch] text-base leading-8 text-fg/80">
                At MoonPay, I focus on the hard middle layer between product ambition and system
                reality: transaction speed, payment rails, balance architecture, and customer trust.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Consumer fintech", "Payments", "Reliability", "Mobile + Web"].map((item) => (
                  <Tag key={item} tone="dim">
                    {item}
                  </Tag>
                ))}
              </div>
            </article>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <article className="frame p-5 sm:p-6">
                <div className="font-display text-4xl text-bright">8.5×</div>
                <p className="mt-3 text-sm leading-7 text-fg/80">
                  Faster Polygon transaction path after a targeted rebuild.
                </p>
              </article>
              <article className="frame p-5 sm:p-6">
                <div className="font-display text-4xl text-bright">+7%</div>
                <p className="mt-3 text-sm leading-7 text-fg/80">
                  Conversion improvement after decoupling auth concerns at Motorway.
                </p>
              </article>
              <article className="frame p-5 sm:p-6">
                <div className="font-display text-4xl text-bright">−40%</div>
                <p className="mt-3 text-sm leading-7 text-fg/80">
                  Lower MTTR through AI-assisted incident management workflows.
                </p>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">
                  Selected experience
                </div>
                <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95]">
                  Impact over job titles.
                </h2>
              </div>
              <CRTLink href="/projects" className="font-mono text-[11px] uppercase tracking-[0.22em]">
                View all work
              </CRTLink>
            </div>
            <div className="mt-8 space-y-4">
              {recentWork.map((w) => (
                <article key={w.co} className="frame p-5 sm:p-6 lg:p-7">
                  <div className="grid gap-4 lg:grid-cols-[120px_minmax(0,1fr)_260px] lg:items-start">
                    <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">{w.year}</div>
                    <div>
                      <h3 className="text-3xl leading-none text-bright">{w.co}</h3>
                      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                        {w.role}
                      </div>
                      <ul className="mt-5 space-y-2 text-sm leading-7 text-fg/84">
                        {w.pts.map((p) => (
                          <li key={p} className="flex gap-3">
                            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap content-start gap-2 lg:justify-end">
                      {w.stack.map((item) => (
                        <Tag key={item} tone="dim">
                          {item}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid gap-6 lg:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">
                In the wild
              </div>
              <h2 className="mt-4 max-w-[9ch] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95]">
                Shipped things people can point at.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <NotableCard
                kind="ship"
                title="Moonlog Vol. 02"
                href="https://www.linkedin.com/pulse/moonlog-volume-02-moonpay-vo1ae/"
                meta="MoonPay · 2026"
                description="Latest consumer-app release spanning redesigned buy and sell flows, faster Polygon transactions, rebuilt balance rails, and a refreshed UI system."
                stats={[
                  { label: "Polygon", value: "8.5×" },
                  { label: "Rails", value: "ACH · SEPA · FPS" },
                ]}
              />
              <NotableCard
                kind="win"
                title="AI Hackathon, 1st Place"
                href="https://www.linkedin.com/posts/adam-ferguson-7259b6121_two-months-ago-aashir-javed-omer-bresinski-share-7437869877543129088-3Z8q"
                meta="2026"
                description="A winning AI product built from idea to hardware-backed demo in under 48 hours."
                stats={[{ label: "Team", value: "2 engineers" }]}
              />
              <NotableCard
                kind="post"
                title="Grok Radio Concept"
                href="https://x.com/aasjav/status/2013716104271536622"
                meta="X · @aasjav"
                description="A product concept exploring voice-first interaction and a radio-like interface for AI." 
              />
              <NotableCard
                kind="build"
                title="Whatify"
                href="https://whatify.ai"
                meta="Side build"
                description="Scenario simulation for major life decisions, stress-tested across rates, costs, and long-range tradeoffs."
                stats={[
                  { label: "Waitlist", value: "3.8k+" },
                  { label: "Forecast", value: "5 years" },
                ]}
              />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">
                Writing
              </div>
              <h2 className="mt-4 max-w-[9ch] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95]">
                Notes from production.
              </h2>
            </div>
            <div className="space-y-3">
              {recentPosts.map((p, i) => (
                <article key={p.slug} className="frame p-5 sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:items-center">
                    <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-dim">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <CRTLink href={`/writing/${p.slug}`} className="font-display text-2xl leading-tight text-bright no-underline hover:text-accent">
                      {p.title}
                    </CRTLink>
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
                      {p.readingTime.replace(" min read", "m")}
                    </div>
                  </div>
                </article>
              ))}
              <div className="pt-2">
                <CRTLink href="/writing" className="font-mono text-[11px] uppercase tracking-[0.22em]">
                  Browse archive
                </CRTLink>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 frame panel-grid p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">
                  If you’re hiring for leverage
                </div>
                <h2 className="mt-4 max-w-[12ch] text-[clamp(2.6rem,5vw,5rem)] leading-[0.94]">
                  Bring me the difficult product and platform problems.
                </h2>
                <p className="mt-5 max-w-[62ch] text-base leading-8 text-fg/80">
                  Staff engineer role, founding engineer seat, or a sharp problem that needs speed,
                  product judgment, and technical depth.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <PixelButton href="mailto:me@aashir.net" external>
                  Email Aashir
                </PixelButton>
                <PixelButton href="/resume" variant="ghost">
                  Read resume
                </PixelButton>
              </div>
            </div>
          </section>
        </Reveal>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
