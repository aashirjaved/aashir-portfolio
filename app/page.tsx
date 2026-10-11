import Link from "next/link";
import { Console } from "@/components/console";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ScreeningRun } from "@/components/screening-run";
import { Terminals } from "@/components/terminals";
import { Tier } from "@/components/tier";
import { TrackedLink } from "@/components/tracked-link";
import { about, alsoBuilt, companies, rule, stats, steps, work, type WorkCard } from "@/data/content";
import { site } from "@/data/site";

const lines = ["I build AI", "agents for", "regulated", "finance."];

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li key={t} className="label rounded-full border border-rule px-2.5 py-1 text-[10.5px] text-mute">
          {t}
        </li>
      ))}
    </ul>
  );
}

function CardBody({ w, big = false }: { w: WorkCard; big?: boolean }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <Tags tags={w.tags} />
        <Tier tier={w.tier} />
      </div>
      {w.stat ? (
        <p className="display mt-8 text-[72px] text-clear md:text-[96px]">{w.stat}</p>
      ) : (
        <h3 className={`mt-8 font-bold tracking-tight ${big ? "text-[34px] md:text-[44px]" : "text-[26px]"}`}>{w.name}</h3>
      )}
      <p className={`mt-3 font-medium leading-snug tracking-tight text-ink ${big ? "text-[22px] md:text-[28px]" : "text-[18px]"}`}>
        {w.outcome}
      </p>
      <p className="mt-2 text-[15px] text-ink-2">{w.stat ? `${w.name}. ${w.detail}` : w.detail}</p>
    </>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <span className="label mt-6 inline-flex items-center gap-2 text-ink">
      {label}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
    </span>
  );
}

