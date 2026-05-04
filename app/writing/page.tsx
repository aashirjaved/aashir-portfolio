import {
  CRTScreen,
  NavBar,
  StatusBar,
  Tag,
  PageFooter,
  CRTLink,
} from "@/components/crt";
import Newsletter from "@/components/newsletter";
import { ArticleSchema } from "@/components/structured-data";
import { blogPosts, contentCalendar } from "@/data/blog-data";

const monthName = (m: number) =>
  ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][m];

function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d.toString().padStart(2, "0")} ${monthName(m - 1)} ${y}`;
}

export default function Writing() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = sorted.find((p) => p.featured);

  return (
    <>
      {featured && (
        <ArticleSchema
          title={featured.title}
          description={featured.description}
          url={`https://aashir.net/writing/${featured.slug}`}
          image={featured.image || "/me.png"}
          datePublished={featured.date}
          keywords={featured.tags}
        />
      )}
      <NavBar />
      <CRTScreen>
        <StatusBar
          items={[
            { label: "page", value: "/writing" },
            { label: "posts", value: `${sorted.length}`, tone: "accent" },
            { label: "queued", value: `${contentCalendar.length}` },
          ]}
        />

        <section className="pt-8 mb-10">
          <div className="font-mono text-xs sm:text-sm text-dim uppercase tracking-[0.25em] mb-2">
            {"> ls -t writing/"}
          </div>
          <h1 className="font-display text-[clamp(1.4rem,4vw,2.2rem)] uppercase glow-strong leading-tight">
            NOTES FROM PRODUCTION
          </h1>
          <p className="mt-3 font-mono text-fg/90 max-w-[60ch]">
            AI agents, infra rot, full-stack reality, and what eight years taught me about leading
            engineers without breaking them.
          </p>
        </section>

        <div className="frame frame-amber bg-screen/40 p-4 sm:p-5">
          <div className="hidden sm:grid grid-cols-[3rem_8rem_3rem_minmax(0,1fr)] gap-3 text-dim text-[10px] uppercase tracking-[0.25em] pb-2 border-b border-rule">
            <span>idx</span>
            <span>date</span>
            <span>read</span>
            <span>title</span>
          </div>
          {sorted.map((p, i) => (
            <article
              key={p.slug}
              className="grid sm:grid-cols-[3rem_8rem_3rem_minmax(0,1fr)] gap-x-3 gap-y-1 py-3 border-b border-rule/40 last:border-0"
            >
              <span className="font-display text-accent text-[10px] sm:text-xs">
                {String(i + 1).padStart(3, "0")}
              </span>
              <span className="font-mono text-dim text-xs sm:text-sm">{fmtDate(p.date)}</span>
              <span className="font-mono text-dim text-xs sm:text-sm">
                {p.readingTime.replace(" min read", "m")}
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <CRTLink href={`/writing/${p.slug}`} className="text-bright hover:text-accent no-underline font-mono">
                    {p.title}
                  </CRTLink>
                  {p.featured && <Tag tone="accent">★ featured</Tag>}
                </div>
                <p className="font-mono text-fg/70 text-sm mt-0.5 line-clamp-1 max-w-[60ch]">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {p.tags.slice(0, 4).map((t) => (
                    <Tag key={t} tone="dim">
                      {t.toLowerCase()}
                    </Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <div className="font-mono text-[10px] sm:text-xs text-dim uppercase tracking-[0.25em] mb-2">
            {"> queue"}
          </div>
          <h2 className="font-display text-[clamp(1rem,2.6vw,1.4rem)] uppercase glow leading-tight mb-4">
            UPCOMING
          </h2>
          <ul className="space-y-2">
            {contentCalendar.map((item, i) => (
              <li
                key={item.title}
                className="grid sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] gap-x-3 gap-y-1 py-2 border-b border-rule/40 last:border-0"
              >
                <span className="font-display text-accent text-[10px]">
                  Q{String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-bright">{item.title}</div>
                  {item.description && (
                    <p className="font-mono text-fg/70 text-sm">{item.description}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1 items-start sm:items-end shrink-0">
                  <Tag tone={item.status === "published" ? "ok" : item.status === "in-progress" ? "accent" : "dim"}>
                    {item.status}
                  </Tag>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Newsletter />
        </div>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
