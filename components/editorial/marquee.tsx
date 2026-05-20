"use client";

import { cn } from "@/lib/utils";

const items = [
  { label: "MoonPay", src: "/logos/moonpay.svg" },
  { label: "Motorway", src: "/logos/motorway.svg" },
  { label: "Deliveroo", src: "/logos/deliveroo.svg" },
  { label: "Zalando", src: "/logos/zalando.svg" },
  { label: "IBM", src: "/logos/ibm.svg" },
  { label: "Nordcloud", src: "/logos/nordcloud.svg" },
];

export function LogoMarquee({ className }: { className?: string }) {
  const sequence = [...items, ...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)} aria-label="Companies Aashir has worked with">
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
      <div className="flex w-max animate-marquee items-center gap-4 py-2 sm:gap-5">
        {sequence.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex h-16 min-w-[170px] items-center justify-center rounded-full border border-rule-soft bg-surface/75 px-6 shadow-[0_12px_40px_rgba(24,22,20,0.035)] sm:min-w-[220px]"
            title={item.label}
          >
            <img
              src={item.src}
              alt={item.label}
              loading="lazy"
              className="max-h-7 max-w-[140px] opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:max-w-[170px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
