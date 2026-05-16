import {
  Container,
  Footer,
  PageHero,
  Reveal,
  ProjectCard,
  type ProjectCardProps,
  LinkButton,
} from "@/components/editorial";

const projects: Omit<ProjectCardProps, "number">[] = [
  {
    title: "MoonPay Consumer App — Product Engineering",
    company: "MoonPay",
    period: "Present",
    status: "Production",
    description:
      "Shipping consumer crypto products at scale across iOS, Android, and web. Buy/Sell, balances, payment rails, security.",
    details: [
      "Polygon transaction path — 8.5× faster after rebuild",
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
    title: "Whatify — Financial Simulation",
    company: "Side build",
    period: "2026 — Present",
    status: "Beta",
    description:
      "Stop guessing, start deciding. Side-by-side scenario simulation for major life decisions — homes, careers, family — stress-tested against rate spikes and cost overruns.",
    details: [
      "Five-year net-worth projections: best / expected / worst case",
      "Stress testing against rate spikes and overruns",
      "Two-minute setup; data-driven decisions, not guesswork",
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
    title: "AI Hackathon — 1st place",
    company: "w/ Omer Bresinski",
    period: "2026",
    status: "Beta",
    description:
      "Won an AI hackathon over a weekend. Two engineers, one idea, hardware → model → demo in under 48 hours.",
    details: [
      "End-to-end build under tight time pressure",
      "Cross-stack: device, backend, model, UI",
      "Wrote spec, prototyped and demoed live",
    ],
    technologies: ["python", "ai", "next.js"],
    metrics: [{ label: "Place", value: "1st" }],
    featured: true,
  },
  {
    title: "Grok — Radio Product",
    company: "Side prototype",
    period: "2026",
    status: "Beta",
    description:
      "Spec, prototype and product thinking for a Grok-powered radio interface. Voice as the new keyboard.",
    details: [
      "Voice-first product framing",
      "Live AI radio host concept; latency budget under 500ms",
      "Public thread on X (@aasjav)",
    ],
    technologies: ["ai", "audio", "next.js"],
  },
  {
    title: "AI-Powered Customer Care",
    company: "Deliveroo",
    period: "2022 — 2024",
    status: "Production",
    description:
      "Customer-care automation: React, Go APIs, fine-tuned LLM agents handling refunds and order resolution at scale.",
    details: [
      "AI agents — 10,000+ cases/day at 95% accuracy",
      "Prompt-engineering frameworks for service-specific LLMs",
      "Real-time React UI with seamless agent ↔ human handoff",
      "Multi-region k8s + Terraform on PostgreSQL",
    ],
    technologies: ["react", "go", "python", "llm fine-tune", "postgres", "k8s"],
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
    period: "2024 — 2026",
    status: "Production",
    description:
      "Mission-critical platform: monitoring, AI-powered alerting, decoupled auth. Foundation for every product team.",
    details: [
      "Decoupled AuthN/AuthZ migration → +7% conversion",
      "AI incident management with LLM categorisation → −40% MTTR",
      "Real-time React/Next.js observability dashboards",
      "Operational excellence working group → −15% AWS spend",
    ],
    technologies: ["go", "python", "react", "next.js", "aws", "terraform", "llm"],
    metrics: [
      { label: "Volume", value: "+15%" },
      { label: "Conv", value: "+7%" },
      { label: "AWS", value: "−15%" },
    ],
    featured: true,
  },
  {
    title: "Warehouse Gateway",
    company: "Zalando",
    period: "2021 — 2022",
    status: "Production",
    description:
      "Enterprise gateway between warehouse ops and Zalando core. React dashboards plus tight Java APIs.",
    details: [
      "Java APIs handling 1000+ RPS",
      "AI demand forecasting · +25% inventory accuracy",
      "Grafana + Prometheus monitoring stack",
    ],
    technologies: ["java", "react", "typescript", "postgres", "k8s", "grafana"],
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
    status: "Production",
    description:
      "Enterprise platform converting monoliths into microservices across AWS, Azure and GCP. 30+ migrations.",
    details: [
      "Cross-cloud architectural patterns and runbooks",
      "Zero-data-loss transformation pipelines",
      "CI/CD with security gates · +40% deploy velocity",
    ],
    technologies: ["aws", "azure", "gcp", "terraform", "k8s", "python", "go"],
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
    status: "Sunset",
    description:
      "Scalable e-commerce: high-volume transactions, real-time inventory, personalised recommendations.",
    details: [
      "Event-driven architecture with message queues",
      "Recommendation engine via collaborative filtering",
      "Payment gateways with reconciliation",
    ],
    technologies: ["node.js", "react", "redis", "postgres", "kafka", "aws"],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Conv", value: "3×" },
      { label: "Orders/d", value: "25k+" },
    ],
  },
];

export default function Projects() {
  return (
    <Container>
      <PageHero
        eyebrow={`${projects.length} case files`}
        number="W"
        title="Selected"
        italic="work."
        lede="Shipped products, won hackathons, side builds. Metrics where they existed; honesty where they did not."
      />

      <Reveal>
        <div>
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              {...p}
              number={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <section className="pt-24 flex flex-wrap gap-3">
          <LinkButton href="/contact">Talk about a role →</LinkButton>
          <LinkButton href="/experience" variant="ghost">
            Career timeline
          </LinkButton>
        </section>
      </Reveal>

      <Footer />
    </Container>
  );
}
