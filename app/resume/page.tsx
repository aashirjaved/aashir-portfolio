"use client"

import Link from "next/link"
import { Download, Eye, Github, ArrowUpRight, FileText, Code } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { RetroFooter } from "@/components/retro-footer"
import { TerminalWindow } from "@/components/crt/terminal-window"
import { GlitchText } from "@/components/crt/glitch-text"
import { RetroTag } from "@/components/crt/retro-tag"
import { RetroButton } from "@/components/crt/retro-button"

const openSource = [
  {
    name: "Project Name",
    description: "A brief description of the project and your contributions",
    repo: "https://github.com/aashirjaved",
    demo: "https://github.com/aashirjaved",
    tags: ["React", "TypeScript", "GraphQL"],
  },
  {
    name: "Another Project",
    description: "A brief description of this project",
    repo: "https://github.com/aashirjaved",
    demo: null,
    tags: ["Go", "Docker"],
  },
]

export default function Resume() {
  return (
    <div className="min-h-screen">
      <TopNavigation activeSection="resume" />

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-xs uppercase text-muted-foreground mb-2">
            <span className="text-primary">$&gt;</span> ls /resume
          </div>
          <h1 className="font-pixel text-3xl sm:text-5xl phosphor-glow mb-3">
            <GlitchText text="RESUME.pdf" />
          </h1>
          <p className="font-mono text-sm sm:text-base text-card-foreground max-w-2xl">
            <span className="text-primary">// </span>
            Download the full record. Browse the open source.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <TerminalWindow title="resume.pdf" variant="green" prompt="readonly">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-pixel text-sm phosphor-glow">FULL_RESUME.pdf</div>
                  <div className="font-mono text-xs text-muted-foreground">
                    /home/aashir/documents/resume_2026.pdf — 248KB
                  </div>
                </div>
              </div>
              <p className="font-mono text-sm text-card-foreground">
                <span className="text-primary">// </span>
                Comprehensive overview of professional experience, skills, and education.
                Optimized for ATS — readable by humans and machines alike.
              </p>
              <div className="flex flex-wrap gap-3">
                <RetroButton variant="green">
                  <Eye className="w-3.5 h-3.5" />
                  PREVIEW
                </RetroButton>
                <RetroButton variant="amber">
                  <Download className="w-3.5 h-3.5" />
                  DOWNLOAD.pdf
                </RetroButton>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow title="open_source/" variant="cyan" prompt="ls -la">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-crt-cyan" />
                <div className="font-pixel text-sm phosphor-glow-cyan">OPEN_SOURCE.dir</div>
              </div>
              <p className="font-mono text-sm text-card-foreground">
                <span className="phosphor-glow-cyan">// </span>
                Projects I've contributed to or maintain.
              </p>

              <div className="space-y-3">
                {openSource.map((p, i) => (
                  <div key={i} className="pixel-border-thin p-4 bg-background/50">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <h3 className="font-pixel text-xs phosphor-glow mb-1">{p.name}</h3>
                        <p className="font-mono text-xs text-muted-foreground">{p.description}</p>
                      </div>
                      <div className="flex gap-1">
                        <Link
                          href={p.repo}
                          target="_blank"
                          className="p-1.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </Link>
                        {p.demo && (
                          <Link
                            href={p.demo}
                            target="_blank"
                            className="p-1.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label="Visit"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t, j) => (
                        <RetroTag key={j} variant="cyan">
                          {t}
                        </RetroTag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="https://github.com/aashirjaved" target="_blank" className="block">
                <RetroButton variant="green" className="w-full">
                  <Github className="w-3.5 h-3.5" />
                  VIEW_ALL_CONTRIBUTIONS
                </RetroButton>
              </Link>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <RetroFooter />
    </div>
  )
}
