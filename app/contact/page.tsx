"use client";

import { useState } from "react";
import {
  CRTScreen,
  NavBar,
  PageFooter,
  PixelButton,
  CRTLink,
  Tag,
  Reveal,
} from "@/components/crt";
import Newsletter from "@/components/newsletter";

const channels = [
  {
    label: "Email",
    value: "me@aashir.net",
    href: "mailto:me@aashir.net",
    note: "Best route for roles, consulting, and direct asks.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aashirjaved",
    href: "https://www.linkedin.com/in/aashirjaved/",
    external: true,
    note: "Professional updates and DMs.",
  },
  {
    label: "GitHub",
    value: "github.com/aashirjaved",
    href: "https://github.com/aashirjaved",
    external: true,
    note: "Code, side projects, and public experiments.",
  },
];

const availability = [
  {
    type: "Full-time",
    status: "Open" as const,
    body: "Staff engineer, founding engineer, or senior IC role at a product company that ships.",
  },
  {
    type: "Consulting",
    status: "Limited" as const,
    body: "AI integration, product-system architecture, platform reliability, and infra optimisation.",
  },
  {
    type: "Speaking / mentoring",
    status: "Open" as const,
    body: "Practical talks on AI in production, platform work, and engineering leadership.",
  },
];

function StatusTag({ status }: { status: "Open" | "Limited" | "Closed" }) {
  return <Tag tone={status === "Open" ? "ok" : status === "Limited" ? "accent" : "danger"}>{status}</Tag>;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}\n\n— sent via aashir.net`);
    const subj = encodeURIComponent(subject || "hello from aashir.net");
    window.location.href = `mailto:me@aashir.net?subject=${subj}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <NavBar />
      <CRTScreen width="wide">
        <section className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:py-16">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Contact</div>
            <h1 className="mt-5 max-w-[10ch] text-[clamp(4rem,10vw,8rem)] leading-[0.9]">
              Bring the hard problem.
            </h1>
          </div>
          <div className="self-end">
            <p className="text-lg leading-8 text-fg/80">
              Best fit: serious product and platform work, AI that has to survive production, or a
              senior/founding engineering role where judgment matters.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Tag tone="ok">London</Tag>
              <Tag tone="accent">Open to remote</Tag>
              <Tag tone="dim">Reply 1–2 days</Tag>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="grid gap-3 lg:grid-cols-3">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noreferrer" : undefined}
                className="group frame panel-grid p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/70"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">{channel.label}</div>
                <div className="mt-4 break-words font-display text-3xl leading-none text-bright transition-colors duration-300 group-hover:text-accent">
                  {channel.value}
                </div>
                <p className="mt-4 text-sm leading-7 text-fg/78">{channel.note}</p>
              </a>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Availability</div>
              <h2 className="mt-4 max-w-[8ch] text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.95]">
                Current ways to work together.
              </h2>
            </div>
            <div className="space-y-3">
              {availability.map((item) => (
                <article key={item.type} className="frame p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-3xl leading-none text-bright">{item.type}</h3>
                      <p className="mt-3 text-sm leading-7 text-fg/78">{item.body}</p>
                    </div>
                    <StatusTag status={item.status} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Message</div>
              <h2 className="mt-4 max-w-[8ch] text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.95]">
                Send signal, not ceremony.
              </h2>
              <p className="mt-5 max-w-[42ch] text-base leading-8 text-fg/78">
                A useful first message includes the problem, why now, constraints, and what a good
                outcome looks like.
              </p>
            </div>

            <form onSubmit={onSubmit} className="frame panel-grid p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 w-full border border-rule bg-bg/70 px-3 py-3 text-fg outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 w-full border border-rule bg-bg/70 px-3 py-3 text-fg outline-none transition-colors focus:border-accent"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">Subject</span>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-2 w-full border border-rule bg-bg/70 px-3 py-3 text-fg outline-none transition-colors focus:border-accent"
                />
              </label>

              <label className="mt-4 block">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={7}
                  required
                  placeholder="The problem, context, timeline, and what you need from me."
                  className="mt-2 w-full resize-y border border-rule bg-bg/70 px-3 py-3 text-fg outline-none transition-colors placeholder:text-dim/70 focus:border-accent"
                />
              </label>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <PixelButton type="submit">Send email</PixelButton>
                {sent && (
                  <span className="text-sm text-ok">
                    Mail client launched. Fallback: <CRTLink href="mailto:me@aashir.net">me@aashir.net</CRTLink>
                  </span>
                )}
              </div>
            </form>
          </section>
        </Reveal>

        <div className="mt-16">
          <Newsletter />
        </div>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
