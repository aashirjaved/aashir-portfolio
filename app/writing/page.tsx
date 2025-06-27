"use client"

import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar, BookOpen, Sparkles, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { blogPosts, contentCalendar } from "@/data/blog-data"
import { ArticleSchema } from "@/components/structured-data"
import Image from "next/image"
import { Suspense } from "react"

// WritingContent component with the actual content
function WritingContent() {
  const featuredArticles = blogPosts.filter((post) => post.featured)
  const otherArticles = blogPosts.filter((post) => !post.featured)
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <FloatingTags />
      <Sidebar activeSection="writing" />

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'ml-0 pt-16' : 'ml-64'}`}>
        <div className={`max-w-4xl mx-auto ${isMobile ? 'p-6' : 'p-12'}`}>
          
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
          
          <div className="mb-12">
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4`}>
              Writing
            </h1>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-slate-600 leading-relaxed`}>
              Technical insights on AI, full-stack development, infrastructure, and engineering leadership from
              real-world production experience.
            </p>
          </div>

          {/* Tabs for Articles and Content Calendar */}
          <Tabs defaultValue="articles" className="mb-8">
            <TabsList>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Content</TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles" className="mt-6">
              {/* Featured Articles */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider">Featured Articles</h2>
                </div>

                <div className="space-y-8">
                  {featuredArticles.map((post, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className={`h-1 bg-gradient-to-r from-blue-500 to-indigo-600`}></div>

                      <div className={`${isMobile ? 'p-6' : 'p-8'}`}>
                        <div className={`flex ${isMobile ? 'flex-col' : 'items-start justify-between'} mb-4`}>
                          <div className="flex-1">
                            <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors`}>
                              <Link href={`/writing/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <div className={`flex ${isMobile ? 'flex-wrap' : 'items-center'} gap-${isMobile ? '4' : '6'} text-sm text-slate-500 mb-4`}>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                {post.readingTime}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-1">{post.category}</span>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={`/writing/${post.slug}`}
                            className={`text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50 ${isMobile ? 'self-end' : ''}`}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        </div>

                        <p className="text-slate-600 mb-4">{post.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="text-xs font-medium bg-slate-100 text-slate-700 rounded-full px-2 py-1"
                              >
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs font-medium bg-slate-100 text-slate-500 rounded-full px-2 py-1">
                                +{post.tags.length - 3}
                              </span>
                            )}
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                            asChild
                          >
                            <Link href={`/writing/${post.slug}`}>
                              Read more
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Articles */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider">More Articles</h2>
                </div>

                <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-8'}`}>
                  {otherArticles.map((post, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className={`p-6`}>
                        <h3 className={`text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors`}>
                          <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <div className={`flex flex-wrap gap-4 text-xs text-slate-500 mb-3`}>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readingTime}
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-1">
                            {post.category}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-xs text-slate-500 hover:text-blue-600 hover:bg-blue-50 p-2 h-auto"
                            asChild
                          >
                            <Link href={`/writing/${post.slug}`}>
                              Read
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider">Content Calendar</h2>
                </div>
                
                <p className="text-slate-600 mb-8">
                  Here's what I'm currently working on. Topics may evolve as I research and write, but this gives you an idea of what's coming up next.
                </p>
                
                <div className="space-y-6">
                  {contentCalendar.map((item, index) => (
                    <div key={index} className="flex gap-6 pb-6 border-b border-slate-100">
                      <div className="w-24 shrink-0">
                        <div className="text-sm font-medium text-slate-500">{item.targetDate}</div>
                        <div className={`mt-1 text-xs font-semibold px-2 py-1 rounded-full inline-block
                          ${item.status === 'published' ? 'bg-green-100 text-green-800' : 
                            item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                            'bg-slate-100 text-slate-800'}`}
                        >
                          {item.status.replace('-', ' ')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900 mb-1">{item.title}</h3>
                        {item.description && <p className="text-sm text-slate-600 mb-2">{item.description}</p>}
                        <div className="flex flex-wrap gap-2">
                          {item.topics.slice(0, 3).map((topic, i) => (
                            <span key={i} className="text-xs font-medium bg-slate-100 text-slate-700 rounded-full px-2 py-1">
                              {topic}
                            </span>
                          ))}
                          {item.topics.length > 3 && (
                            <span className="text-xs font-medium bg-slate-100 text-slate-500 rounded-full px-2 py-1">
                              +{item.topics.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-20 shrink-0 text-center">
                        <div className={`text-xs font-semibold px-2 py-1 rounded-full
                          ${item.type === 'blog' ? 'bg-indigo-100 text-indigo-800' : 
                            item.type === 'tutorial' ? 'bg-emerald-100 text-emerald-800' : 
                            item.type === 'video' ? 'bg-red-100 text-red-800' : 
                            'bg-amber-100 text-amber-800'}`}
                        >
                          {item.type}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-lg font-bold text-blue-800 mb-4">Have a topic suggestion?</h3>
                <p className="text-slate-700 mb-6">
                  If there's a specific topic you'd like me to cover in a future article, tutorial or talk, I'd love to hear your suggestions!
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
                  <Link href="/contact">
                    Suggest a Topic
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Newsletter Banner */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
                <p className="text-slate-300 mb-6">
                  Get notified when I publish new articles, tutorials, and insights on AI, engineering, and technology trends.
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                  </div>
                  <p className="text-xs text-slate-400 mt-3">
                    I respect your privacy. No spam, just valuable content. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 mt-12 border-t border-slate-200">
            <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center justify-between'} text-sm text-slate-500`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Last updated: June 27, 2025</span>
              </div>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700" asChild>
                <Link href="https://github.com/aashirjaved" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main component wrapped with Suspense
export default function Writing() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <p className="text-slate-600">Loading...</p>
      </div>
    }>
      <WritingContent />
    </Suspense>
  )
}
