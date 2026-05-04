"use client"

export const ASCII_LOGO = `
 █████╗  █████╗ ███████╗██╗  ██╗██╗██████╗
██╔══██╗██╔══██╗██╔════╝██║  ██║██║██╔══██╗
███████║███████║███████╗███████║██║██████╔╝
██╔══██║██╔══██║╚════██║██╔══██║██║██╔══██╗
██║  ██║██║  ██║███████║██║  ██║██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
`

export const ASCII_TERMINAL = `
   .--------------------.
   |  >_                |
   |                    |
   |____________________|
       \\___________/
        |_________|
`

interface AsciiArtProps {
  art: string
  className?: string
  variant?: "green" | "amber" | "magenta" | "cyan"
}

const variantColor = {
  green: "text-primary",
  amber: "text-secondary",
  magenta: "text-accent",
  cyan: "text-crt-cyan",
}

export function AsciiArt({ art, className = "", variant = "green" }: AsciiArtProps) {
  return (
    <pre
      className={`ascii ${variantColor[variant]} ${className}`}
      aria-hidden
    >
      {art}
    </pre>
  )
}
