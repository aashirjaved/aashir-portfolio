"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { BlinkingCursor } from "@/components/crt/blinking-cursor"

export function RetroFooter() {
  return (
    <footer className="mt-20 border-t-2 border-primary bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8 font-mono text-xs sm:text-sm">
          <div>
            <div className="font-pixel text-[10px] uppercase phosphor-glow mb-3">// SYSTEM</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <span className="text-primary">&gt;</span> STATUS:{" "}
                <span className="text-primary phosphor-glow">ONLINE</span>
              </li>
              <li>
                <span className="text-primary">&gt;</span> UPTIME: 8+ YEARS
              </li>
              <li>
                <span className="text-primary">&gt;</span> LOCATION: LONDON, UK
              </li>
              <li>
                <span className="text-primary">&gt;</span> KERNEL: AASHIR.OS v8.4.2
              </li>
            </ul>
          </div>
          <div>
            <div className="font-pixel text-[10px] uppercase phosphor-glow mb-3">// LINKS</div>
            <ul className="space-y-1.5">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                  <span className="text-primary">&gt;</span> /projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                  <span className="text-primary">&gt;</span> /experience
                </Link>
              </li>
              <li>
                <Link href="/writing" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                  <span className="text-primary">&gt;</span> /writing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                  <span className="text-primary">&gt;</span> /contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-pixel text-[10px] uppercase phosphor-glow mb-3">// TRANSMIT</div>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/aashirjaved"
                target="_blank"
                className="p-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aashirjaved/"
                target="_blank"
                className="p-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:me@aashir.net"
                className="p-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-3 text-muted-foreground text-xs">
              <span className="text-primary">&gt;</span> me@aashir.net
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-primary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="phosphor-glow">©</span>
            <BlinkingCursor char="◉" className="text-primary text-[10px]" />
            <span>1990-2026 AASHIR JAVED SYSTEMS — ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary phosphor-glow blink" />
            <span>SIGNAL OK</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
