"use client";

import { useEffect, useRef, useState } from "react";

type Tone = "dim" | "ok" | "warn" | "bad" | "info" | "ink";
interface Seg {
  t: string;
  c?: Tone;
}
type Step =
  | { k: "cmd"; text: string }
  | { k: "out"; segs: Seg[]; wait?: number }
  | { k: "task"; label: string; result: Seg[]; ms: number };

interface Line {
  id: number;
  kind: "cmd" | "out" | "task";
  text?: string;
  segs?: Seg[];
  label?: string;
  pending?: boolean;
  typing?: boolean;
}

interface Script {
  title: string;
  steps: Step[];
}

const o = (t: string, c?: Tone): Seg => ({ t, c });

// Fixed dark palette: a terminal stays dark in both site themes, like the real thing.
const tone: Record<Tone, string> = {
  dim: "text-[#8a948e]",
  ok: "text-[#6ee7b7]",
  warn: "text-[#fbbf24]",
  bad: "text-[#f87171]",
  info: "text-[#7dd3fc]",
  ink: "text-[#d4dad6]",
};

const scripts: Script[] = [
  {
    title: "kyc · onboarding",
    steps: [
      { k: "cmd", text: 'agent onboard "Northbridge LP"' },
      { k: "task", label: "Identity documents", result: [o("verified", "ok")], ms: 900 },
      { k: "task", label: "Sanctions UK EU OFAC", result: [o("clear", "ok")], ms: 1000 },
      { k: "task", label: "PEP screening", result: [o("no match", "ok")], ms: 800 },
      { k: "task", label: "Ownership", result: [o("2 UBOs mapped", "ok")], ms: 1100 },
      { k: "out", segs: [o("file ready for review", "ink")], wait: 500 },
      { k: "out", segs: [o("waiting on compliance officer", "warn")] },
    ],
  },
  {
    title: "risk · payments",
    steps: [
      { k: "cmd", text: "risk score --stream" },
      { k: "out", segs: [o("8f2a  ", "dim"), o("£1,200   GB>GB  "), o("0.04 "), o("pass", "ok")], wait: 650 },
      { k: "out", segs: [o("91c0  ", "dim"), o("£48,900  GB>AE  "), o("0.71 "), o("hold", "warn")], wait: 650 },
      { k: "out", segs: [o("77de  ", "dim"), o("£310     GB>GB  "), o("0.02 "), o("pass", "ok")], wait: 650 },
      { k: "out", segs: [o("a4b9  ", "dim"), o("£9,990   GB>NG  "), o("0.88 "), o("hold", "warn")], wait: 700 },
      { k: "out", segs: [o("rule geo.high_risk matched", "info")], wait: 600 },
      { k: "out", segs: [o("2 held for human review", "warn")] },
    ],
  },
  {
    title: "ledger · reconcile",
    steps: [
      { k: "cmd", text: "reconcile --day today" },
      { k: "task", label: "Bank feed", result: [o("1,284 txns", "ok")], ms: 900 },
      { k: "task", label: "Matching", result: [o("1,281 matched", "ok")], ms: 1200 },
      { k: "out", segs: [o("3 breaks found", "warn")], wait: 600 },
      { k: "task", label: "Proposing fixes", result: [o("3 drafted", "ok")], ms: 1100 },
      { k: "out", segs: [o("tickets opened for review", "ink")] },
    ],
  },
  {
    title: "magzi · self-improve",
    steps: [
      { k: "cmd", text: "magzi improve --goal speed" },
      { k: "task", label: "Edit 1 · tests 41/41", result: [o("keep", "ok")], ms: 1100 },
      { k: "task", label: "Edit 2 · tests 39/41", result: [o("revert", "bad")], ms: 1100 },
      { k: "task", label: "Edit 3 · tests 41/41", result: [o("keep", "ok")], ms: 1100 },
      { k: "out", segs: [o("kept 2, reverted 1", "ink")], wait: 500 },
      { k: "out", segs: [o("code changes only on green", "dim")] },
    ],
  },
];

