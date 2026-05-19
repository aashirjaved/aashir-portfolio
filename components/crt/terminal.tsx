import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Terminal({
  prompt = "//",
  command,
  children,
  className,
  title,
}: {
  prompt?: string;
  command?: string;
  children?: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <div className={cn("frame my-6 overflow-hidden", className)}>
      {(title || command) && (
        <div className="flex items-center justify-between border-b border-rule/80 bg-screen/60 px-4 py-3">
          <div className="flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
            {title && <span className="text-bright">{title}</span>}
            {command && (
              <>
                <span className="text-accent">{prompt}</span>
                <span>{command}</span>
              </>
            )}
          </div>
          <span aria-hidden className="h-2 w-2 bg-accent" />
        </div>
      )}
      <div className="px-5 py-5 text-sm leading-7 text-fg/88">{children}</div>
    </div>
  );
}
