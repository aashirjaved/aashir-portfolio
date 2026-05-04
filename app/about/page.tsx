"use client"

import Link from "next/link"
import { Suspense } from "react"
import { TopNavigation } from "@/components/top-navigation"
import { RetroFooter } from "@/components/retro-footer"
import { TerminalWindow } from "@/components/crt/terminal-window"
import { GlitchText } from "@/components/crt/glitch-text"
import { RetroTag } from "@/components/crt/retro-tag"
import { RetroButton } from "@/components/crt/retro-button"
import { AsciiArt } from "@/components/crt/ascii-art"

const ROBOT_ART = `
       ___________
      |  _______  |
      | |       | |
      | |  >_   | |
      | |_______| |
      |___________|
     ___|_______|___
    |               |
    | [O] [O] [O]   |
    |_______________|
        ||     ||
        ||     ||
       _||_   _||_
`

const skillGroups: { category: string; variant: "green" | "amber" | "magenta" | "cyan"; skills: string[] }[] = [
  {
    category: "AI / ML",
    variant: "magenta",
    skills: ["LLM Integration", "Prompt Eng", "Agentic AI", "Fine-tuning", "Vector DBs", "MLOps"],
  },
  {
    category: "FULL_STACK",
    variant: "green",
    skills: ["React/Next.js", "TypeScript", "Go", "Python", "Java", "Node.js"],
  },
  {
    category: "CLOUD / INFRA",
    variant: "amber",
    skills: ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD", "Monitoring"],
  },
  {
    category: "DATA",
    variant: "cyan",
    skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Modeling", "Optimization"],
  },
  {
    category: "LEADERSHIP",
    variant: "green",
    skills: ["Team Lead", "Project Mgmt", "Stakeholders", "Mentoring", "Strategy"],
  },
]

const sysInfo = [
  ["OS", "Aashir.OS v8.4.2"],
  ["KERNEL", "Linux/Unix Native"],
  ["UPTIME", "8+ years"],
  ["LOCATION", "London, UK"],
  ["LANGUAGE", "Go, Python, TS, Java"],
  ["SHELL", "zsh + tmux"],
  ["EDITOR", "Neovim / VSCode"],
  ["CURRENT_ROLE", "Sr Backend @ Motorway"],
  ["FOCUS", "AI agents, infra, scale"],
  ["MENTORED", "100+ engineers"],
  ["SAVINGS_DELIVERED", "£7M+"],
  ["AGENTS_SHIPPED", "10K+ cases/day"],
]

const achievements = [
  { title: "AI INNOVATION LEAD", desc: "Production AI agents — 10K+ cases/day @ 95% accuracy", variant: "magenta" as const },
  { title: "COST OPTIMIZATION", desc: "£2M+ annual savings via AI automation + infra optimization", variant: "amber" as const },
  { title: "TECHNICAL MENTOR", desc: "Led cross-functional teams, mentored 100+ engineers", variant: "green" as const },
  { title: "PERFORMANCE ENG", desc: "1000+ RPS systems, 15% latency improvements, 99.9% uptime", variant: "cyan" as const },
]

