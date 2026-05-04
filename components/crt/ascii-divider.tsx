import { cn } from "@/lib/utils";

const presets = {
  rule: "─",
  double: "═",
  dot: "·",
  block: "▓",
  slash: "/",
  star: "*",
} as const;

export function AsciiDivider({
  variant = "rule",
  className,
  label,
}: {
  variant?: keyof typeof presets;
  className?: string;
  label?: string;
}) {
  const ch = presets[variant];
  if (label) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 my-8 text-dim font-mono text-sm uppercase tracking-widest",
          className,
        )}
        aria-hidden
      >
        <span aria-hidden>{ch.repeat(4)}</span>
        <span className="text-accent">{label}</span>
        <span aria-hidden className="flex-1 overflow-hidden whitespace-nowrap">
          {ch.repeat(120)}
        </span>
      </div>
    );
  }
  return (
    <div
      aria-hidden
      className={cn(
        "my-8 text-dim font-mono text-sm leading-none whitespace-nowrap overflow-hidden",
        className,
      )}
    >
      {ch.repeat(200)}
    </div>
  );
}
