import { Pill } from "./pill";

export type WorkRowItem = {
  year: string;
  company: string;
  role: string;
  blurb: string;
  metrics?: { label: string; value: string }[];
  stack?: string[];
};

export function WorkRow({ item }: { item: WorkRowItem }) {
  const metric = item.metrics?.[0];

  return (
    <article className="visual-card group rounded-[28px] p-4 sm:p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative z-10 grid gap-5 sm:grid-cols-[160px_1fr] sm:items-stretch">
        <div className="relative min-h-[150px] overflow-hidden rounded-[22px] bg-ink p-5 text-paper">
          <div className="absolute -right-10 -top-8 h-32 w-32 rounded-full bg-accent blur-2xl" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/55">{item.year}</span>
            {metric && (
              <div>
                <div className="display text-[clamp(2.8rem,10vw,4.8rem)] leading-[0.82]">{metric.value}</div>
                <div className="mt-2 mono text-[10px] uppercase tracking-[0.2em] text-paper/60">{metric.label}</div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col p-1 sm:p-2">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">{item.role}</div>
          <h3 className="mt-3 display text-[clamp(2.2rem,7vw,4rem)] leading-[0.9] text-ink">
            {item.company}
          </h3>
          <p className="mt-4 max-w-[38ch] text-[0.98rem] leading-relaxed text-ink-2">{item.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {item.stack?.slice(0, 5).map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
