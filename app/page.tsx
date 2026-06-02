import {
  Container,
  Footer,
  SectionLabel,
  Stat,
  WorkRow,
  NotableCard,
  LogoMarquee,
  Reveal,
  ArrowLink,
  LinkButton,
  PostRow,
  Eyebrow,
  Pill,
} from "@/components/editorial";
import { PersonSchema, WebsiteSchema } from "@/components/structured-data";
import { blogPosts } from "@/data/blog-data";

const recentWork = [
  {
    year: "now",
    company: "MoonPay",
    role: "Senior Engineer",
    blurb: "Building crypto payment and agent workflows: local-model prototyping, evals, memory/context design, public MoonPay skills and faster Polygon buys.",
    metrics: [{ label: "Polygon buys", value: "8.5×" }],
    stack: ["agents", "evals", "ollama", "go", "aws"],
  },
  {
    year: "2024",
    company: "Motorway",
    role: "Core Engineering Lead",
    blurb: "Owned core engineering foundations, the Motorway Pro trade proposition, an identity service split and AWS cost work — proposal to production, on-call to hand-off.",
    metrics: [{ label: "Platform volume", value: "+15%" }],
    stack: ["go", "python", "aws", "llm"],
  },
  {
    year: "2022",
    company: "Deliveroo",
    role: "Customer Care Platform",
    blurb: "Shipped automated customer-care journeys in production with agents, fine-tuned GenAI models and highly available Go APIs.",
    metrics: [{ label: "CSAT", value: "2×" }],
    stack: ["go", "react", "llm", "k8s"],
  },
];

const services = [
  {
    title: "Find leverage",
    result: "01",
    body: "Start where product pain meets infrastructure drag: auth, cost, latency, reliability, or agent workflows.",
    tags: ["Product", "Infra", "Context"],
  },
  {
    title: "Ship the proof",
    result: "02",
    body: "Turn demos into working systems with real users, measurable impact, and boring operational paths.",
    tags: ["Agents", "Evals", "Launches"],
  },
  {
    title: "Make it last",
    result: "03",
    body: "Leave the team with cleaner services, runbooks, cost wins, and enough context to keep moving.",
    tags: ["Memory", "On-call", "Handoff"],
  },
];

const storyBeats = [
  ["London", "Senior engineer where product, infra and AI agents meet."],
  ["Mode", "Find leverage. Ship proof. Make it last."],
  ["Signal", "Crypto payments, marketplaces, cloud platforms and systems that stay up."],
];

