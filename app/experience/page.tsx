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
      "Established operational-excellence working group · −15% annual AWS cost",
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
      "Led ideation and delivery of automated customer-care journey using agents, fine-tuned GenAI models and highly available Go APIs",
      "Delivered 2× CSAT and 0.5× request handling time",
      "Built and maintained frontend/backend microservices for calls, chats, credits and refunds across a three-sided marketplace",
      "Organised SEV simulation gamedays and trained 100+ engineers in on-call procedures",
    ],
    metrics: [
      { label: "CSAT", value: "2×" },
      { label: "Handling", value: "0.5×" },
      { label: "Trained", value: "100+" },
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
      "Owned warehouse integration gateway connecting inbound distribution centres with Zalando services and infrastructure",
      "Implemented REST APIs and optimised database queries for a 1000+ RPS gateway · −15% latency",
      "Ran integration workshops and explained application specs to third-party operation teams",
      "Operated observability with Grafana, Scalyr and production alerting",
    ],
    metrics: [
      { label: "RPS", value: "1000+" },
      { label: "Latency", value: "−15%" },
      { label: "Gateway", value: "IDC" },
    ],
    technologies: ["java", "react", "typescript", "postgres", "k8s", "grafana", "ml"],
  },
  {
    year: "2020 — 2021",
    period: "Jan 2020 – Jan 2021",
    company: "Nordcloud (IBM)",
    role: "Cloud Developer",
    team: "Cloud Managed Services",
    location: "Helsinki",
    description: [
      "Migrated a major transport client from a PHP monolith to a services-based modern stack",
      "Kept client applications healthy through regular operational ownership",
      "Collaborated with product owners to deploy fixes and new features across AWS, Azure and GCP",
    ],
    metrics: [
      { label: "Clouds", value: "3" },
      { label: "Stack", value: "modernised" },
      { label: "Client", value: "transport" },
    ],
    technologies: ["aws", "azure", "gcp", "serverless", "k8s", "python", "php", "node"],
  },
  {
    year: "2017 — 2019",
    period: "Feb 2017 – 2019",
    company: "Centre for Advanced Research in Engineering",
    role: "Design Engineer",
    team: "Industry 4.0 Automation",
    location: "Pakistan · Helsinki",
    description: [
      "Built cyber-physical systems for Industry 4.0 automation adopted across client industries",
      "Developed secured MQTT infrastructure for real-time machine-to-machine IoT communication",
      "Worked on OTA firmware update systems for automotive under MISRA C and ISO 27001/27002 constraints",
      "Contributed to P@SHA ICT Award-winning manufacturing automation work",
    ],
    metrics: [
      { label: "Protocol", value: "MQTT" },
      { label: "Award", value: "P@SHA" },
      { label: "Domain", value: "IoT" },
    ],
    technologies: ["c++", "c", ".net", "c#", "mqtt", "networking", "concurrency"],
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