export default function Home() {
  const [feature, ...rest] = work;
  return (
    <>
      <Reveal />
      <main id="main">
        {/* Hero: the type is the hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto flex min-h-[calc(100svh-72px)] max-w-[1320px] flex-col px-5 pb-8 pt-6 sm:px-10 lg:pt-10">
            <div className="flex flex-1 flex-col justify-center gap-10 py-4 xl:grid xl:grid-cols-[minmax(0,1fr)_560px] xl:items-center xl:gap-10 xl:py-2">
              <div>
              <p className="label flex items-center gap-2.5 text-ink-2">
                <span className="pulse anim h-2 w-2 rounded-full bg-clear" aria-hidden />
                London · Open to select projects
              </p>
              <h1 className="display display-hero mt-5">
                {lines.map((l, i) => (
                  <span key={l} className="line" style={{ ["--i" as string]: i }}>
                    <span>{l}</span>
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-[21em] text-[20px] leading-snug text-ink-2 md:text-[24px]">
                {site.support}
              </p>
              <div className="fade-in mt-6 flex flex-wrap gap-3" style={{ ["--d" as string]: "950ms" }}>
                <Link href="/#work" className="label rounded-full bg-ink px-6 py-4 text-paper transition-opacity hover:opacity-85">
                  View selected work
                </Link>
                <TrackedLink
                  event="book_call_click"
                  href={site.booking}
                  className="label rounded-full border border-rule px-6 py-4 text-ink transition-colors hover:border-ink/50"
                >
                  Let&apos;s work together
                </TrackedLink>
              </div>
              <div className="fade-in max-w-[640px]" style={{ ["--d" as string]: "1100ms" }}>
                <Console />
              </div>
              </div>
              <div className="fade-in" style={{ ["--d" as string]: "700ms" }}>
                <Terminals />
              </div>
            </div>
            <div className="label flex items-end justify-between text-mute max-sm:justify-end">
              <span className="hidden sm:inline">Available for select projects</span>
              <span className="flex items-center gap-3">
                Scroll to explore
                <span aria-hidden className="bob anim text-[16px]">↓</span>
              </span>
            </div>
          </div>
        </section>

        {/* Selected work: bento */}
        <section id="work" className="mx-auto max-w-[1320px] px-5 pt-24 sm:px-10 md:pt-32">
          <div data-reveal className="mb-10 flex items-end justify-between gap-6">
            <h2 className="display text-[clamp(40px,7.5vw,104px)]">Selected work</h2>
            <p className="label hidden pb-2 text-mute md:block">Outcomes first</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <a
              href={feature.href}
              data-reveal
              className="card group relative flex flex-col overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/30 md:col-span-2 md:row-span-2 md:p-9"
            >
              <div className="grid flex-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div className="flex h-full flex-col">
                  <CardBody w={feature} big />
                  <div className="mt-auto">
                    <Arrow label="View case study" />
                  </div>
                </div>
                <div className="rounded-[20px] bg-surface-2 p-4">
                  <ScreeningRun bare />
                </div>
              </div>
            </a>

            {rest.slice(0, 2).map((w, i) => (
              <a
                key={w.name}
                href={w.href}
                data-reveal
                style={{ ["--delay" as string]: `${(i + 1) * 100}ms` }}
                className="card group flex flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/30"
              >
                <CardBody w={w} />
                <div className="mt-auto">
                  <Arrow label="View case study" />
                </div>
              </a>
            ))}

            {rest.slice(2).map((w, i) => {
              const inner = (
                <>
                  <CardBody w={w} />
                  {w.href ? (
                    <div className="mt-auto">
                      <Arrow label="View case study" />
                    </div>
                  ) : null}
                </>
              );
              const cls =
                "card group flex flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/30";
              return w.href ? (
                <a key={w.name} href={w.href} data-reveal style={{ ["--delay" as string]: `${i * 100}ms` }} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={w.name} data-reveal style={{ ["--delay" as string]: `${i * 100}ms` }} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>

          <ul data-reveal className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <li className="label text-mute">Also</li>
            {alsoBuilt.map((a) => (
              <li key={a.name}>
                <a href={a.href} target="_blank" rel="noreferrer" className="link text-[15px] text-ink">
                  {a.name} ↗
                </a>
                <span className="ml-2 text-[13px] text-mute">{a.note}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-[1320px] px-5 pt-28 sm:px-10 md:pt-40">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p data-reveal className="eyebrow">About</p>
              <p data-reveal className="mt-5 text-[24px] font-medium leading-[1.25] tracking-tight md:text-[34px]">
                {about}
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:col-span-5 lg:pl-8">
              {stats.map((s, i) => (
                <li key={s.label} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }}>
                  <p className="display text-[56px] md:text-[72px]">{s.value}</p>
                  <p className="mt-2 text-[14px] text-mute">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-rule pt-6">
            <span className="label text-mute">Previously</span>
            {companies.map((c) => (
              <span key={c} className="text-[17px] font-semibold tracking-tight text-ink-2">
                {c}
              </span>
            ))}
            <Link href="/cv" className="link ml-auto text-[14px] text-ink-2">
              Full CV
            </Link>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-[1320px] px-5 pt-28 sm:px-10 md:pt-40">
          <h2 data-reveal className="display text-[clamp(40px,7.5vw,104px)]">Start small</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.name} data-reveal style={{ ["--delay" as string]: `${i * 110}ms` }} className="card p-7">
                <p className="display text-[64px] text-mute">{`0${i + 1}`}</p>
                <h3 className="mt-6 text-[26px] font-bold tracking-tight">{s.name}</h3>
                <p className="mono mt-1 text-clear">{s.terms}</p>
                <p className="mt-4 text-[16px] text-ink-2">{s.line}</p>
              </li>
            ))}
          </ol>
          <p data-reveal className="mt-12 max-w-[26ch] text-[28px] font-medium leading-tight tracking-tight md:text-[40px]">
            {rule}
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-[1320px] px-5 pb-8 pt-28 sm:px-10 md:pt-40">
          <p data-reveal className="eyebrow">Contact</p>
          <h2 data-reveal className="display mt-4 text-[clamp(44px,10.5vw,168px)]">
            Let&apos;s work
            <br />
            together.
          </h2>
          <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
            <TrackedLink
              event="book_call_click"
              href={site.booking}
              className="label rounded-full bg-clear px-7 py-4 text-paper transition-opacity hover:opacity-90"
            >
              Book a diagnostic call
            </TrackedLink>
            <TrackedLink
              event="email_click"
              href={`mailto:${site.email}`}
              className="label rounded-full border border-rule px-7 py-4 text-ink transition-colors hover:border-ink/50"
            >
              {site.email}
            </TrackedLink>
          </div>
          <p data-reveal className="mt-6 max-w-[48ch] text-[16px] text-mute">
            Available for select projects. Drop me a line. I usually reply within two working days.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
