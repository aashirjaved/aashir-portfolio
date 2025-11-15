"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Award, Users, TrendingUp, Sparkles, Brain, Code, Cloud, Heart } from "lucide-react"
import Link from "next/link"
import { TopNavigation } from "@/components/top-navigation"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import { Suspense } from "react"
import { FadeIn, CardHover, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations"

const skills = [
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    skills: ["LLM Integration", "Prompt Engineering", "Agentic AI", "Fine-tuning", "Vector Databases", "MLOps"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    category: "Full-Stack Development",
    icon: <Code className="w-6 h-6" />,
    skills: ["React/Next.js", "TypeScript", "Go", "Python", "Java", "Node.js"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD", "Monitoring"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    category: "Data & Databases",
    icon: <Users className="w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Data Modeling", "Query Optimization"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    category: "Leadership & Management",
    icon: <Heart className="w-6 h-6" />,
    skills: ["Team Leadership", "Project Management", "Stakeholder Management", "Mentoring", "Technical Strategy"],
    gradient: "from-rose-500 to-pink-600",
  },
]

const achievements = [
  {
    title: "AI Innovation Leader",
    description: "Built production AI agents processing 10,000+ customer service cases daily with 95% accuracy",
    icon: <Brain className="w-5 h-5" />,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Cost Optimization Expert",
    description: "Delivered £2M+ in annual cost savings through AI automation and infrastructure optimization",
    icon: <TrendingUp className="w-5 h-5" />,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Technical Mentor",
    description: "Led cross-functional teams and mentored 100+ engineers across multiple organizations",
    icon: <Users className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Performance Engineer",
    description: "Architected systems handling 1000+ RPS with 15% latency improvements and 99.9% uptime",
    icon: <Award className="w-5 h-5" />,
    gradient: "from-orange-500 to-red-600",
  },
]

// About page content component that uses hooks
function AboutContent() {
  const isMobile = useIsMobile()
  
  return (
    <div className="min-h-screen bg-background">
      <FloatingTags />
      <TopNavigation activeSection="about" />

      {/* Hero Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-bold mb-4`}>
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground leading-relaxed`}>
                Learn more about my journey, expertise, and what drives me as a versatile engineer building the future of
                technology.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto">

          {/* Personal Story */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.2} direction="up">
              <div className="max-w-4xl mx-auto">
              <CardHover>
                <Card className="border-2 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      <CardTitle className="text-sm font-bold text-primary uppercase tracking-wider">
                        My Journey
                      </CardTitle>
                    </div>
                    <Separator />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className={`leading-relaxed ${isMobile ? 'text-base' : 'text-lg'}`}>
                      I'm a versatile engineer with <span className="font-semibold text-foreground">8+ years</span> of
                      experience building scalable systems that span the entire technology spectrum. My journey began with a
                      passion for solving complex problems through elegant code, and has evolved into leading teams and
                      architecting solutions that drive real business impact.
                    </CardDescription>

                    <CardDescription>
                      Currently based in <Badge variant="outline" className="font-semibold">London</Badge>, I work as a Senior Backend Engineer
                      at <Badge variant="secondary" className="font-semibold">Motorway</Badge>, where I lead the Core Engineering
                      team in building foundational services that empower product teams to ship quickly and reliably. My
                      recent focus has been on integrating cutting-edge AI and LLMs into production systems.
                    </CardDescription>

                    <CardDescription>
                      What sets me apart is my ability to work across the entire technology stack - from crafting
                      pixel-perfect React interfaces to designing distributed backend systems, from managing cloud
                      infrastructure to building intelligent AI agents. I believe in end-to-end ownership and thrive on
                      understanding how all pieces fit together.
                    </CardDescription>

                    <CardDescription>
                      Beyond technical expertise, I'm passionate about{" "}
                      <span className="font-semibold text-primary">mentoring engineers</span>, leading cross-functional
                      teams, and establishing engineering practices that promote both innovation and operational excellence.
                      I've had the privilege of training 100+ engineers and leading initiatives that have delivered millions
                      in cost savings.
                    </CardDescription>
                  </CardContent>
                </Card>
              </CardHover>
              </div>
            </FadeIn>
          </section>

          {/* Key Achievements */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <FadeIn delay={0.3} direction="up">
              <div className="max-w-7xl mx-auto">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-8">Key Achievements</h2>
              <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
                {achievements.map((achievement, index) => (
                  <StaggerItem key={index}>
                    <CardHover>
                      <Card className="border-2 hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                            >
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="mb-2 text-lg">{achievement.title}</CardTitle>
                              <CardDescription className="leading-relaxed">{achievement.description}</CardDescription>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CardHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              </div>
            </FadeIn>
          </section>

          {/* Skills Overview */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.4} direction="up">
              <div className="max-w-7xl mx-auto">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-8">Technical Expertise</h2>
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {skills.map((skillGroup, index) => (
                  <StaggerItem key={index}>
                    <CardHover>
                      <Card className="border-2 hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 bg-gradient-to-br ${skillGroup.gradient} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                            >
                              {skillGroup.icon}
                            </div>
                            <CardTitle className="text-base">{skillGroup.category}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="font-normal">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </CardHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              </div>
            </FadeIn>
          </section>

          {/* Current Focus */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <FadeIn delay={0.5} direction="up">
              <div className="max-w-4xl mx-auto">
              <CardHover>
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold text-primary uppercase tracking-wider">
                      Current Focus
                    </CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-lg leading-relaxed">
                      I'm particularly excited about the intersection of traditional software engineering and AI. My recent
                      work involves building{" "}
                      <Badge variant="secondary" className="font-semibold">production-ready AI agents</Badge>, implementing
                      LLM-powered automation, and creating robust MLOps workflows that can scale to handle thousands of
                      requests per second.
                    </CardDescription>

                    <CardDescription>
                      I'm also passionate about{" "}
                      <Badge variant="outline" className="font-semibold">infrastructure optimization</Badge> and cost management.
                      Through careful analysis and strategic improvements, I've helped organizations reduce their AWS costs
                      by 15% while improving system reliability and performance.
                    </CardDescription>

                    <CardDescription>
                      On the leadership side, I'm focused on building high-performing engineering teams, establishing
                      technical standards, and creating environments where engineers can do their best work while delivering
                      exceptional business outcomes.
                    </CardDescription>
                  </CardContent>
                </Card>
              </CardHover>
              </div>
            </FadeIn>
          </section>

          {/* Personal Interests */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.6} direction="up">
              <div className="max-w-4xl mx-auto">
              <CardHover>
                <Card className="border-2 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold text-primary uppercase tracking-wider">
                      Beyond Work
                    </CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">
                      When I'm not coding, you'll find me exploring the latest developments in AI and machine learning,
                      contributing to open-source projects, or writing technical articles to share knowledge with the
                      engineering community.
                    </CardDescription>

                    <CardDescription>
                      I believe in continuous learning and staying current with emerging technologies. I regularly attend
                      tech conferences, participate in engineering communities, and enjoy mentoring other developers who are
                      starting their journey in software engineering.
                    </CardDescription>

                    <CardDescription>
                      I'm also passionate about the intersection of technology and business, always looking for ways to
                      leverage technical solutions to solve real-world problems and create meaningful impact.
                    </CardDescription>
                  </CardContent>
                </Card>
              </CardHover>
              </div>
            </FadeIn>
          </section>

          {/* Call to Action */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <FadeIn delay={0.7} direction="up">
              <div className="max-w-4xl mx-auto">
              <CardHover>
                <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 text-white shadow-2xl">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-4 text-white">Let's Connect</CardTitle>
                    <CardDescription className="text-slate-300 text-lg leading-relaxed">
                      Interested in collaborating, discussing technology, or exploring opportunities? I'd love to hear from
                      you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center gap-4">
                    <ScaleOnHover>
                      <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg" asChild>
                        <Link href="/contact">Get In Touch</Link>
                      </Button>
                    </ScaleOnHover>
                    <ScaleOnHover>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                        asChild
                      >
                        <Link href="/projects">View My Work</Link>
                      </Button>
                    </ScaleOnHover>
                  </CardContent>
                </Card>
              </CardHover>
              </div>
            </FadeIn>
          </section>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.8} direction="up">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Last updated: December 27, 2024</span>
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

// Main export wrapped in Suspense
export default function About() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <p className="text-slate-600">Loading...</p>
      </div>
    }>
      <AboutContent />
    </Suspense>
  )
}
