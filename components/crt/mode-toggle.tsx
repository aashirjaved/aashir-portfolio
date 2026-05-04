"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle({
  label,
  defaultOn = false,
  onChange,
  className,
}: {
  label: string;
  defaultOn?: boolean;
  onChange?: (on: boolean) => void;
  className?: string;
}) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className={cn("flex items-center gap-2 font-mono text-xs uppercase tracking-wider", className)}>
      <span className="text-dim">{label}:</span>
      <button
        type="button"
        onClick={() => {
          const next = !on;
          setOn(next);
          onChange?.(next);
        }}
        aria-pressed={on}
        className="inline-flex items-center gap-1 select-none focus:outline-none"
      >
        <span aria-hidden className="text-dim">[</span>
        <span className={cn("px-1", on ? "text-bg bg-accent" : "text-dim")}>ON</span>
        <span aria-hidden className="text-dim">|</span>
        <span className={cn("px-1", !on ? "text-bg bg-accent" : "text-dim")}>OFF</span>
        <span aria-hidden className="text-dim">]</span>
      </button>
    </div>
  );
}
