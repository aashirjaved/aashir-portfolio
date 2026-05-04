"use client"

import { Github, Linkedin, Menu, X, Terminal } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { BlinkingCursor } from "@/components/crt/blinking-cursor"

const navigationItems = [
  { name: "HOME", href: "/", key: "home" },
  { name: "WORK", href: "/experience", key: "experience" },
  { name: "PROJECTS", href: "/projects", key: "projects" },
  { name: "WRITING", href: "/writing", key: "writing" },
  { name: "ABOUT", href: "/about", key: "about" },
  { name: "RESUME", href: "/resume", key: "resume" },
  { name: "CONTACT", href: "/contact", key: "contact" },
]

interface TopNavigationProps {
  activeSection: string
}

function Clock() {
  const [time, setTime] = useState<string>("")
  useEffect(() => {
    const update = () => {
      const d = new Date()
      const hh = String(d.getUTCHours()).padStart(2, "0")
      const mm = String(d.getUTCMinutes()).padStart(2, "0")
      const ss = String(d.getUTCSeconds()).padStart(2, "0")
      setTime(`${hh}:${mm}:${ss} UTC`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">{time}</span>
}

export function TopNavigation({ activeSection }: TopNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b-2 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 border-2 border-primary bg-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-pixel text-[10px] sm:text-xs uppercase tracking-wider phosphor-glow hidden sm:inline">
              AASHIR.JAVED
            </span>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <div className="flex items-center gap-1 font-mono text-sm">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.key
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "px-3 py-1.5 uppercase tracking-wider border border-transparent transition-colors flex items-center gap-1",
                      isActive
                        ? "border-primary text-primary phosphor-glow bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:border-primary/50",
                    )}
                  >
                    <span className={isActive ? "phosphor-glow" : ""}>&gt;</span>
                    {item.name}
                    {isActive && <BlinkingCursor char="_" className="ml-0.5" />}
                  </Link>
                )
              })}
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            {!isMobile && (
              <>
                <Clock />
                <span className="text-muted-foreground mx-1">|</span>
                <Link
                  href="https://github.com/aashirjaved"
                  target="_blank"
                  aria-label="GitHub"
                  className="p-1.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aashirjaved/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="p-1.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </Link>
              </>
            )}

            {isMobile && (
              <button
                className="p-2 border border-primary text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="border-t-2 border-primary bg-background">
          <div className="px-4 py-3 space-y-1 font-mono text-sm">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.key
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 uppercase tracking-wider border",
                    isActive
                      ? "border-primary text-primary bg-primary/10 phosphor-glow"
                      : "border-transparent text-muted-foreground",
                  )}
                >
                  <span>&gt;</span>
                  {item.name}
                  {isActive && <BlinkingCursor char="_" />}
                </Link>
              )
            })}
            <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-primary/40">
              <Clock />
              <div className="flex items-center gap-2">
                <Link
                  href="https://github.com/aashirjaved"
                  target="_blank"
                  className="p-1.5 border border-primary/40 text-primary"
                >
                  <Github className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aashirjaved/"
                  target="_blank"
                  className="p-1.5 border border-primary/40 text-primary"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
