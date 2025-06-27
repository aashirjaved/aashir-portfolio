"use client"

import { Button } from "@/components/ui/button"
import { Github, TrendingUp, Users, Target, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import { Suspense } from "react"

const projects = [
  {
    title: "AI-Powered Customer Care Platform",
    company: "Deliveroo",
    period: "2022-2024",
    description:
      "Revolutionary customer care automation platform combining React frontends, Go backend APIs, and fine-tuned LLM agents for intelligent customer service.",
    impact: "2x CSAT increase, £2M annual savings, 60% automation rate",
    details: [
      "Developed AI agents processing 10,000+ cases daily with 95% accuracy",
      "Created advanced prompt engineering frameworks for customer service LLMs",
      "Built real-time React interface with seamless agent-human handoff",
      "Implemented Go backend APIs with PostgreSQL for high-availability processing",
      "Designed multi-region Kubernetes infrastructure with Terraform automation",
    ],
    technologies: [
      "React",
      "Go",
      "Python",
      "LLM Fine-tuning",
      "Prompt Engineering",
      "PostgreSQL",
      "Kubernetes",
      "Terraform",
    ],
    metrics: [
      { label: "CSAT Increase", value: "2x", icon: <Users className="w-4 h-4" />, color: "text-emerald-600" },
      { label: "Cost Savings", value: "£2M", icon: <TrendingUp className="w-4 h-4" />, color: "text-green-600" },
      { label: "Automation", value: "60%", icon: <Target className="w-4 h-4" />, color: "text-blue-600" },
    ],
    category: "AI + Full-Stack",
    status: "Production",
    gradient: "from-teal-500 to-cyan-600",
    featured: true,
  },
  {
    title: "Core Engineering Infrastructure",
    company: "Motorway",
    period: "2024-Present",
    description:
      "Mission-critical infrastructure platform powering Motorway's core services with advanced monitoring, AI-powered alerting, and seamless auth systems.",
    impact: "15% volume increase, 7% conversion boost, 15% AWS cost reduction",
    details: [
      "Led migration to decoupled AuthN/AuthZ services resolving customer pain points",
      "Built comprehensive monitoring dashboards with React and Next.js",
      "Implemented AI-powered incident management using LLMs for categorization",
      "Established operational excellence practices reducing technical debt",
      "Managed cross-functional teams across multiple microservices",
    ],
    technologies: ["Go", "Python", "React", "Next.js", "AWS", "Terraform", "LLM Integration", "OAuth2.0"],
    metrics: [
      { label: "Volume Increase", value: "15%", icon: <TrendingUp className="w-4 h-4" />, color: "text-green-600" },
      { label: "Conversion Boost", value: "7%", icon: <Target className="w-4 h-4" />, color: "text-blue-600" },
      { label: "Cost Reduction", value: "15%", icon: <Zap className="w-4 h-4" />, color: "text-purple-600" },
    ],
    category: "Infrastructure + AI",
    status: "Production",
    gradient: "from-blue-500 to-indigo-600",
    featured: true,
  },
  {
    title: "High-Performance Warehouse Gateway",
    company: "Zalando",
    period: "2021-2022",
    description:
      "Enterprise-grade gateway system connecting warehouse operations with Zalando's infrastructure, featuring React dashboards and optimized Java APIs.",
    impact: "1000+ RPS, 15% latency reduction, 25% inventory optimization",
    details: [
      "Designed high-performance Java APIs handling 1000+ requests per second",
      "Built responsive React interfaces for warehouse management teams",
      "Implemented AI-powered demand forecasting improving inventory by 25%",
      "Set up comprehensive monitoring with Grafana and Prometheus",
      "Led technical workshops for integration teams across the organization",
    ],
    technologies: ["Java", "React", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "Grafana", "Prometheus"],
    metrics: [
      { label: "RPS Handled", value: "1000+", icon: <Target className="w-4 h-4" />, color: "text-orange-600" },
      { label: "Latency", value: "-15%", icon: <Zap className="w-4 h-4" />, color: "text-red-600" },
      { label: "Optimization", value: "+25%", icon: <TrendingUp className="w-4 h-4" />, color: "text-green-600" },
    ],
    category: "Backend + Frontend",
    status: "Production",
    gradient: "from-orange-500 to-red-600",
    featured: false,
  },
  {
    title: "Multi-Cloud Migration Platform",
    company: "Nordcloud - IBM",
    period: "2020-2021",
    description:
      "Enterprise cloud migration platform transforming monolithic applications into modern microservices across AWS, Azure, and GCP.",
    impact: "£5M savings, 30+ migrations, 40% efficiency improvement",
    details: [
      "Led architectural design for cross-cloud compatibility and migration patterns",
      "Built data transformation pipelines ensuring zero data loss during migrations",
      "Implemented CI/CD workflows accelerating deployments by 40%",
      "Created migration assessment tools providing accurate timelines and costs",
      "Managed client stakeholders throughout complex migration projects",
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "Python", "Go"],
    metrics: [
      { label: "Migrations", value: "30+", icon: <Target className="w-4 h-4" />, color: "text-blue-600" },
      { label: "Efficiency", value: "+40%", icon: <TrendingUp className="w-4 h-4" />, color: "text-green-600" },
      { label: "Cost Savings", value: "£5M", icon: <Zap className="w-4 h-4" />, color: "text-purple-600" },
    ],
    category: "Cloud Infrastructure",
    status: "Production",
    gradient: "from-blue-500 to-cyan-600",
    featured: false,
  },
  {
    title: "Event-Driven E-Commerce Platform",
    company: "Freelance",
    period: "2019-2020",
    description:
      "Scalable e-commerce system handling high-volume transactions with real-time inventory management and personalized recommendations.",
    impact: "99.9% uptime, 3x conversion rate, 25,000+ daily orders",
    details: [
      "Architected event-driven system with message queues for reliability",
      "Built personalized recommendation engine using collaborative filtering",
      "Implemented real-time inventory synchronization across multiple channels",
      "Created responsive React/Next.js frontend with optimized mobile UX",
      "Integrated payment gateways with robust error handling and reconciliation",
    ],
    technologies: ["Node.js", "React", "Next.js", "Redis", "PostgreSQL", "Kafka", "AWS", "ElasticSearch"],
    metrics: [
      { label: "Uptime", value: "99.9%", icon: <Target className="w-4 h-4" />, color: "text-green-600" },
      { label: "Conversions", value: "3x", icon: <TrendingUp className="w-4 h-4" />, color: "text-blue-600" },
      { label: "Daily Orders", value: "25k+", icon: <Zap className="w-4 h-4" />, color: "text-purple-600" },
    ],
    category: "Full-Stack",
    status: "Production",
    gradient: "from-green-500 to-emerald-600",
    featured: false,
  },
]

// ProjectsContent component with the actual content
function ProjectsContent() {
  const isMobile = useIsMobile()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <FloatingTags />
      <Sidebar activeSection="projects" />

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'ml-0 pt-16' : 'ml-64'}`}>
        <div className={`max-w-4xl mx-auto ${isMobile ? 'p-6' : 'p-12'}`}>
          <div className="mb-12">
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4`}>
              Projects
            </h1>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-slate-600 leading-relaxed`}>
              Featured work demonstrating my expertise in AI, full-stack development, and cloud infrastructure.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
                <div className={`${isMobile ? 'p-6' : 'p-8'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full`}>
                      {project.category}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {project.status}
                    </span>
                    <span className="text-sm text-slate-500 ml-auto">{project.period}</span>
                  </div>

                  <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-slate-900 mb-2`}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>

                  {project.metrics && (
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-3 gap-4'} mb-6`}>
                      {project.metrics.map((metric, i) => (
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
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <h4 className="text-sm font-bold text-slate-800">Key Contributions</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-baseline gap-2 text-slate-700">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1.5"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, isMobile ? 3 : 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > (isMobile ? 3 : 4) && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                          +{project.technologies.length - (isMobile ? 3 : 4)} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
export default function Projects() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <p className="text-slate-600">Loading...</p>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  )
}
