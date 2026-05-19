import {
  Container,
  Footer,
  PageHero,
  TimelineNode,
  type TimelineItem,
  Reveal,
  LinkButton,
  ArrowLink,
} from "@/components/editorial";

const experiences: TimelineItem[] = [
  {
    year: "2025 — now",
    period: "Present",
    company: "MoonPay",
    role: "Senior Software Engineer",
    team: "Consumer Product",
    location: "London · Remote",
    description: [
      "Refactored the auth layer for cleaner, safer consumer product flows",
      "Championed practical AI adoption across engineering workflows",
      "Shipping consumer crypto across iOS, Android and web",
      "Worked across product, platform, design, and security constraints",
    ],
    metrics: [
      { label: "Auth", value: "Refactor" },
      { label: "AI", value: "Champion" },
      { label: "Surface", value: "iOS·Android·Web" },
    ],
    technologies: ["react", "next.js", "go", "python", "aws", "typescript", "ai"],
  },
  {
    year: "2024 — 2026",
    period: "Jun 2024 – 2026",
    company: "Motorway",
    role: "Senior Backend Engineer",
    team: "Core Engineering",
    location: "London",
    description: [
      "Led Core Engineering — foundational services that empower product teams",
      "Trade proposition for Motorway Pro · +15% platform volume and revenue",
      "Auth migration to decoupled AuthN/AuthZ · +7% conversion",
      "Operational-excellence working group · −15% annual AWS cost",
      "AI incident management with LLM categorisation · −40% response time",
    ],
    metrics: [
      { label: "Volume", value: "+15%" },
      { label: "Conv", value: "+7%" },
      { label: "AWS", value: "−15%" },
    ],
    technologies: ["go", "python", "react", "aws", "terraform", "k8s", "llm", "oauth2"],
  },
  {
    year: "2022 — 2024",
    period: "May 2022 – Jun 2024",
    company: "Deliveroo",
    role: "Software Engineer II",
    team: "Platform · Customer Care",
    location: "London",
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
    year: "2021 — 2022",
    period: "Jan 2021 – May 2022",
    company: "Zalando",
    role: "Software Engineer",
    team: "Customer Fulfillment",
    location: "Helsinki",
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
    year: "2019 — 2021",
    period: "Aug 2019 – Jan 2021",
    company: "Nordcloud (IBM)",
    role: "Lead Cloud Engineer",
    team: "Cloud Transformation",
    location: "Helsinki",
    description: [
      "Architectural lead for enterprise cloud migrations across AWS, Azure and GCP",
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

export default function Experience() {
  return (
    <Container size="wide">
      <PageHero
        eyebrow="Career"
        number="E"
        title="Impact"
        italic="timeline."
        lede="A visual career map: product, platform, cloud and AI."
        meta={
          <div className="flex gap-3 flex-wrap">
            <LinkButton href="/contact">Start a conversation →</LinkButton>
            <LinkButton href="/resume" variant="ghost">
              Read résumé
            </LinkButton>
          </div>
        }
      />

      <Reveal>
        <div className="grid gap-5 pt-8">
          {experiences.map((e, i) => (
            <TimelineNode
              key={e.company + e.year}
              item={e}
              last={i === experiences.length - 1}
            />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <section className="pt-16">
          <ArrowLink href="/resume">Printable résumé →</ArrowLink>
        </section>
      </Reveal>

      <Footer />
    </Container>
  );
}
