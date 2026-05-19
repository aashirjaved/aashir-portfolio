import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

export function PageHero({
  eyebrow,
  number,
  title,
  italic,
  lede,
  meta,
  className,
}: {
  eyebrow?: string;
  number?: string;
  title: ReactNode;
  italic?: ReactNode;
  lede?: ReactNode;
  meta?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("pb-16 sm:pb-24", className)}>
      {eyebrow && (
        <Eyebrow number={number} className="mb-8">
          {eyebrow}
        </Eyebrow>
      )}
      <h1 className="display text-[clamp(2.75rem,9vw,6rem)] leading-[0.95] text-ink">
        {title}
        {italic && (
          <>
            {" "}
            <span className="display-italic text-ink-mute">{italic}</span>
          </>
        )}
      </h1>
      {lede && (
        <p className="lede mt-8 max-w-[36ch] text-ink-2 font-light">{lede}</p>
      )}
      {meta && <div className="mt-8">{meta}</div>}
    </section>
  );
}
