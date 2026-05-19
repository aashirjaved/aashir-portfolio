"use client";

import { cn } from "@/lib/utils";

const items = [
  { kind: "text" as const, label: "MoonPay" },
  { kind: "img" as const, src: "/logos/motorway.svg", alt: "Motorway" },
  { kind: "img" as const, src: "/logos/deliveroo.svg", alt: "Deliveroo" },
  { kind: "img" as const, src: "/logos/zalando.svg", alt: "Zalando" },
  { kind: "img" as const, src: "/logos/ibm.svg", alt: "IBM / Nordcloud" },
];

const inkFilter =
  "brightness(0) saturate(100%) invert(11%) sepia(8%) saturate(900%) hue-rotate(0deg) brightness(95%) contrast(92%)";

export function LogoMarquee({ className }: { className?: string }) {
  const sequence = [...items, ...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
        style={{ background: "linear-gradient(to right, rgb(var(--paper)), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
        style={{ background: "linear-gradient(to left, rgb(var(--paper)), transparent)" }}
      />
      <div className="flex w-max animate-marquee gap-16 py-2">
        {sequence.map((l, i) =>
          l.kind === "img" ? (
            <img
              key={`${l.alt}-${i}`}
              src={l.src}
              alt={l.alt}
              title={l.alt}
              className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity select-none"
              style={{ filter: inkFilter }}
            />
          ) : (
            <span
              key={`${l.label}-${i}`}
              className="display text-2xl text-ink/60 hover:text-ink transition-colors select-none whitespace-nowrap"
              title={l.label}
            >
              {l.label}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
