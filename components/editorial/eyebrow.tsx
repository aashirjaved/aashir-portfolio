import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className,
  number,
}: {
  children: ReactNode;
  className?: string;
  number?: string;
}) {
  return (
    <div className={cn("eyebrow flex items-center gap-3", className)}>
      {number && (
        <>
          <span className="text-ink">{number}</span>
          <span className="h-px w-6 bg-rule" aria-hidden />
        </>
      )}
      <span>{children}</span>
    </div>
  );
}
