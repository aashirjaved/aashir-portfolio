"use client";

import { useEffect, useState } from "react";
import { Cursor } from "./cursor";

const lines = [
  { text: "AASHIR.SYS v8.0  ───────────────  READY", delay: 50 },
  { text: "> POST  ............................. OK", delay: 220 },
  { text: "> RAM   ............................. 8 YEARS DETECTED", delay: 220 },
  { text: "> DISK  ............................. £7M+ DELIVERED", delay: 220 },
  { text: "> NET   ............................. CONNECTED [LDN]", delay: 220 },
  { text: "> LOADING IDENTITY ........... Aashir Javed", delay: 320 },
  { text: "> MODE: ENGINEER · BUILDER · OPERATOR", delay: 380 },
  { text: "", delay: 200 },
  { text: "[PRESS ANY KEY TO CONTINUE]", delay: 100, blink: true },
];

export function BootSequence() {
  const [shown, setShown] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setShown(lines.length);
      return;
    }
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), lines[shown].delay);
    return () => clearTimeout(t);
  }, [shown, reduced]);

  return (
    <pre
      className="font-mono text-[0.92rem] sm:text-[1rem] leading-snug text-fg whitespace-pre-wrap break-words m-0"
      aria-label="System boot sequence"
    >
      {lines.slice(0, shown).map((l, i) => (
        <span key={i} className={l.blink ? "text-accent" : i === 0 ? "text-bright glow" : ""}>
          {l.text}
          {"\n"}
        </span>
      ))}
      {shown < lines.length && <Cursor />}
    </pre>
  );
}
