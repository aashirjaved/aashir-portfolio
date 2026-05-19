import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionLabel({
  number,
  title,
  italic,
  description,
  action,
  className,
}: {
  number?: string;
  title: ReactNode;
  italic?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex items-center gap-3 eyebrow mb-6">
        {number && <span className="text-ink">{number}</span>}
        {number && <span className="h-px w-8 bg-rule" aria-hidden />}
        <span>{italic ? "Selected" : "Section"}</span>
      </div>
      <div className="flex items-end justify-between gap-8 flex-wrap">
        <h2 className="display text-[clamp(2rem,5.5vw,3.75rem)] leading-[0.95] text-ink">
          {title}
          {italic && (
            <>
              {" "}
              <span className="display-italic text-ink-mute">{italic}</span>
            </>
          )}
        </h2>
        {action}
      </div>
      {description && (
        <p className="mt-4 text-ink-2 max-w-[34ch] leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
