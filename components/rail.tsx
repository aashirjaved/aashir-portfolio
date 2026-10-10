"use client";

import { useEffect, useState } from "react";

const sections = [
  { n: "00", id: "top", label: "Ask" },
  { n: "01", id: "help", label: "Where I help" },
  { n: "02", id: "evidence", label: "Evidence" },
  { n: "03", id: "engagement", label: "Engagement" },
  { n: "04", id: "background", label: "Background" },
  { n: "05", id: "contact", label: "Contact" },
];

export function Rail() {
  const [active, setActive] = useState("00");

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-rail]"));
    const onScroll = () => {
      const mark = window.innerHeight * 0.35;
      let current = "00";
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= mark) current = node.dataset.rail ?? current;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = "05";
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <nav aria-label="Sections" className="no-print fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
        <ol className="flex flex-col gap-3">
          {sections.map((s) => (
            <li key={s.n}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.n ? "true" : undefined}
                className={`label group flex items-center gap-3 transition-colors ${active === s.n ? "text-ink" : "text-mute hover:text-ink"}`}
              >
                <span>{s.n}</span>
                <span className={`transition-opacity ${active === s.n ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {s.label}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <nav
        aria-label="Sections"
        className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-paper/95 backdrop-blur-[6px] md:hidden"
      >
        <ol className="mx-auto flex max-w-wide justify-between px-4 pb-[max(env(safe-area-inset-bottom),8px)] pt-2">
          {sections.map((s) => (
            <li key={s.n}>
              <a
                href={`#${s.id}`}
                aria-label={s.label}
                aria-current={active === s.n ? "true" : undefined}
                className={`label block px-2 py-1.5 ${active === s.n ? "text-ink" : "text-mute"}`}
              >
                {s.n}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
