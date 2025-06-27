"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Sidebar } from "@/components/sidebar"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import { PersonSchema, WebsiteSchema } from "@/components/structured-data"
import { Suspense } from "react"

// Main content component that uses hooks
function HomeContent() {
  const isMobile = useIsMobile()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <PersonSchema />
      <WebsiteSchema />
      <FloatingTags />
      <Sidebar activeSection="home" />

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'ml-0 pt-16' : 'ml-64'}`}>
        <div className={`max-w-3xl mx-auto ${isMobile ? 'p-6' : 'p-12'}`}>
          {/* Hero Section */}
          <div className={`${isMobile ? 'mb-12' : 'mb-20'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-600 tracking-wide">...</span>
            </div>

            <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight`}>
              Hi 👋, I'm Aashir <span className="wave">👋</span>
            </h1>

            <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} text-slate-600 mb-8 font-light`}>Versatile Engineer & AI Specialist</h2>

            {/* Profile Image */}
            <div className="mb-8">
              <div className={`${isMobile ? 'w-28 h-28' : 'w-36 h-36'} rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden shadow-xl ring-4 ring-white`}>
                <Image
                  src="/me.png"
                  alt="Aashir Javed"
                  width={isMobile ? 112 : 144}
                  height={isMobile ? 112 : 144}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <p className={`${isMobile ? 'text-base' : 'text-lg'} text-slate-700 leading-relaxed`}>
                Building next-generation systems across{" "}
                <span className="font-semibold text-blue-700">full-stack development</span>,
                <span className="font-semibold text-purple-700"> cloud infrastructure</span>, and
                <span className="font-semibold text-indigo-700"> AI integration</span>. Specialized in LLMs, production
                AI agents, and scalable architectures that drive real business impact.
              </p>

              <div className="flex items-center gap-2 text-slate-600">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="italic">Currently leading Core Engineering at Motorway</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 mb-16`}>
              <Button
                size={isMobile ? "default" : "lg"}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <div className={`flex ${isMobile ? 'w-full' : ''} gap-4`}>
                <Button variant="outline" size={isMobile ? "default" : "lg"} className="border-slate-300 hover:bg-slate-50 bg-transparent" asChild>
                  <Link href="https://www.linkedin.com/in/aashirjaved/" target="_blank">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" size={isMobile ? "default" : "lg"} className="border-slate-300 hover:bg-slate-50 bg-transparent" asChild>
                  <Link href="https://github.com/aashirjaved" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                What I Do
              </h3>
              <p className={`text-slate-700 leading-relaxed ${isMobile ? 'text-base' : 'text-lg'}`}>
                I'm a versatile engineer with <span className="font-semibold">8+ years</span> building scalable systems
                across the entire technology stack. Currently at{" "}
                <span className="font-semibold text-blue-700">Motorway</span>, I lead backend engineering, AI
                integration, and cross-functional teams. My expertise spans React/Next.js frontends, Go/Python backends,
                AWS infrastructure, and cutting-edge AI implementations.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className={`pt-8 border-t border-slate-200 flex ${isMobile ? 'flex-col space-y-4' : 'items-center justify-between'} text-sm text-slate-500`}>
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
  )
}

// Main export wrapped in Suspense
export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <p className="text-slate-600">Loading...</p>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}