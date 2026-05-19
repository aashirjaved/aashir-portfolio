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
      ? "text-accent border-accent/50 bg-accent/8"
      : tone === "ok"
        ? "text-ok border-ok/40 bg-ok/8"
        : tone === "danger"
          ? "text-danger border-danger/50 bg-danger/8"
          : tone === "dim"
            ? "text-dim border-rule bg-screen/50"
            : "text-fg border-rule bg-screen/40";
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] leading-none",
        toneClass,
        className,
      )}
    >
      {children}
    </span>
  );
}
