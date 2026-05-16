import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  hint,
  className,
}: {
  value: string;
  label: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="display text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] text-ink">
        {value}
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="text-sm text-ink">{label}</div>
        {hint && <div className="text-xs text-ink-mute mono">{hint}</div>}
      </div>
    </div>
  );
}
