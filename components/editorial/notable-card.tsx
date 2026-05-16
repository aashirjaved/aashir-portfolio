import { cn } from "@/lib/utils";

export function NotableCard({
  kind,
  title,
  href,
  description,
  meta,
  stats,
  className,
}: {
  kind: "shipped" | "win" | "build" | "post";
  title: string;
  href: string;
  description: string;
  meta?: string;
  stats?: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group block py-7 border-t border-rule transition-colors hover:border-ink",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="mono uppercase tracking-wider text-ink-mute">
          {kind}
        </span>
        {meta && (
          <span className="mono text-ink-mute">{meta}</span>
        )}
      </div>
      <h3 className="display text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.05] text-ink group-hover:text-accent transition-colors">
        {title}
        <span aria-hidden className="inline-block ml-2 text-ink-faint group-hover:text-accent group-hover:translate-x-1 transition-transform">
          ↗
        </span>
      </h3>
      <p className="mt-4 text-ink-2 leading-relaxed max-w-[58ch]">
        {description}
      </p>
      {stats && stats.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="display text-xl text-ink">{s.value}</span>
              <span className="mono text-[11px] uppercase tracking-wider text-ink-mute">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </a>
  );
}
