"use client"

interface MarqueeTickerProps {
  items: string[]
  variant?: "green" | "amber" | "magenta" | "cyan"
}

const variantClass = {
  green: "text-primary border-primary",
  amber: "text-secondary border-secondary",
  magenta: "text-accent border-accent",
  cyan: "text-crt-cyan border-crt-cyan",
}

export function MarqueeTicker({ items, variant = "green" }: MarqueeTickerProps) {
  const doubled = [...items, ...items]
  return (
    <div className={`overflow-hidden border-y-2 py-2 bg-background/80 ${variantClass[variant]}`}>
      <div className="marquee-track font-mono text-xs sm:text-sm uppercase tracking-wider">
        {doubled.map((item, i) => (
          <span key={i} className="px-6 inline-flex items-center gap-2">
            <span aria-hidden>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
