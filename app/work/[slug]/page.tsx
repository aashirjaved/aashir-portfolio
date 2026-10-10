import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
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
    description: `${c.dek} ${c.transfers}`,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { title: `${c.title}. ${c.dek}`, description: c.transfers, url: `${site.url}/work/${c.slug}` },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = cases.filter((x) => x.slug !== c.slug);

  return (
    <>
      <Reveal />
      <main id="main" className="mx-auto max-w-[860px] px-4 pt-10 sm:px-8 md:pt-16">
        <Link href="/#work" className="text-[14px] text-mute transition-colors hover:text-ink">
          ← All work
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <h1 className="h-display text-[40px] md:text-[56px]">{c.title}</h1>
          <Tier tier={c.tier} />
        </div>
        <p className="mt-3 text-[18px] text-ink-2 md:text-[20px]">{c.dek}</p>

        <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {c.facts.map(([k, v], i) => (
            <div key={k} data-reveal style={{ ["--delay" as string]: `${i * 70}ms` }} className="card p-4">
              <dt className="mono text-mute">{k}</dt>
              <dd className="mt-1.5 text-[14px] font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-12">
          <p data-reveal className="eyebrow">What it does</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {c.does.map((d, i) => (
              <li key={d} data-reveal style={{ ["--delay" as string]: `${i * 70}ms` }} className="card flex gap-3 p-5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clear-soft text-clear">
                  <svg aria-hidden width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2 5 8.5l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="text-[15px]">{d}</span>
              </li>
            ))}
          </ul>
        </section>

        <section data-reveal className="mt-12 rounded-[24px] bg-ink p-7 text-paper md:p-10">
          <p className="eyebrow !text-paper/60">What transfers to a fund</p>
          <p className="h-section mt-3 text-[24px] md:text-[30px]">{c.transfers}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <TrackedLink
              event="book_call_click"
              data={{ from: c.slug }}
              href={site.booking}
              className="rounded-full bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-opacity hover:opacity-90"
            >
              Book a diagnostic call
            </TrackedLink>
            <Link href="/" className="rounded-full border border-paper/25 px-5 py-3 text-[14px] font-medium text-paper hover:border-paper/60">
              Ask another question
            </Link>
          </div>
          {c.tier === "private" ? <p className="mt-5 text-[13px] text-paper/60">The code is private. I can walk you through it on a call.</p> : null}
        </section>

        <nav aria-label="Other work" className="mt-12">
          <p className="eyebrow">More work</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/work/${o.slug}`} className="card group block h-full p-5 transition-all hover:-translate-y-0.5 hover:border-ink/25">
                  <p className="text-[16px] font-semibold tracking-tight">{o.title}</p>
                  <p className="mt-1 text-[13px] text-ink-2">{o.dek}</p>
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
