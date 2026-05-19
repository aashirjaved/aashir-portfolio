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
        "group block rounded-[24px] border border-rule-soft bg-surface/70 p-5 transition-colors hover:border-accent sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">{kind} · {meta}</div>
          <h3 className="mt-4 display text-[clamp(2rem,6vw,3.2rem)] leading-[0.92] text-ink transition-colors group-hover:text-accent">
            {title}
          </h3>
        </div>
        <span aria-hidden className="text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-accent">↗</span>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-2">{description}</p>

      {stats && stats.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.slice(0, 2).map((s) => (
            <div key={s.label} className="rounded-2xl border border-rule-soft bg-paper/60 p-3">
              <div className="display text-3xl leading-none text-ink">{s.value}</div>
              <div className="mt-1 mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </a>
  );
}
