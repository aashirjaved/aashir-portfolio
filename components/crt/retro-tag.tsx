"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RetroTagProps {
  children: ReactNode
  variant?: "green" | "amber" | "magenta" | "cyan" | "blue"
  className?: string
}

const variants = {
  green: "border-primary text-primary",
  amber: "border-secondary text-secondary",
  magenta: "border-accent text-accent",
  cyan: "border-crt-cyan text-crt-cyan",
  blue: "border-crt-blue text-crt-blue",
}

export function RetroTag({ children, variant = "green", className = "" }: RetroTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-[10px] sm:text-xs uppercase tracking-wider border px-2 py-0.5 bg-background/70",
        variants[variant],
        className,
      )}
    >
      [{children}]
    </span>
  )
}
