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
    blurb: "Refactored auth layer, drove AI adoption, and shipped consumer crypto improvements across mobile and web.",
    metrics: [{ label: "Auth", value: "refactor" }],
    stack: ["react", "next", "go", "python", "aws"],
  },
  {
    year: "2024",
    company: "Motorway",
    role: "Core Engineering Lead",
    blurb: "Led Core Engineering foundations, Motorway Pro trade proposition, auth split and AWS cost reduction.",
    metrics: [{ label: "Platform volume", value: "+15%" }],
    stack: ["go", "python", "aws", "llm"],
  },
  {
    year: "2022",
    company: "Deliveroo",
    role: "Customer Care Platform",
    blurb: "Automated customer-care journeys with Go APIs and fine-tuned GenAI models.",
    metrics: [{ label: "CSAT", value: "2×" }],
    stack: ["go", "react", "llm", "k8s"],
  },
];

const services = [
  {
    title: "Find the real workflow",
    result: "Customer context",
    body: "Work with users and operators to understand where the system actually breaks.",
    tags: ["Discovery", "Support", "Ops"],
  },
  {
    title: "Build the working wedge",
    result: "Prototype to prod",
    body: "Turn the first useful version into a product surface, API or internal tool people can use.",
    tags: ["React", "Go", "Python"],
  },
  {
    title: "Make it reliable",
    result: "Evals and infra",
    body: "Add auth, observability, evaluation loops and operational ownership before scale.",
    tags: ["Evals", "AWS", "Terraform"],
  },
];

function ImpactLedger() {
  const rows = [
    ["MoonPay", "Auth layer", "refactored"],
    ["Motorway", "Trade proposition", "+15% volume"],
    ["Motorway", "AuthN/AuthZ split", "+7% conversion"],
    ["Motorway", "Operational excellence", "−15% AWS"],
    ["Deliveroo", "GenAI care journey", "2× CSAT"],
    ["Zalando", "Warehouse gateway", "−15% latency"],
  ];

  return (
    <aside className="rounded-[28px] border border-rule-soft bg-surface/75 p-4 shadow-[0_24px_80px_rgba(24,22,20,0.06)] sm:p-5">
      <div className="flex items-center justify-between border-b border-rule-soft pb-4">
        <div>
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">Impact ledger</div>
          <div className="mt-1 text-sm text-ink-2">Recent shipped outcomes</div>
        </div>
        <div className="rounded-full bg-ok/10 px-3 py-1 mono text-[10px] uppercase tracking-[0.18em] text-ok">
          verified
        </div>
      </div>

      <div className="divide-y divide-rule-soft">
        {rows.map(([company, work, result]) => (
          <div key={`${company}-${work}`} className="grid grid-cols-[1fr_auto] gap-4 py-4">
            <div>
              <div className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">{company}</div>
              <div className="mt-1 text-sm text-ink">{work}</div>
            </div>
            <div className="display text-2xl leading-none text-ink sm:text-3xl">{result}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-paper-2 p-4">
        <div className="mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">Where I add leverage</div>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">
          Marketplace, cloud and infrastructure experience across auth, AI, gateways, migrations and operational excellence.
        </p>
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
        <section className="grid gap-8 pb-14 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end">
          <div>
            <Eyebrow className="mb-8">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
                London · product systems · platform · AI
              </span>
            </Eyebrow>
            <h1 className="display max-w-[8ch] text-[clamp(4.5rem,16vw,11rem)] leading-[0.82] text-ink">
              AI systems, deployed.
            </h1>
            <p className="lede mt-8 max-w-[30ch] text-ink">
              I work close to users, turn ambiguity into software, and take prototypes into production.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton href="/contact">Start a conversation →</LinkButton>
              <LinkButton href="/projects" variant="ghost">See proof</LinkButton>
            </div>
          </div>
          <Reveal>
            <ImpactLedger />
          </Reveal>
        </section>

        <Reveal>
          <div className="border-y border-rule-soft py-7 sm:py-9">
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
          <section className="grid grid-cols-3 gap-3 py-10 sm:gap-8 sm:py-16">
            <Stat value="+15%" label="Platform volume" />
            <Stat value="2×" label="CSAT uplift" />
            <Stat value="1000+" label="RPS gateway" />
          </section>
        </Reveal>

        <section className="pt-8 sm:pt-16">
          <Reveal>
            <SectionLabel
              number="01"
              title="What I"
              italic="do"
              description="Field work from problem to production."
            />
          </Reveal>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="rounded-[24px] border border-rule-soft bg-surface/75 p-5 sm:p-6">
                  <div className="display text-4xl leading-none text-accent">{service.result}</div>
                  <h3 className="mt-6 display text-3xl leading-[0.95] text-ink">{service.title}</h3>
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
              description="Recent work with measurable outcomes."
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
                title="MoonLog Vol 02"
                href="https://www.linkedin.com/pulse/moonlog-volume-02-moonpay-vo1ae/"
                meta="MoonPay"
                description="Consumer release work, auth-layer refactor and AI adoption."
                stats={[{ label: "Auth", value: "refactor" }, { label: "AI", value: "adopted" }]}
              />
              <NotableCard
                kind="win"
                title="AI Hackathon"
                href="https://www.linkedin.com/posts/adam-ferguson-7259b6121_two-months-ago-aashir-javed-omer-bresinski-share-7437869877543129088-3Z8q"
                meta="2026"
                description="Hardware to model to demo in 48 hours."
                stats={[{ label: "Place", value: "1st" }]}
              />
              <NotableCard
                kind="build"
                title="Whatify"
                href="https://whatify.ai"
                meta="Side build"
                description="Financial scenarios for real life decisions."
                stats={[{ label: "Waitlist", value: "3.8k" }]}
              />
              <NotableCard
                kind="post"
                title="Grok Radio"
                href="https://x.com/aasjav/status/2013716104271536622"
                meta="Prototype"
                description="Voice-first product sketch."
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
            <div className="rounded-[28px] border border-ink bg-ink p-6 text-paper sm:p-10">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-paper/55">Next step</p>
              <p className="mt-5 display max-w-[13ch] text-[clamp(3rem,9vw,6rem)] leading-[0.9]">
                Bring me the difficult bit.
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
