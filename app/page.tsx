"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, ArrowRight, Sparkles, Briefcase, Code, Cloud, Brain, TrendingUp } from "lucide-react"
import Link from "next/link"
import { TopNavigation } from "@/components/top-navigation"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import { PersonSchema, WebsiteSchema } from "@/components/structured-data"
import { Suspense } from "react"
import { FadeIn, ScaleOnHover, CardHover, StaggerContainer, StaggerItem } from "@/components/animations"

// Main content component that uses hooks
function HomeContent() {
  const isMobile = useIsMobile()
  
  const expertiseAreas = [
    { icon: <Code className="w-6 h-6" />, title: "Full-Stack", description: "React, Next.js, Go, Python" },
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud & DevOps", description: "AWS, Kubernetes, Terraform" },
    { icon: <Brain className="w-6 h-6" />, title: "AI & ML", description: "LLMs, AI Agents, MLOps" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PersonSchema />
      <WebsiteSchema />
      <FloatingTags />
      <TopNavigation activeSection="home" />

      {/* Hero Section - Full Width */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <FadeIn delay={0.1} direction="up">
              <div className="space-y-6">
                <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold tracking-tight`}>
                  <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                    Hi, I'm Aashir
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Versatile Engineer
                  </span>
                </h1>

                <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground leading-relaxed max-w-2xl`}>
                  Building next-generation systems across full-stack development, cloud infrastructure, and AI integration. 
                  Specialized in LLMs, production AI agents, and scalable architectures that drive real business impact.
                </p>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">Currently leading Core Engineering at Motorway</span>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <ScaleOnHover>
                    <Button size="lg" className="shadow-lg" asChild>
                      <Link href="/contact">
                        Get In Touch
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/projects">View Work</Link>
                    </Button>
                  </ScaleOnHover>
                </div>
              </div>
            </FadeIn>

            {/* Right Column - Profile Image */}
            <FadeIn delay={0.3} direction="up">
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                  <ScaleOnHover>
                    <Avatar className={`${isMobile ? 'w-48 h-48' : 'w-64 h-64'} border-4 border-background shadow-2xl relative z-10`}>
                      <AvatarImage src="/me.png" alt="Aashir Javed" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-4xl">
                        AJ
                      </AvatarFallback>
                    </Avatar>
                  </ScaleOnHover>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <div className="text-center mb-12">
              <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4`}>Areas of Expertise</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Specialized knowledge across the full technology spectrum
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {expertiseAreas.map((area, index) => (
              <StaggerItem key={index}>
                <CardHover>
                  <Card className="border-2 h-full hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                        {area.icon}
                      </div>
                      <CardTitle>{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{area.description}</CardDescription>
                    </CardContent>
                  </Card>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.4} direction="up">
            <CardHover>
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <CardTitle className="text-2xl">What I Do</CardTitle>
                  </div>
                  <Separator />
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className={`leading-relaxed ${isMobile ? 'text-base' : 'text-lg'} space-y-4`}>
                    <p>
                      I'm a versatile engineer with <span className="font-semibold text-foreground">8+ years</span> building scalable systems
                      across the entire technology stack. Currently at{" "}
                      <Badge variant="secondary" className="font-semibold">Motorway</Badge>, I lead backend engineering, AI
                      integration, and cross-functional teams.
                    </p>
                    <p>
                      My expertise spans React/Next.js frontends, Go/Python backends, AWS infrastructure, and cutting-edge AI implementations.
                      I've delivered millions in cost savings, built production AI agents processing 10,000+ cases daily, and led teams
                      that have shipped mission-critical systems.
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </CardHover>
          </FadeIn>
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <Card className="border-2 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    8+
                  </div>
                  <CardDescription className="text-base">Years of Experience</CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-2 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    £7M+
                  </div>
                  <CardDescription className="text-base">Cost Savings Delivered</CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-2 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    100+
                  </div>
                  <CardDescription className="text-base">Engineers Mentored</CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.5} direction="up">
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4 text-white">Let's Work Together</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Interested in collaborating or discussing opportunities? I'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center gap-4">
                <ScaleOnHover>
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </ScaleOnHover>
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800" asChild>
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </ScaleOnHover>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.6} direction="up">
            <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center justify-between'} text-sm text-muted-foreground`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Last updated: June 27, 2025</span>
              </div>
              <div className="flex items-center gap-4">
                <ScaleOnHover>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com/aashirjaved" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                    </Link>
                  </Button>
                </ScaleOnHover>
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  )
}

// Main export wrapped in Suspense
export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}