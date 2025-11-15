"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Calendar, MapPin, TrendingUp, Target, Zap, Users, Server, Building, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TopNavigation } from "@/components/top-navigation"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import CompanyLogo from "@/components/companies/company-logo"
import { FadeIn, CardHover, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations"

const experiences = [
  {
    title: "Senior Backend Engineer",
    company: "Motorway",
    location: "London, UK",
    period: "June 2024 – Present",
    team: "Core Engineering",
    logo: "/logos/motorway.svg",
    companyColor: "from-green-500 to-emerald-600",
    description: [
      "Lead Core Engineering team building foundational services and architecture that empower product teams to ship quickly and reliably",
      "Delivered trade proposition for Motorway Pro, resulting in 15% increased platform volume and significant revenue growth",
      "Led critical auth system migration to decoupled AuthN/AuthZ services, resolving customer pain points and boosting conversion by 7%",
      "Established operational excellence working group, reducing technical debt and achieving 15% annual AWS cost reduction",
      "Built full-stack monitoring dashboards with React/Next.js for real-time system observability across microservices",
      "Implemented AI-powered incident management using LLMs for automatic categorization, reducing response time by 40%",
    ],
    metrics: [
      { label: "Platform Volume", value: "+15%", icon: <TrendingUp className="w-4 h-4" />, color: "text-green-600" },
      { label: "Conversion Rate", value: "+7%", icon: <Target className="w-4 h-4" />, color: "text-blue-600" },
      { label: "AWS Costs", value: "-15%", icon: <Zap className="w-4 h-4" />, color: "text-purple-600" },
    ],
    technologies: [
      "Go",
      "Python",
      "React",
      "Next.js",
      "AWS",
      "Terraform",
      "Kubernetes",
      "TypeScript",
      "LLM Integration",
      "OAuth2.0",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Deliveroo",
    location: "London, UK",
    period: "May 2022 – June 2024",
    team: "Platform - Customer Care",
    logo: "/logos/deliveroo.svg",
    companyColor: "from-teal-500 to-cyan-600",
    description: [
      "Led end-to-end automation of customer care journeys using fine-tuned GenAI models and high-availability Go APIs",
      "Achieved 2x CSAT improvement and 50% reduction in request handling time through intelligent automation",
      "Built production AI agents processing 10,000+ daily cases with 95% accuracy for refunds and order resolution",
      "Designed multi-region infrastructure using Terraform and Kubernetes for seamless global deployment",
      "Conducted engineering gamedays and incident response training for 100+ engineers across the organization",
      "Developed prompt engineering frameworks and fine-tuning pipelines for customer service-specific LLMs",
    ],
    metrics: [
      { label: "CSAT Score", value: "2x", icon: <Users className="w-4 h-4" />, color: "text-emerald-600" },
      { label: "Cost Savings", value: "£2M", icon: <TrendingUp className="w-4 h-4" />, color: "text-green-600" },
      { label: "Automation", value: "60%", icon: <Target className="w-4 h-4" />, color: "text-blue-600" },
    ],
    technologies: [
      "React",
      "Go",
      "Python",
      "LLM Fine-tuning",
      "Prompt Engineering",
      "Kubernetes",
      "Terraform",
      "PostgreSQL",
      "AI Agents",
    ],
  },
  {
    title: "Software Engineer",
    company: "Zalando",
    location: "Helsinki, Finland",
    period: "Jan 2021 – May 2022",
    team: "Customer Fulfillment",
    logo: "/logos/zalando.svg",
    companyColor: "from-orange-500 to-red-600",
    description: [
      "Owned critical warehouse integration gateway connecting Inbound Distribution Centers with Zalando's core infrastructure",
      "Built responsive React/TypeScript interfaces for warehouse management systems used by operations teams daily",
      "Implemented AI-powered demand forecasting models, improving inventory optimization by 25% and reducing stockouts",
      "Optimized high-performance Java APIs to handle 1000+ RPS with 15% latency reduction through query optimization",
      "Established comprehensive monitoring infrastructure using Grafana and Prometheus with custom alerting",
    ],
    metrics: [
      { label: "API Performance", value: "1000+ RPS", icon: <Server className="w-4 h-4" />, color: "text-orange-600" },
      { label: "Latency", value: "-15%", icon: <Zap className="w-4 h-4" />, color: "text-red-600" },
      {
        label: "Inventory Optimization",
        value: "+25%",
        icon: <TrendingUp className="w-4 h-4" />,
        color: "text-green-600",
      },
    ],
    technologies: [
      "Java",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Grafana",
      "Prometheus",
      "Machine Learning",
    ],
  },
  {
    title: "Lead Cloud Engineer",
    company: "Nordcloud (IBM)",
    location: "Helsinki, Finland",
    period: "Aug 2019 – Jan 2021",
    team: "Cloud Transformation",
    logo: "/logos/ibm.svg",
    companyColor: "from-blue-500 to-indigo-600",
    description: [
      "Led architectural design for enterprise cloud migration projects, focusing on AWS, Azure, and GCP platforms",
      "Designed and implemented multi-cloud migration platform transforming monolithic applications into microservices",
      "Managed complex migration projects for financial and healthcare clients, delivering £5M+ in operational savings",
      "Created automated data transformation pipelines ensuring zero data loss during high-risk migrations",
      "Implemented CI/CD workflows with advanced security checks, accelerating deployments by 40%",
    ],
    metrics: [
      { label: "Migrations", value: "30+", icon: <Building className="w-4 h-4" />, color: "text-blue-600" },
      { label: "Efficiency", value: "+40%", icon: <TrendingUp className="w-4 h-4" />, color: "text-green-600" },
      { label: "Cost Savings", value: "£5M+", icon: <Zap className="w-4 h-4" />, color: "text-purple-600" },
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "Python", "Go", "PostgreSQL"],
  },
]

// Main component
export default function Experience() {
  const isMobile = useIsMobile()
  
  return (
    <div className="min-h-screen bg-background">
      <FloatingTags />
      <TopNavigation activeSection="experience" />

      {/* Hero Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-bold mb-4`}>
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Professional Experience
                </span>
              </h1>
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground leading-relaxed`}>
                Over 8 years of experience building scalable systems, leading engineering teams, and driving technical innovation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {experiences.map((experience, index) => (
              <StaggerItem key={index}>
                <CardHover>
                  <Card className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
                    <div className={`h-1.5 bg-gradient-to-r ${experience.companyColor}`} />
                    <CardHeader>
                      <div className={`flex ${isMobile ? 'flex-col gap-4' : 'items-center gap-6'}`}>
                        <CompanyLogo company={experience.company} className="w-14 h-14" />
                        <div className="flex-1">
                          <CardTitle className={`${isMobile ? 'text-xl' : 'text-2xl'} mb-2`}>
                            {experience.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-2">
                            <CardDescription className="text-lg font-semibold text-foreground">
                              {experience.company}
                            </CardDescription>
                            <Separator orientation="vertical" className="h-4" />
                            <Badge variant="secondary" className="font-normal">
                              {experience.team}
                            </Badge>
                          </div>
                        </div>
                        <div className={`${isMobile ? '' : 'text-right'} flex flex-col gap-2`}>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    {experience.metrics && (
                      <CardContent className="pb-4">
                        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
                          {experience.metrics.map((metric, i) => (
                            <Card key={i} className="border bg-muted/50">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                  <div className={`p-2 rounded-lg bg-background ${metric.color} bg-opacity-10`}>
                                    <div className={metric.color}>
                                      {metric.icon}
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground font-medium">{metric.label}</p>
                                    <p className="text-lg font-bold">{metric.value}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    )}

                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <h4 className="text-sm font-semibold">Key Achievements</h4>
                      </div>
                      <Separator />
                      <ul className="space-y-2.5">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="flex-col items-start gap-3 pt-4">
                      <div className="w-full">
                        <h4 className="text-sm font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="font-normal">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.3} direction="up">
            <CardHover>
              <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 text-white shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-4 text-white">Want to know more?</CardTitle>
                  <CardDescription className="text-slate-300 text-lg leading-relaxed">
                    Check out my detailed resume or get in touch to discuss how we can work together.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-4">
                  <ScaleOnHover>
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg" asChild>
                      <Link href="/resume">View Resume</Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                      asChild
                    >
                      <Link href="/contact">Contact Me</Link>
                    </Button>
                  </ScaleOnHover>
                </CardContent>
              </Card>
            </CardHover>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.4} direction="up">
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
