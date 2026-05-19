import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function FigCaption({
  index,
  title,
  children,
  className,
}: {
  index: string | number;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const num = String(index).padStart(2, "0");
  return (
    <figure className={cn("my-10", className)}>
      <div className="frame overflow-hidden p-3 sm:p-4">{children}</div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
        <span className="text-accent">Figure {num}</span>
        <span className="mx-2 text-rule">/</span>
        {title}
      </figcaption>
    </figure>
  );
}
