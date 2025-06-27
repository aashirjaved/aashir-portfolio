"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowUpRight, Eye, Download, Github } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className={`flex-1 ${isMobile ? "ml-0 pt-16" : "ml-64"}`}>
        <div className={`max-w-3xl mx-auto ${isMobile ? "p-6" : "p-12"}`}>
          <h1 className={`${isMobile ? "text-3xl" : "text-4xl"} font-bold mb-6`}>Resume & Open Source</h1>
          
          <div className="grid gap-8">
            {/* Resume Card */}
            <Card>
              <CardHeader>
                <CardTitle>My Resume</CardTitle>
                <CardDescription>Download my resume in PDF format</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  My resume highlights my professional experience, skills, and education. 
                  Feel free to download it for a comprehensive overview of my career.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardFooter>
            </Card>

            {/* Open Source Contributions */}
            <Card>
              <CardHeader>
                <CardTitle>Open Source Contributions</CardTitle>
                <CardDescription>Projects I've contributed to or maintain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Example Open Source Project 1 */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">Project Name</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          A brief description of the project and your contributions
                        </p>
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
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">React</span>
                      <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1">TypeScript</span>
                      <span className="text-xs bg-purple-100 text-purple-800 rounded-full px-2 py-1">GraphQL</span>
                    </div>
                  </div>

                  {/* Example Open Source Project 2 */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">Another Project</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          A brief description of this project
                        </p>
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
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-yellow-100 text-yellow-800 rounded-full px-2 py-1">Go</span>
                      <span className="text-xs bg-red-100 text-red-800 rounded-full px-2 py-1">Docker</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="https://github.com/aashirjaved" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View All Contributions
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
