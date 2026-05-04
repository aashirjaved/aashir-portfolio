"use client";

import { useState } from "react";
import {
  CRTScreen,
  NavBar,
  Terminal,
  SectionHeader,
  AsciiDivider,
  PageFooter,
  PixelButton,
  CRTLink,
  Cursor,
  Tag,
} from "@/components/crt";
import Newsletter from "@/components/newsletter";

const channels = [
  {
    cmd: "$ mail aashir",
    label: "EMAIL",
    value: "me@aashir.net",
    href: "mailto:me@aashir.net",
    note: "Best route. Reply in 1–2 days.",
  },
  {
    cmd: "$ open linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/in/aashirjaved",
    href: "https://www.linkedin.com/in/aashirjaved/",
    external: true,
    note: "Professional updates and DMs.",
  },
  {
    cmd: "$ ssh github",
    label: "GITHUB",
    value: "github.com/aashirjaved",
    href: "https://github.com/aashirjaved",
    external: true,
    note: "Code, contributions, occasional rants.",
  },
];

const availability = [
  {
    type: "FULL-TIME",
    status: "OPEN" as const,
    body: "Senior eng / tech leadership / AI-ML focused at companies that ship.",
  },
  {
    type: "CONSULTING",
    status: "LIMITED" as const,
    body: "Strategic technical consulting, AI integration, infra optimisation.",
  },
  {
    type: "SPEAKING / MENTOR",
    status: "OPEN" as const,
    body: "Conferences, mentoring, technical guidance to growing teams.",
  },
];

function StatusGlyph({ s }: { s: "OPEN" | "LIMITED" | "CLOSED" }) {
  const map = {
    OPEN: { glyph: "●", tone: "ok" as const },
    LIMITED: { glyph: "◐", tone: "accent" as const },
    CLOSED: { glyph: "○", tone: "danger" as const },
  };
  const { glyph, tone } = map[s];
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={
          tone === "ok"
            ? "text-ok"
            : tone === "accent"
              ? "text-accent"
              : "text-danger"
        }
        aria-hidden
      >
        {glyph}
      </span>
      <Tag tone={tone}>{s}</Tag>
    </span>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}\n\n— sent via aashir.net`,
    );
    const subj = encodeURIComponent(subject || "hello from aashir.net");
    window.location.href = `mailto:me@aashir.net?subject=${subj}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <NavBar />
      <CRTScreen>
        <div className="font-mono text-sm text-dim uppercase tracking-widest mb-2">
          {"> establishing connection..."}
        </div>
        <h1 className="font-display text-[clamp(1.4rem,4vw,2.2rem)] uppercase glow-strong leading-tight">
          CONTACT.DAT
        </h1>
        <p className="mt-3 text-fg/90 font-mono">
          Three reliable channels and a form. Pick whichever feels right — they all reach me.
        </p>

        <SectionHeader index={1} title="CHANNELS" />
        <div className="space-y-3">
          {channels.map((c) => (
            <Terminal key={c.label} command={c.cmd}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="font-mono">
                  <span className="text-bright uppercase tracking-wider mr-3">{c.label}</span>
                  <CRTLink href={c.href} external={c.external}>
                    {c.value}
                  </CRTLink>
                </div>
                <span className="text-dim font-mono text-sm">{c.note}</span>
              </div>
            </Terminal>
          ))}
        </div>

        <SectionHeader index={2} title="AVAILABILITY" />
        <Terminal command="cat status.now">
          <div className="space-y-3">
            {availability.map((a) => (
              <div key={a.type} className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                <div className="w-full sm:w-44 flex items-center gap-2">
                  <StatusGlyph s={a.status} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-bright text-sm uppercase tracking-wider">
                    {a.type}
                  </div>
                  <p className="font-mono text-sm text-fg/90">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Terminal>

        <SectionHeader index={3} title="MESSAGE" />
        <form onSubmit={onSubmit} className="frame frame-amber p-4 sm:p-5 bg-screen/40">
          <div className="font-mono text-xs uppercase tracking-widest text-dim mb-3">
            $ compose --to=aashir
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <label className="block">
              <span className="font-mono text-xs text-dim uppercase tracking-widest">
                {"> name"}
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full bg-bg border border-rule px-2 py-2 font-mono text-fg outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs text-dim uppercase tracking-widest">
                {"> email"}
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full bg-bg border border-rule px-2 py-2 font-mono text-fg outline-none focus:border-accent"
              />
            </label>
          </div>

          <label className="block mb-3">
            <span className="font-mono text-xs text-dim uppercase tracking-widest">
              {"> subject"}
            </span>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 w-full bg-bg border border-rule px-2 py-2 font-mono text-fg outline-none focus:border-accent"
            />
          </label>

          <label className="block mb-4">
            <span className="font-mono text-xs text-dim uppercase tracking-widest">
              {"> message"}
            </span>
            <div className="mt-1 relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
                className="w-full bg-bg border border-rule px-2 py-2 font-mono text-fg outline-none focus:border-accent resize-y"
              />
              {!message && (
                <div className="absolute top-2 left-2 font-mono text-dim pointer-events-none">
                  type message <Cursor />
                </div>
              )}
            </div>
          </label>

          <div className="flex items-center gap-3">
            <PixelButton type="submit">$ send</PixelButton>
            {sent && (
              <span className="font-mono text-sm text-ok">
                [OK] mail client launched. fall back to <CRTLink href="mailto:me@aashir.net">me@aashir.net</CRTLink>.
              </span>
            )}
          </div>
        </form>

        <SectionHeader index={4} title="SUBSCRIBE" />
        <Newsletter />

        <SectionHeader index={5} title="LOCATION" />
        <Terminal command="whereis aashir">
          <pre className="font-mono text-xs sm:text-sm leading-tight text-fg whitespace-pre overflow-x-auto m-0">
{`  ┌─────────────────────────────┐
  │  ░░░░░░░░░░░░░░░░░░░░░░░░░  │
  │  ░░░░██░░░░░░░░░░░░░░░░░░░  │
  │  ░░░████░░░░░░░░░░░░░░░░░░  │
  │  ░░░░██░░░██░░░░░░░░░░░░░░  │
  │  ░░░░░░░░████░░░░░░░░░░░░░  │
  │  ░░░░░░░░░██░░░░░░ ◉ ░░░░░  │   ◉  LONDON
  │  ░░░░░░░░░░░░░░░░░░░░░░░░░  │      51.5074°N 0.1278°W
  │  ░░░░░░░░░░░░░░░░░░░░░░░░░  │      GMT/BST
  └─────────────────────────────┘`}
          </pre>
          <p className="mt-3 font-mono text-sm text-fg/90">
            Based in London. Open to remote and occasional travel.
          </p>
        </Terminal>

        <AsciiDivider variant="block" className="mt-16" />
        <PageFooter />
      </CRTScreen>
    </>
  );
}
