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

const stack = ["go", "python", "typescript", "react", "next.js", "aws", "terraform", "k8s", "llms", "rag", "postgres"];

const principles = [
  ["Ship", "Production beats theatre."],
  ["Measure", "Numbers over adjectives."],
  ["Simplify", "Legible systems survive."],
  ["Compound", "AI only where it earns leverage."],
];

export default function About() {
  return (
    <Container size="wide">
      <PageHero
        eyebrow="About"
        number="01"
        title="Operator"
        italic="profile."
        lede="London-based senior engineer. Product, platform, AI."
      />

      <Reveal>
        <section className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="visual-card rounded-[36px] p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink p-6 text-paper">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent blur-3xl" />
              <div className="absolute bottom-10 left-8 h-24 w-24 rounded-full border border-paper/20" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.24em] text-paper/55">Aashir Javed</div>
                  <div className="mt-4 display text-[clamp(3rem,10vw,7rem)] leading-[0.82]">
                    Product<br />Platform<br />AI
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-20 rounded-2xl bg-paper/10" />
                  <div className="h-20 rounded-2xl bg-accent" />
                  <div className="h-20 rounded-2xl bg-paper/20" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="visual-card rounded-[30px] p-6">
              <div className="display text-6xl leading-none">8+</div>
              <div className="mt-3 mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">years shipping</div>
            </div>
            <div className="visual-card rounded-[30px] p-6">
              <div className="display text-6xl leading-none">4</div>
              <div className="mt-3 mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">major orgs</div>
            </div>
            <div className="visual-card rounded-[30px] p-6 sm:col-span-2">
              <p className="display text-[clamp(2.2rem,7vw,5.5rem)] leading-[0.92]">
                I turn messy ambition into systems that behave.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <LinkButton href="/contact">Contact →</LinkButton>
                <LinkButton href="/resume" variant="ghost">Résumé</LinkButton>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="pt-20 sm:pt-28">
        <Reveal>
          <SectionLabel number="02" title="Operating" italic="mode" description="Short version." />
        </Reveal>
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(([title, body], i) => (
              <div key={title} className="visual-card rounded-[28px] p-5">
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-8 display text-4xl leading-none">{title}</h3>
                <p className="mt-3 text-sm text-ink-2">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pt-20 sm:pt-28">
        <Reveal>
          <SectionLabel number="03" title="Working" italic="set" description="Tools I actually reach for." />
        </Reveal>
        <Reveal>
          <div className="visual-card rounded-[36px] p-5 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {stack.map((it) => (
                <Pill key={it}>{it}</Pill>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="pt-20 sm:pt-28">
        <Reveal>
          <div className="visual-card rounded-[36px] p-6 sm:p-10">
            <p className="display-italic max-w-[14ch] text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.92] text-ink">
              “Boring infra. Ambitious product.”
            </p>
            <div className="mt-8">
              <ArrowLink href="/projects">See the work →</ArrowLink>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </Container>
  );
}
