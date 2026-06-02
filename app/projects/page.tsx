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
    title: "MoonPay · AI Agents and Crypto Payments",
    company: "MoonPay",
    period: "Present",
    status: "Production",
    description:
      "Recent MoonPay work across AI-agent demos, public agent skills, consumer launches and crypto purchase performance.",
    details: [
      "Built and demoed a personal AI agent that automated daily tasks and executed a crypto transaction",
      "Prototyped local-model workflows with Ollama/LM Studio-style tooling before hardening agent behavior",
      "Designed context and memory handling for agent workflows, with eval loops around tool use and task completion",
      "Contributed to moonpay/skills, public AI-agent skills for on-ramps, swaps, wallets and payments",
    ],
    technologies: ["agents", "evals", "ollama", "lm studio", "memory", "crypto", "go"],
    metrics: [
      { label: "Polygon", value: "8.5×" },
      { label: "Skills repo", value: "109★" },
      { label: "Followers", value: "1.1k" },
    ],
    featured: true,
  },
  {
    title: "Whatify · Financial Class Diagnosis",
    company: "Side build",
    period: "2026 to Present",
    status: "Beta",
    description:
      "A public-data financial diagnosis tool that compares income, wealth, place and household size.",
    details: [
      "Uses public sources including Pew, Fed SCF, BEA and Census",
      "Frames class, wealth gaps and climb levers in about 60 seconds",
      "No signup flow; starts with household income and refines with place, household and net worth",
      "Currently getting 300+ unique users weekly",
    ],
    technologies: ["next.js", "typescript", "public data", "product"],
    metrics: [
      { label: "Users/wk", value: "300+" },
      { label: "Setup", value: "60s" },
      { label: "Signup", value: "0" },
    ],
    featured: true,
    link: { href: "https://whatify.ai/", label: "Open Whatify" },
  },
  {
    title: "alchemy-infra · Agent Infrastructure Skill",
    company: "Open source",
    period: "2026",
    status: "OSS",
    description:
      "An agent skill that scaffolds Alchemy Infrastructure-as-TypeScript into codebases with strict secret hygiene.",
    details: [
      "Helps agents provision Cloudflare Workers, KV, R2, D1, Queues, Durable Objects, AWS Lambda and DynamoDB",
      "Supports SKILL.md, skills.sh and npx-compatible installation paths",
      "Captures repeatable context for agents so infrastructure setup survives across sessions and toolchains",
      "Encodes secret hygiene through generated passwords, gitignore updates and pre-commit checks",
      "README benchmark reports 32/32 checks with the skill versus 27/32 baseline",
    ],
    technologies: ["alchemy", "typescript", "cloudflare", "aws", "context", "agents"],
    metrics: [
      { label: "Benchmark", value: "+15.5pp" },
      { label: "License", value: "MIT" },
      { label: "Stars", value: "2" },
    ],
    featured: true,
    link: { href: "https://github.com/aashirjaved/alchemy-infra", label: "View repo" },
  },
  {
    title: "Agentic Customer Care · Shipped in Production",
    company: "Deliveroo",
    period: "2022 to 2024",
    status: "Production",
    description:
      "Customer-care automation inside a three-sided marketplace, powered by agents, fine-tuned GenAI models and Go services built for peak load.",
    details: [
      "Ran the arc from workflow design to production hardening and team handoff",
      "Iterated prompts, tools, context and evals against real ticket data: 2× CSAT, request handling cut in half",
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
    title: "Godzilla Typing Rampage",
    company: "Built for my son",
    period: "2026",
    status: "Beta",
    description:
      "A Godzilla-themed typing game built to teach my son to type with generated sound and touch-safe play.",
    details: [
      "Plain HTML/CSS/JS with zero dependencies and zero asset files",
      "Sound generated live via Web Audio API",
      "Six difficulty tiers from home-row letters to short sentences",
      "iPad layout with native soft keyboard support",
    ],
    technologies: ["html", "css", "javascript", "web audio", "svg"],
    metrics: [
      { label: "Levels", value: "6" },
      { label: "Assets", value: "0" },
      { label: "For", value: "1 son" },
    ],
    link: { href: "/godzilla/", label: "Play the game" },
  },
  {
    title: "Core Engineering · Embedded with Product Teams",
    company: "Motorway",
    period: "2024 to 2025",
    status: "Production",
    description:
      "Core engineering work across foundational services, Motorway Pro, identity boundaries and AWS cost.",
    details: [
      "Led delivery of Motorway Pro trade proposition: +15% platform volume",
      "Identified critical auth issues and led migration to decoupled AuthN/AuthZ services: +7% top-of-funnel conversion",
      "Established operational-excellence working group to attack technical debt: -15% annual AWS cost",
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
];

export default function Projects() {
  return (
    <Container size="wide">
      <PageHero
        eyebrow={`${projects.length} selected builds`}
        number="W"
        title="Field"
        italic="work."
        lede="Selected product, platform, AI and side-project work with the clearest impact signals."
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