function AboutContent() {
  return (
    <div className="min-h-screen">
      <TopNavigation activeSection="about" />

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-xs uppercase text-muted-foreground mb-2">
            <span className="text-primary">$&gt;</span> cat /etc/aashir.cfg
          </div>
          <h1 className="font-pixel text-3xl sm:text-5xl phosphor-glow mb-3">
            <GlitchText text="ABOUT.SYS" />
          </h1>
          <p className="font-mono text-sm sm:text-base text-card-foreground max-w-2xl">
            <span className="text-primary">// </span>
            System info, journey log, and what makes this engineer tick.
          </p>
        </div>
      </section>

      {/* Sysinfo + ASCII */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <TerminalWindow title="neofetch" variant="green" prompt="aashir@portfolio">
            <div className="grid grid-cols-[auto_auto] gap-x-4 gap-y-1.5 font-mono text-xs sm:text-sm">
              {sysInfo.map(([k, v]) => (
                <div key={k} className="contents">
                  <span className="text-primary phosphor-glow uppercase tracking-wider">{k}:</span>
                  <span className="text-card-foreground">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-primary/30 flex gap-1">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="w-4 h-4 inline-block"
                  style={{
                    background: ["#00ff41", "#ffb000", "#ff0080", "#0080ff", "#00ffff", "#ff00ff", "#ffff00", "#ffffff"][i],
                    boxShadow: `0 0 8px currentColor`,
                  }}
                />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="ascii.art" variant="amber" prompt="rendered">
            <div className="flex items-center justify-center min-h-[280px]">
              <AsciiArt art={ROBOT_ART} variant="amber" className="text-xs sm:text-sm" />
            </div>
            <div className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              ◆ engineering unit — operational ◆
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Bio terminal */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="cat ./journey.md" variant="cyan">
            <div className="font-mono text-sm sm:text-base leading-relaxed space-y-4 text-card-foreground">
              <p>
                <span className="phosphor-glow-cyan">$&gt; </span>
                I'm a versatile engineer with{" "}
                <span className="text-primary phosphor-glow">8+ years</span> of experience building
                scalable systems across the entire technology spectrum. Started solving complex problems
                with elegant code, evolved into leading teams and architecting solutions that drive real
                business impact.
              </p>
              <p>
                <span className="phosphor-glow-cyan">$&gt; </span>
                Based in <RetroTag variant="cyan">LONDON</RetroTag>, currently Senior Backend Engineer at{" "}
                <RetroTag variant="amber">MOTORWAY</RetroTag> — leading Core Engineering, building
                foundational services that empower product teams to ship quickly and reliably. Recent
                focus: integrating cutting-edge AI and LLMs into production systems.
              </p>
              <p>
                <span className="phosphor-glow-cyan">$&gt; </span>
                What sets me apart: ability to work across the entire stack — pixel-perfect React
                interfaces, distributed backends, cloud infra, intelligent AI agents. End-to-end ownership.
              </p>
              <p>
                <span className="phosphor-glow-cyan">$&gt; </span>
                Beyond technical work — passionate about{" "}
                <span className="text-primary phosphor-glow">mentoring engineers</span>, leading
                cross-functional teams, and establishing engineering practices that promote both
                innovation and operational excellence. Trained 100+ engineers, led initiatives delivering
                millions in cost savings.
              </p>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-pixel text-xs sm:text-sm uppercase tracking-widest mb-4 phosphor-glow">
            <span className="text-primary">[</span> ACHIEVEMENTS.LOG <span className="text-primary">]</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <TerminalWindow key={i} title={a.title} variant={a.variant} controls={false} prompt="">
                <p className="font-mono text-sm text-card-foreground leading-relaxed">{a.desc}</p>
              </TerminalWindow>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-pixel text-xs sm:text-sm uppercase tracking-widest mb-4 phosphor-glow">
            <span className="text-primary">[</span> SKILLS.MATRIX <span className="text-primary">]</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((g, i) => (
              <TerminalWindow key={i} title={`./${g.category.toLowerCase().replace(/[ /]/g, "_")}.dat`} variant={g.variant}>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((s, j) => (
                    <RetroTag key={j} variant={g.variant}>
                      {s}
                    </RetroTag>
                  ))}
                </div>
              </TerminalWindow>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="connect.sh" variant="magenta">
            <div className="text-center space-y-4">
              <div className="font-pixel text-base sm:text-xl phosphor-glow-magenta">
                <GlitchText text="OPEN_CHANNEL" />
              </div>
              <p className="font-mono text-sm text-card-foreground">
                <span className="text-accent">// </span>
                Want to talk? Engineer-to-engineer, founder-to-founder, human-to-human.
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Link href="/contact">
                  <RetroButton variant="magenta">CONTACT_ME</RetroButton>
                </Link>
                <Link href="/projects">
                  <RetroButton variant="green">SEE_WORK</RetroButton>
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

export default function About() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background font-mono text-primary phosphor-glow">
          LOADING...
        </div>
      }
    >
      <AboutContent />
    </Suspense>
  )
}
