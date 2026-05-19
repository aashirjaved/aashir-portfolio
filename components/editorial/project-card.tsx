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
  const heroMetric = p.metrics?.[0];

  return (
    <article className="visual-card group rounded-[28px] p-4 sm:p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative z-10 grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch">
        <div className="relative min-h-[220px] overflow-hidden rounded-[22px] bg-ink text-paper p-5 sm:p-6">
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent/80 blur-2xl transition-transform duration-500 group-hover:scale-125" />
          <div className="absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-ok/45 blur-2xl" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-3">
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper/60">{p.number}</span>
              <Pill tone={statusTone}>{p.status}</Pill>
            </div>
            <div>
              {heroMetric && (
                <div className="display text-[clamp(3.5rem,12vw,7rem)] leading-[0.82] text-paper">
                  {heroMetric.value}
                </div>
              )}
              <div className="mt-3 mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
                {heroMetric ? heroMetric.label : p.company}
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[220px] flex-col p-1 sm:p-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">{p.company}</span>
            <span className="text-ink-faint">·</span>
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">{p.period}</span>
            {p.featured && <Pill tone="accent">Featured</Pill>}
          </div>

          <h3 className="mt-4 display text-[clamp(2.2rem,7vw,4.2rem)] leading-[0.9] text-ink">
            {p.title}
          </h3>
          <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-relaxed text-ink-2">
            {p.description}
          </p>

          {p.metrics && p.metrics.length > 1 && (
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {p.metrics.slice(1, 4).map((m) => (
                <div key={m.label} className="metric-tile rounded-2xl p-3">
                  <div className="display text-2xl leading-none text-ink">{m.value}</div>
                  <div className="mt-1 mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
            {p.technologies.slice(0, 5).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          {p.link && (
            <a
              href={p.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-accent"
            >
              {p.link.label}
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
