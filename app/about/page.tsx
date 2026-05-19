import {
  CRTScreen,
  NavBar,
  Tag,
  PageFooter,
  PixelButton,
  CRTLink,
  FigCaption,
  CRTImage,
  DataRow,
  Reveal,
} from "@/components/crt";

const skills = [
  {
    category: "Product systems",
    items: ["React/Next.js", "TypeScript", "Go", "Python", "Java", "Node.js"],
  },
  {
    category: "Cloud and reliability",
    items: ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD", "Observability"],
  },
  {
    category: "AI in production",
    items: ["LLM agents", "RAG", "Fine-tuning", "Evals", "Vector DBs", "MLOps"],
  },
  {
    category: "Leadership",
    items: ["Technical strategy", "Mentoring", "Incident practice", "Stakeholders", "Hiring"],
  },
];

const achievements = [
  {
    value: "10k+",
    title: "Daily AI support cases",
    body: "Built production agents for customer-care workflows at Deliveroo with 95% accuracy.",
  },
  {
    value: "£7M+",
    title: "Operational savings",
    body: "Delivered savings across AI automation, cloud migration, and infrastructure optimisation.",
  },
  {
    value: "100+",
    title: "Engineers mentored",
    body: "Led practices, gamedays, and technical standards across multi-team engineering orgs.",
  },
  {
    value: "8.5×",
    title: "Faster transaction path",
    body: "Rebuilt a critical Polygon transaction flow for MoonPay consumer products.",
  },
];

export default function About() {
  return (
    <>
      <NavBar />
      <CRTScreen width="wide">
        <section className="grid gap-10 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)] lg:gap-16 lg:py-16">
          <Reveal>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">About</div>
              <h1 className="mt-5 max-w-[10ch] text-[clamp(4rem,10vw,8rem)] leading-[0.9]">
                The longer version.
              </h1>
              <p className="mt-7 max-w-[64ch] text-lg leading-8 text-fg/80">
                I’m a senior software engineer based in London. I’ve spent eight years turning
                ambiguous product and infrastructure problems into systems that teams can run,
                extend, and trust.
              </p>
              <p className="mt-5 max-w-[64ch] text-lg leading-8 text-fg/80">
                The work spans consumer fintech at MoonPay, platform engineering at Motorway,
                AI-powered customer care at Deliveroo, warehouse systems at Zalando, and enterprise
                cloud transformation at IBM/Nordcloud.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <FigCaption index={1} title="Aashir Javed · London">
              <CRTImage src="/me.png" alt="Aashir Javed" width={720} height={720} priority />
            </FigCaption>
          </Reveal>
        </section>

        <Reveal>
          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <article key={item.title} className="frame panel-grid p-5 sm:p-6">
                <div className="font-display text-5xl leading-none text-bright">{item.value}</div>
                <h2 className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-fg/78">{item.body}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Operating principles</div>
              <h2 className="mt-4 max-w-[9ch] text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.95]">
                How I work when it matters.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <article className="frame p-6">
                <h3 className="font-display text-3xl leading-none">Own the outcome</h3>
                <p className="mt-4 text-sm leading-7 text-fg/80">
                  I care less about impressive architecture diagrams and more about measurable user,
                  business, and operational outcomes.
                </p>
              </article>
              <article className="frame p-6">
                <h3 className="font-display text-3xl leading-none">Make it legible</h3>
                <p className="mt-4 text-sm leading-7 text-fg/80">
                  Good systems are understandable under pressure. Naming, boundaries, runbooks, and
                  observability are product features for engineers.
                </p>
              </article>
              <article className="frame p-6">
                <h3 className="font-display text-3xl leading-none">Use AI carefully</h3>
                <p className="mt-4 text-sm leading-7 text-fg/80">
                  I use LLMs where they compound leverage, not where they create invisible failure
                  modes or product theatre.
                </p>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="frame panel-grid p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Stack</div>
              <div className="mt-6 space-y-6">
                {skills.map((s) => (
                  <div key={s.category}>
                    <DataRow label={s.category} value={`${s.items.length} strengths`} />
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <Tag key={it} tone="dim">{it}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="frame panel-grid p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Current focus</div>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.96]">
                Product engineering with operational teeth.
              </h2>
              <p className="mt-5 text-base leading-8 text-fg/80">
                I’m most useful around high-leverage product surfaces: payment flows, AI workflows,
                internal platforms, reliability problems, and engineering teams moving from scrappy
                to serious.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <PixelButton href="/contact">Get in touch</PixelButton>
                <PixelButton href="/projects" variant="ghost">View work</PixelButton>
              </div>
            </div>
          </section>
        </Reveal>

        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
          Prefer the evidence trail? <CRTLink href="/experience">Experience</CRTLink> / <CRTLink href="/projects">Projects</CRTLink>
        </p>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
