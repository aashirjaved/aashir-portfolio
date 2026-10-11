import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { PrintButton } from "@/components/print-button";
import { background, credentials, work } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: `CV for ${site.name}. ${site.description}`,
  alternates: { canonical: "/cv" },
};

const skills =
  "TypeScript, Go, Rust, Python. Cloudflare Workers, AWS, PostgreSQL, Kubernetes, Terraform. KYC and KYB, sanctions and PEP screening, authentication and authorisation, rules engines, agents with retrieval, tool use and evaluation.";

export default function CV() {
  const selected = work.filter((e) => e.tier !== "reported").map((e) => ({ name: e.name, line: e.outcome, tier: e.tier }));
  return (
    <main id="main" data-cv className="mx-auto max-w-[680px] px-4 pt-10 sm:px-8 md:pt-16 print:max-w-none print:px-0 print:pt-0">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="h-display text-[40px] md:text-[52px] print:text-[28pt]">{site.name}</h1>
          <p className="mt-2 text-ink-2">{site.positioning}</p>
          <p className="mono mt-3 text-mute">
            {site.role} · {site.location} ·{" "}
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>{" "}
            · aashir.net
          </p>
        </div>
        <Image
          src="/me.webp"
          alt="Aashir Javed"
          width={96}
          height={100}
          className="hidden h-[100px] w-[96px] shrink-0 rounded-[4px] object-cover grayscale sm:block print:block"
          priority
        />
      </div>
      <div className="mt-4">
        <PrintButton />
      </div>

      <section className="mt-10 print:mt-6">
        <h2 className="eyebrow border-b border-rule pb-2">Experience</h2>
        <ul>
          {background.map((b) => (
            <li key={b.where} className="grid gap-1 border-b border-rule py-3 sm:grid-cols-[132px_1fr] sm:gap-4">
              <span className="mono pt-0.5 text-mute">{b.years}</span>
              <div>
                <p>{b.where}</p>
                <p className="text-[16px] leading-[1.5] text-ink-2">{b.what}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="eyebrow border-b border-rule pb-2">Selected work</h2>
        <ul>
          {selected.map((e) => (
            <li key={e.name} className="grid gap-1 border-b border-rule py-3 sm:grid-cols-[132px_1fr] sm:gap-4">
              <span className="mono pt-0.5 text-mute">{e.tier}</span>
              <div>
                <p>{e.name}</p>
                <p className="text-[16px] leading-[1.5] text-ink-2">{e.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="eyebrow border-b border-rule pb-2">Skills</h2>
        <p className="mt-3 text-[16px] leading-[1.55] text-ink-2">{skills}</p>
      </section>

      <section className="mt-8">
        <h2 className="eyebrow border-b border-rule pb-2">Education and awards</h2>
        <p className="mt-3 text-[16px] leading-[1.55] text-ink-2">{credentials}</p>
      </section>

      <Footer />
    </main>
  );
}
