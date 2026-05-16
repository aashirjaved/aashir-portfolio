import Image from "next/image";
import {
  Container,
  Footer,
  PageHero,
  SectionLabel,
  Reveal,
  Pill,
  LinkButton,
  ArrowLink,
} from "@/components/editorial";

const stack = [
  { group: "Languages", items: ["go", "python", "typescript", "javascript", "java"] },
  { group: "Frontend", items: ["react", "next.js", "tailwind", "radix"] },
  { group: "Backend", items: ["go", "node", "graphql", "grpc"] },
  { group: "Cloud / Infra", items: ["aws", "gcp", "terraform", "kubernetes", "docker"] },
  { group: "Data", items: ["postgres", "redis", "dynamodb", "mongo", "kafka"] },
  { group: "AI / ML", items: ["llms", "agents", "rag", "fine-tune", "mlops"] },
];

const principles = [
  {
    title: "Ship the thing.",
    body:
      "Beautiful code that never reaches users is just journaling. I optimise for what shows up in production.",
  },
  {
    title: "AI earns its keep.",
    body:
      "I use models where they reliably beat the rules they replace. Demos are easy; production agents are humbling.",
  },
  {
    title: "Numbers, not adjectives.",
    body:
      "Latency, conversion, MTTR, cost. If I can't tell you what I moved and by how much, I probably didn't.",
  },
  {
    title: "Boring infra, ambitious product.",
    body:
      "The unsexy plumbing is what keeps clever ideas from collapsing the moment real traffic arrives.",
  },
];

export default function About() {
  return (
    <Container>
      <PageHero
        eyebrow="About"
        number="01"
        title="Eight years"
        italic="of shipping."
        lede="Senior engineer. Currently MoonPay. Backend, infra, full-stack, and lately a lot of LLMs in places they have to behave."
      />

      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-8 gap-x-10 items-start mb-24">
          <div className="sm:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-rule">
              <Image
                src="/me.png"
                alt="Aashir Javed"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(min-width: 640px) 40vw, 90vw"
              />
            </div>
          </div>
          <div className="sm:col-span-7 sm:pt-6">
            <p className="prose-editorial">
              I&rsquo;m Aashir. I write software for companies whose customers
              expect things to actually work — MoonPay, Motorway, Deliveroo,
              Zalando, IBM/Nordcloud before that.
            </p>
            <p className="prose-editorial mt-4">
              I started out chasing elegant code and ended up chasing leverage.
              Most of my recent years have been spent putting AI into customer
              journeys at scale, leading platform teams, and trimming cloud
              bills that grew faster than anyone admitted.
            </p>
            <p className="prose-editorial mt-4">
              I&rsquo;m based in London, work mostly remote, and travel for the
              right meeting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/contact">Get in touch →</LinkButton>
              <LinkButton href="/resume" variant="ghost">
                Read résumé
              </LinkButton>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="pt-16">
        <Reveal>
          <SectionLabel number="02" title="How I" italic="work" />
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {principles.map((p, i) => (
              <div key={p.title}>
                <div className="mono text-xs text-ink-mute mb-3">
                  {String(i + 1).padStart(2, "0")} / 04
                </div>
                <h3 className="display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.05] text-ink">
                  {p.title}
                </h3>
                <p className="prose-editorial mt-4">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pt-32">
        <Reveal>
          <SectionLabel
            number="03"
            title="The"
            italic="stack"
            description="What I reach for when nobody's watching. New things added often; old things only when they earn it."
          />
        </Reveal>
        <Reveal>
          <div className="space-y-8">
            {stack.map((s) => (
              <div
                key={s.group}
                className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-y-3 sm:gap-x-8 py-6 border-b border-rule-soft last:border-0"
              >
                <div className="mono text-xs uppercase tracking-wider text-ink-mute pt-2">
                  {s.group}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((it) => (
                    <Pill key={it}>{it}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pt-32">
        <Reveal>
          <SectionLabel
            number="04"
            title="Right"
            italic="now"
            description="Production agents · LLM automation · platform leadership."
          />
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
            <div>
              <p className="display-italic text-[clamp(1.5rem,3.5vw,2.25rem)] leading-snug text-ink">
                &ldquo;The unsexy plumbing that keeps clever demos from
                collapsing in production.&rdquo;
              </p>
              <p className="mt-4 mono text-xs uppercase tracking-wider text-ink-mute">
                — what I tell people I do
              </p>
            </div>
            <div>
              <p className="prose-editorial">
                For the last three years that&rsquo;s mostly meant production
                AI: agents that handle real customer journeys, evaluation
                harnesses that catch drift before users do, infra that stays up
                when a model goes weird.
              </p>
              <div className="mt-8">
                <ArrowLink href="/projects">See the work →</ArrowLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </Container>
  );
}
