import {
  CRTScreen,
  NavBar,
  StatusBar,
  Tag,
  PageFooter,
  CRTLink,
  Reveal,
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
  const featured = sorted.find((p) => p.featured) ?? sorted[0];
  const rest = sorted.filter((p) => p.slug !== featured?.slug);

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
      <CRTScreen width="wide">
        <StatusBar
          items={[
            { label: "page", value: "writing" },
            { label: "posts", value: `${sorted.length}`, tone: "accent" },
            { label: "queue", value: `${contentCalendar.length}` },
          ]}
        />

        <section className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-16">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Writing</div>
            <h1 className="mt-5 max-w-[10ch] text-[clamp(4rem,10vw,8rem)] leading-[0.9]">
              Notes from production.
            </h1>
          </div>
          <p className="self-end text-lg leading-8 text-fg/80">
            Essays on AI agents, infrastructure rot, full-stack reality, engineering leadership,
            and the awkward middle between demos and durable systems.
          </p>
        </section>

        {featured && (
          <Reveal>
            <section className="frame panel-grid p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent">Featured essay</div>
                  <CRTLink
                    href={`/writing/${featured.slug}`}
                    className="mt-5 block max-w-[12ch] font-display text-[clamp(3rem,7vw,6.6rem)] leading-[0.92] text-bright no-underline hover:text-accent"
                  >
                    {featured.title}
                  </CRTLink>
                  <p className="mt-6 max-w-[68ch] text-base leading-8 text-fg/80">{featured.description}</p>
                </div>
                <aside className="space-y-5 lg:text-right">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-dim">Published</div>
                    <div className="mt-1 text-sm text-fg/82">{fmtDate(featured.date)}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-dim">Reading time</div>
                    <div className="mt-1 font-display text-3xl text-bright">{featured.readingTime}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {featured.tags.slice(0, 5).map((tag) => (
                      <Tag key={tag} tone="dim">{tag}</Tag>
                    ))}
                  </div>
                </aside>
              </div>
            </section>
          </Reveal>
        )}

        <Reveal>
          <section className="mt-16">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Archive</div>
                <h2 className="mt-3 text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95]">All essays</h2>
              </div>
            </div>
            <div className="space-y-3">
              {rest.map((p, i) => (
                <article key={p.slug} className="frame p-5 sm:p-6">
                  <div className="grid gap-4 lg:grid-cols-[64px_150px_minmax(0,1fr)_110px] lg:items-start">
                    <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-dim">{String(i + 1).padStart(2, "0")}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{fmtDate(p.date)}</div>
                    <div>
                      <CRTLink href={`/writing/${p.slug}`} className="font-display text-3xl leading-none text-bright no-underline hover:text-accent">
                        {p.title}
                      </CRTLink>
                      <p className="mt-3 text-sm leading-7 text-fg/78">{p.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.slice(0, 4).map((t) => (
                          <Tag key={t} tone="dim">{t}</Tag>
                        ))}
                      </div>
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim lg:text-right">
                      {p.readingTime.replace(" min read", "m")}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Queue</div>
              <h2 className="mt-3 max-w-[8ch] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95]">What’s next.</h2>
            </div>
            <div className="space-y-3">
              {contentCalendar.map((item, i) => (
                <article key={item.title} className="frame p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-dim">Q{String(i + 1).padStart(2, "0")}</div>
                      <h3 className="mt-2 font-display text-3xl leading-none text-bright">{item.title}</h3>
                      {item.description && <p className="mt-3 text-sm leading-7 text-fg/78">{item.description}</p>}
                    </div>
                    <Tag tone={item.status === "published" ? "ok" : item.status === "in-progress" ? "accent" : "dim"}>
                      {item.status}
                    </Tag>
                  </div>
                </article>
              ))}
            </div>
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
