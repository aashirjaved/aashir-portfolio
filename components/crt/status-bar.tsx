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
        "font-mono text-[11px] uppercase tracking-[0.18em] text-dim border-t border-b border-rule py-1.5 flex flex-wrap items-center gap-x-5 gap-y-1",
        className,
      )}
    >
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="text-rule">{it.label}:</span>
          <span
            className={
              it.tone === "ok"
                ? "text-ok"
                : it.tone === "accent"
                  ? "text-accent"
                  : it.tone === "dim"
                    ? "text-dim"
                    : "text-fg"
            }
          >
            {it.value}
          </span>
        </span>
      ))}
    </div>
  );
}
