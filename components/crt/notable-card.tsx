import { cn } from "@/lib/utils";
import { Tag } from "./tag";

export function NotableCard({
  kind,
  title,
  href,
  description,
  meta,
  stats,
  className,
}: {
  kind: "ship" | "win" | "build" | "post";
  title: string;
  href: string;
  description: string;
  meta?: string;
  stats?: { label: string; value: string }[];
  className?: string;
}) {
  const kindMap: Record<typeof kind, { label: string; tone: "ok" | "accent" | "dim" }> = {
    ship: { label: "shipped", tone: "ok" },
    win: { label: "win", tone: "accent" },
    build: { label: "build", tone: "accent" },
    post: { label: "post", tone: "dim" },
  };
  const tone = kindMap[kind];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group block frame frame-amber p-4 sm:p-5 bg-screen/40 hover:bg-screen/70 transition-none",
        className,
      )}
    >
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <Tag tone={tone.tone}>{tone.label}</Tag>
        {meta && (
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
            {meta}
          </span>
        )}
      </div>
      <h3 className="font-mono text-bright group-hover:text-accent uppercase tracking-wider text-sm sm:text-base mb-2">
        {title}
        <span aria-hidden className="text-dim ml-2">↗</span>
      </h3>
      <p className="font-mono text-sm text-fg/85 leading-relaxed">{description}</p>
      {stats && stats.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {stats.map((s) => (
            <Tag key={s.label} tone="ok" className="text-[10px]">
              {s.label} {s.value}
            </Tag>
          ))}
        </div>
      )}
    </a>
  );
}
