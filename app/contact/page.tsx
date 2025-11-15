"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Clock, Sparkles } from "lucide-react"
import Link from "next/link"
import { TopNavigation } from "@/components/top-navigation"
import { FloatingTags } from "@/components/floating-tags"
import { useIsMobile } from "@/hooks/use-mobile"
import Newsletter from "@/components/newsletter"
import { Suspense } from "react"
import { FadeIn, CardHover, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations"

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
    <div className="min-h-screen bg-background">
      <FloatingTags />
      <TopNavigation activeSection="contact" />

      {/* Hero Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-bold mb-4`}>
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h1>
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground leading-relaxed`}>
                Let's discuss opportunities, collaborations, or just have a conversation about technology and engineering
                innovation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Contact Methods</h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {contactMethods.map((method, index) => (
              <StaggerItem key={index}>
                <CardHover>
                  <Card className="border-2 h-full hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
                        {method.icon}
                      </div>
                      <CardTitle>{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <span className="font-medium">{method.value}</span>
                        {method.href.startsWith("http") && (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </Link>
                    </CardContent>
                  </Card>
                </CardHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

          {/* Current Availability */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <FadeIn delay={0.3} direction="up">
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                  <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Current Availability</h2>
                </div>
              </FadeIn>

              <StaggerContainer className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6`} staggerDelay={0.1}>
                {availability.map((item, index) => (
                  <StaggerItem key={index}>
                    <CardHover>
                      <Card className="border-2 overflow-hidden hover:shadow-xl transition-all h-full">
                        <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />
                        <CardHeader>
                          <CardTitle className="text-lg">{item.type}</CardTitle>
                          <Badge variant="secondary" className="w-fit">
                            {item.status}
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{item.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </CardHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn delay={0.4} direction="up">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <CardTitle>Send a Message</CardTitle>
                    </div>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6`}>
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input type="email" id="email" placeholder="Your email" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" placeholder="Subject of your message" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea id="message" rows={5} placeholder="Your message" />
                      </div>
                      <ScaleOnHover>
                        <Button size="lg" type="submit" className="w-full sm:w-auto">
                          Send Message
                        </Button>
                      </ScaleOnHover>
                    </form>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <Newsletter />
            </div>
          </section>

          {/* Location */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn delay={0.5} direction="up">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <CardTitle>Location</CardTitle>
                    </div>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">London, United Kingdom</h3>
                      <CardDescription>
                        Based in London but working with clients and companies worldwide. Open to remote opportunities and
                        occasional travel.
                      </CardDescription>
                    </div>
                    <div className="aspect-video w-full rounded-xl overflow-hidden border">
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
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.6} direction="up">
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

// Main component wrapped with Suspense
export default function Contact() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    }>
      <ContactContent />
    </Suspense>
  )
}
