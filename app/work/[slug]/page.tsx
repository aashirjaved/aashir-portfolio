import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ScreeningRun } from "@/components/screening-run";
import { Tier } from "@/components/tier";
import { TrackedLink } from "@/components/tracked-link";
import { cases } from "@/data/content";
import { site } from "@/data/site";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.headline,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { title: `${c.title}. ${c.headline}`, description: c.challenge, url: `${site.url}/work/${c.slug}` },
  };
}

function Block({ label, children, delay = 0 }: { label: string; children: React.ReactNode; delay?: number }) {
  return (
    <section data-reveal style={{ ["--delay" as string]: `${delay}ms` }} className="grid gap-4 border-t border-rule py-10 md:grid-cols-[200px_1fr] md:gap-10 md:py-14">
      <h2 className="label text-mute">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = cases.filter((x) => x.slug !== c.slug);

  return (
    <>
      <Reveal />
      <main id="main" className="mx-auto max-w-[1320px] px-5 pt-8 sm:px-10 md:pt-14">
        <Link href="/#work" className="label text-mute transition-colors hover:text-ink">
          ← Selected work
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="label text-mute">{c.tag}</span>
          <Tier tier={c.tier} />
        </div>
        <h1 className="display mt-5 text-[clamp(40px,9vw,128px)]">{c.title}</h1>
        <p className="mt-8 max-w-[24ch] text-[28px] font-medium leading-[1.12] tracking-tight md:text-[48px]">
          {c.headline}
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {c.outcome.map((o, i) => (
            <div key={o.label} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }} className="card p-7">
              <p className="display text-[56px] text-clear md:text-[80px]">{o.value}</p>
              <p className="mt-3 text-[15px] text-ink-2">{o.label}</p>
            </div>
          ))}
        </div>

        {c.slug === "kleido" ? (
          <div data-reveal className="card mt-4 grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
            <div>
              <p className="eyebrow">What a run looks like</p>
              <p className="mt-3 text-[22px] font-medium leading-snug tracking-tight md:text-[28px]">
                Every check logged. A person approves.
              </p>
              <p className="mt-2 text-[14px] text-mute">Illustration with example names, not real data.</p>
            </div>
            <div className="rounded-[20px] bg-surface-2 p-4">
              <ScreeningRun bare />
            </div>
          </div>
        ) : null}

        <div className="mt-16">
          <Block label="Challenge">
            <p className="max-w-[40ch] text-[20px] leading-snug text-ink-2 md:text-[26px]">{c.challenge}</p>
          </Block>
          <Block label="My role">
            <p className="max-w-[40ch] text-[20px] leading-snug md:text-[26px]">{c.role}</p>
          </Block>
          <Block label="Key decisions">
            <ol className="grid gap-4 md:grid-cols-3">
              {c.decisions.map((d, i) => (
                <li key={d.title} className="card p-6">
                  <p className="display text-[40px] text-mute">{`0${i + 1}`}</p>
                  <h3 className="mt-5 text-[20px] font-bold tracking-tight">{d.title}</h3>
                  <p className="mt-2 text-[15px] text-ink-2">{d.body}</p>
                </li>
              ))}
            </ol>
          </Block>
          <Block label="Details">
            <dl className="grid gap-4 sm:grid-cols-2">
              {c.facts.map(([k, v]) => (
                <div key={k} className="border-l border-rule pl-5">
                  <dt className="label text-mute">{k}</dt>
                  <dd className="mt-1 text-[18px]">{v}</dd>
                </div>
              ))}
            </dl>
          </Block>
        </div>

        <section data-reveal className="mt-8 rounded-[32px] bg-clear p-8 text-paper md:p-14">
          <p className="max-w-[16ch] text-[34px] font-bold leading-[1.02] tracking-tight md:text-[64px]">
            Working on something like this?
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedLink
              event="book_call_click"
              data={{ from: c.slug }}
              href={site.booking}
              className="label rounded-full bg-paper px-6 py-4 text-ink transition-opacity hover:opacity-90"
            >
              Book a diagnostic call
            </TrackedLink>
            <Link href="/" className="label rounded-full border border-paper/40 px-6 py-4 text-paper hover:border-paper">
              Ask another question
            </Link>
          </div>
          {c.tier === "private" ? <p className="mt-6 text-[14px] opacity-80">The code is private. I can walk you through it on a call.</p> : null}
        </section>

        <nav aria-label="More work" className="mt-20">
          <p className="label text-mute">More work</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/work/${o.slug}`} className="card group block h-full p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/30">
                  <p className="label text-mute">{o.tag}</p>
                  <p className="mt-6 text-[22px] font-bold tracking-tight">{o.title}</p>
                  <p className="mt-2 text-[15px] text-ink-2">{o.headline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
