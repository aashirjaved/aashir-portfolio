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
import Image from "next/image";

const recentWork = [
  {
    year: "now",
    company: "MoonPay",
    role: "Senior Engineer",
    blurb: "Embedded with product teams to refactor the auth layer, drive AI adoption across engineering workflows, and ship consumer crypto features across mobile and web.",
    metrics: [{ label: "Auth", value: "refactor" }],
    stack: ["react", "next", "go", "python", "aws"],
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
    blurb: "Shipped automated customer-care journeys in production — Go APIs, fine-tuned generative models, evals against real ticket traffic, runbooks handed back to the platform team.",
    metrics: [{ label: "CSAT", value: "2×" }],
    stack: ["go", "react", "llm", "k8s"],
  },
];

const services = [
  {
    title: "Enter the system",
    result: "01",
    body: "I learn the product, the code, the rituals, and the weird edges fast.",
    tags: ["Embedded", "Customer infra", "Day one PR"],
  },
  {
    title: "Make the agent real",
    result: "02",
    body: "Ambiguous workflow to production feature, with evals and failure paths in the loop.",
    tags: ["Agents", "Evals", "MCP"],
  },
  {
    title: "Leave it operable",
    result: "03",
    body: "Runbooks, tests, on-call notes, and enough context for the team to own it.",
    tags: ["Hardening", "Evals", "Runbooks"],
  },
];

const storyBeats = [
  ["London", "Senior engineer embedded where product and infra meet."],
  ["Mode", "Prototype quickly. Harden deliberately. Hand off cleanly."],
  ["Signal", "AI products, auth, marketplaces, cloud, and systems that stay up."],
];

function SignalPortrait() {
  return (
    <aside className="signal-frame h-[320px] max-w-full p-3 sm:h-[430px] sm:p-4 lg:h-[460px] lg:self-center xl:h-[500px]">
      <div className="relative z-10 grid h-full grid-rows-1 gap-3 sm:grid-rows-[1fr_auto]">
        <div className="relative min-h-0 overflow-hidden border border-ink bg-ink">
          <Image
            src="/profile-cyberpunk.png"
            alt="Aashir Javed"
            fill
            priority
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover object-[50%_35%] contrast-[1.05] saturate-[1.08] sm:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,18,16,0)_0%,rgba(13,18,16,0.04)_38%,rgba(13,18,16,0.58)_100%),linear-gradient(90deg,rgba(231,73,40,0.12),transparent_42%,rgba(22,150,111,0.1))]" />
          <div className="absolute left-4 top-4 mono text-[10px] uppercase tracking-[0.24em] text-paper/70">
            Aashir Javed / Field log
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="display max-w-[8ch] text-[clamp(2.35rem,6vw,4.2rem)] leading-[0.82] text-paper">
              ship the hard part
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
    ["AI that ships", "Agents, evals, MCP, production traffic"],
    ["Systems that bend", "Auth, platform foundations, cloud cost, on-call"],
    ["Teams that inherit", "Runbooks, operating context, clean hand-off"],
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
                London · embedded product engineering · AI systems
              </span>
              </Eyebrow>
              <h1 className="display max-w-[11ch] text-[clamp(2.65rem,10.5vw,4.7rem)] leading-[0.88] tracking-[-0.035em] text-ink sm:text-[clamp(3.3rem,7.2vw,6.1rem)] sm:leading-[0.84]">
                I ship the messy middle from idea to production.
              </h1>
            </div>
            <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
              <div>
                <p className="lede max-w-[30ch] text-[1.08rem] leading-snug text-ink sm:text-[clamp(1.15rem,2.4vw,1.75rem)] sm:leading-[1.28]">
                  Senior engineer for AI products, auth layers, marketplaces and cloud platforms that need to survive real users.
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
            <Stat value="+15%" label="Platform volume" className="border-b border-ink p-4 sm:border-b-0 sm:border-r sm:p-6" />
            <Stat value="2×" label="CSAT uplift" className="border-b border-ink p-4 sm:border-b-0 sm:border-r sm:p-6" />
            <Stat value="1000+" label="RPS gateway" className="p-4 sm:p-6" />
          </section>
        </Reveal>

        <section className="pt-8 sm:pt-16">
          <Reveal>
            <SectionLabel
              number="01"
              title="Operating"
              italic="sequence"
              description="A compact way to describe how I move through ambiguity."
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
            <div className="signal-frame bg-ink p-6 text-paper sm:p-10">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-paper/55">Next step</p>
              <p className="mt-5 display max-w-[13ch] text-[clamp(3rem,9vw,6rem)] leading-[0.9]">
                Bring me the demo-to-prod cliff.
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
