"use client"

import Link from "next/link"
import { TopNavigation } from "@/components/top-navigation"
import { RetroFooter } from "@/components/retro-footer"
import { TerminalWindow } from "@/components/crt/terminal-window"
import { GlitchText } from "@/components/crt/glitch-text"
import { RetroTag } from "@/components/crt/retro-tag"
import { RetroButton } from "@/components/crt/retro-button"

type Variant = "green" | "amber" | "magenta" | "cyan"

interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  team: string
  description: string[]
  metrics: { label: string; value: string }[]
  technologies: string[]
  variant: Variant
}

const experiences: Experience[] = [
  {
    title: "Senior Backend Engineer",
    company: "Motorway",
    location: "London, UK",
    startDate: "2024-06-01",
    endDate: "PRESENT",
    team: "Core Engineering",
    description: [
      "Lead Core Engineering team building foundational services and architecture",
      "Delivered trade proposition for Motorway Pro — 15% increased platform volume",
      "Led auth migration to decoupled AuthN/AuthZ — 7% conversion boost",
      "Established operational excellence — 15% annual AWS cost reduction",
      "Built full-stack monitoring dashboards with React/Next.js",
      "AI-powered incident management using LLMs — 40% faster response",
    ],
    metrics: [
      { label: "VOLUME", value: "+15%" },
      { label: "CONV", value: "+7%" },
      { label: "AWS", value: "-15%" },
    ],
    technologies: ["Go", "Python", "React", "Next.js", "AWS", "Terraform", "K8s", "TypeScript", "LLM", "OAuth2"],
    variant: "green",
  },
  {
    title: "Software Engineer II",
    company: "Deliveroo",
    location: "London, UK",
    startDate: "2022-05-01",
    endDate: "2024-06-01",
    team: "Platform — Customer Care",
    description: [
      "End-to-end automation of customer care journeys with fine-tuned GenAI",
      "2x CSAT improvement, 50% reduction in request handling time",
      "Production AI agents — 10,000+ daily cases, 95% accuracy",
      "Multi-region infrastructure with Terraform and Kubernetes",
      "Engineering gamedays for 100+ engineers across the org",
      "Prompt engineering frameworks and fine-tuning pipelines",
    ],
    metrics: [
      { label: "CSAT", value: "2x" },
      { label: "SAVED", value: "£2M" },
      { label: "AUTO", value: "60%" },
    ],
    technologies: ["React", "Go", "Python", "LLM", "Prompt Eng", "K8s", "Terraform", "PostgreSQL"],
    variant: "magenta",
  },
  {
    title: "Software Engineer",
    company: "Zalando",
    location: "Helsinki, Finland",
    startDate: "2021-01-01",
    endDate: "2022-05-01",
    team: "Customer Fulfillment",
    description: [
      "Owned warehouse integration gateway connecting IDCs with core infra",
      "React/TypeScript interfaces for warehouse management systems",
      "AI-powered demand forecasting — 25% inventory optimization",
      "Java APIs handling 1000+ RPS with 15% latency reduction",
      "Comprehensive Grafana + Prometheus monitoring with custom alerting",
    ],
    metrics: [
      { label: "RPS", value: "1K+" },
      { label: "LATENCY", value: "-15%" },
      { label: "INVENTORY", value: "+25%" },
    ],
    technologies: ["Java", "React", "TypeScript", "PostgreSQL", "Docker", "K8s", "Grafana", "Prometheus", "ML"],
    variant: "amber",
  },
  {
    title: "Lead Cloud Engineer",
    company: "Nordcloud (IBM)",
    location: "Helsinki, Finland",
    startDate: "2019-08-01",
    endDate: "2021-01-01",
    team: "Cloud Transformation",
    description: [
      "Architectural design for enterprise cloud migrations on AWS/Azure/GCP",
      "Multi-cloud platform transforming monoliths into microservices",
      "Migration projects for finance/healthcare clients — £5M+ savings",
      "Automated data transformation pipelines with zero data loss",
      "CI/CD workflows with security checks — 40% faster deployments",
    ],
    metrics: [
      { label: "MIGRATIONS", value: "30+" },
      { label: "EFFICIENCY", value: "+40%" },
      { label: "SAVED", value: "£5M" },
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "K8s", "Python", "Go", "PostgreSQL"],
    variant: "cyan",
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen">
      <TopNavigation activeSection="experience" />

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-xs uppercase text-muted-foreground mb-2">
            <span className="text-primary">$&gt;</span> tail -f /var/log/aashir.log
          </div>
          <h1 className="font-pixel text-3xl sm:text-5xl phosphor-glow mb-3">
            <GlitchText text="SYSTEM.LOG" />
          </h1>
          <p className="font-mono text-sm sm:text-base text-card-foreground max-w-2xl">
            <span className="text-primary">// </span>
            8+ years of timestamps. Each entry: a system shipped, a team led, a problem solved.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* System log header */}
          <div className="pixel-border bg-card mb-6 p-4 font-mono text-xs sm:text-sm overflow-x-auto">
            <div className="phosphor-glow whitespace-nowrap">
              [TIMESTAMP] [LEVEL] [EVENT] [DURATION]
            </div>
            <div className="text-muted-foreground whitespace-nowrap">
              ────────── ─────── ─────── ──────────
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((e, i) => {
              const period = `${e.startDate} → ${e.endDate}`
              return (
                <div key={i} className="relative">
                  <TerminalWindow
                    title={`[${e.startDate}] JOIN ${e.company.toUpperCase()}`}
                    variant={e.variant}
                    prompt={period}
                  >
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="phosphor-glow text-primary">[{e.startDate}]</span>
                        <span className="text-secondary phosphor-glow-amber">[INFO]</span>
                        <span className="text-card-foreground">JOINED:</span>
                        <RetroTag variant={e.variant}>{e.company}</RetroTag>
                        <span className="text-card-foreground">—</span>
                        <span className="text-card-foreground">{e.title}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground border-y border-primary/30 py-2">
                        <span>📍 {e.location}</span>
                        <span>•</span>
                        <span>🏷 {e.team}</span>
                        <span>•</span>
                        <span>⏳ {period}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {e.metrics.map((m, j) => (
                          <div key={j} className="pixel-border-thin p-2 text-center">
                            <div className="font-pixel text-sm phosphor-glow">{m.value}</div>
                            <div className="text-[9px] uppercase text-muted-foreground tracking-wider mt-1">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="text-xs uppercase text-primary mb-2 tracking-wider">
                          &gt; STDOUT
                        </div>
                        <ul className="space-y-1.5">
                          {e.description.map((d, j) => (
                            <li key={j} className="flex gap-2 text-card-foreground text-xs sm:text-sm">
                              <span className="text-primary shrink-0">▸</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-xs uppercase text-primary mb-2 tracking-wider">
                          &gt; STACK
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {e.technologies.map((t, j) => (
                            <RetroTag key={j} variant={e.variant}>
                              {t}
                            </RetroTag>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TerminalWindow>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="continue.sh" variant="amber">
            <div className="text-center space-y-4">
              <div className="font-pixel text-base sm:text-xl phosphor-glow-amber">WANT_FULL_LOG?</div>
              <p className="font-mono text-sm text-card-foreground">
                <span className="text-secondary">// </span>
                Download the complete record or open a channel to discuss.
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Link href="/resume">
                  <RetroButton variant="amber">VIEW_RESUME.pdf</RetroButton>
                </Link>
                <Link href="/contact">
                  <RetroButton variant="green">CONTACT_ME</RetroButton>
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
