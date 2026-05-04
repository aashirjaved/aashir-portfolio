"use client"

interface GlitchTextProps {
  text: string
  as?: "span" | "h1" | "h2" | "h3" | "div"
  className?: string
}

export function GlitchText({ text, as: Tag = "span", className = "" }: GlitchTextProps) {
  return (
    <Tag className={`glitch ${className}`} data-text={text}>
      {text}
    </Tag>
  )
}
