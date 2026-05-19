import {
  CRTScreen,
  NavBar,
  PageFooter,
  PixelButton,
  Tag,
  CRTLink,
  DataRow,
  Reveal,
} from "@/components/crt";

const positions = [
  {
    co: "MoonPay",
    role: "Senior Software Engineer · Consumer Product",
    when: "Present · London, UK",
    pts: [
      "Shipping consumer crypto products at scale across iOS, Android, and web.",
      "Polygon transaction path rebuilt to run 8.5× faster.",
      "Balance experience rebuilt with ACH, SEPA, and Faster Payments rails.",
      "Buy/sell screens refreshed with security and onboarding improvements.",
    ],
  },
  {
    co: "Motorway",
    role: "Senior Backend Engineer · Core Engineering Lead",
    when: "Jun 2024 – 2026 · London, UK",
    pts: [
      "Led Core Engineering across foundational services and platform primitives.",
      "Decoupled AuthN/AuthZ and improved conversion by 7%.",
      "Reduced AWS spend by 15% through operational-excellence work.",
      "AI incident management reduced MTTR by 40%.",
    ],
  },
  {
    co: "Deliveroo",
    role: "Software Engineer II · Platform / Customer Care",
    when: "May 2022 – Jun 2024 · London, UK",
    pts: [
      "AI agents handled 10,000+ daily cases at 95% accuracy.",
      "Delivered 2× CSAT, 50% lower handling time, and £2M annual savings.",
      "Multi-region Kubernetes and Terraform rollout; gamedays for 100+ engineers.",
    ],
  },
  {
    co: "Zalando",
    role: "Software Engineer · Customer Fulfillment",
    when: "Jan 2021 – May 2022 · Helsinki, FI",
    pts: [
      "Warehouse integration gateway with 1000+ RPS Java APIs.",
      "Reduced latency by 15% and improved inventory accuracy by 25% with forecasting.",
      "Built Grafana and Prometheus monitoring with custom alerting.",
    ],
  },
  {
    co: "Nordcloud / IBM",
    role: "Lead Cloud Engineer · Cloud Transformation",
    when: "Aug 2019 – Jan 2021 · Helsinki, FI",
    pts: [
      "Led multi-cloud migrations across AWS, Azure, and GCP.",
      "Delivered 30+ enterprise migrations and £5M+ operational savings.",
      "Improved deployment velocity by 40% with secure CI/CD pipelines.",
    ],
  },
];

const stack = [
  ["Languages", "Go · Python · TypeScript · JavaScript · Java"],
  ["Frontend", "React · Next.js · Tailwind · Radix"],
  ["Backend", "Go · Python · Node · GraphQL · gRPC"],
  ["Cloud", "AWS · GCP · Azure"],
  ["Infra", "Terraform · Kubernetes · Docker · CI/CD"],
  ["Data", "Postgres · Redis · DynamoDB · Mongo · Kafka"],
  ["AI/ML", "LLMs · Agents · RAG · Fine-tuning · Vector DBs · MLOps"],
  ["Monitoring", "Grafana · Prometheus · Datadog · Sentry"],
];

export default function Resume() {
  return (
    <>
      <NavBar />
      <CRTScreen width="wide">
        <section className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:py-16">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Resume</div>
            <h1 className="mt-5 max-w-[11ch] text-[clamp(4rem,10vw,8rem)] leading-[0.9]">
              Aashir Javed.
            </h1>
            <p className="mt-7 max-w-[64ch] text-lg leading-8 text-fg/80">
              Senior software engineer with 8+ years across product engineering, platform systems,
              cloud infrastructure, and production AI.
            </p>
          </div>
          <aside className="frame panel-grid self-end p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Snapshot</div>
            <div className="mt-5 space-y-3">
              <DataRow label="Location" value="London, UK" />
              <DataRow label="Current" value="MoonPay" />
              <DataRow label="Focus" value="Product · Platform · AI" />
              <DataRow label="Experience" value="8+ years" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <PixelButton href="/Aashir-Javed-Resume.pdf" external>Download PDF</PixelButton>
              <PixelButton href="/contact" variant="ghost">Contact</PixelButton>
            </div>
          </aside>
        </section>

        <Reveal>
          <section className="grid gap-4 sm:grid-cols-3">
            <article className="frame p-6">
              <div className="font-display text-5xl leading-none text-bright">£7M+</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-dim">Savings delivered</div>
            </article>
            <article className="frame p-6">
              <div className="font-display text-5xl leading-none text-bright">10k+</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-dim">AI cases / day</div>
            </article>
            <article className="frame p-6">
              <div className="font-display text-5xl leading-none text-bright">100+</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-dim">Engineers mentored</div>
            </article>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16">
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Experience</div>
            <div className="space-y-3">
              {positions.map((p, i) => (
                <article key={p.co} className="frame p-5 sm:p-6">
                  <div className="grid gap-5 lg:grid-cols-[56px_minmax(0,1fr)]">
                    <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-dim">{String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <h2 className="font-display text-4xl leading-none text-bright">{p.co}</h2>
                      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{p.role}</div>
                      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{p.when}</div>
                      <ul className="mt-5 space-y-2 text-sm leading-7 text-fg/82">
                        {p.pts.map((pt) => (
                          <li key={pt} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Technical stack</div>
              <h2 className="mt-4 max-w-[8ch] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95]">The working set.</h2>
            </div>
            <div className="frame panel-grid p-6 sm:p-8">
              <div className="space-y-4">
                {stack.map(([label, value]) => (
                  <DataRow key={label} label={label} value={value} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16 frame panel-grid p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">See also</div>
                <h2 className="mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95]">
                  Evidence behind the resume.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <PixelButton href="/projects">Projects</PixelButton>
                <PixelButton href="/experience" variant="ghost">Timeline</PixelButton>
                <PixelButton href="https://github.com/aashirjaved" variant="ghost" external>GitHub</PixelButton>
              </div>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
              Longer story: <CRTLink href="/about">About</CRTLink> / essays: <CRTLink href="/writing">Writing</CRTLink>
            </p>
          </section>
        </Reveal>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
