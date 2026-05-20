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

function FieldBrief() {
  const rows = [
    ["Field", "Customer workflows, support ops, auth, payments"],
    ["Build", "React surfaces, Go APIs, Python automation"],
    ["Harden", "Evals, observability, cloud cost, on-call paths"],
  ];

  return (
    <aside className="relative overflow-hidden rounded-[32px] border border-paper/15 bg-paper/[0.06] p-4 text-paper shadow-2xl backdrop-blur sm:p-5">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/40 blur-3xl" />
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.24em] text-paper/45">Field brief</div>
            <div className="mt-1 text-sm text-paper/70">How I work</div>
          </div>
          <div className="rounded-full border border-paper/15 px-3 py-1 mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
            prod ready
          </div>
        </div>

        <div className="space-y-3">
          {rows.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-paper/10 bg-paper/[0.045] p-4">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/40">{label}</div>
              <div className="mt-2 text-base leading-snug text-paper">{value}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-2xl bg-paper p-3 text-ink">
            <div className="display text-3xl leading-none">+15%</div>
            <div className="mt-1 mono text-[9px] uppercase tracking-[0.16em] text-ink-mute">volume</div>
          </div>
          <div className="rounded-2xl bg-paper p-3 text-ink">
            <div className="display text-3xl leading-none">2×</div>
            <div className="mt-1 mono text-[9px] uppercase tracking-[0.16em] text-ink-mute">CSAT</div>
          </div>
          <div className="rounded-2xl bg-accent p-3 text-paper">
            <div className="display text-3xl leading-none">AI</div>
            <div className="mt-1 mono text-[9px] uppercase tracking-[0.16em] text-paper/70">deployed</div>
          </div>
        </div>
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
        <section className="relative mb-10 overflow-hidden rounded-[40px] bg-ink p-5 text-paper shadow-[0_40px_120px_rgba(24,22,20,0.18)] sm:p-8 lg:p-10">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-ok/20 blur-3xl" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <Eyebrow className="mb-8 text-paper/55">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
                  Forward deployed · product · platform · AI
                </span>
              </Eyebrow>
              <h1 className="display max-w-[7ch] text-[clamp(4.7rem,17vw,11.5rem)] leading-[0.78] tracking-[-0.055em] text-paper">
                AI, shipped.
              </h1>
              <p className="mt-7 max-w-[34ch] text-xl leading-snug text-paper/72 sm:text-2xl">
                I turn messy customer workflows into production software.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/projects" className="border-paper bg-paper text-ink hover:border-accent hover:bg-accent hover:text-paper">
                  See proof →
                </LinkButton>
                <LinkButton href="/contact" variant="ghost" className="border-paper/25 bg-paper/5 text-paper hover:bg-paper/10 hover:text-paper">
                  Send context
                </LinkButton>
              </div>
            </div>
            <Reveal>
              <FieldBrief />
            </Reveal>
          </div>
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
