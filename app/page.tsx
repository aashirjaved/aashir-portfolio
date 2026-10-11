import Image from "next/image";
import Link from "next/link";
import { Console } from "@/components/console";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ScreeningRun } from "@/components/screening-run";
import { ServiceIcon } from "@/components/service-icon";
import { Tier } from "@/components/tier";
import { TrackedLink } from "@/components/tracked-link";
import { companies, proof, rule, services, stats, steps } from "@/data/content";
import { site } from "@/data/site";

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div data-reveal className="mb-8 md:mb-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section mt-3 text-[30px] md:text-[40px]">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <main id="main">
        {/* Hero */}
        <section id="top" className="mx-auto grid max-w-wide grid-cols-1 items-center gap-10 px-4 pb-16 pt-10 sm:px-8 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-24 lg:pt-20">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 rounded-full border border-rule bg-surface py-1 pl-1 pr-4">
              <span className="relative">
                <Image src="/me.png" alt="" width={36} height={36} priority className="h-9 w-9 rounded-full object-cover" />
                <span className="pulse anim absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-clear" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[14px] font-semibold">Aashir Javed</span>
                <span className="block text-[12px] text-mute">Senior Software Engineer · open to advisory</span>
              </span>
            </div>
            <h1 className="h-display mt-6 text-[40px] sm:text-[52px] lg:text-[60px]">{site.positioning}</h1>
            <p className="mt-5 max-w-[46ch] text-[17px] text-ink-2 md:text-[18px]">{site.support}</p>
            <Console />
          </div>
          <div className="min-w-0 lg:pl-2">
            <ScreeningRun />
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Track record" className="border-y border-rule bg-surface/60">
          <ul className="mx-auto grid max-w-wide grid-cols-2 px-4 sm:px-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <li
                key={s.label}
                data-reveal
                style={{ ["--delay" as string]: `${i * 80}ms` }}
                className={`py-7 md:py-9 ${i % 2 === 1 ? "pl-5 md:pl-6" : ""} ${i > 0 ? "md:border-l md:border-rule md:pl-6" : ""} ${i === 2 ? "pl-0" : ""}`}
              >
                <p className="h-display text-[34px] md:text-[42px]">{s.value}</p>
                <p className="mt-1 text-[13px] text-mute">{s.label}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="help" className="mx-auto max-w-wide px-4 pt-20 sm:px-8 md:pt-28">
          <SectionHead eyebrow="What I do" title="Three ways I help." />
          <ul className="grid gap-4 md:grid-cols-3">
            {services.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ ["--delay" as string]: `${i * 90}ms` }}
                className="card flex flex-col p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="rounded-2xl bg-paper px-5 py-2">
                  <ServiceIcon kind={s.icon} />
                </div>
                <h3 className="mt-6 text-[20px] font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-1.5 text-[15px] text-ink-2">{s.line}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <li key={t} className="mono rounded-full bg-surface-2 px-2.5 py-1 text-ink-2">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Proof */}
        <section id="work" className="mx-auto max-w-wide px-4 pt-20 sm:px-8 md:pt-28">
          <SectionHead eyebrow="Proof" title="Built, shipped, running." />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proof.map((p, i) => {
              const external = p.href.startsWith("http");
              return (
                <li key={p.name} data-reveal style={{ ["--delay" as string]: `${(i % 3) * 80}ms` }}>
                  <a
                    href={p.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25"
                  >
                    <div className="flex items-center justify-between">
                      <span className="mono text-mute">{p.tag}</span>
                      <Tier tier={p.tier} />
                    </div>
                    <h3 className="mt-5 text-[21px] font-semibold tracking-tight md:mt-8 md:text-[22px]">{p.name}</h3>
                    <p className="mt-1.5 flex-1 text-[15px] text-ink-2">{p.line}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink md:mt-6">
                      {external ? "Open" : "See how it works"}
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        {external ? "↗" : "→"}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p data-reveal className="mono mt-5 text-mute">
            verified: public · private: shown on a call · employer: scope only · reported: from my CV
          </p>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-wide px-4 pt-20 sm:px-8 md:pt-28">
          <SectionHead eyebrow="How we work" title="Start small. Decide fast." />
          <ol className="relative grid gap-4 md:grid-cols-3">
            <span aria-hidden data-reveal className="absolute left-[16%] right-[16%] top-[38px] hidden h-px origin-left bg-rule md:block" />
            {steps.map((s, i) => (
              <li key={s.name} data-reveal style={{ ["--delay" as string]: `${i * 120}ms` }} className="relative">
                <div className="card h-full p-6 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[14px] font-semibold text-paper">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold tracking-tight">{s.name}</h3>
                  <p className="mono mt-1 text-clear">{s.terms}</p>
                  <p className="mt-3 text-[15px] text-ink-2">{s.line}</p>
                </div>
              </li>
            ))}
          </ol>
          <p data-reveal className="mt-10 text-center text-[20px] font-medium tracking-tight md:text-[24px]">
            “{rule}”
          </p>
        </section>

        {/* Companies */}
        <section aria-label="Experience" className="mx-auto max-w-wide px-4 pt-20 sm:px-8 md:pt-28">
          <p data-reveal className="eyebrow text-center">Nine years at</p>
          <ul className="mt-6 grid grid-cols-3 gap-y-6 md:grid-cols-6">
            {companies.map((c, i) => (
              <li key={c.name} data-reveal style={{ ["--delay" as string]: `${i * 60}ms` }} className="text-center">
                <p className="text-[18px] font-semibold tracking-tight text-ink/80">{c.name}</p>
                <p className="mono mt-0.5 text-mute">{c.years}</p>
              </li>
            ))}
          </ul>
          <p data-reveal className="mt-6 text-center">
            <Link href="/cv" className="link text-[14px] text-ink-2">
              Full CV
            </Link>
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-wide px-4 pt-20 sm:px-8 md:pt-28">
          <div data-reveal className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-12 text-paper sm:px-12 md:py-16">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-paper/10" />
            <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-paper/10" />
            <p className="eyebrow !text-paper/60">Contact</p>
            <h2 className="h-section mt-3 max-w-[18ch] text-[32px] md:text-[48px]">Building AI agents or fintech systems?</h2>
            <p className="mt-4 text-[16px] text-paper/70">Send the context. I reply within two working days.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <TrackedLink
                event="book_call_click"
                href={site.booking}
                className="rounded-full bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-opacity hover:opacity-90"
              >
                Book a diagnostic call
              </TrackedLink>
              <TrackedLink
                event="email_click"
                href={`mailto:${site.email}`}
                className="rounded-full border border-paper/25 px-5 py-3 text-[14px] font-medium text-paper transition-colors hover:border-paper/60"
              >
                {site.email}
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
