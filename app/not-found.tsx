"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"

// This component uses useSearchParams and needs to be wrapped in Suspense
function NotFoundContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // You can use searchParams here if needed
  const referrer = searchParams.get("from")
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-9xl font-bold text-slate-300 mb-4">404</h1>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" onClick={() => router.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <p className="text-slate-600">Loading...</p>
      </div>
    }>
      <NotFoundContent />
    </Suspense>
  )
}
