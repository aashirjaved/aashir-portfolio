import {
  Container,
  Footer,
  PageHero,
  Reveal,
  PostRow,
  Pill,
} from "@/components/editorial";
import Newsletter from "@/components/newsletter";
import { ArticleSchema } from "@/components/structured-data";
import { blogPosts, contentCalendar } from "@/data/blog-data";

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
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
      <Container>
        <PageHero
          eyebrow={`${sorted.length} posts · ${contentCalendar.length} queued`}
          number="W"
          title="Notes from"
          italic="production."
          lede="AI agents, infra rot, full-stack reality, and what eight years taught me about leading engineers without breaking them."
        />

        <Reveal>
          <div>
            {sorted.map((p) => (
              <PostRow
                key={p.slug}
                href={`/writing/${p.slug}`}
                title={p.title}
                date={fmtDate(p.date)}
                readingTime={p.readingTime.replace(" min read", " min")}
                description={p.description}
                tags={p.tags}
                featured={p.featured}
              />
            ))}
          </div>
        </Reveal>

        <section className="pt-24">
          <Reveal>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <h2 className="display text-[clamp(2rem,5vw,3.25rem)] leading-[0.95] text-ink">
                Up <span className="display-italic text-ink-mute">next</span>
              </h2>
              <p className="mono text-xs uppercase tracking-wider text-ink-mute">
                Editorial calendar
              </p>
            </div>
          </Reveal>
          <Reveal>
            <ul className="space-y-0">
              {contentCalendar.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-1 sm:grid-cols-[5rem_1fr_auto] gap-y-2 sm:gap-x-8 py-5 border-b border-rule-soft last:border-0"
                >
                  <div className="mono text-xs uppercase tracking-wider text-ink-mute pt-1">
                    {item.type}
                  </div>
                  <div className="min-w-0">
                    <div className="text-ink display-italic text-lg">{item.title}</div>
                    {item.description && (
                      <p className="text-sm text-ink-mute mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="self-start sm:self-center">
                    <Pill
                      tone={
                        item.status === "published"
                          ? "ok"
                          : item.status === "in-progress"
                            ? "accent"
                            : "default"
                      }
                    >
                      {item.status}
                    </Pill>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <Reveal>
          <div className="pt-24">
            <Newsletter />
          </div>
        </Reveal>

        <Footer />
      </Container>
    </>
  );
}
