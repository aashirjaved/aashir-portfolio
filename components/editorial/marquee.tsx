"use client";

import { cn } from "@/lib/utils";

const items = [
  { label: "MoonPay", tone: "Fintech" },
  { label: "Motorway", tone: "Marketplace" },
  { label: "Deliveroo", tone: "Consumer ops" },
  { label: "Zalando", tone: "Fulfilment" },
  { label: "IBM", tone: "Cloud" },
  { label: "Nordcloud", tone: "Migration" },
];

export function LogoMarquee({ className }: { className?: string }) {
  const sequence = [...items, ...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24"
        style={{ background: "linear-gradient(to right, rgb(var(--paper)), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24"
        style={{ background: "linear-gradient(to left, rgb(var(--paper)), transparent)" }}
      />
      <div className="flex w-max animate-marquee gap-3 py-2 sm:gap-4">
        {sequence.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="metric-tile flex min-w-[170px] items-center justify-between gap-4 rounded-full px-4 py-3 sm:min-w-[210px] sm:px-5"
            title={item.label}
          >
            <span className="display text-xl leading-none text-ink sm:text-2xl">{item.label}</span>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">{item.tone}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
