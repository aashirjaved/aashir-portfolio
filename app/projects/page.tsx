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
    title: "Godzilla Typing Rampage",
    company: "Built for my son",
    period: "2026",
    status: "Beta",
    description:
      "A Godzilla-themed typing game built to teach my son to type. Atomic-breath letters, building-smash combos, dramatic synth score. iPad-friendly.",
    details: [
      "Plain HTML/CSS/JS · zero dependencies, zero asset files",
      "All sound generated live via Web Audio API (roars, beams, explosions, fanfare)",
      "Six difficulty tiers: home-row letters → words → short sentences",
      "iPad: hidden input pops native soft keyboard; touch-safe layout",
      "Combo system, screen shake, lightning, collapsing buildings",
    ],
    technologies: ["html", "css", "javascript", "web audio", "svg"],
    metrics: [
      { label: "Levels", value: "6" },
      { label: "Assets", value: "0" },
      { label: "For", value: "1 son" },
    ],
    featured: true,
    link: { href: "/godzilla/", label: "▶ Play the game" },
  },
  {
    title: "MoonPay Consumer App · Embedded Product Engineering",
    company: "MoonPay",
    period: "Present",
    status: "Production",
    description:
      "Embedded with consumer product teams. Refactored auth, drove AI adoption inside the codebase, and shipped secure user flows across mobile and web — in the repo, on the on-call rotation.",
    details: [
      "Refactored the auth layer in production code to lift maintainability and product velocity",
      "Drove agentic AI adoption across engineering workflows — patterns, evals, internal tooling",
      "Shipped secure consumer flows across mobile and web surfaces alongside product and platform teams",
      "Operated as the bridge between product, design, security and platform constraints",
    ],
    technologies: ["react", "next.js", "go", "python", "aws", "typescript"],
    metrics: [
      { label: "Auth", value: "Refactor" },
      { label: "AI", value: "Champion" },
      { label: "Surface", value: "iOS·Android·Web" },
    ],
    featured: true,
  },
  {
    title: "Whatify · Financial Simulation",
    company: "Side build",
    period: "2026 to Present",
    status: "Beta",
    description:
      "Side-by-side scenario simulation for major life decisions, stress tested against rate spikes and cost overruns.",
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
    title: "AI Hackathon · 1st place",
    company: "w/ Omer Bresinski",
    period: "2026",
    status: "Beta",
    description:
      "Won an AI hackathon over a weekend. Two engineers, one idea, hardware to model to demo in under 48 hours.",
    details: [
      "End-to-end build under tight time pressure",
      "Cross-stack device, backend, model and UI",
      "Wrote spec, prototyped and demoed live",
    ],
    technologies: ["python", "ai", "next.js"],
    metrics: [{ label: "Place", value: "1st" }],
    featured: true,
  },
  {
    title: "Grok · Radio Product",
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
    title: "Agentic Customer Care · Shipped in Production",
    company: "Deliveroo",
    period: "2022 to 2024",
    status: "Production",
    description:
      "Built and shipped an agentic customer-care system inside a three-sided marketplace. Agents, fine-tuned generative models, evals on real ticket traffic, and Go services that survived peak load — handed off to the platform team with runbooks.",
    details: [
      "Ran the whole arc — workflow design, prototype, production hardening, hand-off",
      "Iterated prompts, tools and orchestration against real ticket data — 2× CSAT, request handling cut in half",
      "Maintained frontend and backend services for calls, chats, credits and refunds across the marketplace",
      "Ran SEV simulation gamedays and trained 100+ engineers on the on-call paths the system lived behind",
    ],
    technologies: ["react", "go", "python", "llm fine-tune", "postgres", "k8s"],
    metrics: [
      { label: "CSAT", value: "2×" },
      { label: "Handling", value: "0.5×" },
      { label: "Trained", value: "100+" },
    ],
    featured: true,
  },
  {
    title: "Core Engineering · Embedded with Product Teams",
    company: "Motorway",
    period: "2024 to 2025",
    status: "Production",
    description:
      "Embedded across product teams as the engineering lead for foundational services. Shipped the Motorway Pro trade proposition, untangled identity, attacked AWS cost — proposal to production, hardening to hand-off.",
    details: [
      "Led delivery of Motorway Pro trade proposition → +15% platform volume",
      "Identified critical auth issues and led migration to decoupled AuthN/AuthZ services → +7% top-of-funnel conversion",
      "Established operational-excellence working group to attack technical debt → −15% annual AWS cost",
      "Built mission-critical services across distributed systems, OAuth2, SSO, AWS and Terraform",
    ],
    technologies: ["go", "python", "next.js", "node", "typescript", "aws", "terraform", "oauth2"],
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
    period: "2021 to 2022",
    status: "Production",
    description:
      "Owned the inbound distribution centre gateway connecting warehouse operations with Zalando services and infrastructure.",
    details: [
      "Implemented REST APIs and optimised database queries for 1000+ RPS traffic",
      "Reduced gateway latency by 15%",
      "Ran integration workshops with partner operation teams",
      "Operated production monitoring with Grafana, Scalyr and alerting",
    ],
    technologies: ["java", "typescript", "react", "postgres", "docker", "k8s", "aws", "grafana"],
    metrics: [
      { label: "RPS", value: "1000+" },
      { label: "Latency", value: "−15%" },
      { label: "Gateway", value: "IDC" },
    ],
  },
  {
    title: "Transport Client Cloud Modernisation",
    company: "Nordcloud / IBM",
    period: "2020 to 2021",
    status: "Production",
    description:
      "Cloud managed services work migrating a major transport client from a PHP monolith to a modern services-based stack.",
    details: [
      "Modernised a monolith into service-based architecture",
      "Owned smooth operation of client applications in managed cloud environments",
      "Collaborated with product owners to deploy fixes and new features",
    ],
    technologies: ["aws", "azure", "gcp", "serverless", "k8s", "python", "php", "node"],
    metrics: [
      { label: "Clouds", value: "3" },
      { label: "Stack", value: "Modernised" },
      { label: "Client", value: "Transport" },
    ],
  },
  {
    title: "Industry 4.0 Cyber-Physical Systems",
    company: "CARE",
    period: "2017 to 2019",
    status: "Production",
    description:
      "Automation and IoT systems for Industry 4.0 manufacturing environments, later recognised with Pakistan’s P@SHA ICT Award.",
    details: [
      "Developed secured MQTT infrastructure for real-time machine-to-machine communication",
      "Built OTA firmware update solutions for automotive industries under MISRA C and ISO 27001/27002 standards",
      "Worked across C/C++, .NET, networking, concurrency and embedded constraints",
    ],
    technologies: ["c++", "c", ".net", "c#", "mqtt", "networking", "concurrency"],
    metrics: [
      { label: "Protocol", value: "MQTT" },
      { label: "Award", value: "P@SHA" },
      { label: "Domain", value: "IoT" },
    ],
  },
  {
    title: "Event-Driven E-Commerce Platform",
    company: "Freelance",
    period: "2019 to 2020",
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
    <Container size="wide">
      <PageHero
        eyebrow={`${projects.length} selected builds`}
        number="W"
        title="Field"
        italic="work."
        lede="Builds shipped inside customer codebases. Each one ran in production, against real users, with the eval suite and runbooks left behind."
      />

      <Reveal>
        <div className="grid gap-5">
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
          <LinkButton href="/contact">Start a conversation →</LinkButton>
          <LinkButton href="/experience" variant="ghost">
            Career timeline
          </LinkButton>
        </section>
      </Reveal>

      <Footer />
    </Container>
  );
}
