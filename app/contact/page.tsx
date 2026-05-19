"use client";

import { useState } from "react";
import {
  Container,
  Footer,
  PageHero,
  SectionLabel,
  Reveal,
  Pill,
  EditorialLink,
} from "@/components/editorial";
import Newsletter from "@/components/newsletter";

const channels = [
  {
    label: "Email",
    value: "me@aashir.net",
    href: "mailto:me@aashir.net",
    note: "Best route. Reply in 24 — 48h.",
  },
  {
    label: "LinkedIn",
    value: "/in/aashirjaved",
    href: "https://www.linkedin.com/in/aashirjaved/",
    external: true,
    note: "Professional updates and DMs.",
  },
  {
    label: "GitHub",
    value: "@aashirjaved",
    href: "https://github.com/aashirjaved",
    external: true,
    note: "Code, contributions, occasional rants.",
  },
  {
    label: "X",
    value: "@aasjav",
    href: "https://x.com/aasjav",
    external: true,
    note: "Half-formed thoughts in real time.",
  },
];

const availability = [
  {
    type: "Full-time roles",
    status: "Open",
    body: "Staff / senior / founding engineer at companies that ship.",
    tone: "ok" as const,
  },
  {
    type: "Consulting",
    status: "Limited",
    body: "Strategic technical consulting, AI integration, infra optimisation.",
    tone: "accent" as const,
  },
  {
    type: "Speaking & mentoring",
    status: "Open",
    body: "Conferences, mentoring, technical guidance to growing teams.",
    tone: "ok" as const,
  },
];

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
    const subj = encodeURIComponent(subject || "Hello from aashir.net");
    window.location.href = `mailto:me@aashir.net?subject=${subj}&body=${body}`;
    setSent(true);
  };

  return (
    <Container>
      <PageHero
        eyebrow="Contact"
        number="C"
        title="Let's"
        italic="talk."
        lede="Four reliable channels and a form. Pick whichever feels right — they all reach me."
      />

      <section className="pt-8">
        <Reveal>
          <SectionLabel
            number="01"
            title="Where to find"
            italic="me"
          />
        </Reveal>
        <Reveal>
          <div>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="group grid grid-cols-1 sm:grid-cols-[8rem_1fr_auto] gap-y-2 sm:gap-x-8 py-6 border-b border-rule-soft hover:border-ink transition-colors"
              >
                <div className="mono text-xs uppercase tracking-wider text-ink-mute pt-1">
                  {c.label}
                </div>
                <div>
                  <div className="display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-tight text-ink group-hover:text-accent transition-colors">
                    {c.value}
                    {c.external && (
                      <span aria-hidden className="ml-2 text-ink-faint group-hover:text-accent transition-colors">
                        ↗
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-sm text-ink-mute">{c.note}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pt-24">
        <Reveal>
          <SectionLabel
            number="02"
            title="What I'm open"
            italic="to"
          />
        </Reveal>
        <Reveal>
          <div className="space-y-0">
            {availability.map((a) => (
              <div
                key={a.type}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-y-3 sm:gap-x-8 py-6 border-b border-rule-soft last:border-0"
              >
                <div>
                  <div className="display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-tight text-ink">
                    {a.type}
                  </div>
                  <p className="mt-2 text-ink-2">{a.body}</p>
                </div>
                <div className="self-start sm:self-center">
                  <Pill tone={a.tone}>
                    <span
                      className="mr-2 inline-block w-1.5 h-1.5 rounded-full"
                      aria-hidden
                      style={{
                        background: a.tone === "ok" ? "rgb(var(--ok))" : "rgb(var(--accent))",
                      }}
                    />
                    {a.status}
                  </Pill>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pt-24">
        <Reveal>
          <SectionLabel
            number="03"
            title="Or send a"
            italic="message"
            description="Opens your mail client with a fully composed draft — no third-party in the middle."
          />
        </Reveal>
        <Reveal>
          <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <Field
              label="Name"
              value={name}
              onChange={setName}
              required
            />
            <Field
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              required
            />
            <div className="sm:col-span-2">
              <Field
                label="Subject"
                value={subject}
                onChange={setSubject}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block">
                <span className="mono text-xs uppercase tracking-wider text-ink-mute mb-2 block">
                  Message
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  required
                  className="w-full bg-transparent border-b border-ink focus:border-accent transition-colors py-3 outline-none resize-y text-ink placeholder:text-ink-faint"
                  placeholder="What's on your mind?"
                />
              </label>
            </div>
            <div className="sm:col-span-2 flex items-center gap-4 flex-wrap pt-2">
              <button type="submit" className="btn">
                Send message →
              </button>
              {sent && (
                <span className="text-sm text-ink-mute">
                  Mail client launched. Fall back to{" "}
                  <EditorialLink href="mailto:me@aashir.net">
                    me@aashir.net
                  </EditorialLink>
                  .
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </section>

      <Reveal>
        <section className="pt-24">
          <Newsletter />
        </section>
      </Reveal>

      <Reveal>
        <section className="pt-24">
          <p className="eyebrow mb-4">Based in</p>
          <p className="display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] text-ink">
            London,{" "}
            <span className="display-italic text-ink-mute">UK.</span>
          </p>
          <p className="mt-4 text-ink-2 mono text-sm">
            51.5074° N · 0.1278° W · GMT/BST
          </p>
          <p className="mt-2 text-ink-2">
            Open to remote and occasional travel.
          </p>
        </section>
      </Reveal>

      <Footer />
    </Container>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mono text-xs uppercase tracking-wider text-ink-mute mb-2 block">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-ink focus:border-accent transition-colors py-3 outline-none text-ink"
      />
    </label>
  );
}
