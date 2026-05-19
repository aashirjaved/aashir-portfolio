import {
  Container,
  Footer,
  PageHero,
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
    year: "2025 — now",
    company: "MoonPay",
    role: "Senior Engineer",
    blurb:
      "Shipping consumer crypto across iOS, Android and web. Rebuilt the Polygon transaction path 8.5× faster; reworked Balance with ACH, SEPA and Faster Payments rails.",
    metrics: [
      { label: "Polygon", value: "8.5×" },
      { label: "Rails", value: "ACH·SEPA·FPS" },
    ],
    stack: ["react", "next.js", "go", "python", "aws"],
  },
  {
    year: "2024",
    company: "Motorway",
    role: "Core Engineering Lead",
    blurb:
      "Led the platform that every product team builds on. Decoupled auth pushed conversion +7%. LLM-assisted incidents cut MTTR by 40%. Trimmed 15% off the AWS bill.",
    metrics: [
      { label: "Conv", value: "+7%" },
      { label: "MTTR", value: "−40%" },
      { label: "AWS", value: "−15%" },
    ],
    stack: ["go", "python", "react", "aws", "llm"],
  },
  {
    year: "2022",
    company: "Deliveroo",
    role: "Engineer · Customer Care",
    blurb:
      "Production AI agents handling 10k+ cases a day at 95% accuracy. Doubled CSAT, halved handling time, banked £2M in annual savings.",
    metrics: [
      { label: "CSAT", value: "2×" },
      { label: "Saved", value: "£2M" },
    ],
    stack: ["go", "react", "llm", "k8s"],
  },
];

export default function Home() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 4);

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
        {/* HERO */}
        <section className="pt-4 sm:pt-8 pb-20 sm:pb-28">
          <Eyebrow className="mb-10">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-ok" aria-hidden />
              Available · London
            </span>
          </Eyebrow>
          <h1 className="display text-[clamp(3.5rem,13vw,10rem)] leading-[0.88] text-ink">
            Aashir
            <br />
            <span className="display-italic text-ink-mute">Javed.</span>
          </h1>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
            <p className="lede md:col-span-7 text-ink">
              I&rsquo;m a senior software engineer building consumer products at
              scale — and putting AI into the loop where it earns its keep.
            </p>
            <div className="md:col-span-4 md:col-start-9 self-end">
              <p className="text-sm text-ink-mute leading-relaxed">
                Currently at <span className="text-ink">MoonPay</span>. Eight
                years, four companies, a lot of shipped pixels. Open to staff
                and founding-engineer roles.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton href="/contact">Get in touch →</LinkButton>
                <LinkButton href="/projects" variant="ghost">
                  See selected work
                </LinkButton>
              </div>
            </div>
          </div>
        </section>

        <Reveal>
          <div className="border-y border-rule-soft py-10">
            <p className="eyebrow mb-6">Worked with</p>
            <LogoMarquee />
          </div>
        </Reveal>

        {/* STATS — editorial big numbers */}
        <Reveal>
          <section className="py-20 sm:py-28 grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-10 border-b border-rule-soft">
            <Stat
              value="£7M+"
              label="Saved through AI &amp; cloud"
              hint="Across Deliveroo, Motorway, Nordcloud"
            />
            <Stat
              value="10k+"
              label="AI cases handled daily"
              hint="95% accuracy · production agents"
            />
            <Stat
              value="100+"
              label="Engineers mentored"
              hint="Across four orgs · eight years"
            />
          </section>
        </Reveal>

        {/* SELECTED WORK */}
        <section className="pt-24 sm:pt-32">
          <Reveal>
            <SectionLabel
              number="01"
              title="Selected"
              italic="work"
              description="Impact over job titles. A handful of recent stints where I shipped something that moved a number."
              action={<ArrowLink href="/projects">All work</ArrowLink>}
            />
          </Reveal>
          <Reveal>
            <div>
              {recentWork.map((w) => (
                <WorkRow key={w.company} item={w} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* NOTABLE */}
        <section className="pt-24 sm:pt-32">
          <Reveal>
            <SectionLabel
              number="02"
              title="In the"
              italic="wild"
              description="Ships, wins, side builds and posts that travelled."
            />
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <NotableCard
                kind="shipped"
                title="MoonLog — Vol 02"
                href="https://www.linkedin.com/pulse/moonlog-volume-02-moonpay-vo1ae/"
                meta="MoonPay · 2026"
                description="Latest consumer release: redesigned Buy/Sell, 8.5× faster Polygon, rebuilt Balance with ACH/SEPA/FPS, refreshed Liquid Glass UI."
                stats={[
                  { label: "Polygon", value: "8.5×" },
                  { label: "Rails", value: "3" },
                ]}
              />
              <NotableCard
                kind="win"
                title="AI Hackathon — 1st place"
                href="https://www.linkedin.com/posts/adam-ferguson-7259b6121_two-months-ago-aashir-javed-omer-bresinski-share-7437869877543129088-3Z8q"
                meta="2026 · w/ Omer Bresinski"
                description="Two engineers, one idea. Hardware to model to demo in under 48 hours."
                stats={[{ label: "Place", value: "1st" }]}
              />
              <NotableCard
                kind="build"
                title="Whatify — financial simulation"
                href="https://whatify.ai"
                meta="Side build · 2026"
                description="Stop guessing, start deciding. Side-by-side scenarios for life decisions — homes, careers, family — stress-tested against rate spikes."
                stats={[
                  { label: "Waitlist", value: "3.8k" },
                  { label: "Setup", value: "2m" },
                  { label: "Forecast", value: "5y" },
                ]}
              />
              <NotableCard
                kind="post"
                title="Grok — radio product"
                href="https://x.com/aasjav/status/2013716104271536622"
                meta="X · @aasjav"
                description="Spec and prototype for a Grok-powered radio interface. Voice as the new keyboard."
              />
            </div>
          </Reveal>
        </section>

        {/* WRITING */}
        <section className="pt-24 sm:pt-32">
          <Reveal>
            <SectionLabel
              number="03"
              title="Notes from"
              italic="production"
              description="AI in production, infra rot, full-stack reality. A few longer reads."
              action={<ArrowLink href="/writing">All writing</ArrowLink>}
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
                  description={p.description}
                  tags={p.tags}
                  featured={p.featured}
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* CLOSING */}
        <Reveal>
          <section className="pt-32 sm:pt-40 pb-8">
            <p className="eyebrow mb-8">Let&rsquo;s talk</p>
            <p className="display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] text-ink max-w-[18ch]">
              Hiring staff?
              <br />
              <span className="display-italic text-ink-mute">
                Shipping AI in production?
              </span>
            </p>
            <p className="mt-8 text-ink-2 max-w-[44ch]">
              I reply within 24 — 48 hours. Bring a problem, a half-formed idea,
              or just say hello.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <LinkButton href="mailto:me@aashir.net">
                me@aashir.net →
              </LinkButton>
              <LinkButton href="/resume" variant="ghost">
                Read résumé
              </LinkButton>
            </div>
          </section>
        </Reveal>

        <Footer />
      </Container>
    </>
  );
}
