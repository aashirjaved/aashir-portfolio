import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "ok" | "danger" | "dim";
}) {
  const toneClass =
    tone === "accent"
      ? "text-accent border-accent"
      : tone === "ok"
        ? "text-ok border-ok"
        : tone === "danger"
          ? "text-danger border-danger"
          : tone === "dim"
            ? "text-dim border-rule"
            : "text-fg border-rule";
  return (
    <span
      className={cn(
        "inline-flex items-center px-1.5 py-0 font-mono text-xs uppercase tracking-wider border leading-relaxed",
        toneClass,
        className,
      )}
    >
      <span aria-hidden className="text-dim">[</span>
      <span className="px-0.5">{children}</span>
      <span aria-hidden className="text-dim">]</span>
    </span>
  );
}
