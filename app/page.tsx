"use client"

import Link from "next/link"
import { Suspense, useState } from "react"
import { ArrowRight, Cpu, Cloud, Brain, Code2, Briefcase } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { RetroFooter } from "@/components/retro-footer"
import { TerminalWindow } from "@/components/crt/terminal-window"
import { Typewriter } from "@/components/crt/typewriter"
import { GlitchText } from "@/components/crt/glitch-text"
import { BlinkingCursor } from "@/components/crt/blinking-cursor"
import { RetroButton } from "@/components/crt/retro-button"
import { RetroTag } from "@/components/crt/retro-tag"
import { MarqueeTicker } from "@/components/crt/marquee-ticker"
import { BootSequence } from "@/components/crt/boot-sequence"
import { PersonSchema, WebsiteSchema } from "@/components/structured-data"

const stats = [
  { label: "YRS_EXP", value: "8+", color: "primary" },
  { label: "SAVINGS", value: "£7M+", color: "secondary" },
  { label: "ENGS_MENTORED", value: "100+", color: "accent" },
  { label: "AGENTS_SHIPPED", value: "10K+/D", color: "crt-cyan" },
]

const expertise: { icon: React.ReactNode; title: string; desc: string; tag: "green" | "amber" | "magenta" | "cyan" }[] = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "FULL_STACK.exe",
    desc: "React, Next.js, Go, Python — production systems end to end",
    tag: "green",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "CLOUD_OPS.exe",
    desc: "AWS, Kubernetes, Terraform — multi-region infra at scale",
    tag: "amber",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI_AGENTS.exe",
    desc: "LLMs, RAG, fine-tuning, prompt engineering, MLOps",
    tag: "magenta",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "LEADERSHIP.exe",
    desc: "Cross-functional teams, technical strategy, mentoring",
    tag: "cyan",
  },
]

function HomeContent() {
  const [booted, setBooted] = useState(false)

  return (
    <div className="min-h-screen">
      <PersonSchema />
      <WebsiteSchema />
      <BootSequence onDone={() => setBooted(true)} />

      <TopNavigation activeSection="home" />

      <MarqueeTicker
        items={[
          "AASHIR.OS v8.4.2 ONLINE",
          "STATUS: AVAILABLE",
          "BUILDING AI AGENTS",
          "8+ YEARS UPTIME",
          "PHOSPHOR DISPLAY CALIBRATED",
          "LAST DEPLOY: 2026-05-04",
        ]}
      />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <TerminalWindow title="~/aashir.javed/index.tsx" prompt="MAIN BOOT" variant="green">
            <div className="font-mono text-sm sm:text-base space-y-3">
              <div>
                <span className="text-primary">user@aashir:~$</span>{" "}
                <Typewriter text="whoami" speed={40} caret={false} />
              </div>
              <div className="pl-4 phosphor-glow">
                <Typewriter text="LOADING AASHIR.JAVED..." speed={30} delay={500} caret={false} />
              </div>
              <div className="pt-4">
                <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl leading-tight phosphor-glow">
                  <GlitchText text="AASHIR JAVED" />
                </h1>
                <h2 className="font-pixel text-sm sm:text-lg mt-3 phosphor-glow-amber">
                  &gt; VERSATILE_ENGINEER<BlinkingCursor char="_" />
                </h2>
              </div>
              <div className="pt-4 max-w-2xl text-card-foreground leading-relaxed text-sm sm:text-base">
                <span className="text-primary">// </span>
                Building next-gen systems across full-stack, cloud, and AI. Specialized in LLMs,
                production agents, and architectures that drive business impact.
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <span className="phosphor-glow-amber">●</span>
                <span className="text-card-foreground">Currently leading Core Engineering at</span>
                <RetroTag variant="amber">MOTORWAY</RetroTag>
              </div>
              <div className="pt-6 flex flex-wrap gap-3">
                <Link href="/contact">
                  <RetroButton variant="green">
                    INITIATE_CONTACT
                    <ArrowRight className="w-3.5 h-3.5" />
                  </RetroButton>
                </Link>
                <Link href="/projects">
                  <RetroButton variant="amber">VIEW_WORK.dir</RetroButton>
                </Link>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Stats grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="pixel-border-thin p-4 text-center retro-hover bg-card"
            >
              <div
                className={`font-pixel text-2xl sm:text-3xl mb-2 ${
                  s.color === "primary"
                    ? "text-primary phosphor-glow"
                    : s.color === "secondary"
                      ? "phosphor-glow-amber"
                      : s.color === "accent"
                        ? "phosphor-glow-magenta"
                        : "phosphor-glow-cyan"
                }`}
              >
                {s.value}
              </div>
              <div className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-pixel text-xs sm:text-sm uppercase tracking-widest mb-4 phosphor-glow">
            <span className="text-primary">[</span> EXPERTISE.MODULES <span className="text-primary">]</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((e, i) => (
              <TerminalWindow key={i} title={e.title} variant={e.tag} controls={false} prompt="">
                <div className="space-y-3">
                  <div className="text-primary">{e.icon}</div>
                  <div className="font-mono text-sm text-card-foreground leading-relaxed">{e.desc}</div>
                </div>
              </TerminalWindow>
            ))}
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="cat ./bio.txt" variant="amber" prompt="readonly">
            <div className="font-mono text-sm sm:text-base leading-relaxed space-y-4 text-card-foreground">
              <p>
                <span className="phosphor-glow-amber">$&gt; </span>
                I'm a versatile engineer with{" "}
                <span className="text-primary phosphor-glow">8+ years</span> building scalable systems
                across the entire technology stack. Currently at{" "}
                <RetroTag variant="amber">MOTORWAY</RetroTag>, leading backend engineering, AI integration,
                and cross-functional teams.
              </p>
              <p>
                <span className="phosphor-glow-amber">$&gt; </span>
                Expertise spans React/Next.js frontends, Go/Python backends, AWS infrastructure, and
                cutting-edge AI implementations. Delivered{" "}
                <span className="text-primary phosphor-glow">millions in cost savings</span>, built
                production AI agents processing{" "}
                <span className="text-primary phosphor-glow">10,000+ cases daily</span>, and led teams that
                shipped mission-critical systems.
              </p>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="connect.sh" variant="magenta">
            <div className="text-center space-y-4">
              <div className="font-pixel text-xl sm:text-3xl phosphor-glow-magenta">
                <GlitchText text="LET'S CONNECT" />
              </div>
              <p className="font-mono text-sm sm:text-base text-card-foreground max-w-xl mx-auto">
                <span className="text-accent">// </span>
                Interested in collaborating or discussing opportunities? Open a channel.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link href="/contact">
                  <RetroButton variant="magenta">SEND_TRANSMISSION</RetroButton>
                </Link>
                <Link href="/projects">
                  <RetroButton variant="green">BROWSE_PROJECTS</RetroButton>
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

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background font-mono text-primary phosphor-glow">
          LOADING...
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  )
}
