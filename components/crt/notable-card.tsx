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
    win: { label: "won", tone: "accent" },
    build: { label: "built", tone: "accent" },
    post: { label: "published", tone: "dim" },
  };
  const tone = kindMap[kind];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group block frame panel-grid p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-screen/80",
        className,
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <Tag tone={tone.tone}>{tone.label}</Tag>
        {meta && (
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-dim">
            {meta}
          </span>
        )}
      </div>
      <h3 className="max-w-[18ch] font-display text-2xl leading-[1.05] text-bright transition-colors duration-300 group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-fg/86">{description}</p>
      {stats && stats.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {stats.map((s) => (
            <Tag key={s.label} tone="dim" className="text-[10px]">
              {s.label} {s.value}
            </Tag>
          ))}
        </div>
      )}
    </a>
  );
}
