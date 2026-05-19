import {
  CRTScreen,
  NavBar,
  StatusBar,
  Tag,
  PageFooter,
  CRTLink,
  PixelButton,
  Reveal,
} from "@/components/crt";

type Project = {
  title: string;
  company: string;
  period: string;
  category: string;
  status: "Production" | "Sunset" | "Beta";
  description: string;
  details: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "MoonPay Consumer App",
    company: "MoonPay",
    period: "Present",
    category: "Product · Crypto",
    status: "Production",
    description:
      "Consumer crypto product engineering across iOS, Android, and web: buy/sell, balances, payment rails, security, and transaction reliability.",
    details: [
      "Polygon transaction path rebuilt to run 8.5× faster.",
      "Balance experience rebuilt with ACH, SEPA, and Faster Payments rails.",
      "Buy/sell screens refreshed with tighter device security and onboarding flows.",
    ],
    technologies: ["React", "Next.js", "Go", "Python", "AWS", "TypeScript"],
    metrics: [
      { label: "Polygon", value: "8.5×" },
      { label: "Rails", value: "ACH · SEPA · FPS" },
      { label: "Surface", value: "iOS · Android · Web" },
    ],
    featured: true,
  },
  {
    title: "Whatify",
    company: "Side build",
    period: "2026 — Present",
    category: "Financial simulation",
    status: "Beta",
    description:
      "Scenario simulation for major life decisions: homes, careers, family, and long-range financial tradeoffs stress-tested against messy reality.",
    details: [
      "Five-year projections across best, expected, and worst-case paths.",
      "Stress-testing against rate spikes, cost overruns, and delayed plans.",
      "A 2-minute setup designed for decision clarity, not spreadsheet theatre.",
    ],
    technologies: ["Next.js", "TypeScript", "AI", "Postgres"],
    metrics: [
      { label: "Waitlist", value: "3.8k+" },
      { label: "Setup", value: "2 min" },
      { label: "Forecast", value: "5 yr" },
    ],
    featured: true,
  },
  {
    title: "AI Hackathon Winner",
    company: "w/ Omer Bresinski",
    period: "2026",
    category: "AI · Prototype",
    status: "Beta",
    description:
      "A weekend build taken from idea to hardware-backed AI demo under competition pressure.",
    details: [
      "End-to-end build across device, backend, model, and interface.",
      "Product spec, prototype, and live demo produced in under 48 hours.",
      "Won first place against a field of AI product prototypes.",
    ],
    technologies: ["Python", "AI", "Next.js"],
    metrics: [{ label: "Place", value: "1st" }],
    featured: true,
  },
  {
    title: "AI Customer Care Platform",
    company: "Deliveroo",
    period: "2022 — 2024",
    category: "AI + Platform",
    status: "Production",
    description:
      "Fine-tuned LLM agents and operational tooling for high-volume customer-care automation.",
    details: [
      "10,000+ cases/day handled by production AI agents at 95% accuracy.",
      "2× CSAT and 50% lower handling time across automated journeys.",
      "Multi-region Kubernetes and Terraform rollout for global operations.",
    ],
    technologies: ["React", "Go", "Python", "LLMs", "Postgres", "Kubernetes"],
    metrics: [
      { label: "CSAT", value: "2×" },
      { label: "Saved", value: "£2M" },
      { label: "Auto", value: "60%" },
    ],
    featured: true,
  },
  {
    title: "Core Engineering Platform",
    company: "Motorway",
    period: "2024 — 2026",
    category: "Infra + AI",
    status: "Production",
    description:
      "Mission-critical platform work: monitoring, AI-powered alerting, decoupled auth, and foundational services.",
    details: [
      "AuthN/AuthZ migration improved checkout conversion by 7%.",
      "AI incident management reduced MTTR by 40%.",
      "Operational-excellence work reduced AWS spend by 15%.",
    ],
    technologies: ["Go", "Python", "React", "AWS", "Terraform", "LLMs", "OAuth2"],
    metrics: [
      { label: "Conv", value: "+7%" },
      { label: "MTTR", value: "−40%" },
      { label: "AWS", value: "−15%" },
    ],
    featured: true,
  },
  {
    title: "Warehouse Integration Gateway",
    company: "Zalando",
    period: "2021 — 2022",
    category: "Backend systems",
    status: "Production",
    description:
      "Enterprise gateway between warehouse operations and Zalando core systems with tight Java APIs and operational dashboards.",
    details: [
      "Java APIs handling 1000+ requests per second.",
      "Query and system optimisation reduced latency by 15%.",
      "AI demand forecasting improved inventory accuracy by 25%.",
    ],
    technologies: ["Java", "React", "TypeScript", "Postgres", "Kubernetes", "Grafana"],
    metrics: [
      { label: "RPS", value: "1k+" },
      { label: "Latency", value: "−15%" },
      { label: "Stock", value: "+25%" },
    ],
  },
  {
    title: "Multi-Cloud Migration Platform",
    company: "Nordcloud / IBM",
    period: "2020 — 2021",
    category: "Cloud transformation",
    status: "Production",
    description:
      "Enterprise migration platform and runbooks for moving monoliths into cloud-native architectures across AWS, Azure, and GCP.",
    details: [
      "30+ enterprise migrations with zero-data-loss transformation pipelines.",
      "Cross-cloud architectural patterns and security-gated CI/CD.",
      "Deployment velocity improved by 40% with £5M+ savings delivered.",
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Python", "Go"],
    metrics: [
      { label: "Migrations", value: "30+" },
      { label: "Speed", value: "+40%" },
      { label: "Saved", value: "£5M" },
    ],
  },
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="group frame panel-grid p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 sm:p-7">
      <div className="grid gap-6 lg:grid-cols-[90px_minmax(0,1fr)_280px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">{num}</div>
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Tag tone="accent">{p.category}</Tag>
            <Tag tone={p.status === "Production" ? "ok" : "dim"}>{p.status}</Tag>
            {p.featured && <Tag tone="accent">Featured</Tag>}
          </div>
          <h2 className="max-w-[13ch] text-[clamp(2rem,4vw,4.2rem)] leading-[0.96] transition-colors duration-300 group-hover:text-accent">
            {p.title}
          </h2>
          <p className="mt-5 max-w-[70ch] text-base leading-8 text-fg/80">{p.description}</p>
          <ul className="mt-5 space-y-2 text-sm leading-7 text-fg/82">
            {p.details.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="space-y-5 lg:text-right">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-dim">Client</div>
            <div className="mt-1 font-display text-2xl text-bright">{p.company}</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-dim">Period</div>
            <div className="mt-1 text-sm text-fg/82">{p.period}</div>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {p.metrics.map((m) => (
              <Tag key={m.label} tone="ok">{m.label} {m.value}</Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {p.technologies.map((t) => (
              <Tag key={t} tone="dim">{t}</Tag>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <>
      <NavBar />
      <CRTScreen width="wide">
        <StatusBar
          items={[
            { label: "page", value: "selected work" },
            { label: "case studies", value: `${projects.length}`, tone: "accent" },
            { label: "sort", value: "impact first" },
          ]}
        />

        <section className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-16">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Projects</div>
            <h1 className="mt-5 max-w-[10ch] text-[clamp(4rem,10vw,8rem)] leading-[0.9]">
              Proof, not screenshots.
            </h1>
          </div>
          <div className="self-end">
            <p className="text-lg leading-8 text-fg/80">
              A selection of product, platform, AI, and infrastructure work. The common thread is
              measurable impact and systems that survived contact with production.
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
              Hiring? <CRTLink href="/contact">Start here</CRTLink>
            </p>
          </div>
        </section>

        <Reveal>
          <div className="space-y-4">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} index={i} />
            ))}
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          <PixelButton href="/contact">Talk about a role</PixelButton>
          <PixelButton href="/experience" variant="ghost">View timeline</PixelButton>
        </div>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
