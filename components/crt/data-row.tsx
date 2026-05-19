import { cn } from "@/lib/utils";

export function DataRow({
  label,
  value,
  className,
}: {
  label: string;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("dot-leader font-mono text-sm", className)}>
      <span className="whitespace-nowrap uppercase tracking-[0.18em] text-dim">{label}</span>
      <span aria-hidden className="leader" />
      <span className="text-right text-bright">{value}</span>
    </div>
  );
}
