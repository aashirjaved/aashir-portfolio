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
  const firstStat = stats?.[0];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "visual-card group block rounded-[28px] p-4 sm:p-5 transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative z-10">
        <div className="relative mb-5 flex aspect-[1.55] items-end overflow-hidden rounded-[22px] bg-ink p-5 text-paper">
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent blur-2xl transition-transform duration-500 group-hover:scale-125" />
          <div className="absolute bottom-8 left-6 h-20 w-20 rounded-full border border-paper/20" />
          <div className="relative z-10 flex w-full items-end justify-between gap-4">
            <span className="mono text-[10px] uppercase tracking-[0.24em] text-paper/60">{kind}</span>
            {firstStat && (
              <div className="text-right">
                <div className="display text-5xl leading-none">{firstStat.value}</div>
                <div className="mono text-[10px] uppercase tracking-[0.18em] text-paper/55">{firstStat.label}</div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">{meta}</span>
          <span aria-hidden className="text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-accent">↗</span>
        </div>
        <h3 className="mt-3 display text-[clamp(1.8rem,7vw,3rem)] leading-[0.95] text-ink transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">{description}</p>
      </div>
    </a>
  );
}
