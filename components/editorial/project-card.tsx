import { Pill } from "./pill";

export type ProjectCardProps = {
  number: string;
  title: string;
  company: string;
  period: string;
  status: "Production" | "Beta" | "Sunset";
  description: string;
  details?: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  link?: { href: string; label: string };
};

export function ProjectCard(p: ProjectCardProps) {
  const statusTone =
    p.status === "Production" ? "ok" : p.status === "Beta" ? "accent" : "default";
  return (
    <article className="grid grid-cols-1 sm:grid-cols-[4rem_1fr] gap-y-5 sm:gap-x-10 py-10 border-b border-rule-soft last:border-0">
      <div className="display text-[clamp(1.5rem,3vw,2.2rem)] text-ink-faint leading-none">
        {p.number}
      </div>
      <div>
        <div className="flex items-center gap-3 flex-wrap mb-3">
          <span className="mono text-xs uppercase tracking-wider text-ink-mute">
            {p.company}
          </span>
          <span aria-hidden className="text-ink-faint">·</span>
          <span className="mono text-xs uppercase tracking-wider text-ink-mute">
            {p.period}
          </span>
          <Pill tone={statusTone}>{p.status}</Pill>
          {p.featured && <Pill tone="accent">★ Featured</Pill>}
        </div>
        <h3 className="display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.0] text-ink">
          {p.title}
        </h3>
        <p className="mt-4 text-ink-2 leading-relaxed max-w-[62ch]">
          {p.description}
        </p>

        {p.metrics && p.metrics.length > 0 && (
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <div className="display text-[clamp(1.5rem,3vw,2.25rem)] leading-none text-ink">
                  {m.value}
                </div>
                <div className="mt-1 mono text-[11px] uppercase tracking-wider text-ink-mute">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {p.details && p.details.length > 0 && (
          <ul className="mt-6 space-y-2 max-w-[62ch]">
            {p.details.map((d) => (
              <li key={d} className="text-ink-2 text-[0.95rem] leading-relaxed pl-5 relative">
                <span aria-hidden className="absolute left-0 top-[0.6em] w-2.5 h-px bg-ink-faint" />
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.technologies.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        {p.link && (
          <a
            href={p.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 mono text-xs uppercase tracking-wider text-ink hover:text-accent border-b border-rule pb-0.5"
          >
            {p.link.label}
            <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
