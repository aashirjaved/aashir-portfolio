import {
  CRTScreen,
  NavBar,
  StatusBar,
  Tag,
  PageFooter,
  DataRow,
  CRTLink,
  PixelButton,
  Expandable,
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
    title: "MoonPay Consumer App · Product Engineering",
    company: "MoonPay",
    period: "Present",
    category: "Product · Crypto",
    status: "Production",
    description:
      "Shipping consumer crypto products at scale across iOS, Android, and web. Buy/Sell, balances, payment rails, security.",
    details: [
      "Polygon transaction path · 8.5× faster after rebuild",
      "Balance experience rebuilt with ACH / SEPA / Faster Payments rails",
      "Buy/Sell screens redesigned · Liquid Glass UI refresh",
      "Tighter device security flows + onboarding rework",
    ],
    technologies: ["react", "next.js", "go", "python", "aws", "typescript"],
    metrics: [
      { label: "Polygon", value: "8.5×" },
      { label: "Rails", value: "ACH·SEPA·FPS" },
      { label: "Surface", value: "iOS·Android·Web" },
    ],
    featured: true,
  },
  {
    title: "Whatify · Financial Simulation Engine",
    company: "Side build",
    period: "2026 — Present",
    category: "Product · Build",
    status: "Beta",
    description:
      "Stop guessing, start deciding. Side-by-side scenario simulation for major life decisions — homes, careers, family — stress-tested against rate spikes and cost overruns.",
    details: [
      "5-year net worth projections: best / expected / worst case",
      "Stress-testing against interest-rate spikes and cost overruns",
      "2-minute setup; data-driven decisions, not guesswork",
      "3,847+ on the waitlist",
    ],
    technologies: ["next.js", "typescript", "ai", "postgres"],
    metrics: [
      { label: "Waitlist", value: "3.8k+" },
      { label: "Setup", value: "2 min" },
      { label: "Forecast", value: "5 yr" },
    ],
    featured: true,
  },
  {
    title: "AI Hackathon · 1st place",
    company: "w/ Omer Bresinski",
    period: "2026",
    category: "AI · Hackathon",
    status: "Beta",
    description:
      "Won an AI hackathon over a weekend. Two engineers, one idea, hardware → model → demo in under 48 hours.",
    details: [
      "End-to-end build under tight time pressure",
      "Cross-stack: device, backend, model, UI",
      "Wrote spec, prototyped, and demoed live",
    ],
    technologies: ["python", "ai", "next.js"],
    metrics: [{ label: "Place", value: "1st" }],
    featured: true,
  },
  {
    title: "Grok · Radio Product",
    company: "Side prototype",
    period: "2026",
    category: "AI · Voice",
    status: "Beta",
    description:
      "Spec, prototype, and product thinking for a Grok-powered radio interface. Voice as the new keyboard.",
    details: [
      "Voice-first product framing",
      "Live AI radio host concept; latency budget under 500ms",
      "Public thread on X (@aasjav)",
    ],
    technologies: ["ai", "audio", "next.js"],
    metrics: [],
  },
  {
    title: "AI-Powered Customer Care Platform",
    company: "Deliveroo",
    period: "2022 — 2024",
    category: "AI + Full-Stack",
    status: "Production",
    description:
      "Customer-care automation: React, Go APIs, fine-tuned LLM agents handling refunds and order resolution at scale.",
    details: [
      "AI agents · 10,000+ cases/day · 95% accuracy",
      "Prompt-engineering frameworks for service-specific LLMs",
      "Real-time React UI with seamless agent ↔ human handoff",
      "Multi-region k8s + Terraform on PostgreSQL",
    ],
    technologies: ["react", "go", "python", "llm fine-tune", "postgres", "k8s", "terraform"],
    metrics: [
      { label: "CSAT", value: "2×" },
      { label: "Saved", value: "£2M" },
      { label: "Auto", value: "60%" },
    ],
    featured: true,
  },
  {
    title: "Core Engineering Infrastructure",
    company: "Motorway",
    period: "2024 — Present",
    category: "Infra + AI",
    status: "Production",
    description:
      "Mission-critical platform: monitoring, AI-powered alerting, decoupled auth. Foundation for every product team.",
    details: [
      "Decoupled AuthN/AuthZ migration → +7% conversion",
      "AI incident management with LLM categorisation → −40% MTTR",
      "Real-time React/Next.js observability dashboards",
      "Operational-excellence working group → −15% AWS spend",
    ],
    technologies: ["go", "python", "react", "next.js", "aws", "terraform", "llm", "oauth2"],
    metrics: [
      { label: "Volume", value: "+15%" },
      { label: "Conv", value: "+7%" },
      { label: "AWS", value: "−15%" },
    ],
    featured: true,
  },
  {
    title: "High-Performance Warehouse Gateway",
    company: "Zalando",
    period: "2021 — 2022",
    category: "Backend + Frontend",
    status: "Production",
    description:
      "Enterprise gateway between warehouse ops and Zalando core. React dashboards + tight Java APIs.",
    details: [
      "Java APIs handling 1000+ RPS",
      "AI demand forecasting · +25% inventory accuracy",
      "Grafana + Prometheus monitoring stack",
    ],
    technologies: ["java", "react", "typescript", "postgres", "docker", "k8s", "grafana"],
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
    category: "Cloud Infra",
    status: "Production",
    description:
      "Enterprise platform converting monoliths into microservices across AWS, Azure, GCP. 30+ migrations.",
    details: [
      "Cross-cloud architectural patterns and runbooks",
      "Zero-data-loss transformation pipelines",
      "CI/CD with security gates · +40% deploy velocity",
    ],
    technologies: ["aws", "azure", "gcp", "terraform", "docker", "k8s", "python", "go"],
    metrics: [
      { label: "Migrations", value: "30+" },
      { label: "Speed", value: "+40%" },
      { label: "Saved", value: "£5M" },
    ],
  },
  {
    title: "Event-Driven E-Commerce Platform",
    company: "Freelance",
    period: "2019 — 2020",
    category: "Full-Stack",
    status: "Sunset",
    description:
      "Scalable e-commerce: high-volume transactions, real-time inventory, personalised recs.",
    details: [
      "Event-driven architecture with message queues",
      "Recommendation engine via collaborative filtering",
      "Payment gateways with reconciliation",
    ],
    technologies: ["node.js", "react", "next.js", "redis", "postgres", "kafka", "aws"],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Conv", value: "3×" },
      { label: "Orders/d", value: "25k+" },
    ],
  },
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="frame frame-amber p-5 sm:p-6 bg-screen/40">
      {/* Header: number + title */}
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-display text-[10px] text-accent glow">{num}</span>
        <h2 className="font-mono text-bright text-base sm:text-xl uppercase tracking-wider leading-tight">
          {p.title}
        </h2>
      </div>

      {/* One-line tagline */}
      <p className="font-mono text-sm sm:text-base text-fg/95 mb-4 max-w-[68ch]">
        {p.description}
      </p>

      {/* Meta row: company · period · category · status */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-dim mb-4 pb-3 border-b border-rule/40">
        <span className="text-bright">{p.company}</span>
        <span aria-hidden>·</span>
        <span>{p.period}</span>
        <span aria-hidden>·</span>
        <Tag tone="accent">{p.category}</Tag>
        <Tag tone={p.status === "Production" ? "ok" : "dim"}>{p.status}</Tag>
        {p.featured && <Tag tone="accent">★ featured</Tag>}
      </div>

      {/* Metric chips (visual anchor) */}
      {p.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {p.metrics.map((m) => (
            <Tag key={m.label} tone="ok" className="text-[11px]">
              {m.label} {m.value}
            </Tag>
          ))}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1 mb-4">
        {p.technologies.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {/* Drill-down — hidden by default */}
      <Expandable summary="MORE_DETAILS">
        <ul className="space-y-1.5 max-w-[68ch]">
          {p.details.map((d) => (
            <li key={d} className="font-mono text-sm text-fg/90 leading-relaxed">
              <span className="text-accent select-none mr-2">▸</span>
              {d}
            </li>
          ))}
        </ul>
      </Expandable>
    </article>
  );
}

export default function Projects() {
  return (
    <>
      <NavBar />
      <CRTScreen>
        <StatusBar
          items={[
            { label: "page", value: "/projects" },
            { label: "count", value: `${projects.length} case files`, tone: "accent" },
            { label: "sort", value: "by impact" },
          ]}
        />

        <section className="pt-8 mb-10">
          <div className="font-mono text-xs sm:text-sm text-dim uppercase tracking-[0.25em] mb-2">
            {"> ls -la /projects"}
          </div>
          <h1 className="font-display text-[clamp(1.4rem,4vw,2.2rem)] uppercase glow-strong leading-tight">
            CASE FILES
          </h1>
          <p className="mt-3 font-mono text-fg/90 max-w-[60ch]">
            Shipped products, won hackathons, side builds. Metrics where they existed; honesty
            where they did not. Hiring? <CRTLink href="/contact">$ mail me</CRTLink>.
          </p>
        </section>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <PixelButton href="/contact">$ talk about a role</PixelButton>
          <PixelButton href="/experience" variant="ghost">$ tail career.log</PixelButton>
        </div>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
