import Link from "next/link";
import { Pill } from "./pill";

export function PostRow({
  href,
  title,
  date,
  readingTime,
  description,
  tags,
  featured,
}: {
  href: string;
  title: string;
  date: string;
  readingTime?: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-1 sm:grid-cols-[7rem_1fr_4rem] gap-y-3 sm:gap-x-8 py-7 border-b border-rule-soft hover:border-ink transition-colors"
    >
      <div className="mono text-xs uppercase tracking-wider text-ink-mute pt-2">
        {date}
      </div>
      <div>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight text-ink group-hover:text-accent transition-colors">
            {title}
          </h3>
          {featured && <Pill tone="accent">Featured</Pill>}
        </div>
        {description && (
          <p className="mt-2 text-ink-2 text-[0.95rem] leading-relaxed max-w-[58ch]">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((t) => (
              <Pill key={t}>{t.toLowerCase()}</Pill>
            ))}
          </div>
        )}
      </div>
      <div className="mono text-xs text-ink-mute pt-2 sm:text-right">
        {readingTime}
      </div>
    </Link>
  );
}
