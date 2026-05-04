"use client"

import Link from "next/link"
import { Suspense } from "react"
import { TopNavigation } from "@/components/top-navigation"
import { RetroFooter } from "@/components/retro-footer"
import { TerminalWindow } from "@/components/crt/terminal-window"
import { GlitchText } from "@/components/crt/glitch-text"
import { RetroTag } from "@/components/crt/retro-tag"
import { RetroButton } from "@/components/crt/retro-button"

type Variant = "green" | "amber" | "magenta" | "cyan"

interface Project {
  title: string
  company: string
  period: string
  description: string
  details: string[]
  technologies: string[]
  metrics: { label: string; value: string }[]
  category: string
  status: string
  variant: Variant
  filename: string
}

const projects: Project[] = [
  {
    title: "AI-Powered Customer Care Platform",
    company: "Deliveroo",
    period: "2022-2024",
    description:
      "Customer care automation combining React frontends, Go backend APIs, and fine-tuned LLM agents for intelligent customer service.",
    details: [
      "AI agents processing 10,000+ cases daily with 95% accuracy",
      "Advanced prompt engineering frameworks for customer service LLMs",
      "Real-time React interface with seamless agent-human handoff",
      "Go backend APIs with PostgreSQL for high-availability processing",
      "Multi-region Kubernetes infrastructure with Terraform automation",
    ],
    technologies: ["React", "Go", "Python", "LLM", "Prompt Eng", "PostgreSQL", "K8s", "Terraform"],
    metrics: [
      { label: "CSAT", value: "2x" },
      { label: "SAVED", value: "£2M" },
      { label: "AUTO", value: "60%" },
    ],
    category: "AI + FULL_STACK",
    status: "PROD",
    variant: "magenta",
    filename: "ai-care.proj",
  },
  {
    title: "Core Engineering Infrastructure",
    company: "Motorway",
    period: "2024–Present",
    description:
      "Mission-critical infrastructure platform powering Motorway's core services with monitoring, AI alerting, and seamless auth.",
    details: [
      "Migration to decoupled AuthN/AuthZ services resolving customer pain points",
      "Comprehensive monitoring dashboards with React and Next.js",
      "AI-powered incident management using LLMs for categorization",
      "Operational excellence practices reducing technical debt",
      "Cross-functional team management across microservices",
    ],
    technologies: ["Go", "Python", "React", "Next.js", "AWS", "Terraform", "LLM", "OAuth2"],
    metrics: [
      { label: "VOLUME", value: "+15%" },
      { label: "CONV", value: "+7%" },
      { label: "AWS", value: "-15%" },
    ],
    category: "INFRA + AI",
    status: "PROD",
    variant: "green",
    filename: "core-infra.proj",
  },
  {
    title: "High-Performance Warehouse Gateway",
    company: "Zalando",
    period: "2021-2022",
    description:
      "Enterprise gateway connecting warehouse operations with Zalando's infrastructure — React dashboards + optimized Java APIs.",
    details: [
      "High-performance Java APIs handling 1000+ requests per second",
      "Responsive React interfaces for warehouse management teams",
      "AI-powered demand forecasting improving inventory by 25%",
      "Comprehensive monitoring with Grafana and Prometheus",
      "Technical workshops for integration teams",
    ],
    technologies: ["Java", "React", "TypeScript", "PostgreSQL", "Docker", "K8s", "Grafana", "Prometheus"],
    metrics: [
      { label: "RPS", value: "1K+" },
      { label: "LATENCY", value: "-15%" },
      { label: "INVENTORY", value: "+25%" },
    ],
    category: "BACKEND + UI",
    status: "PROD",
    variant: "amber",
    filename: "warehouse.proj",
  },
  {
    title: "Multi-Cloud Migration Platform",
    company: "Nordcloud (IBM)",
    period: "2020-2021",
    description:
      "Cloud migration platform transforming monolithic applications into microservices across AWS, Azure, GCP.",
    details: [
      "Architectural design for cross-cloud compatibility and migration patterns",
      "Data transformation pipelines ensuring zero data loss during migrations",
      "CI/CD workflows accelerating deployments by 40%",
      "Migration assessment tools providing accurate timelines and costs",
      "Client stakeholder management throughout complex projects",
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "K8s", "Python", "Go"],
    metrics: [
      { label: "MIGRATIONS", value: "30+" },
      { label: "EFFICIENCY", value: "+40%" },
      { label: "SAVED", value: "£5M" },
    ],
    category: "CLOUD INFRA",
    status: "PROD",
    variant: "cyan",
    filename: "multi-cloud.proj",
  },
  {
    title: "Event-Driven E-Commerce Platform",
    company: "Freelance",
    period: "2019-2020",
    description:
      "Scalable e-commerce system handling high-volume transactions with real-time inventory management and personalized recommendations.",
    details: [
      "Event-driven architecture with message queues for reliability",
      "Personalized recommendation engine using collaborative filtering",
      "Real-time inventory synchronization across multiple channels",
      "Responsive React/Next.js frontend with optimized mobile UX",
      "Payment gateway integration with robust error handling",
    ],
    technologies: ["Node.js", "React", "Next.js", "Redis", "PostgreSQL", "Kafka", "AWS", "ElasticSearch"],
    metrics: [
      { label: "UPTIME", value: "99.9%" },
      { label: "CONVERSIONS", value: "3x" },
      { label: "ORDERS/D", value: "25K" },
    ],
    category: "FULL_STACK",
    status: "PROD",
    variant: "green",
    filename: "ecom-events.proj",
  },
]

