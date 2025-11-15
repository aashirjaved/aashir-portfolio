"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowUpRight, Eye, Download, Github, FileText, Code } from "lucide-react";
import Link from "next/link";
import { TopNavigation } from "@/components/top-navigation";
import { FadeIn, CardHover, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";

export default function Resume() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation activeSection="resume" />

      {/* Hero Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className={`${isMobile ? "text-4xl" : "text-5xl"} font-bold mb-4`}>
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Resume & Open Source
                </span>
              </h1>
              <p className={`${isMobile ? "text-lg" : "text-xl"} text-muted-foreground leading-relaxed`}>
                Download my resume or explore my open source contributions and projects.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid gap-8" staggerDelay={0.15}>
            {/* Resume Card */}
            <StaggerItem>
              <CardHover>
                <Card className="border-2 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <CardTitle>My Resume</CardTitle>
                    </div>
                    <Separator />
                    <CardDescription className="mt-4">
                      Download my resume in PDF format
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      My resume highlights my professional experience, skills, and education. 
                      Feel free to download it for a comprehensive overview of my career.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-4">
                    <ScaleOnHover>
                      <Button variant="outline" className="flex-1">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                    </ScaleOnHover>
                    <ScaleOnHover>
                      <Button className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </ScaleOnHover>
                  </CardFooter>
                </Card>
              </CardHover>
            </StaggerItem>

            {/* Open Source Contributions */}
            <StaggerItem>
              <CardHover>
                <Card className="border-2 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="w-5 h-5 text-primary" />
                      <CardTitle>Open Source Contributions</CardTitle>
                    </div>
                    <Separator />
                    <CardDescription className="mt-4">
                      Projects I've contributed to or maintain
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Example Open Source Project 1 */}
                      <Card className="border">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="font-medium mb-1">Project Name</h3>
                              <CardDescription className="text-sm">
                                A brief description of the project and your contributions
                              </CardDescription>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon" asChild>
                                <Link href="https://github.com/username/repo" target="_blank">
                                  <Github className="h-4 w-4" />
                                  <span className="sr-only">GitHub</span>
                                </Link>
                              </Button>
                              <Button variant="ghost" size="icon" asChild>
                                <Link href="https://project-demo-url.com" target="_blank">
                                  <ArrowUpRight className="h-4 w-4" />
                                  <span className="sr-only">Visit</span>
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">React</Badge>
                            <Badge variant="outline" className="text-xs">TypeScript</Badge>
                            <Badge variant="outline" className="text-xs">GraphQL</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Example Open Source Project 2 */}
                      <Card className="border">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="font-medium mb-1">Another Project</h3>
                              <CardDescription className="text-sm">
                                A brief description of this project
                              </CardDescription>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon" asChild>
                                <Link href="https://github.com/username/another-repo" target="_blank">
                                  <Github className="h-4 w-4" />
                                  <span className="sr-only">GitHub</span>
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">Go</Badge>
                            <Badge variant="outline" className="text-xs">Docker</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <ScaleOnHover>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="https://github.com/aashirjaved" target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          View All Contributions
                        </Link>
                      </Button>
                    </ScaleOnHover>
                  </CardFooter>
                </Card>
              </CardHover>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.3} direction="up">
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
  );
}
