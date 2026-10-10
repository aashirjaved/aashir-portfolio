import Link from "next/link";
import { Console } from "@/components/console";
import { Effects } from "@/components/effects";
import { Footer } from "@/components/footer";
import { Rail } from "@/components/rail";
import { Section } from "@/components/section";
import { Tier } from "@/components/tier";
import { TrackedLink } from "@/components/tracked-link";
import { background, credentials, evidence, formats, offers, principles } from "@/data/content";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Effects />
      <Rail />
      <main id="main" className="mx-auto max-w-wide px-4 sm:px-8 lg:px-12 xl:px-0">
        <section id="top" data-rail="00" aria-labelledby="positioning" className="pt-10 md:pt-20">
          <div className="max-w-[880px]">
            <p className="mono flex flex-wrap items-center gap-x-2 text-mute">
              <span aria-hidden className="inline-block h-[7px] w-[7px] rounded-full bg-clear" />
              <span>London</span>
              <span aria-hidden>·</span>
              <span>{site.role}</span>
            </p>
            <h1 id="positioning" className="display mt-6 text-[42px] sm:text-[56px] lg:text-[72px]">
              {site.positioning}
            </h1>
            <p className="mt-6 max-w-[56ch] text-ink-2">{site.support}</p>
            <Console />
          </div>
        </section>

        <Section
          id="help"
          number="01"
          title="Where I help"
          intro="Three kinds of work. Each one ends with something your auditor, your LPs and your engineers can all read."
        >
          <ol>
            {offers.map((o, i) => (
              <li key={o.title} className="grid gap-3 border-t border-rule py-8 first:border-t-0 first:pt-0 md:grid-cols-[96px_1fr] md:gap-0">
                <span className="label pt-2 text-mute">{`0${i + 1}`.slice(-2)}</span>
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-12">
                  <div>
                    <h3 className="display text-[26px] md:text-[30px]">{o.title}</h3>
                    <p className="mt-2 italic text-ink-2">{o.promise}</p>
                  </div>
                  <div>
                    <p className="text-[17px] leading-[1.55] text-ink-2">{o.included}</p>
                    <p className="mono mt-4 text-mute">
                      Evidence:{" "}
                      {o.evidence.map((e, j) => (
                        <span key={e.label}>
                          <Link href={e.href} className="link text-ink">
                            {e.label}
                          </Link>
                          {j < o.evidence.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="evidence"
          number="02"
          title="Evidence"
          intro="Each row carries a label. Verified means you can open it. Private means it exists and I can show it on a call. Employer means scope only. Reported means my figure, from my CV."
        >
          <div className="label hidden grid-cols-[96px_minmax(0,0.9fr)_minmax(0,1.4fr)_96px] gap-6 border-b border-rule pb-3 text-mute md:grid">
            <span />
            <span>What</span>
            <span>Outcome</span>
            <span className="text-right">Tier</span>
          </div>
          <ul>
            {evidence.map((row) => {
              const external = row.href?.startsWith("http");
              const name = row.href ? (
                <a
                  href={row.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="link"
                >
                  {row.what}
                  {external ? <span aria-hidden className="text-mute"> ↗</span> : null}
                </a>
              ) : (
                row.what
              );
              return (
                <li
                  key={row.what}
                  className="grid gap-2 border-b border-rule py-5 md:grid-cols-[96px_minmax(0,0.9fr)_minmax(0,1.4fr)_96px] md:gap-6"
                >
                  <span className="hidden md:block" />
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[19px] leading-snug md:text-[20px]">{name}</h3>
                      <span className="md:hidden">
                        <Tier tier={row.tier} />
                      </span>
                    </div>
                    <p className="mt-1 text-[16px] leading-[1.5] text-mute">{row.context}</p>
                  </div>
                  <p className="text-[17px] leading-[1.55] text-ink-2">{row.outcome}</p>
                  <span className="hidden justify-end pt-1 md:flex">
                    <Tier tier={row.tier} />
                  </span>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section id="engagement" number="03" title="Engagement" intro="Three formats. Start with the first one.">
          <ol>
            {formats.map((f) => (
              <li key={f.name} className="grid gap-2 border-t border-rule py-6 first:border-t-0 first:pt-0 md:grid-cols-[96px_minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-6">
                <span className="hidden md:block" />
                <div>
                  <h3 className="display text-[24px] md:text-[26px]">{f.name}</h3>
                  <p className="mono mt-1 text-mute">{f.terms}</p>
                </div>
                <p className="text-[17px] leading-[1.55] text-ink-2">{f.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid gap-4 md:grid-cols-[96px_1fr]">
            <span className="label pt-3 text-mute">Rules</span>
            <div>
              <p className="display text-[30px] italic md:text-[40px]">{principles.lead}</p>
              <ul className="mt-5 space-y-1 text-ink-2">
                {principles.rest.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mono mt-6 text-mute">{principles.not}</p>
            </div>
          </div>
        </Section>

        <Section id="background" number="04" title="Background">
          <ul>
            {background.map((b) => (
              <li key={b.where} className="grid gap-1 border-b border-rule py-4 first:border-t md:grid-cols-[96px_160px_200px_1fr] md:gap-6">
                <span className="hidden md:block" />
                <span className="mono pt-1 text-mute">{b.years}</span>
                <span className="text-[18px]">{b.where}</span>
                <span className="text-[17px] leading-[1.55] text-ink-2">{b.what}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid md:grid-cols-[96px_1fr]">
            <span />
            <p className="mono text-mute">
              {credentials}{" "}
              <Link href="/cv" className="link text-ink">
                Full CV
              </Link>
            </p>
          </div>
        </Section>

        <Section id="contact" number="05" title="Contact" intro="Send the context. I reply within two working days.">
          <div className="grid gap-8 md:grid-cols-[96px_1fr]">
            <span className="hidden md:block" />
            <div>
              <TrackedLink
                event="email_click"
                href={`mailto:${site.email}`}
                className="display link text-[34px] md:text-[52px]"
              >
                {site.email}
              </TrackedLink>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <TrackedLink
                  event="book_call_click"
                  href={site.booking}
                  className="mono rounded-[6px] bg-ink px-4 py-2.5 text-paper transition-opacity hover:opacity-85"
                >
                  Book a diagnostic call
                </TrackedLink>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="mono link px-2 py-2.5">
                  LinkedIn ↗
                </a>
                <a href={site.links.github} target="_blank" rel="noreferrer" className="mono link px-2 py-2.5">
                  GitHub ↗
                </a>
              </div>
              <p className="mono mt-6 max-w-[64ch] text-mute">
                Useful to include: what you are building, where you are in it, and whether you need advice, a build, or both.
              </p>
            </div>
          </div>
        </Section>

        <Footer />
      </main>
    </>
  );
}
