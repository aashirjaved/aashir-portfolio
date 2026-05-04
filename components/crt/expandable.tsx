"use client";

import type { ReactNode } from "react";

export function Expandable({
  summary,
  children,
  defaultOpen = false,
}: {
  summary: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group" open={defaultOpen}>
      <summary className="cursor-pointer list-none inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-dim hover:text-accent select-none">
        <span aria-hidden className="inline-block transition-transform group-open:rotate-90 text-accent">
          ▶
        </span>
        {summary}
      </summary>
      <div className="mt-3 pl-4 border-l border-rule/60">{children}</div>
    </details>
  );
}
