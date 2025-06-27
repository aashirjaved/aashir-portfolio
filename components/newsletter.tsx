"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    try {
      setStatus("loading");
      
      // This is where you would integrate with your newsletter service
      // Example with a mock API call:
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For demonstration purposes only
      setStatus("success");
      setEmail("");
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <Card className={`${isMobile ? 'p-4' : 'p-6'} bg-gradient-to-br from-slate-50 to-blue-50`}>
      <div className="text-center mb-4">
        <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold mb-2`}>
          Subscribe to my newsletter
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Get updates on my latest projects, articles, and tech insights
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1"
          required
        />
        <Button 
          type="submit" 
          disabled={status === "loading"}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      
      {status === "success" && (
        <p className="text-sm text-green-600 mt-2 text-center">
          Thanks for subscribing!
        </p>
      )}
      
      {status === "error" && (
        <p className="text-sm text-red-600 mt-2 text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </Card>
  );
}
