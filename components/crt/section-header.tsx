import { cn } from "@/lib/utils";

export function SectionHeader({
  index,
  title,
  className,
  id,
}: {
  index: string | number;
  title: string;
  className?: string;
  id?: string;
}) {
  const num = String(index).padStart(2, "0");
  return (
    <div className={cn("mt-16 mb-6 select-none", className)} id={id}>
      <div className="text-dim font-mono text-xs uppercase tracking-[0.25em] mb-1">
        {`> SECTION ${num}`}
      </div>
      <h2 className="font-display text-[clamp(0.95rem,2.4vw,1.5rem)] uppercase glow-strong leading-tight">
        {title}
      </h2>
      <div
        aria-hidden
        className="mt-3 text-dim font-mono text-sm leading-none whitespace-nowrap overflow-hidden"
      >
        {"═".repeat(120)}
      </div>
    </div>
  );
}
