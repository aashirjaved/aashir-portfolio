import { cn } from "@/lib/utils";

export function AsciiDivider({
  className,
  label,
}: {
  variant?: "rule" | "double" | "dot" | "block" | "slash" | "star";
  className?: string;
  label?: string;
}) {
  if (label) {
    return (
      <div
        className={cn(
          "my-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-dim",
          className,
        )}
        aria-hidden
      >
        <span className="h-px w-10 bg-rule" />
        <span className="text-accent">{label}</span>
        <span className="h-px flex-1 bg-rule" />
      </div>
    );
  }
  return <div aria-hidden className={cn("my-8 h-px w-full bg-rule", className)} />;
}