function SignalPortrait() {
  const signals = [
    ["8.5x", "faster Polygon buys"],
    ["109", "MoonPay skills stars"],
    ["300+", "Whatify weekly users"],
    ["2x", "CSAT at Deliveroo"],
  ];

  return (
    <aside className="signal-frame h-[320px] max-w-full p-3 sm:h-[430px] sm:p-4 lg:h-[460px] lg:self-center xl:h-[500px]">
      <div className="relative z-10 grid h-full grid-rows-1 gap-3 sm:grid-rows-[1fr_auto]">
        <div className="relative min-h-0 overflow-hidden border border-ink bg-ink text-paper">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute -right-20 -top-20 h-52 w-52 bg-accent/70 blur-3xl" />
          <div className="absolute -bottom-20 left-8 h-60 w-60 bg-ok/45 blur-3xl" />
          <div className="absolute left-4 top-4 mono text-[10px] uppercase tracking-[0.24em] text-paper/70">
            Aashir Javed / impact log
          </div>
          <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-2">
              {signals.map(([value, label]) => (
                <div key={label} className="border border-paper/20 bg-paper/5 p-3 backdrop-blur-sm">
                  <div className="display text-[clamp(2rem,6vw,3.8rem)] leading-none text-paper">{value}</div>
                  <div className="mt-2 mono text-[9px] uppercase tracking-[0.18em] text-paper/60">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 display max-w-[9ch] text-[clamp(2.2rem,6vw,4rem)] leading-[0.86] text-paper">
              signal over portrait
            </div>
          </div>
        </div>
        <div className="hidden border border-ink bg-paper sm:grid sm:grid-cols-3">
          {storyBeats.map(([label, value]) => (
            <div key={label} className="border-b border-ink p-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <div className="mono text-[10px] uppercase tracking-[0.2em] text-accent">{label}</div>
              <div className="mt-2 text-[12px] leading-snug text-ink-2">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function ArchitectureBrief({ className = "" }: { className?: string }) {
  const rows = [
    ["AI that moves money", "Agent skills, local models, eval loops"],
    ["Systems that pay back", "Auth, platform foundations, cloud cost, latency"],
    ["Products with signal", "Whatify, public launches, measurable usage"],
  ];

  return (
    <aside className={`border-t border-ink pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 ${className}`}>
      <div className="mono text-[11px] uppercase tracking-[0.22em] text-accent">Field brief</div>
      <div className="mt-6 space-y-5">
        {rows.map(([label, value]) => (
          <div key={label} className="border-b border-rule-soft pb-5 last:border-b-0 last:pb-0">
            <div className="display text-2xl leading-none text-ink">{label}</div>
            <div className="mt-2 text-sm leading-relaxed text-ink-2">{value}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function Home() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
      <Container size="wide">
        <section className="grid gap-8 pb-12 sm:pb-16 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="flex flex-col justify-between border-y border-ink py-8 sm:py-10">
            <div>
              <Eyebrow className="mb-8">
              <span className="inline-flex items-center gap-2 leading-relaxed">
                <span className="inline-block h-2 w-2 bg-ok" aria-hidden />
                London · MoonPay · crypto payments · AI agents
              </span>
              </Eyebrow>
              <h1 className="display max-w-[11ch] text-[clamp(2.65rem,10.5vw,4.7rem)] leading-[0.88] tracking-[-0.035em] text-ink sm:text-[clamp(3.3rem,7.2vw,6.1rem)] sm:leading-[0.84]">
                Backend and AI systems that move real product metrics.
              </h1>
            </div>
            <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
              <div>
                <p className="lede max-w-[30ch] text-[1.08rem] leading-snug text-ink sm:text-[clamp(1.15rem,2.4vw,1.75rem)] sm:leading-[1.28]">
                  Senior engineer building crypto payment rails, LLM agent workflows, eval systems and platform services across MoonPay, Motorway, Deliveroo and Zalando.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                  <LinkButton href="/projects">See proof</LinkButton>
                  <LinkButton href="/contact" variant="ghost">Send context</LinkButton>
                </div>
              </div>
              <ArchitectureBrief className="hidden lg:block" />
            </div>
          </div>
          <Reveal>
            <SignalPortrait />
          </Reveal>
        </section>

        <Reveal>
          <div className="border-y border-ink py-7 sm:py-9">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                Experience across
              </p>
              <p className="hidden text-sm text-ink-mute sm:block">Fintech, marketplaces, logistics, fashion commerce and enterprise cloud.</p>
            </div>
            <LogoMarquee />
          </div>
        </Reveal>

        <Reveal>
          <section className="grid border-y border-ink py-0 sm:grid-cols-3">
            <Stat value="8.5×" label="Faster Polygon buys" className="border-b border-ink p-4 sm:border-b-0 sm:border-r sm:p-6" />
            <Stat value="+15%" label="Platform volume" className="border-b border-ink p-4 sm:border-b-0 sm:border-r sm:p-6" />
            <Stat value="300+" label="Weekly Whatify users" className="p-4 sm:p-6" />
          </section>
        </Reveal>

        <section className="pt-8 sm:pt-16">
          <Reveal>
            <SectionLabel
              number="01"
              title="Operating"
              italic="mode"
              description="How I turn vague technical surface area into shipped work."
            />
          </Reveal>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="group border border-ink bg-surface/80 p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="display text-6xl leading-none text-accent">{service.result}</div>
                    <span className="h-8 w-8 border border-ink bg-paper transition-colors group-hover:bg-ok" aria-hidden />
                  </div>
                  <h3 className="mt-8 display text-4xl leading-[0.88] text-ink">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-2">{service.body}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="pt-20 sm:pt-24">
          <Reveal>
            <SectionLabel
              number="02"
              title="Recent"
              italic="evidence"
              description="Recent work with numbers attached."
              action={<ArrowLink href="/projects">All work</ArrowLink>}
            />
          </Reveal>
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-3">
              {recentWork.map((w) => (
                <WorkRow key={w.company} item={w} />
              ))}
            </div>
          </Reveal>
        </section>

        <section className="pt-20 sm:pt-24">
          <Reveal>
            <SectionLabel number="03" title="Public" italic="proof" description="Links, launches and public artifacts." />
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <NotableCard
                kind="shipped"
                title="Moonlog Volume 02"
                href="https://www.linkedin.com/pulse/moonlog-volume-02-moonpay-vo1ae/"
                meta="MoonPay"
                description="Product and engineering launches across Buy/Sell, MoonPay Balance and Polygon purchase performance."
                stats={[{ label: "Polygon", value: "8.5×" }, { label: "Markets", value: "US·UK·EU" }]}
              />
              <NotableCard
                kind="build"
                title="alchemy-infra"
                href="https://github.com/aashirjaved/alchemy-infra"
                meta="Open source"
                description="Infrastructure-as-TypeScript skill for agents with strict secret hygiene and repeatable setup."
                stats={[{ label: "Benchmark", value: "+15.5pp" }, { label: "Stars", value: "2" }]}
              />
              <NotableCard
                kind="build"
                title="Whatify"
                href="https://whatify.ai"
                meta="Side product"
                description="Public-data financial-class diagnosis for income, wealth, place and household context."
                stats={[{ label: "Weekly users", value: "300+" }]}
              />
              <NotableCard
                kind="win"
                title="AI Agentic Hackathon"
                href="https://www.linkedin.com/posts/adam-ferguson-7259b6121_two-months-ago-aashir-javed-omer-bresinski-share-7437869877543129088-3Z8q"
                meta="MoonPay"
                description="Won popular vote by pairing working automation with a crisp product story."
                stats={[{ label: "Result", value: "Win" }]}
              />
            </div>
          </Reveal>
        </section>

        <section className="pt-20 sm:pt-24">
          <Reveal>
            <SectionLabel
              number="04"
              title="Writing"
              italic="notes"
              description="Short reads from production."
              action={<ArrowLink href="/writing">Archive</ArrowLink>}
            />
          </Reveal>
          <Reveal>
            <div>
              {recentPosts.map((p) => (
                <PostRow
                  key={p.slug}
                  href={`/writing/${p.slug}`}
                  title={p.title}
                  date={fmtDate(p.date)}
                  readingTime={p.readingTime.replace(" min read", " min")}
                  tags={p.tags.slice(0, 2)}
                  featured={p.featured}
                />
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal>
          <section className="py-20 sm:py-28">
            <div className="signal-frame bg-ink p-6 text-paper sm:p-10">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-paper/55">Next step</p>
              <p className="mt-5 display max-w-[13ch] text-[clamp(3rem,9vw,6rem)] leading-[0.9]">
                Bring me the product metric hiding inside the hard system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="mailto:me@aashir.net">Email →</LinkButton>
                <LinkButton href="/resume" variant="ghost">Résumé</LinkButton>
              </div>
            </div>
          </section>
        </Reveal>

        <Footer />
      </Container>
    </>
  );
}
