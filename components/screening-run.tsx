"use client";

import { useEffect, useState } from "react";

interface Step {
  label: string;
  result: string;
}
interface Subject {
  name: string;
  kind: string;
  initials: string;
  steps: Step[];
}

const subjects: Subject[] = [
  {
    name: "Northbridge Credit Fund LP",
    kind: "Investor · KYB",
    initials: "NC",
    steps: [
      { label: "Identity", result: "Documents verified" },
      { label: "Sanctions", result: "UK · EU · OFAC clear" },
      { label: "PEP", result: "No match" },
      { label: "Ownership", result: "2 UBOs mapped" },
      { label: "Accreditation", result: "Qualified purchaser" },
    ],
  },
  {
    name: "Halden Freight Ltd",
    kind: "Borrower · KYB",
    initials: "HF",
    steps: [
      { label: "Company", result: "Registry match" },
      { label: "Sanctions", result: "Clear" },
      { label: "Adverse media", result: "None found" },
      { label: "Ownership", result: "3 UBOs mapped" },
      { label: "Risk", result: "Tier 2" },
    ],
  },
  {
    name: "0x7a3f…9c21",
    kind: "Wallet · on-chain",
    initials: "0x",
    steps: [
      { label: "Exposure", result: "No flagged funds" },
      { label: "Sanctions", result: "Clear" },
      { label: "Jurisdiction", result: "UK · allowed" },
      { label: "Holder", result: "KYC on file" },
      { label: "Allowlist", result: "Ready to add" },
    ],
  },
];

const STEP_MS = 650;
const START_MS = 500;

export function ScreeningRun() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    let t = 0;
    const id = window.setInterval(() => {
      t += 1;
      setTick(t);
    }, 100);
    return () => window.clearInterval(id);
  }, []);

  const subject = subjects[index];
  const n = subject.steps.length;
  const elapsed = tick * 100;
  const cycle = START_MS + n * STEP_MS + 3400;

  useEffect(() => {
    if (!reduced && elapsed >= cycle) {
      setTick(0);
      setIndex((i) => (i + 1) % subjects.length);
    }
  }, [elapsed, cycle, reduced]);

  const stateOf = (i: number): "wait" | "run" | "done" => {
    if (reduced) return "done";
    const start = START_MS + i * STEP_MS;
    if (elapsed < start) return "wait";
    if (elapsed < start + STEP_MS * 0.7) return "run";
    return "done";
  };
  const allDone = reduced || elapsed >= START_MS + n * STEP_MS;
  const approved = reduced || elapsed >= START_MS + n * STEP_MS + 1300;
  const progress = reduced ? 1 : Math.min(1, Math.max(0, (elapsed - START_MS) / (n * STEP_MS)));

  return (
    <figure aria-label="Example of an automated screening run that ends with a human approval" className="card relative overflow-hidden p-5 shadow-[0_30px_80px_-40px_rgba(16,18,17,0.35)] sm:p-6">
      <div className="flex items-center justify-between">
        <span className="eyebrow flex items-center gap-2">
          <span className="pulse anim inline-block h-2 w-2 rounded-full bg-clear" aria-hidden />
          Screening run
        </span>
        <span className="mono text-mute">example</span>
      </div>

      <div key={subject.name} className="slide anim mt-5 flex items-center gap-3">
        <span className="mono flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[13px] text-ink">
          {subject.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[15px] font-medium">{subject.name}</p>
          <p className="mono text-mute">{subject.kind}</p>
        </div>
      </div>

      <ol className="mt-5 space-y-1">
        {subject.steps.map((s, i) => {
          const st = stateOf(i);
          return (
            <li key={subject.name + s.label} className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors duration-300" style={{ background: st === "run" ? "rgb(var(--surface-2))" : "transparent" }}>
              <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center">
                {st === "wait" ? (
                  <span className="h-3.5 w-3.5 rounded-full border border-rule" />
                ) : st === "run" ? (
                  <span className="spin anim h-3.5 w-3.5 rounded-full border-2 border-clear border-t-transparent" />
                ) : (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-clear-soft text-clear">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2 5 8.5l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                )}
              </span>
              <span className={`shrink-0 text-[14px] ${st === "wait" ? "text-mute" : "text-ink"}`}>{s.label}</span>
              <span className={`mono ml-auto min-w-0 truncate text-right text-ink-2 transition-opacity duration-300 ${st === "done" ? "opacity-100" : "opacity-0"}`}>
                {s.result}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 h-1 overflow-hidden rounded-full bg-surface-2">
        <div className="h-full origin-left rounded-full bg-clear transition-transform duration-200" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="mono min-w-0 truncate text-mute">{allDone ? "Every check logged" : "Running checks…"}</span>
        <span
          className={`mono shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 transition-all duration-300 ${
            approved ? "bg-clear text-white dark:text-black" : allDone ? "bg-surface-2 text-ink" : "bg-transparent text-transparent"
          }`}
        >
          {approved ? "Approved by reviewer" : "Ready for review"}
        </span>
      </div>
    </figure>
  );
}
