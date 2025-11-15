"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Github, ExternalLink, Calendar, BookOpen, Sparkles, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { TopNavigation } from "@/components/top-navigation"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { blogPosts, contentCalendar } from "@/data/blog-data"
import { ArticleSchema } from "@/components/structured-data"
import Image from "next/image"
import { Suspense } from "react"
import { FadeIn, CardHover, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations"

// WritingContent component with the actual content
function WritingContent() {
  const featuredArticles = blogPosts.filter((post) => post.featured)
  const otherArticles = blogPosts.filter((post) => !post.featured)
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-background">
      <FloatingTags />
      <TopNavigation activeSection="writing" />

      {/* Add structured data for the first featured article */}
      {featuredArticles.length > 0 && (
        <ArticleSchema
          title={featuredArticles[0].title}
          description={featuredArticles[0].description}
          url={`https://aashir.net/writing/${featuredArticles[0].slug}`}
          image={featuredArticles[0].image || "/me.png"}
          datePublished={featuredArticles[0].date}
          keywords={featuredArticles[0].tags}
        />
      )}

      {/* Hero Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-bold mb-4`}>
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Writing
                </span>
              </h1>
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground leading-relaxed`}>
                Technical insights on AI, full-stack development, infrastructure, and engineering leadership from
                real-world production experience.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <Tabs defaultValue="articles">
            <TabsList>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Content</TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles" className="mt-6">
              {/* Featured Articles */}
              <div className="mb-16">
                <FadeIn delay={0.2} direction="up">
                  <div className="flex items-center gap-3 mb-8 justify-center">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Featured Articles</h2>
                  </div>
                </FadeIn>

                <StaggerContainer className="space-y-8" staggerDelay={0.1}>
                  {featuredArticles.map((post, index) => (
                    <StaggerItem key={index}>
                      <CardHover>
                        <Card className="border-2 overflow-hidden hover:shadow-xl transition-all">
                          <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />
                          <CardHeader>
                            <div className={`flex ${isMobile ? 'flex-col' : 'items-start justify-between'} gap-4`}>
                              <div className="flex-1">
                                <CardTitle className={`${isMobile ? 'text-xl' : 'text-2xl'} mb-3`}>
                                  <Link href={`/writing/${post.slug}`} className="hover:text-primary transition-colors">
                                    {post.title}
                                  </Link>
                                </CardTitle>
                                <div className={`flex ${isMobile ? 'flex-wrap' : 'items-center'} gap-4 text-sm text-muted-foreground mb-4`}>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {post.date}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    {post.readingTime}
                                  </div>
                                  <Badge variant="secondary">{post.category}</Badge>
                                </div>
                              </div>
                              <Link
                                href={`/writing/${post.slug}`}
                                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </Link>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="mb-4">{post.description}</CardDescription>

                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 3).map((tag, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {post.tags.length > 3 && (
                                  <Badge variant="outline" className="text-xs text-muted-foreground">
                                    +{post.tags.length - 3}
                                  </Badge>
                                )}
                              </div>
                              <ScaleOnHover>
                                <Button size="sm" variant="ghost" asChild>
                                  <Link href={`/writing/${post.slug}`}>
                                    Read more
                                    <ExternalLink className="w-3 h-3 ml-1" />
                                  </Link>
                                </Button>
                              </ScaleOnHover>
                            </div>
                          </CardContent>
                        </Card>
                      </CardHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Other Articles */}
              <div className="mb-16">
                <FadeIn delay={0.3} direction="up">
                  <div className="flex items-center gap-3 mb-8 justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider">More Articles</h2>
                  </div>
                </FadeIn>

                <StaggerContainer className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6`} staggerDelay={0.1}>
                  {otherArticles.map((post, index) => (
                    <StaggerItem key={index}>
                      <CardHover>
                        <Card className="border-2 hover:shadow-xl transition-all h-full">
                          <CardHeader>
                            <CardTitle className="text-lg mb-2">
                              <Link href={`/writing/${post.slug}`} className="hover:text-primary transition-colors">
                                {post.title}
                              </Link>
                            </CardTitle>
                            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readingTime}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-sm mb-4 line-clamp-2">{post.description}</CardDescription>
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                              <ScaleOnHover>
                                <Button size="sm" variant="ghost" className="text-xs p-2 h-auto" asChild>
                                  <Link href={`/writing/${post.slug}`}>
                                    Read
                                    <ExternalLink className="w-3 h-3 ml-1" />
                                  </Link>
                                </Button>
                              </ScaleOnHover>
                            </div>
                          </CardContent>
                        </Card>
                      </CardHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-6">
              <FadeIn delay={0.2} direction="up">
                <Card className="border-2 mb-12">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      <CardTitle className="text-sm font-bold text-primary uppercase tracking-wider">Content Calendar</CardTitle>
                    </div>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-8">
                      Here's what I'm currently working on. Topics may evolve as I research and write, but this gives you an idea of what's coming up next.
                    </CardDescription>
                    
                    <div className="space-y-6">
                      {contentCalendar.map((item, index) => (
                        <div key={index} className="flex gap-6 pb-6 border-b last:border-0">
                          <div className="w-24 shrink-0">
                            <div className="text-sm font-medium text-muted-foreground">{item.targetDate}</div>
                            <Badge 
                              variant={item.status === 'published' ? 'default' : item.status === 'in-progress' ? 'secondary' : 'outline'}
                              className="mt-1 text-xs"
                            >
                              {item.status.replace('-', ' ')}
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium mb-1">{item.title}</h3>
                            {item.description && <CardDescription className="mb-2">{item.description}</CardDescription>}
                            <div className="flex flex-wrap gap-2">
                              {item.topics.slice(0, 3).map((topic, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                              {item.topics.length > 3 && (
                                <Badge variant="outline" className="text-xs text-muted-foreground">
                                  +{item.topics.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="w-20 shrink-0 text-center">
                            <Badge variant="secondary" className="text-xs">
                              {item.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
              
              <FadeIn delay={0.3} direction="up">
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-800">Have a topic suggestion?</CardTitle>
                    <CardDescription>
                      If there's a specific topic you'd like me to cover in a future article, tutorial or talk, I'd love to hear your suggestions!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScaleOnHover>
                      <Button asChild>
                        <Link href="/contact">
                          Suggest a Topic
                        </Link>
                      </Button>
                    </ScaleOnHover>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>
          </Tabs>

          {/* Newsletter Banner */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <FadeIn delay={0.4} direction="up">
                <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 text-white">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-4 text-white">Subscribe to My Newsletter</CardTitle>
                    <CardDescription className="text-slate-300">
                      Get notified when I publish new articles, tutorials, and insights on AI, engineering, and technology trends.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="max-w-md mx-auto">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                          type="email"
                          placeholder="Your email address"
                          className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                        />
                        <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                      </div>
                      <p className="text-xs text-slate-400 mt-3 text-center">
                        I respect your privacy. No spam, just valuable content. Unsubscribe anytime.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.5} direction="up">
            <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center justify-between'} text-sm text-muted-foreground`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Last updated: June 27, 2025</span>
              </div>
              <ScaleOnHover>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com/aashirjaved" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </Link>
                </Button>
              </ScaleOnHover>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  )
}

// Main component wrapped with Suspense
export default function Writing() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    }>
      <WritingContent />
    </Suspense>
  )
}
