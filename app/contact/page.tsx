"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Clock, Sparkles } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import Newsletter from "@/components/newsletter"
import { Suspense } from "react"

const contactMethods = [
  {
    title: "Email",
    description: "Best way to reach me for professional inquiries and collaborations",
    value: "me@aashir.net",
    href: "mailto:me@aashir.net",
    icon: <Mail className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally and see my latest updates",
    value: "linkedin.com/in/aashirjaved",
    href: "https://www.linkedin.com/in/aashirjaved/",
    icon: <Linkedin className="w-5 h-5" />,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "GitHub",
    description: "Explore my code, contributions, and open-source projects",
    value: "github.com/aashirjaved",
    href: "https://github.com/aashirjaved",
    icon: <Github className="w-5 h-5" />,
    gradient: "from-slate-600 to-slate-800",
  },
]

const availability = [
  {
    type: "Full-time Opportunities",
    status: "Open to discussions",
    statusColor: "bg-blue-100 text-blue-700",
    description:
      "Interested in senior engineering roles, technical leadership positions, and AI/ML focused opportunities at innovative companies",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    type: "Consulting & Advisory",
    status: "Limited availability",
    statusColor: "bg-yellow-100 text-yellow-700",
    description:
      "Available for strategic technical consulting, AI integration projects, and infrastructure optimization initiatives",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    type: "Speaking & Mentoring",
    status: "Always available",
    statusColor: "bg-green-100 text-green-700",
    description: "Happy to speak at conferences, mentor engineers, or provide technical guidance to growing teams",
    gradient: "from-emerald-500 to-teal-600",
  },
]

// ContactContent component with the actual content
function ContactContent() {
  const isMobile = useIsMobile()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <FloatingTags />
      <Sidebar activeSection="contact" />

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'ml-0 pt-16' : 'ml-64'}`}>
        <div className={`max-w-4xl mx-auto ${isMobile ? 'p-6' : 'p-12'}`}>
          <div className="mb-12">
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4`}>
              Contact
            </h1>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-slate-600 leading-relaxed`}>
              Let's discuss opportunities, collaborations, or just have a conversation about technology and engineering
              innovation.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider">Get In Touch</h2>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Link
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  className="block bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} gap-6`}>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-slate-600 mb-3">{method.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-700 font-medium">{method.value}</span>
                        {method.href.startsWith("http") && (
                          <ExternalLink className="w-4 h-4 text-blue-500 group-hover:text-blue-700 transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Current Availability */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-blue-500" />
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Current Availability</h2>
            </div>

            <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-3 gap-8'}`}>
              {availability.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">{item.type}</h3>
                    <div className="mb-4">
                      <span className={`text-xs font-medium ${item.statusColor} rounded-full px-2 py-1`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-5 h-5 text-blue-500" />
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Send a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-6'}`}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                    size="lg"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-16">
            <Newsletter />
          </div>

          {/* Location */}
          <div className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-green-500" />
                <h2 className="text-sm font-bold text-green-600 uppercase tracking-wider">Location</h2>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">London, United Kingdom</h3>
                <p className="text-slate-600 mb-6">
                  Based in London but working with clients and companies worldwide. Open to remote opportunities and
                  occasional travel.
                </p>
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765404429606!3d51.528735174646494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1704289020035!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
export default function Contact() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <p className="text-slate-600">Loading...</p>
      </div>
    }>
      <ContactContent />
    </Suspense>
  )
}
