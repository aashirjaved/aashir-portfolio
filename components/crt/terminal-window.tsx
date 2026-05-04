"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TerminalWindowProps {
  title?: string
  children: ReactNode
  className?: string
  variant?: "green" | "amber" | "magenta" | "cyan"
  controls?: boolean
  prompt?: string
}

const variantClass = {
  green: "pixel-border",
  amber: "pixel-border-amber",
  magenta: "pixel-border-magenta",
  cyan: "pixel-border-cyan",
}

const dotColors = {
  green: ["bg-destructive", "bg-secondary", "bg-primary"],
  amber: ["bg-destructive", "bg-secondary", "bg-primary"],
  magenta: ["bg-destructive", "bg-secondary", "bg-accent"],
  cyan: ["bg-destructive", "bg-secondary", "bg-crt-cyan"],
}

export function TerminalWindow({
  title = "TERMINAL",
  children,
  className = "",
  variant = "green",
  controls = true,
  prompt,
}: TerminalWindowProps) {
  return (
    <div className={cn(variantClass[variant], "bg-card relative", className)}>
      <div className="term-titlebar flex items-center justify-between px-3 py-2 gap-3">
        {controls && (
          <div className="flex items-center gap-1.5 shrink-0">
            <span className={`w-3 h-3 ${dotColors[variant][0]} border border-foreground/30`} />
            <span className={`w-3 h-3 ${dotColors[variant][1]} border border-foreground/30`} />
            <span className={`w-3 h-3 ${dotColors[variant][2]} border border-foreground/30`} />
          </div>
        )}
        <div className="font-pixel text-[9px] sm:text-[10px] tracking-wider text-foreground/90 uppercase truncate flex-1 text-center">
          {title}
        </div>
        <div className="font-mono text-[10px] text-muted-foreground shrink-0 hidden sm:block">
          {prompt ?? "[ ESC ] [ CTRL ] [ ALT ]"}
        </div>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  )
}
