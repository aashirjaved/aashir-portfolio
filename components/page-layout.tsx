"use client"

import { ReactNode } from 'react'
import { useIsMobile } from "@/hooks/use-mobile"
import { Sidebar } from "@/components/sidebar"

interface PageLayoutProps {
  children: ReactNode
  activeSection: string
}

export function PageLayout({ children, activeSection }: PageLayoutProps) {
  const isMobile = useIsMobile()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <Sidebar activeSection={activeSection} />

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'ml-0 pt-16' : 'ml-64'}`}>
        <div className={`max-w-3xl mx-auto ${isMobile ? 'p-6' : 'p-12'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
