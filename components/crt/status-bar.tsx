import { cn } from "@/lib/utils";

export function StatusBar({
  items,
  className,
}: {
  items: { label: string; value: string; tone?: "ok" | "accent" | "dim" | "fg" }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-rule/80 py-3 font-mono text-[10px] uppercase tracking-[0.26em] text-dim",
        className,
      )}
    >
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-dim/70">{it.label}</span>
          <span
            className={
              it.tone === "ok"
                ? "text-ok"
                : it.tone === "accent"
                  ? "text-accent"
                  : it.tone === "dim"
                    ? "text-dim"
                    : "text-bright"
            }
          >
            {it.value}
          </span>
        </span>
      ))}
    </div>
  );
}
