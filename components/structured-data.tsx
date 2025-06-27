"use client";

import { useEffect } from "react";

interface JsonLdProps {
  type: "Person" | "WebSite" | "WebPage" | "Article" | "BreadcrumbList" | "Project";
  data: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  useEffect(() => {
    // Only insert JSON-LD on client-side to avoid hydration issues
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
}

// Person schema for your portfolio
export function PersonSchema() {
  return (
    <JsonLd
      type="Person"
      data={{
        name: "Aashir Javed",
        url: "https://aashir.net",
        image: "/me.png",
        jobTitle: "Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "[Your Current Company]", // Replace with actual company
        },
        sameAs: [
          "https://github.com/aashirjaved",
          "https://linkedin.com/in/aashirjaved",
          "https://twitter.com/aashirjaved",
          // Add other relevant profiles
        ],
        description: "Senior software engineer specializing in full-stack development, AI/ML integration, and cloud infrastructure.",
      }}
    />
  );
}

// Website schema for your portfolio
export function WebsiteSchema() {
  return (
    <JsonLd
      type="WebSite"
      data={{
        name: "Aashir Javed | Software Engineer",
        url: "https://aashir.net",
        description: "Senior software engineer specializing in full-stack development, AI/ML integration, and cloud infrastructure.",
        author: {
          "@type": "Person",
          name: "Aashir Javed",
        },
      }}
    />
  );
}

// Project schema for individual projects
export function ProjectSchema({ 
  name,
  description,
  url,
  image,
  dateCreated,
  technologies
}: {
  name: string;
  description: string;
  url?: string;
  image?: string;
  dateCreated?: string;
  technologies?: string[];
}) {
  return (
    <JsonLd
      type="Project"
      data={{
        name,
        description,
        url,
        image,
        dateCreated,
        keywords: technologies?.join(", "),
        author: {
          "@type": "Person",
          name: "Aashir Javed",
        },
      }}
    />
  );
}

// Article schema for blog posts
export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
}) {
  return (
    <JsonLd
      type="Article"
      data={{
        headline: title,
        description,
        image,
        url,
        datePublished,
        dateModified: dateModified || datePublished,
        keywords: keywords?.join(", "),
        author: {
          "@type": "Person",
          name: "Aashir Javed",
        },
      }}
    />
  );
}
