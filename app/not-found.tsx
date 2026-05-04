"use client"

import Link from "next/link"
import { TerminalWindow } from "@/components/crt/terminal-window"
import { GlitchText } from "@/components/crt/glitch-text"
import { RetroButton } from "@/components/crt/retro-button"
import { BlinkingCursor } from "@/components/crt/blinking-cursor"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl">
        <TerminalWindow title="ERROR_404.sys" variant="magenta" prompt="SEGFAULT">
          <div className="text-center space-y-6 py-4">
            <div className="font-pixel text-5xl sm:text-7xl phosphor-glow-magenta">
              <GlitchText text="404" />
            </div>
            <div className="font-pixel text-base sm:text-xl phosphor-glow">FILE_NOT_FOUND</div>
            <div className="font-mono text-sm text-card-foreground space-y-1">
              <div>
                <span className="text-accent">$&gt;</span> The requested resource does not exist.
              </div>
              <div>
                <span className="text-accent">$&gt;</span> Possible causes: moved, deleted, or never existed.
              </div>
              <div>
                <span className="text-accent">$&gt;</span> Returning to base
                <BlinkingCursor />
              </div>
            </div>
            <div className="flex justify-center gap-3 flex-wrap pt-2">
              <Link href="/">
                <RetroButton variant="green">RETURN_HOME</RetroButton>
              </Link>
              <Link href="/contact">
                <RetroButton variant="magenta">REPORT_BUG</RetroButton>
              </Link>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  )
}