function ProjectsContent() {
  return (
    <div className="min-h-screen">
      <TopNavigation activeSection="projects" />

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-xs uppercase text-muted-foreground mb-2">
            <span className="text-primary">$&gt;</span> ls -la /projects
          </div>
          <h1 className="font-pixel text-3xl sm:text-5xl phosphor-glow mb-3">
            <GlitchText text="PROJECTS.dir" />
          </h1>
          <p className="font-mono text-sm sm:text-base text-card-foreground max-w-2xl">
            <span className="text-primary">// </span>
            Selected production systems — AI agents, infrastructure platforms, and high-performance backends.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <TerminalWindow
              key={i}
              title={p.filename}
              variant={p.variant}
              prompt={p.period}
            >
              <div className="space-y-4 font-mono text-sm">
                <div className="flex flex-wrap gap-2 items-center">
                  <RetroTag variant={p.variant}>{p.category}</RetroTag>
                  <RetroTag variant="amber">{p.status}</RetroTag>
                  <span className="text-muted-foreground text-xs ml-auto">{p.company}</span>
                </div>

                <h2 className="font-pixel text-base sm:text-lg phosphor-glow leading-snug">
                  {p.title}
                </h2>

                <p className="text-card-foreground leading-relaxed">{p.description}</p>

                <div className="grid grid-cols-3 gap-2">
                  {p.metrics.map((m, j) => (
                    <div
                      key={j}
                      className="pixel-border-thin p-2 text-center"
                    >
                      <div className="font-pixel text-sm phosphor-glow">{m.value}</div>
                      <div className="text-[9px] uppercase text-muted-foreground tracking-wider mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="text-xs uppercase text-primary mb-2 tracking-wider">
                    &gt; KEY_OUTPUTS
                  </div>
                  <ul className="space-y-1.5">
                    {p.details.map((d, j) => (
                      <li key={j} className="flex gap-2 text-card-foreground text-xs sm:text-sm">
                        <span className="text-primary shrink-0">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs uppercase text-primary mb-2 tracking-wider">&gt; STACK</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map((t, j) => (
                      <RetroTag key={j} variant={p.variant}>
                        {t}
                      </RetroTag>
                    ))}
                  </div>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="cta.sh" variant="green">
            <div className="text-center space-y-4">
              <div className="font-pixel text-base sm:text-xl phosphor-glow">WANT_DEEPER_DIVE?</div>
              <p className="font-mono text-sm text-card-foreground">
                <span className="text-primary">// </span>
                Each system has stories. Open a channel and ask.
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Link href="/contact">
                  <RetroButton variant="green">CONTACT_ME</RetroButton>
                </Link>
                <Link href="/experience">
                  <RetroButton variant="amber">VIEW_TIMELINE</RetroButton>
                </Link>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <RetroFooter />
    </div>
  )
}

export default function Projects() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background font-mono text-primary phosphor-glow">
          LOADING...
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  )
}
