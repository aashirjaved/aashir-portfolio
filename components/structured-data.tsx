"use client";

import { useEffect } from "react";

interface JsonLdProps {
  type: "Person" | "WebSite" | "WebPage" | "Article" | "BreadcrumbList" | "Project";
  data: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  useEffect(() => {
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

export function PersonSchema() {
  return (
    <JsonLd
      type="Person"
      data={{
        name: "Aashir Javed",
        givenName: "Aashir",
        familyName: "Javed",
        url: "https://aashir.net",
        image: "/me.png",
        jobTitle: "Senior Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "MoonPay",
        },
        alumniOf: [
          { "@type": "Organization", name: "MoonPay" },
          { "@type": "Organization", name: "Motorway" },
          { "@type": "Organization", name: "Deliveroo" },
          { "@type": "Organization", name: "Zalando" },
          { "@type": "Organization", name: "IBM" },
          { "@type": "Organization", name: "Nordcloud" },
        ],
        sameAs: [
          "https://github.com/aashirjaved",
          "https://www.linkedin.com/in/aashirjaved",
          "https://x.com/aasjav",
          "https://whatify.ai/",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Software Engineer",
          occupationLocation: { "@type": "City", name: "London" },
          skills:
            "Backend engineering, infrastructure, crypto payments, AI agents, local LLM workflows, Ollama, LM Studio, local models, context management, memory management, LLM evals, agent skills, retrieval-augmented generation, fine-tuning generative models, tool use and function calling, production hardening, latency and cost optimisation, on-call ownership, incident response, OAuth2 and identity flows, distributed systems at scale, AWS, Terraform, Kubernetes, Go, Python, TypeScript, React, Next.js, observability and runbooks",
          responsibilities:
            "Builds backend, infrastructure, crypto payment and AI-agent systems. Ships production product work, public agent skills, customer-care automation, core platform services, gateway systems and cloud migrations with measurable outcomes across conversion, cost, latency, CSAT and reliability.",
        },
        knowsAbout: [
          "Crypto payments and MoonPay product infrastructure",
          "AI agents, agent skills and agent orchestration patterns",
          "Ollama, LM Studio and local model workflows",
          "Context-window design and agent memory management",
          "LLM evaluation loops and regression checks",
          "Retrieval-augmented generation (RAG) on customer corpora",
          "Fine-tuning generative models for vertical workflows",
          "Public agent skills for on-ramps, swaps, wallets and payments",
          "Infrastructure-as-TypeScript for AI agents",
          "Latency, cost and throughput optimisation",
          "OAuth2, SSO, AuthN/AuthZ in regulated environments",
          "Distributed systems, queueing and event-driven architectures",
          "AWS, Terraform, Kubernetes, infrastructure as code",
          "Go, Python, TypeScript, React, Next.js, Node, Java",
          "On-call rotation, incident response and SEV gamedays",
          "Marketplace platforms and customer-care automation",
          "Warehouse integration gateways and fulfillment systems",
          "Public-data consumer products such as Whatify",
        ],
        description:
          "Senior software engineer in London building backend, infrastructure, crypto payment and AI-agent systems. Experienced with local LLM tooling such as Ollama and LM Studio, local models, context and memory management, eval loops, RAG and production hardening.",
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <JsonLd
      type="WebSite"
      data={{
        name: "Aashir Javed | Senior Software Engineer",
        url: "https://aashir.net",
        description:
          "Portfolio of Aashir Javed, senior engineer building backend, infrastructure, crypto payment and AI-agent systems with local LLM workflows, Ollama, LM Studio, context management, memory management and evals.",
        keywords:
          "backend engineering, infrastructure, crypto payments, AI agents, local LLMs, Ollama, LM Studio, context management, memory management, LLM evals, agent skills, MoonPay, Whatify, alchemy-infra, AWS, Go, Python, TypeScript, React, Next.js, distributed systems",
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
