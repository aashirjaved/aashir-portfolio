import {
  CRTScreen,
  NavBar,
  StatusBar,
  Tag,
  PageFooter,
  PixelButton,
  CRTLink,
} from "@/components/crt";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  team: string;
  year: string;
  description: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "MoonPay",
    location: "London, UK · Remote",
    period: "Present",
    team: "Consumer Product",
    year: "now",
    description: [
      "Shipping consumer crypto products at scale across iOS, Android, web",
      "Polygon transaction path · 8.5× faster after rebuild (Moonlog Vol 02)",
      "Balance experience rebuilt with ACH / SEPA / Faster Payments rails",
      "Refreshed Buy/Sell + Liquid Glass UI; tighter device security flows",
      "Cross-functional product engineering; complex problems, shipped at pace",
    ],
    metrics: [
      { label: "Polygon", value: "8.5×" },
      { label: "Rails", value: "ACH·SEPA·FPS" },
      { label: "Surface", value: "iOS·Android·Web" },
    ],
    technologies: ["react", "next.js", "go", "python", "aws", "typescript", "ai"],
  },
  {
    title: "Senior Backend Engineer",
    company: "Motorway",
    location: "London, UK",
    period: "Jun 2024 – 2026",
    team: "Core Engineering",
    year: "2024",
    description: [
      "Lead Core Engineering: foundational services that empower product teams to ship reliably",
      "Trade proposition for Motorway Pro · +15% platform volume + revenue growth",
      "Auth migration to decoupled AuthN/AuthZ · +7% conversion",
      "Operational-excellence working group · −15% annual AWS cost",
      "AI incident management with LLM categorisation · −40% response time",
    ],
    metrics: [
      { label: "Volume", value: "+15%" },
      { label: "Conv", value: "+7%" },
      { label: "AWS", value: "−15%" },
    ],
    technologies: ["go", "python", "react", "next.js", "aws", "terraform", "k8s", "llm", "oauth2"],
  },
  {
    title: "Software Engineer II",
    company: "Deliveroo",
    location: "London, UK",
    period: "May 2022 – Jun 2024",
    team: "Platform · Customer Care",
    year: "2022",
    description: [
      "End-to-end automation of customer-care journeys · fine-tuned GenAI + Go APIs",
      "Production AI agents · 10,000+ daily cases · 95% accuracy",
      "2× CSAT · 50% reduction in handling time · £2M annual savings",
      "Multi-region infra with Terraform + k8s for global rollout",
      "Engineering gamedays + incident-response training for 100+ engineers",
    ],
    metrics: [
      { label: "CSAT", value: "2×" },
      { label: "Saved", value: "£2M" },
      { label: "Auto", value: "60%" },
    ],
    technologies: ["react", "go", "python", "llm", "k8s", "terraform", "postgres"],
  },
  {
    title: "Software Engineer",
    company: "Zalando",
    location: "Helsinki, Finland",
    period: "Jan 2021 – May 2022",
    team: "Customer Fulfillment",
    year: "2021",
    description: [
      "Owned warehouse integration gateway connecting IDCs with Zalando core",
      "Java APIs handling 1000+ RPS · −15% latency via query optimisation",
      "AI demand forecasting · +25% inventory optimisation",
      "Grafana + Prometheus monitoring with custom alerting",
    ],
    metrics: [
      { label: "RPS", value: "1k+" },
      { label: "Latency", value: "−15%" },
      { label: "Stock", value: "+25%" },
    ],
    technologies: ["java", "react", "typescript", "postgres", "k8s", "grafana", "ml"],
  },
  {
    title: "Lead Cloud Engineer",
    company: "Nordcloud (IBM)",
    location: "Helsinki, Finland",
    period: "Aug 2019 – Jan 2021",
    team: "Cloud Transformation",
    year: "2019",
    description: [
      "Architectural lead for enterprise cloud migrations across AWS, Azure, GCP",
      "30+ enterprise migrations · £5M+ operational savings",
      "Multi-cloud platform turning monoliths into microservices",
      "CI/CD with security gates · +40% deployment velocity",
    ],
    metrics: [
      { label: "Migrations", value: "30+" },
      { label: "Speed", value: "+40%" },
      { label: "Saved", value: "£5M" },
    ],
    technologies: ["aws", "azure", "gcp", "terraform", "k8s", "python", "go"],
  },
];

function TimelineNode({ e, last }: { e: Experience; last: boolean }) {
  return (
    <div className="relative pl-8 pb-10">
      <div
        aria-hidden
        className="absolute left-[7px] top-2 bottom-0 w-px bg-rule"
        style={{ display: last ? "none" : "block" }}
      />
      <div
        aria-hidden
        className="absolute left-0 top-1 w-4 h-4 bg-bg border-2 border-accent shadow-glow"
      />

      <div className="flex flex-wrap items-baseline gap-2 mb-1">
        <span className="font-display text-accent text-xs glow">{e.year}</span>
        <span aria-hidden className="text-rule">─</span>
        <span className="font-mono text-bright text-sm sm:text-base uppercase tracking-wider">
          {e.company}
        </span>
        <span aria-hidden className="text-rule">·</span>
        <span className="font-mono text-fg text-sm">{e.title}</span>
      </div>
      <div className="font-mono text-xs text-dim mb-3 flex flex-wrap gap-x-3 gap-y-1">
        <span>{e.period}</span>
        <span>·</span>
        <span>{e.location}</span>
        <span>·</span>
        <span>{e.team}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {e.metrics.map((m) => (
          <Tag key={m.label} tone="ok">
            {m.label} {m.value}
          </Tag>
        ))}
      </div>

      <ul className="space-y-1 mb-3">
        {e.description.map((d) => (
          <li key={d} className="font-mono text-sm text-fg/90 leading-relaxed">
            <span className="text-accent select-none mr-2">▸</span>
            {d}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1">
        {e.technologies.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <NavBar />
      <CRTScreen>
        <StatusBar
          items={[
            { label: "page", value: "/experience" },
            { label: "span", value: "8 yrs", tone: "accent" },
            { label: "current", value: "moonpay · sse", tone: "ok" },
          ]}
        />

        <section className="pt-8 mb-10">
          <div className="font-mono text-xs sm:text-sm text-dim uppercase tracking-[0.25em] mb-2">
            {"> tail -n 100 career.log"}
          </div>
          <h1 className="font-display text-[clamp(1.4rem,4vw,2.2rem)] uppercase glow-strong leading-tight">
            CAREER LOG
          </h1>
          <p className="mt-3 font-mono text-fg/90 max-w-[60ch]">
            Eight years across four employers. Backend, infra, full-stack, and lately a lot of LLMs
            in places they have to behave.
          </p>
        </section>

        <div>
          {experiences.map((e, i) => (
            <TimelineNode
              key={e.company + e.year}
              e={e}
              last={i === experiences.length - 1}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <PixelButton href="/contact">$ talk about a role</PixelButton>
          <PixelButton href="/resume" variant="ghost">$ man aashir</PixelButton>
        </div>

        <p className="mt-6 font-mono text-sm text-dim">
          Want the printable version? <CRTLink href="/resume">/resume</CRTLink>.
        </p>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
