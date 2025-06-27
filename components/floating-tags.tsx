"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/hooks/use-mobile"

const floatingTags = [
  // LLM & AI
  { text: "AI Agents", top: "30%", right: "14%", delay: 400, color: "from-purple-500 to-pink-600" },
  { text: "Vector Databases", top: "35%", right: "4%", delay: 500, color: "from-rose-500 to-red-600" },
  { text: "RAG", top: "40%", right: "16%", delay: 600, color: "from-blue-600 to-violet-700" },
  { text: "Embeddings", top: "45%", right: "7%", delay: 700, color: "from-amber-500 to-orange-600" },
  
  // Backend & Architecture
  { text: "Go", top: "50%", right: "12%", delay: 800, color: "from-cyan-500 to-blue-600" },
  { text: "Python", top: "55%", right: "5%", delay: 900, color: "from-green-500 to-emerald-600" },
  { text: "Node.js", top: "60%", right: "10%", delay: 1000, color: "from-green-600 to-emerald-700" },
  { text: "GraphQL", top: "70%", right: "3%", delay: 1200, color: "from-pink-500 to-rose-600" },
  { text: "gRPC", top: "75%", right: "8%", delay: 1300, color: "from-blue-500 to-indigo-600" },
  { text: "Microservices", top: "80%", right: "14%", delay: 1400, color: "from-orange-500 to-red-600" },
  
  // DevOps & Cloud
  { text: "AWS", top: "85%", right: "6%", delay: 1500, color: "from-orange-500 to-red-600" },
  { text: "Kubernetes", top: "90%", right: "12%", delay: 1600, color: "from-indigo-500 to-purple-600" },
  { text: "Docker", top: "5%", right: "15%", delay: 1700, color: "from-cyan-500 to-blue-500" },
  { text: "Terraform", top: "95%", right: "5%", delay: 1800, color: "from-blue-600 to-indigo-700" },
  
  // Frontend & Data
  { text: "React", top: "7%", right: "9%", delay: 2000, color: "from-cyan-500 to-blue-600" },
  { text: "Next.js", top: "13%", right: "2%", delay: 2100, color: "from-slate-600 to-slate-800" },
  { text: "TypeScript", top: "18%", right: "16%", delay: 2200, color: "from-blue-600 to-blue-800" },
  { text: "PostgreSQL", top: "67%", right: "12%", delay: 2400, color: "from-blue-500 to-cyan-600" },
  { text: "Redis", top: "72%", right: "17%", delay: 2500, color: "from-red-500 to-rose-600" },
]

function FloatingTag({
  text,
  top,
  right,
  delay,
  color,
}: {
  text: string
  top: string
  right: string
  delay: number
  color: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`fixed z-10 transition-all duration-1000 ${
        isVisible ? "opacity-40 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ 
        top, 
        right: isMobile ? `calc(${right} * 0.8)` : right,
        transform: isMobile ? 'scale(0.8)' : 'none'
      }}
    >
      <div
        className={`bg-gradient-to-r ${color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20 hover:opacity-60 transition-opacity`}
      >
        {text}
      </div>
    </div>
  )
}

export function FloatingTags() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  
  // Only show floating tags on the home page (root path)
  if (pathname !== '/') {
    return null
  }

  // Show fewer tags on mobile
  const visibleTags = isMobile ? floatingTags.filter((_, index) => index % 3 === 0) : floatingTags

  return (
    <>
      {visibleTags.map((tag, index) => (
        <FloatingTag key={index} {...tag} />
      ))}
    </>
  )
}
