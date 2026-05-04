import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Terminal({
  prompt = "$",
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
    <div className={cn("frame frame-amber my-6 font-mono text-[0.95rem]", className)}>
      {title && (
        <div className="border-b border-rule px-3 py-1 text-xs uppercase tracking-wider text-dim flex items-center justify-between bg-screen/40">
          <span>{title}</span>
          <span aria-hidden className="flex gap-1">
            <span className="inline-block w-2 h-2 bg-rule" />
            <span className="inline-block w-2 h-2 bg-rule" />
            <span className="inline-block w-2 h-2 bg-accent" />
          </span>
        </div>
      )}
      <div className="px-4 py-3">
        {command && (
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-accent select-none">{prompt}</span>
            <span className="text-bright">{command}</span>
          </div>
        )}
        {children && (
          <div className="text-fg/95 whitespace-pre-wrap leading-relaxed">{children}</div>
        )}
      </div>
    </div>
  );
}
