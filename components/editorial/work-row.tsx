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
  return (
    <article className="border border-ink bg-surface/70 p-5 transition-transform duration-300 hover:-translate-y-1 hover:bg-surface sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">{item.year}</div>
          <h3 className="mt-3 display text-[clamp(2rem,6vw,3.4rem)] leading-[0.92] text-ink">
            {item.company}
          </h3>
          <div className="mt-2 mono text-[11px] uppercase tracking-[0.18em] text-accent">{item.role}</div>
        </div>
        {item.metrics?.[0] && (
          <div className="shrink-0 text-right">
            <div className="display text-4xl leading-none text-ink">{item.metrics[0].value}</div>
            <div className="mt-1 mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">{item.metrics[0].label}</div>
          </div>
        )}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-2">{item.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.stack?.slice(0, 5).map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </article>
  );
}
