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
    <div
      className={cn(
        "frame frame-amber px-3 py-4 text-center bg-screen/60",
        className,
      )}
    >
      <div className="font-display text-[clamp(1.1rem,3.6vw,2rem)] text-accent glow-strong leading-none">
        {value}
      </div>
      <div className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-dim">
        {label}
      </div>
    </div>
  );
}
