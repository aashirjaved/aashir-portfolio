"use client"

interface BlinkingCursorProps {
  char?: string
  className?: string
}

export function BlinkingCursor({ char = "▊", className = "" }: BlinkingCursorProps) {
  return (
    <span className={`blink phosphor-glow ${className}`} aria-hidden>
      {char}
    </span>
  )
}
