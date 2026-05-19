import { Pill } from "./pill";

export type TimelineItem = {
  year: string;
  company: string;
  role: string;
  team?: string;
  period: string;
  location: string;
  description: string[];
  metrics?: { label: string; value: string }[];
  technologies: string[];
};

export function TimelineNode({ item }: { item: TimelineItem; last: boolean }) {
  const leadMetric = item.metrics?.[0];

  return (
    <article className="visual-card rounded-[28px] p-4 sm:p-5">
      <div className="relative z-10 grid gap-5 sm:grid-cols-[150px_1fr]">
        <div className="relative min-h-[150px] overflow-hidden rounded-[22px] bg-ink p-5 text-paper">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent blur-2xl" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/55">{item.year}</span>
            {leadMetric ? (
              <div>
                <div className="display text-5xl leading-none">{leadMetric.value}</div>
                <div className="mono text-[10px] uppercase tracking-[0.18em] text-paper/55">{leadMetric.label}</div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="p-1 sm:p-2">
          <div className="mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            {item.period} · {item.location}
          </div>
          <h3 className="mt-3 display text-[clamp(2rem,6vw,3.8rem)] leading-[0.9] text-ink">
            {item.company}
          </h3>
          <div className="mt-2 mono text-[11px] uppercase tracking-[0.2em] text-accent">{item.role}</div>
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-ink-2">{item.description[0]}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {item.technologies.slice(0, 5).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
