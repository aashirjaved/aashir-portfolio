import { cn } from "@/lib/utils";

export function LcdStat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("frame panel-grid p-4 sm:p-5", className)}>
      <div className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-none text-bright">{value}</div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">{label}</div>
    </div>
  );
}
