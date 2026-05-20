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
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Software Engineer",
          occupationLocation: { "@type": "City", name: "London" },
          skills:
            "Embedding inside customer engineering teams, shipping agentic AI into production codebases, prompt engineering on live customer traffic, building evals against real production data, Model Context Protocol servers, sub-agents and agent skills, retrieval-augmented generation, fine-tuning generative models, tool use and function calling, production hardening of LLM systems, latency and cost optimisation under real load, on-call ownership and incident response, OAuth2 and identity flows, distributed systems at scale, AWS, Terraform, Kubernetes, Go, Python, TypeScript, React, Next.js, observability and runbook authorship, hand-off of evals and operational knowledge to customer teams",
          responsibilities:
            "Embeds inside customer engineering organisations to ship agentic AI features in their production codebases. Runs eval-driven development against real customer traffic. Iterates on prompts, tools and orchestration on live data. Owns the work that turns a working demo into a system that survives production: latency budgets, cost per request, eval regressions, security review, on-call rotation. Transfers eval suites, runbooks and the operating knowledge of the system to the customer team at hand-off.",
        },
        knowsAbout: [
          "Embedded engineering engagements inside customer codebases",
          "Shipping agentic AI features into production",
          "Prompt engineering and tool-calling iteration on live customer data",
          "Eval-driven development against real production traffic",
          "Model Context Protocol (MCP) servers and integration",
          "Sub-agents, agent skills and agent orchestration patterns",
          "Retrieval-augmented generation (RAG) on customer corpora",
          "Fine-tuning generative models for vertical workflows",
          "LLM observability, regression detection and drift monitoring",
          "Production hardening of nondeterministic AI systems",
          "Latency, cost and throughput optimisation of inference workloads",
          "Security review remediation for AI features",
          "OAuth2, SSO, AuthN/AuthZ in regulated environments",
          "Distributed systems, queueing and event-driven architectures",
          "AWS, Terraform, Kubernetes, infrastructure as code",
          "Go, Python, TypeScript, React, Next.js, Node, Java",
          "On-call rotation, incident response and SEV gamedays",
          "Runbook authorship and operational hand-off to customer teams",
          "Demo-to-production hardening of AI prototypes",
          "Working alongside Anthropic Claude, OpenAI and Cursor in customer workflows",
        ],
        description:
          "Senior engineer specialising in agentic AI shipped inside customer production environments. Eight years across MoonPay, Motorway, Deliveroo, Zalando and IBM/Nordcloud embedding with engineering teams, owning evals on real traffic, hardening prototypes past demo day, and transferring eval suites and runbooks back to the customer at hand-off. London-based, remote-friendly, ~25% travel.",
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
        name: "Aashir Javed | Senior Software Engineer",
        url: "https://aashir.net",
        description:
          "Portfolio of Aashir Javed — senior engineer shipping agentic AI inside customer production environments. Evidence of embedded engagements, eval-driven development, MCP servers, sub-agents, and demo-to-production hand-offs.",
        keywords:
          "embedded engineering, agentic AI, LLM evals, MCP servers, sub-agents, retrieval-augmented generation, fine-tuning, production AI, customer infrastructure, prompt engineering on live data, demo-to-production, AI hand-off, AWS, Go, Python, TypeScript",
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
