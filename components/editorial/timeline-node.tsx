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

export function TimelineNode({
  item,
  last,
}: {
  item: TimelineItem;
  last: boolean;
}) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-16 last:pb-0">
      {!last && (
        <div
          aria-hidden
          className="absolute left-[6px] sm:left-[8px] top-3 bottom-0 w-px bg-rule"
        />
      )}
      <div
        aria-hidden
        className="absolute left-0 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-paper border-2 border-ink"
      />

      <div className="mono text-xs uppercase tracking-wider text-ink-mute mb-3">
        {item.year} · {item.period}
      </div>
      <h3 className="display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.0] text-ink">
        {item.company}{" "}
        <span className="display-italic text-ink-mute">— {item.role}</span>
      </h3>
      <div className="mt-2 text-sm text-ink-mute flex flex-wrap gap-x-3 gap-y-1">
        <span>{item.location}</span>
        {item.team && (
          <>
            <span aria-hidden>·</span>
            <span>{item.team}</span>
          </>
        )}
      </div>

      {item.metrics && item.metrics.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
          {item.metrics.map((m) => (
            <div key={m.label} className="flex items-baseline gap-2">
              <span className="display text-2xl text-ink">{m.value}</span>
              <span className="mono text-[11px] uppercase tracking-wider text-ink-mute">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <ul className="mt-6 space-y-2 max-w-[62ch]">
        {item.description.map((d) => (
          <li key={d} className="text-ink-2 text-[0.95rem] leading-relaxed pl-5 relative">
            <span aria-hidden className="absolute left-0 top-[0.6em] w-2.5 h-px bg-ink-faint" />
            {d}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {item.technologies.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </div>
  );
}
