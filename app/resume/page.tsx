import {
  Container,
  Footer,
  PageHero,
  SectionLabel,
  Reveal,
  Pill,
  LinkButton,
  EditorialLink,
} from "@/components/editorial";

const positions = [
  {
    co: "MoonPay",
    role: "Senior Software Engineer · Consumer Product",
    when: "Present · London",
    pts: [
      "Shipping consumer crypto products at scale across iOS, Android and web.",
      "Polygon transaction path → 8.5× faster after rebuild.",
      "Balance experience rebuilt with ACH / SEPA / Faster Payments rails.",
      "Buy/Sell screens redesigned · Liquid Glass UI refresh · onboarding rework.",
    ],
  },
  {
    co: "Motorway",
    role: "Senior Backend Engineer · Core Engineering Lead",
    when: "Jun 2024 — 2026 · London",
    pts: [
      "Led Core Engineering: foundational services and platform primitives.",
      "Decoupled AuthN/AuthZ migration → +7% conversion.",
      "Operational excellence working group → −15% AWS spend.",
      "AI incident management with LLM categorisation → −40% MTTR.",
    ],
  },
  {
    co: "Deliveroo",
    role: "Software Engineer II · Platform / Customer Care",
    when: "May 2022 — Jun 2024 · London",
    pts: [
      "AI agents shipping 10,000+ daily cases at 95% accuracy.",
      "2× CSAT · 50% reduction in handling time · £2M annual savings.",
      "Multi-region k8s + Terraform; engineering gamedays for 100+ engineers.",
    ],
  },
  {
    co: "Zalando",
    role: "Software Engineer · Customer Fulfillment",
    when: "Jan 2021 — May 2022 · Helsinki",
    pts: [
      "Warehouse integration gateway · 1000+ RPS · −15% latency.",
      "AI demand forecasting → +25% inventory optimisation.",
      "Grafana + Prometheus monitoring with custom alerting.",
    ],
  },
  {
    co: "Nordcloud (IBM)",
    role: "Lead Cloud Engineer · Cloud Transformation",
    when: "Aug 2019 — Jan 2021 · Helsinki",
    pts: [
      "Multi-cloud migration platform across AWS / Azure / GCP.",
      "30+ enterprise migrations · £5M+ operational savings.",
      "Zero-data-loss pipelines · +40% deployment velocity.",
    ],
  },
];

const stack = [
  ["Languages", "go · python · typescript · javascript · java"],
  ["Frontend", "react · next.js · tailwind · radix"],
  ["Backend", "go · python · node · graphql · grpc"],
  ["Cloud", "aws · gcp · azure"],
  ["Infra", "terraform · kubernetes · docker · ci/cd"],
  ["Data", "postgres · redis · dynamodb · mongo · kafka"],
  ["AI / ML", "llms · agents · rag · fine-tune · vector dbs · mlops"],
  ["Monitoring", "grafana · prometheus · datadog · sentry"],
];

export default function Resume() {
  return (
    <Container size="wide">
      <PageHero
        eyebrow="Résumé"
        number="R"
        title="Aashir"
        italic="Javed."
        lede="Senior software engineer · eight years · full-stack, cloud, AI/ML. London."
        meta={
          <div className="flex gap-3 flex-wrap no-print">
            <LinkButton href="/Aashir-Javed-Resume.pdf" external>
              Download PDF →
            </LinkButton>
            <LinkButton href="https://github.com/aashirjaved" variant="ghost" external>
              GitHub
            </LinkButton>
          </div>
        }
      />

      <section className="pt-8">
        <Reveal>
          <SectionLabel
            number="01"
            title="Experience"
            italic=""
          />
        </Reveal>
        <Reveal>
          <div>
            {positions.map((p) => (
              <article
                key={p.co}
                className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-y-3 sm:gap-x-10 py-8 border-b border-rule-soft last:border-0"
              >
                <div className="mono text-xs uppercase tracking-wider text-ink-mute pt-1">
                  {p.when}
                </div>
                <div>
                  <h3 className="display text-[clamp(1.4rem,2.8vw,2rem)] leading-tight text-ink">
                    {p.co}{" "}
                    <span className="display-italic text-ink-mute">
                      — {p.role}
                    </span>
                  </h3>
                  <ul className="mt-4 space-y-2 max-w-[62ch]">
                    {p.pts.map((pt) => (
                      <li key={pt} className="text-ink-2 text-[0.95rem] leading-relaxed pl-5 relative">
                        <span aria-hidden className="absolute left-0 top-[0.6em] w-2.5 h-px bg-ink-faint" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pt-24">
        <Reveal>
          <SectionLabel number="02" title="Stack" italic="" />
        </Reveal>
        <Reveal>
          <div>
            {stack.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-y-2 sm:gap-x-10 py-5 border-b border-rule-soft last:border-0"
              >
                <div className="mono text-xs uppercase tracking-wider text-ink-mute pt-1">
                  {label}
                </div>
                <div className="text-ink-2">{value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pt-24">
        <Reveal>
          <SectionLabel
            number="03"
            title="Open"
            italic="source"
            description="Tools, side experiments, and contributions to libraries I rely on."
          />
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-6">
            <Pill>open source</Pill>
            <Pill>tooling</Pill>
            <Pill>llm experiments</Pill>
          </div>
          <p className="prose-editorial">
            Full listing at{" "}
            <EditorialLink href="https://github.com/aashirjaved" external>
              github.com/aashirjaved
            </EditorialLink>
            .
          </p>
        </Reveal>
      </section>

      <section className="pt-24">
        <Reveal>
          <SectionLabel number="04" title="See" italic="also" />
        </Reveal>
        <Reveal>
          <ul className="space-y-3">
            {[
              { href: "/about", label: "About — the longer story" },
              { href: "/projects", label: "Selected work" },
              { href: "/experience", label: "Career timeline" },
              { href: "/writing", label: "Writing — notes from production" },
              { href: "/contact", label: "Contact — get in touch" },
            ].map((l) => (
              <li key={l.href}>
                <EditorialLink href={l.href} variant="grow">
                  {l.label}
                </EditorialLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Footer />
    </Container>
  );
}
