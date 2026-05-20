"use client";

import { cn } from "@/lib/utils";

const companies = [
  { label: "MoonPay", src: "/logos/moonpay.png", type: "wordmark" },
  { label: "Motorway", src: "/logos/motorway.svg", type: "wordmark" },
  { label: "Deliveroo", src: "/logos/deliveroo.svg", type: "mark" },
  { label: "Zalando", src: "/logos/zalando.svg", type: "mark" },
  { label: "IBM", src: "/logos/ibm.svg", type: "mark" },
  { label: "Nordcloud", src: "/logos/nordcloud.svg", type: "wordmark" },
];

export function LogoMarquee({ className }: { className?: string }) {
  const sequence = [...companies, ...companies, ...companies];
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
      <div className="flex w-max animate-marquee items-center gap-3 py-2 sm:gap-4">
        {sequence.map((company, i) => (
          <div
            key={`${company.label}-${i}`}
            className="flex h-16 min-w-[168px] items-center justify-center gap-3 rounded-full border border-rule-soft bg-surface/80 px-5 shadow-[0_12px_40px_rgba(24,22,20,0.035)] sm:min-w-[220px] sm:px-7"
            title={company.label}
          >
            <img
              src={company.src}
              alt={`${company.label} logo`}
              loading="lazy"
              className={cn(
                "object-contain opacity-80 transition-opacity duration-300 hover:opacity-100",
                company.type === "wordmark" ? "max-h-8 max-w-[150px] sm:max-w-[180px]" : "h-7 w-7",
              )}
            />
            {company.type === "mark" && (
              <span className="mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
                {company.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
