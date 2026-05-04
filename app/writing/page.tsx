"use client"

import Link from "next/link"
import { Suspense } from "react"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { RetroFooter } from "@/components/retro-footer"
import { TerminalWindow } from "@/components/crt/terminal-window"
import { GlitchText } from "@/components/crt/glitch-text"
import { RetroTag } from "@/components/crt/retro-tag"
import { RetroButton } from "@/components/crt/retro-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { blogPosts, contentCalendar } from "@/data/blog-data"
import { ArticleSchema } from "@/components/structured-data"

function WritingContent() {
  const featured = blogPosts.filter((p) => p.featured)
  const others = blogPosts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen">
      <TopNavigation activeSection="writing" />

      {featured.length > 0 && (
        <ArticleSchema
          title={featured[0].title}
          description={featured[0].description}
          url={`https://aashir.net/writing/${featured[0].slug}`}
          image={featured[0].image || "/me.png"}
          datePublished={featured[0].date}
          keywords={featured[0].tags}
        />
      )}

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-xs uppercase text-muted-foreground mb-2">
            <span className="text-primary">$&gt;</span> ls -t /writing
          </div>
          <h1 className="font-pixel text-3xl sm:text-5xl phosphor-glow mb-3">
            <GlitchText text="WRITING.dir" />
          </h1>
          <p className="font-mono text-sm sm:text-base text-card-foreground max-w-2xl">
            <span className="text-primary">// </span>
            Notes from production — AI, full-stack, infra, leadership.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="articles">
            <TabsList className="bg-background border-2 border-primary p-0 h-auto rounded-none">
              <TabsTrigger
                value="articles"
                className="font-pixel text-[10px] sm:text-xs uppercase tracking-wider rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
              >
                ARTICLES
              </TabsTrigger>
              <TabsTrigger
                value="upcoming"
                className="font-pixel text-[10px] sm:text-xs uppercase tracking-wider rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
              >
                UPCOMING
              </TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="mt-6 space-y-8">
              <div>
                <div className="font-pixel text-xs uppercase tracking-widest mb-4 phosphor-glow-amber">
                  <span className="text-secondary">[</span> FEATURED <span className="text-secondary">]</span>
                </div>
                <div className="space-y-4">
                  {featured.map((p, i) => (
                    <TerminalWindow key={i} title={`${p.slug}.md`} variant="amber" prompt={p.readingTime}>
                      <Link href={`/writing/${p.slug}`} className="block group">
                        <div className="flex items-start justify-between gap-4">
                          <h2 className="font-pixel text-base sm:text-lg phosphor-glow group-hover:phosphor-glow-amber leading-snug">
                            {p.title}
                          </h2>
                          <ArrowUpRight className="w-5 h-5 text-secondary shrink-0" />
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-3 mb-3 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {p.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {p.readingTime}
                          </span>
                          <RetroTag variant="amber">{p.category}</RetroTag>
                        </div>
                        <p className="font-mono text-sm text-card-foreground leading-relaxed">
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {p.tags.map((t, j) => (
                            <RetroTag key={j} variant="green">
                              {t}
                            </RetroTag>
                          ))}
                        </div>
                      </Link>
                    </TerminalWindow>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-pixel text-xs uppercase tracking-widest mb-4 phosphor-glow">
                  <span className="text-primary">[</span> ARCHIVE <span className="text-primary">]</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {others.map((p, i) => (
                    <TerminalWindow key={i} title={`${p.slug}.md`} variant="green" controls={false}>
                      <Link href={`/writing/${p.slug}`} className="block group">
                        <h3 className="font-pixel text-sm phosphor-glow leading-snug mb-2">
                          {p.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-[10px] sm:text-xs text-muted-foreground mb-2 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {p.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {p.readingTime}
                          </span>
                        </div>
                        <p className="font-mono text-xs text-card-foreground line-clamp-2">
                          {p.description}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <RetroTag variant="green">{p.category}</RetroTag>
                          <span className="text-primary text-xs font-mono">READ →</span>
                        </div>
                      </Link>
                    </TerminalWindow>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-6">
              <TerminalWindow title="content_calendar.tsv" variant="cyan">
                <div className="font-mono text-xs sm:text-sm space-y-3">
                  <div className="grid grid-cols-[auto_1fr_auto] gap-3 pb-2 border-b border-primary/30 text-primary uppercase tracking-wider">
                    <span>DATE</span>
                    <span>TITLE</span>
                    <span>TYPE</span>
                  </div>
                  {contentCalendar.map((c, i) => (
                    <div key={i} className="grid grid-cols-[auto_1fr_auto] gap-3 py-2 border-b border-primary/15 last:border-0">
                      <div className="text-muted-foreground text-xs whitespace-nowrap">{c.targetDate}</div>
                      <div>
                        <div className="phosphor-glow text-card-foreground">{c.title}</div>
                        {c.description && (
                          <div className="text-muted-foreground text-xs mt-1">{c.description}</div>
                        )}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {c.topics.map((t, j) => (
                            <RetroTag key={j} variant="cyan">
                              {t}
                            </RetroTag>
                          ))}
                          <RetroTag variant={c.status === "in-progress" ? "amber" : "green"}>
                            {c.status.replace("-", " ")}
                          </RetroTag>
                        </div>
                      </div>
                      <RetroTag variant="magenta">{c.type}</RetroTag>
                    </div>
                  ))}
                </div>
              </TerminalWindow>

              <div className="mt-6">
                <TerminalWindow title="suggest.sh" variant="magenta">
                  <div className="text-center space-y-3">
                    <div className="font-pixel text-base phosphor-glow-magenta">SUGGEST_TOPIC?</div>
                    <p className="font-mono text-sm text-card-foreground">
                      <span className="text-accent">// </span>
                      Got something you want me to write about? Open a channel.
                    </p>
                    <Link href="/contact">
                      <RetroButton variant="magenta">SUBMIT_TOPIC</RetroButton>
                    </Link>
                  </div>
                </TerminalWindow>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <RetroFooter />
    </div>
  )
}

export default function Writing() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background font-mono text-primary phosphor-glow">
          LOADING...
        </div>
      }
    >
      <WritingContent />
    </Suspense>
  )
}
