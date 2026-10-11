"use client";

import { track } from "@vercel/analytics";
import { useCallback, useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { chips, fallback, intents, type Evidence, type Intent } from "@/data/console";
import { match } from "@/lib/match";
import { Tier } from "./tier";

const WORD_MS = 28;
const VISIBLE = 4;

interface Turn {
  key: number;
  question: string;
  intent: Intent;
  matched: boolean;
  time: string;
}

function clock(d = new Date()) {
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function send(event: string, data: Record<string, string | boolean>) {
  try {
    track(event, data);
  } catch {
    // analytics is optional
  }
}

export function ask(question: string): { intent: Intent; matched: boolean } {
  const hit = match(question, intents);
  return hit ? { intent: hit, matched: true } : { intent: fallback, matched: false };
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

function Reveal({ text, instant, onDone }: { text: string; instant: boolean; onDone: () => void }) {
  const words = text.split(" ");
  const [count, setCount] = useState(instant ? words.length : 0);
  const done = count >= words.length;

  useEffect(() => {
    if (instant) {
      setCount(words.length);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const n = Math.min(words.length, Math.floor((now - start) / WORD_MS) + 1);
      setCount(n);
      if (n < words.length) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [text, instant, words.length]);

  useEffect(() => {
    if (done) onDone();
  }, [done, onDone]);

  return (
    <p aria-hidden className="max-w-[56ch] text-[17px] font-medium leading-[1.45] text-ink md:text-[18px]">
      {words.slice(0, count).join(" ")}
      {!done ? <span className="caret" /> : null}
    </p>
  );
}

function EvidenceRow({ items }: { items: Evidence[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((e) => {
        const external = e.href.startsWith("http");
        return (
          <li key={e.label} className="flex items-center gap-2 rounded-full border border-rule bg-surface py-1 pl-3 pr-1.5">
            <a
              href={e.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              onClick={() => send("evidence_click", { href: e.href, tier: e.tier ?? "none" })}
              className="text-[13px] font-medium text-ink hover:text-clear"
            >
              {e.label}
              {external ? <span aria-hidden> ↗</span> : null}
            </a>
            {e.tier ? <Tier tier={e.tier} /> : null}
          </li>
        );
      })}
    </ul>
  );
}

function TurnView({ turn, instant, latest }: { turn: Turn; instant: boolean; latest: boolean }) {
  const [done, setDone] = useState(instant || !latest);
  const finish = useCallback(() => setDone(true), []);
  const points = turn.intent.points ?? [];
  return (
    <li data-intent={turn.intent.id} className="rise card mt-3 p-5 first:mt-0 sm:p-6">
      <p className="mono mb-3 flex items-center gap-2 text-mute">
        <span aria-hidden className="text-clear">&gt;</span>
        {turn.question}
      </p>
      <Reveal text={turn.intent.answer} instant={instant || !latest} onDone={finish} />
      <p className="sr-only">
        {turn.intent.answer} {points.join(". ")}
      </p>
      {points.length ? (
        <ul aria-hidden className="mt-3 space-y-2">
          {points.map((pt, i) => (
            <li
              key={pt}
              className={`flex gap-3 text-[15px] text-ink-2 transition-all duration-500 ${done ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
              style={{ transitionDelay: done ? `${i * 90}ms` : "0ms" }}
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-clear" />
              {pt}
            </li>
          ))}
        </ul>
      ) : null}
      <div className={`transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: done ? `${points.length * 90}ms` : "0ms" }}>
        <EvidenceRow items={turn.intent.evidence} />
      </div>
    </li>
  );
}

export function Console() {
  const [value, setValue] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [announce, setAnnounce] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const threadRef = useRef<HTMLOListElement>(null);
  const keyRef = useRef(0);
  const reduced = useReducedMotion();

  const submit = useCallback((raw: string, source: "chip" | "typed") => {
    const question = raw.trim();
    if (!question) return;
    const { intent, matched } = ask(question);
    keyRef.current += 1;
    const turn: Turn = {
      key: keyRef.current,
      question,
      intent,
      matched,
      time: clock(),
    };
    setTurns((prev) => [...prev, turn]);
    setValue("");
    setAnnounce(`${intent.answer} ${(intent.points ?? []).join(". ")}`);
    send("console_ask", { intent: intent.id, matched, source });
    // Bring the start of the new answer into view so it is read from the first word.
    requestAnimationFrame(() => {
      const items = threadRef.current?.querySelectorAll<HTMLElement>(":scope > li");
      const last = items?.[items.length - 1];
      if (!last) return;
      const top = last.getBoundingClientRect().top;
      if (top > window.innerHeight * 0.55 || top < 72) {
        window.scrollTo({ top: window.scrollY + top - 80, behavior: "smooth" });
      }
    });
  }, []);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit(value, "typed");
  };

  const onInputKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setValue("");
    } else if (e.key === "ArrowUp" && !value && turns.length) {
      e.preventDefault();
      setValue(turns[turns.length - 1].question);
    }
  };

  const hidden = expanded ? 0 : Math.max(0, turns.length - VISIBLE);
  const shown = turns.slice(hidden);

  return (
    <div className="mt-6">
      <form onSubmit={onSubmit} role="search" aria-label="Ask about Aashir">
        <label htmlFor="ask" className="sr-only">
          What do you want to know about me?
        </label>
        <div className="flex items-center gap-2 rounded-2xl border border-rule bg-surface py-2 pl-4 pr-2 sm:gap-3 shadow-[0_12px_40px_-24px_rgba(16,18,17,0.4)] transition-colors focus-within:border-ink/40">
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" className="hidden shrink-0 text-clear sm:block">
            <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" fill="currentColor" />
          </svg>
          <input
            ref={inputRef}
            id="ask"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onInputKey}
            placeholder="What do you want to know about me?"
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="send"
            maxLength={200}
            className="min-w-0 flex-1 bg-transparent py-2 text-[16px] text-ink outline-none placeholder:text-mute md:text-[17px]"
          />
          <button
            type="submit"
            disabled={!value.trim()}
            aria-label="Ask"
            className="flex h-9 shrink-0 items-center justify-center rounded-xl bg-ink px-3 text-[14px] font-medium text-paper transition-opacity disabled:opacity-25 sm:px-4"
          >
            <span className="hidden sm:inline">Ask</span>
            <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" className="sm:hidden">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </form>

      <ul
        aria-label="Suggested questions"
        className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {chips.map((c) => (
          <li key={c.id} className="shrink-0">
            <button
              type="button"
              onClick={() => submit(c.question, "chip")}
              className="whitespace-nowrap rounded-full border border-rule bg-surface px-3.5 py-1.5 text-[13px] text-ink-2 transition-colors hover:border-ink/30 hover:text-ink"
            >
              {c.chip}
            </button>
          </li>
        ))}
      </ul>

      

      <div aria-live="polite" className="sr-only">
        {announce}
      </div>

      {turns.length ? (
        <div className="mt-8">
          {hidden > 0 ? (
            <button type="button" onClick={() => setExpanded(true)} className="mono link mb-3 text-mute">
              Show {hidden} earlier {hidden === 1 ? "answer" : "answers"}
            </button>
          ) : null}
          <ol ref={threadRef}>
            {shown.map((t, i) => (
              <TurnView key={t.key} turn={t} instant={reduced} latest={i === shown.length - 1} />
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
