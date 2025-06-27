"use client"

import { Button } from "@/components/ui/button"
import { Github, Calendar, MapPin, TrendingUp, Target, Zap, Users, Server, Building } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import { Suspense } from "react"

const experiences = [
  {
    title: "Senior Backend Engineer",
    company: "Motorway",
    location: "London, UK",
    period: "June 2024 – Present",
    team: "Core Engineering",
    logo: "/me.png",
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
    logo: "/me.png",
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
    logo: "/me.png",
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
    logo: "/me.png",
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

// Separate component for the experience content
function ExperienceContent() {
  const isMobile = useIsMobile()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <FloatingTags />
      <Sidebar activeSection="experience" />

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'ml-0 pt-16' : 'ml-64'}`}>
        <div className={`max-w-4xl mx-auto ${isMobile ? 'p-6' : 'p-12'}`}>
          <div className="mb-12">
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4`}>
              Experience
            </h1>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-slate-600 leading-relaxed`}>
              Over 8 years of experience building scalable systems, leading engineering teams, and driving technical innovation.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-1 bg-gradient-to-r ${experience.companyColor}`}></div>

                <div className={`${isMobile ? 'p-6' : 'p-8'}`}>
                  <div className={`flex ${isMobile ? 'flex-col gap-4' : 'items-center gap-6'} mb-6`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${experience.companyColor} rounded-xl flex items-center justify-center overflow-hidden shadow-lg`}>
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-slate-900 mb-1`}>
                        {experience.title}
                      </h2>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-700">{experience.company}</h3>
                        <span className="text-slate-400">•</span>
                        <span className="text-sm text-slate-500">{experience.team}</span>
                      </div>
                    </div>
                    <div className={`${isMobile ? '' : 'text-right'}`}>
                      <div className="flex items-center gap-2 text-slate-500 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {experience.metrics && (
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-3 gap-4'} mb-6`}>
                      {experience.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-center bg-slate-50 p-3 rounded-xl border border-slate-100"
                        >
                          <div
                            className={`w-8 h-8 ${metric.color} bg-opacity-10 rounded-lg flex items-center justify-center mr-3`}
                          >
                            {metric.icon}
                          </div>
                          <div>
                            <div className="text-sm text-slate-500">{metric.label}</div>
                            <div className="font-bold text-slate-900">{metric.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-4 mb-6">
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-baseline gap-2 text-slate-700">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1.5"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.slice(0, isMobile ? 3 : 6).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > (isMobile ? 3 : 6) && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                          +{experience.technologies.length - (isMobile ? 3 : 6)} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 mb-12">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Want to know more?</h3>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  Check out my detailed resume or get in touch to discuss how we can work together.
                </p>
                <div className="flex justify-center gap-4">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg" asChild>
                    <Link href="/resume">View Resume</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Contact Me</Link>
                  </Button>
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
export default function Experience() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <p className="text-slate-600">Loading...</p>
      </div>
    }>
      <ExperienceContent />
    </Suspense>
  )
}