const boot: Script = {
  title: "harness · ~/your-firm",
  steps: [
    { k: "cmd", text: "harness init --firm yours" },
    { k: "task", label: "Policies and rules", result: [o("loaded", "ok")], ms: 700 },
    { k: "task", label: "Ledger access", result: [o("read only", "ok")], ms: 700 },
    { k: "task", label: "Approvals", result: [o("people sign off", "ok")], ms: 700 },
    { k: "cmd", text: "harness run --agents kyc,risk,ledger,code" },
    { k: "out", segs: [o("starting 4 agents", "info")], wait: 700 },
  ],
};

function finalLines(steps: Step[]): Line[] {
  return steps.map((s, i): Line => {
    if (s.k === "cmd") return { id: i, kind: "cmd", text: s.text };
    if (s.k === "task") return { id: i, kind: "task", label: s.label, segs: s.result };
    return { id: i, kind: "out", segs: s.segs };
  });
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function useRun(steps: Step[], startDelay: number, enabled: boolean, reduced: boolean, once = false, onDone?: () => void) {
  const [lines, setLines] = useState<Line[]>([]);
  const [running, setRunning] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    if (!enabled) return;
    if (reduced) {
      setLines(finalLines(steps));
      setRunning(false);
      return;
    }
    let dead = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });
    const patch = (id: number, p: Partial<Line>) => setLines((prev) => prev.map((l) => (l.id === id ? { ...l, ...p } : l)));

    (async () => {
      await wait(startDelay);
      while (!dead) {
        setLines([]);
        setRunning(true);
        let id = 0;
        for (const s of steps) {
          id += 1;
          const mine = id;
          if (s.k === "cmd") {
            setLines((p) => [...p, { id: mine, kind: "cmd", text: "", typing: true }]);
            for (let i = 1; i <= s.text.length; i += 1) {
              await wait(24 + Math.random() * 30);
              patch(mine, { text: s.text.slice(0, i) });
            }
            patch(mine, { typing: false });
            await wait(once ? 650 : 380);
          } else if (s.k === "task") {
            setLines((p) => [...p, { id: mine, kind: "task", label: s.label, pending: true }]);
            await wait(s.ms);
            patch(mine, { pending: false, segs: s.result });
            await wait(160);
          } else {
            setLines((p) => [...p, { id: mine, kind: "out", segs: s.segs }]);
            await wait(s.wait ?? 280);
          }
        }
        setRunning(false);
        if (once) {
          doneRef.current?.();
          return;
        }
        await wait(4800);
      }
    })();

    return () => {
      dead = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [steps, startDelay, enabled, reduced, once]);

  return { lines, running };
}

function Prompt() {
  return (
    <span aria-hidden className="mr-2 text-[#6ee7b7]">
      ❯
    </span>
  );
}

