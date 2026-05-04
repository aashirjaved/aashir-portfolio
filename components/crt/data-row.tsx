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
    <div className={cn("dot-leader font-mono text-sm sm:text-[0.95rem]", className)}>
      <span className="text-dim uppercase tracking-wider whitespace-nowrap">{label}</span>
      <span aria-hidden className="leader" />
      <span className="text-bright text-right">{value}</span>
    </div>
  );
}
