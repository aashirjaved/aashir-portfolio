"use client"

import { Github, Linkedin, User, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"
import { ScaleOnHover } from "@/components/animations"

const navigationItems = [
  { name: "Home", href: "/", key: "home" },
  { name: "Experience", href: "/experience", key: "experience" },
  { name: "Projects", href: "/projects", key: "projects" },
  { name: "Writing", href: "/writing", key: "writing" },
  { name: "About", href: "/about", key: "about" },
  { name: "Contact", href: "/contact", key: "contact" },
]

interface SidebarProps {
  activeSection: string
}

export function Sidebar({ activeSection }: SidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Mobile header that's always visible
  const mobileHeader = isMobile && (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
          <User className="w-4 h-4 text-white" />
        </div>
        <h1 className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Aashir Javed
        </h1>
      </div>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  )

  // The sidebar content
  const sidebarContent = (
    <>
      {/* Header (desktop only) */}
      {!isMobile && (
        <div className="p-6 border-b border-slate-200/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Aashir Javed
              </h1>
            </div>
          </div>
          <p className="text-sm text-slate-600 font-medium">Versatile Engineer & AI Specialist</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <ScaleOnHover scale={1.02}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 text-sm rounded-xl transition-all duration-200 font-medium ${
                    activeSection === item.key
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:shadow-sm"
                  }`}
                  onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
                >
                  {item.name}
                </Link>
              </ScaleOnHover>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Footer Links */}
      <div className="p-6 border-t border-slate-200/50">
        <div className="space-y-3">
          <ScaleOnHover>
            <Link
              href="https://github.com/aashirjaved"
              target="_blank"
              className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors p-2 rounded-lg hover:bg-slate-50"
            >
              <Github className="w-4 h-4 mr-3" />
              GitHub
            </Link>
          </ScaleOnHover>
          <ScaleOnHover>
            <Link
              href="https://www.linkedin.com/in/aashirjaved/"
              target="_blank"
              className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors p-2 rounded-lg hover:bg-slate-50"
            >
              <Linkedin className="w-4 h-4 mr-3" />
              LinkedIn
            </Link>
          </ScaleOnHover>
        </div>
      </div>
    </>
  )

  return (
    <>
      {mobileHeader}

      {/* Desktop sidebar */}
      {!isMobile && (
        <div className="w-64 bg-white/80 backdrop-blur-xl border-r border-slate-200/50 fixed h-full flex flex-col shadow-xl">
          {sidebarContent}
        </div>
      )}

      {/* Mobile sidebar (slide-in) */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-16 h-full flex flex-col overflow-y-auto">
                {sidebarContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
