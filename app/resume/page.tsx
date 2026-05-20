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
      "Refactored auth layer for cleaner, safer consumer product flows.",
      "Drove AI adoption across engineering workflows.",
      "Shipping consumer crypto products at scale across iOS, Android and web.",
      "Worked across product, platform, design, and security constraints.",
    ],
  },
  {
    co: "Motorway",
    role: "Senior Backend Engineer · Core Engineering Lead",
    when: "Jun 2024 to 2025 · London",
    pts: [
      "Led Core Engineering: foundational, mission-critical services and architecture for product teams.",
      "Delivered Motorway Pro trade proposition → +15% platform volume.",
      "Led migration to decoupled AuthN/AuthZ services → +7% top-of-funnel conversion.",
      "Established operational-excellence working group → −15% annual AWS cost.",
    ],
  },
  {
    co: "Deliveroo",
    role: "Software Engineer II · Platform / Customer Care",
    when: "May 2022 to Jun 2024 · London",
    pts: [
      "Led automated customer-care journey with agents, fine-tuned GenAI models and highly available Go APIs.",
      "Delivered 2× CSAT and reduced request handling time to 0.5×.",
      "Built microservices for calls, chats, credits and refunds across a three-sided marketplace.",
      "Organised SEV gamedays and trained 100+ engineers in on-call procedures.",
    ],
  },
  {
    co: "Zalando",
    role: "Software Engineer · Customer Fulfillment",
    when: "Jan 2021 to May 2022 · Helsinki",
    pts: [
      "Owned inbound distribution centre gateway integrating warehouses with Zalando services.",
      "Implemented REST APIs and optimised database queries for 1000+ RPS gateway → −15% latency.",
      "Ran integration workshops with partner operation teams.",
    ],
  },
  {
    co: "Nordcloud (IBM)",
    role: "Cloud Developer · Managed Services",
    when: "Jan 2020 to Jan 2021 · Helsinki",
    pts: [
      "Migrated a major transport client from a PHP monolith to a service-based modern stack.",
      "Ensured smooth operation of managed client applications across cloud environments.",
      "Collaborated with product owners to deploy fixes and new features.",
    ],
  },
  {
    co: "CARE",
    role: "Design Engineer · Industry 4.0 Automation",
    when: "Feb 2017 to 2019",
    pts: [
      "Built cyber-physical systems adopted across industrial clients.",
      "Developed secured MQTT infrastructure for real-time machine-to-machine IoT communication.",
      "Built OTA firmware update solutions for automotive under MISRA C and ISO 27001/27002 standards.",
    ],
  },
];

const stack = [
  ["Languages", "go · python · typescript · javascript · java · c++ · rust"],
  ["Frontend", "react · next.js · design systems · jest · cypress"],
  ["Backend", "go · node · spring · restful apis · graphql · grpc"],
  ["Cloud", "aws · gcp · azure · serverless"],
  ["Infra", "terraform · kubernetes · docker · kafka · resilience engineering"],
  ["Data", "postgres · dynamodb · vector dbs"],
  ["AI / ML", "llms · agents · fine-tuned genai · rag · mlops"],
  ["Systems", "microservices · scaling · fault tolerance · networking protocols"],
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
                      · {p.role}
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
          <div className="space-y-5">
            <article className="border-b border-rule-soft pb-5">
              <h3 className="display text-2xl leading-tight text-ink">AWS Cognito Passwordless Auth</h3>
              <p className="mt-2 text-ink-2">Contributed improved error reporting to save developer debugging time.</p>
            </article>
            <article className="border-b border-rule-soft pb-5">
              <h3 className="display text-2xl leading-tight text-ink">Technical writing</h3>
              <p className="mt-2 text-ink-2">
                Essays and notes at <EditorialLink href="https://dev.to/aashirjaved" external>dev.to/aashirjaved</EditorialLink> and <EditorialLink href="/writing">aashir.net/writing</EditorialLink>.
              </p>
            </article>
            <article>
              <h3 className="display text-2xl leading-tight text-ink">Mentoring</h3>
              <p className="mt-2 text-ink-2">Registered ADPList mentor.</p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="pt-24">
        <Reveal>
          <SectionLabel number="04" title="Awards" italic="certifications" />
        </Reveal>
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {["AWS Certified Developer Associate", "EIT Digital Scholarship", "P@SHA ICT Award", "NUST High Achiever Award"].map((item) => (
              <div key={item} className="rounded-2xl border border-rule-soft bg-surface/70 p-4">
                <Pill>{item}</Pill>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pt-24">
        <Reveal>
          <SectionLabel number="05" title="See" italic="also" />
        </Reveal>
        <Reveal>
          <ul className="space-y-3">
            {[
              { href: "/about", label: "About · the longer story" },
              { href: "/projects", label: "Selected work" },
              { href: "/experience", label: "Career timeline" },
              { href: "/writing", label: "Writing · notes from production" },
              { href: "/contact", label: "Contact · get in touch" },
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
