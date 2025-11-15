"use client"

import { Github, Linkedin, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navigationItems = [
  { name: "Home", href: "/", key: "home" },
  { name: "Experience", href: "/experience", key: "experience" },
  { name: "Projects", href: "/projects", key: "projects" },
  { name: "Writing", href: "/writing", key: "writing" },
  { name: "About", href: "/about", key: "about" },
  { name: "Contact", href: "/contact", key: "contact" },
]

interface TopNavigationProps {
  activeSection: string
}

export function TopNavigation({ activeSection }: TopNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">AJ</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Aashir Javed
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    activeSection === item.key
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center gap-3">
            {!isMobile && (
              <>
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                  <Link href="https://github.com/aashirjaved" target="_blank" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                  <Link href="https://www.linkedin.com/in/aashirjaved/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </>
            )}
            
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium rounded-lg transition-all",
                    activeSection === item.key
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-border mt-2">
                <div className="flex-1">
                  <ThemeToggle />
                </div>
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <Link href="https://github.com/aashirjaved" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <Link href="https://www.linkedin.com/in/aashirjaved/" target="_blank">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

