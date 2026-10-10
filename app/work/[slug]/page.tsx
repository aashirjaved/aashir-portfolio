import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
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
    <main id="main" className="mx-auto max-w-prose px-4 pt-10 sm:px-8 md:pt-16">
      <p className="mono text-mute">
        <Link href="/#evidence" className="link">
          Evidence
        </Link>
        <span aria-hidden> / </span>
        {c.title}
      </p>
      <h1 className="display mt-6 text-[44px] md:text-[60px]">{c.title}</h1>
      <p className="mt-3 text-[21px] italic text-ink-2 md:text-[23px]">{c.dek}</p>

      <dl className="mono mt-10 border-t border-rule">
        <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-rule py-2.5">
          <dt className="text-mute">Tier</dt>
          <dd>
            <Tier tier={c.tier} />
          </dd>
        </div>
        {c.facts.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[96px_1fr] gap-4 border-b border-rule py-2.5">
            <dt className="text-mute">{k}</dt>
            <dd className="text-ink-2">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 space-y-5 text-ink">
        {c.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>

      <div className="mt-12 border-t border-rule pt-6">
        <p className="label text-mute">What transfers to a fund</p>
        <p className="display mt-3 text-[26px] md:text-[30px]">{c.transfers}</p>
      </div>

      <div className="mt-12 rounded-[6px] bg-paper-2 p-5 md:p-6">
        <p className="text-ink-2">
          {c.tier === "private"
            ? "The code is private. I can walk you through it on a call."
            : "Happy to talk through how this maps to your setup."}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <TrackedLink
            event="book_call_click"
            data={{ from: c.slug }}
            href={site.booking}
            className="mono rounded-[6px] bg-ink px-4 py-2.5 text-paper transition-opacity hover:opacity-85"
          >
            Book a diagnostic call
          </TrackedLink>
          <Link href="/" className="mono link px-2 py-2.5">
            Ask another question
          </Link>
        </div>
      </div>

      <nav aria-label="Other case notes" className="mt-12">
        <p className="label text-mute">Other notes</p>
        <ul className="mt-3">
          {others.map((o) => (
            <li key={o.slug} className="border-b border-rule py-3">
              <Link href={`/work/${o.slug}`} className="flex items-baseline justify-between gap-4">
                <span className="link">{o.title}</span>
                <span className="mono hidden text-mute sm:inline">{o.dek}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Footer />
    </main>
  );
}