function LineView({ line }: { line: Line }) {
  if (line.kind === "cmd") {
    return (
      <p className="text-[#d4dad6]">
        <Prompt />
        {line.text}
        {line.typing ? <span className="term-caret" /> : null}
      </p>
    );
  }
  if (line.kind === "task") {
    return (
      <p className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-[#d4dad6]">
          {line.pending ? (
            <span aria-hidden className="spin inline-block h-2.5 w-2.5 rounded-full border border-[#7dd3fc] border-t-transparent" />
          ) : (
            <span aria-hidden className="text-[#6ee7b7]">
              ✓
            </span>
          )}
          {line.label}
        </span>
        {!line.pending && line.segs ? (
          <span>
            {line.segs.map((s, i) => (
              <span key={i} className={tone[s.c ?? "ink"]}>
                {s.t}
              </span>
            ))}
          </span>
        ) : null}
      </p>
    );
  }
  return (
    <p className="whitespace-pre text-[#d4dad6]">
      {line.segs?.map((s, i) => (
        <span key={i} className={tone[s.c ?? "ink"]}>
          {s.t}
        </span>
      ))}
    </p>
  );
}

function Chrome({ title, running, children }: { title: string; running: boolean; children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2">
        <span aria-hidden className="flex gap-1.5">
          <i className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <i className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <i className="h-2 w-2 rounded-full bg-[#28c840]" />
        </span>
        <span className="flex-1 truncate text-center text-[10.5px] text-[#8a948e]">{title}</span>
        <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${running ? "bg-[#6ee7b7] term-live" : "bg-[#4b5450]"}`} />
      </div>
      {children}
    </>
  );
}

const frame =
  "flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0b0c0b] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)]";

function Body({ lines, running, big = false }: { lines: Line[]; running: boolean; big?: boolean }) {
  return (
    <div
      className={`flex flex-1 flex-col justify-end space-y-1 overflow-hidden px-3 pb-3 pt-2 leading-[1.45] ${big ? "space-y-1.5 px-5 pb-5 text-[13.5px]" : "text-[11.5px]"}`}
    >
      {lines.slice(-10).map((l) => (
        <LineView key={l.id} line={l} />
      ))}
      {!running && lines.length ? (
        <p className="text-[#d4dad6]">
          <Prompt />
          <span className="term-caret" />
        </p>
      ) : null}
    </div>
  );
}

// Where each window starts, relative to its final cell, so the four open out of one centre point.
const origin = [
  "translate(52%, 52%) scale(.45)",
  "translate(-52%, 52%) scale(.45)",
  "translate(52%, -52%) scale(.45)",
  "translate(-52%, -52%) scale(.45)",
];

function Window({ script, index, on, reduced }: { script: Script; index: number; on: boolean; reduced: boolean }) {
  const { lines, running } = useRun(script.steps, 750 + index * 450, on, reduced);
  return (
    <div
      className={`${frame} h-[232px] w-[78%] shrink-0 snap-center transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.2,.8,.2,1)] sm:w-auto ${on ? "opacity-100" : "opacity-0"}`}
      style={{ transform: on ? "none" : origin[index], transitionDelay: on ? `${index * 90}ms` : "0ms" }}
    >
      <Chrome title={script.title} running={running}>
        <Body lines={lines} running={running} />
      </Chrome>
    </div>
  );
}

type Phase = "boot" | "split" | "live";

export function Terminals() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("boot");

  useEffect(() => {
    if (reduced) setPhase("live");
  }, [reduced]);

  useEffect(() => {
    if (phase !== "split") return;
    const t = window.setTimeout(() => setPhase("live"), 80);
    return () => window.clearTimeout(t);
  }, [phase]);

  const split = phase !== "boot";
  const live = phase === "live";
  const bootRun = useRun(boot.steps, 500, !split, reduced, true, () => setPhase("split"));

  return (
    <div
      role="img"
      aria-label="A terminal window opens and starts four agents, which then run side by side: KYC screening, payment risk scoring, ledger reconciliation, and a code agent that keeps changes only when tests pass. Illustration with example data."
      className="mono"
    >
      <div className="relative sm:h-[476px]">
        <div
          className={`${frame} h-[232px] transition-[opacity,transform] duration-[700ms] ease-[cubic-bezier(.2,.8,.2,1)] sm:absolute sm:inset-0 sm:h-auto ${
            split ? "max-sm:hidden sm:pointer-events-none sm:scale-[.5] sm:opacity-0" : "opacity-100"
          }`}
        >
          <Chrome title={boot.title} running={bootRun.running}>
            <Body lines={bootRun.lines} running={bootRun.running} big />
          </Chrome>
        </div>
        <div
          className={`-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:absolute sm:inset-0 sm:mx-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden ${
            split ? "" : "max-sm:hidden sm:pointer-events-none"
          }`}
        >
          {scripts.map((s, i) => (
            <Window key={s.title} script={s} index={i} on={live} reduced={reduced} />
          ))}
        </div>
      </div>
      <p className="label mt-3 text-mute">Illustration · example data, not client records</p>
    </div>
  );
}
