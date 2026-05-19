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
} from "@/components/editorial";
import { PersonSchema, WebsiteSchema } from "@/components/structured-data";
import { blogPosts } from "@/data/blog-data";

const recentWork = [
  {
    year: "now",
    company: "MoonPay",
    role: "Senior Engineer",
    blurb: "Consumer crypto, payment rails, mobile/web flows.",
    metrics: [
      { label: "Polygon", value: "8.5×" },
      { label: "Rails", value: "3" },
    ],
    stack: ["react", "next", "go", "python", "aws"],
  },
  {
    year: "2024",
    company: "Motorway",
    role: "Core Engineering Lead",
    blurb: "Platform primitives, auth, incidents, cost discipline.",
    metrics: [
      { label: "Conv", value: "+7%" },
      { label: "MTTR", value: "−40%" },
    ],
    stack: ["go", "python", "aws", "llm"],
  },
  {
    year: "2022",
    company: "Deliveroo",
    role: "Engineer · Customer Care",
    blurb: "Production AI agents for high-volume support journeys.",
    metrics: [
      { label: "Cases/day", value: "10k+" },
      { label: "Saved", value: "£2M" },
    ],
    stack: ["go", "react", "llm", "k8s"],
  },
];

function HeroVisual() {
  return (
    <div className="visual-card relative min-h-[440px] rounded-[36px] p-4 sm:p-5">
      <div className="orb right-8 top-10 h-20 w-20 opacity-80" />
      <div className="orb bottom-20 left-8 h-8 w-8 bg-ok opacity-80" />
      <div className="relative z-10 grid h-full content-between gap-4">
        <div className="phone-shell ml-auto w-[62%] rounded-[30px] p-3 sm:w-[54%]">
          <div className="rounded-[22px] bg-ink p-4 text-paper">
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-paper/45">MoonPay</div>
            <div className="mt-8 display text-6xl leading-[0.8]">8.5×</div>
            <div className="mt-2 text-xs text-paper/55">faster Polygon path</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="metric-tile rounded-3xl p-4">
            <div className="display text-4xl leading-none">£7M+</div>
            <div className="mt-2 mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">saved</div>
          </div>
          <div className="metric-tile rounded-3xl p-4 translate-y-6">
            <div className="display text-4xl leading-none">10k+</div>
            <div className="mt-2 mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">AI cases</div>
          </div>
        </div>

        <div className="phone-shell w-[76%] rounded-[28px] p-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-ok" />
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">production systems</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-2xl bg-accent-soft" />
            <div className="h-16 rounded-2xl bg-paper-2" />
            <div className="h-16 rounded-2xl bg-ink" />
          </div>
        </div>
      </div>
    </div>
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
        <section className="grid gap-8 pb-16 sm:pb-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.65fr)] lg:items-end">
          <div>
            <Eyebrow className="mb-8">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
                London · available
              </span>
            </Eyebrow>
            <h1 className="display text-[clamp(4rem,18vw,11rem)] leading-[0.82] text-ink">
              Build.
              <br />
              <span className="display-italic text-ink-mute">Ship.</span>
              <br />
              Scale.
            </h1>
            <p className="lede mt-8 max-w-[22ch] text-ink">
              Senior engineer for product systems, platform leverage and AI that works.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton href="/contact">Get in touch →</LinkButton>
              <LinkButton href="/projects" variant="ghost">View work</LinkButton>
            </div>
          </div>
          <Reveal>
            <HeroVisual />
          </Reveal>
        </section>

        <Reveal>
          <div className="border-y border-rule-soft py-7 sm:py-9">
            <LogoMarquee />
          </div>
        </Reveal>

        <Reveal>
          <section className="grid grid-cols-3 gap-3 py-12 sm:gap-8 sm:py-20">
            <Stat value="£7M+" label="Saved" />
            <Stat value="10k+" label="AI cases/day" />
            <Stat value="100+" label="Mentored" />
          </section>
        </Reveal>

        <section className="pt-10 sm:pt-20">
          <Reveal>
            <SectionLabel
              number="01"
              title="Selected"
              italic="work"
              description="A few shipped systems. Numbers first."
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

        <section className="pt-20 sm:pt-28">
          <Reveal>
            <SectionLabel number="02" title="Live" italic="signals" description="Ships, wins, builds." />
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <NotableCard
                kind="shipped"
                title="MoonLog Vol 02"
                href="https://www.linkedin.com/pulse/moonlog-volume-02-moonpay-vo1ae/"
                meta="MoonPay"
                description="Buy/Sell, Polygon speed, Balance rails."
                stats={[{ label: "Polygon", value: "8.5×" }]}
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

        <section className="pt-20 sm:pt-28">
          <Reveal>
            <SectionLabel
              number="03"
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
          <section className="py-24 sm:py-32">
            <div className="visual-card rounded-[36px] p-6 sm:p-10">
              <p className="eyebrow mb-6">Let’s talk</p>
              <p className="display max-w-[12ch] text-[clamp(3rem,10vw,6rem)] leading-[0.9] text-ink">
                Hard problem?
                <span className="display-italic text-ink-mute"> Send it.</span>
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
