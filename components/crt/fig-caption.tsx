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
      <div className="frame frame-amber p-3 sm:p-4 bg-screen/60">{children}</div>
      <figcaption className="mt-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-dim">
        <span className="text-accent">Fig. {num}</span>
        <span className="mx-2 text-rule">│</span>
        {title}
      </figcaption>
    </figure>
  );
}
