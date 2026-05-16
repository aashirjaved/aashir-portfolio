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
    <article className="grid grid-cols-1 sm:grid-cols-[6rem_1fr] gap-y-3 sm:gap-x-8 py-8 border-b border-rule-soft last:border-0 group">
      <div className="mono text-xs uppercase tracking-wider text-ink-mute pt-1">
        {item.year}
      </div>
      <div>
        <h3 className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight text-ink">
          {item.company}{" "}
          <span className="display-italic text-ink-mute">— {item.role}</span>
        </h3>
        <p className="mt-3 text-ink-2 max-w-[58ch] leading-relaxed">
          {item.blurb}
        </p>
        {item.metrics && item.metrics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {item.metrics.map((m) => (
              <div key={m.label} className="flex items-baseline gap-2">
                <span className="display text-2xl text-ink">{m.value}</span>
                <span className="text-xs text-ink-mute uppercase tracking-wider">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}
        {item.stack && item.stack.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {item.stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
