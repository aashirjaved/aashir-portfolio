"use client"

import Link from "next/link"
import { Suspense, useState } from "react"
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { RetroFooter } from "@/components/retro-footer"
import { TerminalWindow } from "@/components/crt/terminal-window"
import { GlitchText } from "@/components/crt/glitch-text"
import { RetroTag } from "@/components/crt/retro-tag"
import { RetroButton } from "@/components/crt/retro-button"
import { BlinkingCursor } from "@/components/crt/blinking-cursor"

const channels = [
  {
    title: "EMAIL",
    desc: "Best channel for professional inquiries and collaborations",
    value: "me@aashir.net",
    href: "mailto:me@aashir.net",
    icon: <Mail className="w-5 h-5" />,
    variant: "green" as const,
  },
  {
    title: "LINKEDIN",
    desc: "Professional network — endorsements, updates, news",
    value: "/in/aashirjaved",
    href: "https://www.linkedin.com/in/aashirjaved/",
    icon: <Linkedin className="w-5 h-5" />,
    variant: "cyan" as const,
  },
  {
    title: "GITHUB",
    desc: "Code, contributions, open-source projects",
    value: "@aashirjaved",
    href: "https://github.com/aashirjaved",
    icon: <Github className="w-5 h-5" />,
    variant: "magenta" as const,
  },
]

const availability = [
  {
    type: "FULL_TIME",
    status: "OPEN",
    desc: "Senior engineering, technical leadership, AI/ML focused roles at innovative companies",
    variant: "green" as const,
  },
  {
    type: "CONSULTING",
    status: "LIMITED",
    desc: "Strategic technical consulting, AI integration, infrastructure optimization",
    variant: "amber" as const,
  },
  {
    type: "SPEAKING / MENTOR",
    status: "ALWAYS",
    desc: "Conferences, mentoring, technical guidance for growing teams",
    variant: "magenta" as const,
  },
]

function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const inputClass =
    "w-full bg-background border-2 border-primary/40 px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-none focus:ring-0 placeholder:text-muted-foreground/60"

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-mono text-xs uppercase text-primary phosphor-glow">&gt; NAME</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your_handle"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="font-mono text-xs uppercase text-primary phosphor-glow">&gt; EMAIL</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.address"
            className={inputClass}
          />
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-xs uppercase text-primary phosphor-glow">&gt; SUBJECT</span>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="re: opportunity"
          className={inputClass}
        />
      </label>
      <label className="block">
        <span className="font-mono text-xs uppercase text-primary phosphor-glow">&gt; MESSAGE</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="type message here..."
          className={inputClass}
        />
      </label>
      <RetroButton type="submit" variant="green">
        TRANSMIT_MESSAGE
      </RetroButton>
    </form>
  )
}

function ContactContent() {
  return (
    <div className="min-h-screen">
      <TopNavigation activeSection="contact" />

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-xs uppercase text-muted-foreground mb-2">
            <span className="text-primary">$&gt;</span> connect --target=aashir
          </div>
          <h1 className="font-pixel text-3xl sm:text-5xl phosphor-glow mb-3">
            <GlitchText text="CONTACT.SYS" />
          </h1>
          <p className="font-mono text-sm sm:text-base text-card-foreground max-w-2xl">
            <span className="text-primary">// </span>
            Open a channel<BlinkingCursor /> Multiple frequencies available.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-pixel text-xs sm:text-sm uppercase tracking-widest mb-4 phosphor-glow">
            <span className="text-primary">[</span> CHANNELS <span className="text-primary">]</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {channels.map((c, i) => (
              <TerminalWindow key={i} title={`${c.title.toLowerCase()}.sock`} variant={c.variant}>
                <div className="space-y-3">
                  <div className="text-primary">{c.icon}</div>
                  <div className="font-pixel text-sm phosphor-glow">{c.title}</div>
                  <p className="font-mono text-xs text-card-foreground leading-relaxed">{c.desc}</p>
                  <Link
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
                  >
                    <span>{c.value}</span>
                    {c.href.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                  </Link>
                </div>
              </TerminalWindow>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-pixel text-xs sm:text-sm uppercase tracking-widest mb-4 phosphor-glow">
            <span className="text-primary">[</span> AVAILABILITY <span className="text-primary">]</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {availability.map((a, i) => (
              <TerminalWindow key={i} title={a.type} variant={a.variant} controls={false}>
                <div className="space-y-2">
                  <RetroTag variant={a.variant}>{a.status}</RetroTag>
                  <p className="font-mono text-xs text-card-foreground leading-relaxed">{a.desc}</p>
                </div>
              </TerminalWindow>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="compose_message.sh" variant="green" prompt="awaiting input">
            <ContactForm />
          </TerminalWindow>
        </div>
      </section>

      {/* Location */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="locate.sh" variant="cyan">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-crt-cyan" />
                <span className="font-pixel text-sm phosphor-glow-cyan">LONDON, UNITED KINGDOM</span>
              </div>
              <p className="font-mono text-sm text-card-foreground">
                <span className="phosphor-glow-cyan">// </span>
                Based in London. Working with clients globally. Open to remote, occasional travel.
              </p>
              <div className="font-mono text-xs text-muted-foreground grid grid-cols-2 gap-x-4 gap-y-1 pt-2 border-t border-primary/30">
                <span>
                  <span className="text-primary">LAT:</span> 51.5074°N
                </span>
                <span>
                  <span className="text-primary">LON:</span> 0.1278°W
                </span>
                <span>
                  <span className="text-primary">TZ:</span> GMT/BST
                </span>
                <span>
                  <span className="text-primary">PING:</span> ~LOW
                </span>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <RetroFooter />
    </div>
  )
}

export default function Contact() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background font-mono text-primary phosphor-glow">
          LOADING...
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  )
}
