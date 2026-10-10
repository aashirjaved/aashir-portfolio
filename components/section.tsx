import type { ReactNode } from "react";

export function Section({
  id,
  number,
  title,
  intro,
  children,
}: {
  id: string;
  number: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} data-rail={number} aria-labelledby={`${id}-title`} className="pt-16 md:pt-24">
      <div className="hairline grid gap-2 pb-4 md:grid-cols-[96px_1fr] md:items-baseline">
        <span className="label text-mute">{number}</span>
        <h2 id={`${id}-title`} className="display text-[34px] md:text-[44px]">
          {title}
        </h2>
      </div>
      {intro ? (
        <div className="md:grid md:grid-cols-[96px_1fr]">
          <span />
          <p className="mt-5 max-w-[60ch] text-ink-2">{intro}</p>
        </div>
      ) : null}
      <div className="mt-8 md:mt-10">{children}</div>
    </section>
  );
}
