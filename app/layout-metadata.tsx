import { Metadata } from 'next';

// This function provides dynamic metadata generation for different pages
export function generateMetadata({ params, pathname }: { params: any; pathname: string }): Metadata {
  // Base title and description
  const baseTitle = "Aashir Javed | Senior Software Engineer";
  const baseDescription =
    "Senior engineer who embeds with customer teams and ships agentic AI into their production codebases. Eight years across fintech, marketplaces and cloud — evals on real traffic, demo-to-production hardening, and hand-off back to the customer.";

  // Page-specific metadata
  const pageMetadata: Record<string, { title: string; description: string }> = {
    "/": {
      title: baseTitle,
      description:
        "Senior engineer embedded inside customer codebases shipping agentic AI features into production. Runs eval-driven development on live traffic, hardens prototypes past demo day, and transfers runbooks and eval suites back to the customer team. Go, Python, TypeScript, AWS, LLMs.",
    },
    "/about": {
      title: baseTitle + " | About",
      description:
        "London-based engineer specialising in embedded delivery of agentic AI inside customer production environments. Operating principles: field first, build where the users are, harden before scale, measure with numbers.",
    },
    "/experience": {
      title: baseTitle + " | Experience",
      description:
        "Eight years embedding with engineering teams at MoonPay, Motorway, Deliveroo, Zalando and IBM/Nordcloud. Shipping AI features in customer codebases, owning auth, scale, reliability and the work that turns a demo into production.",
    },
    "/projects": {
      title: baseTitle + " | Projects",
      description:
        "Selected builds: agentic customer care in production, embedded AI delivery, MCP-style integrations, identity and core engineering platforms, gateway services at 1000+ RPS. Each one shipped, hardened and handed off.",
    },
    "/writing": {
      title: baseTitle + " | Writing",
      description:
        "Notes on shipping agentic AI inside customer codebases, eval-driven development, LLM orchestration, production hardening and the gap between demo and production.",
    },
    "/resume": {
      title: baseTitle + " | Résumé",
      description:
        "Résumé and open-source work — embedded engineering, production agentic AI, evals on real traffic, demo-to-production hand-offs, distributed systems on AWS.",
    },
    "/contact": {
      title: baseTitle + " | Contact",
      description:
        "Open to embedded AI delivery engagements with frontier labs and AI-first companies shipping agents in customer production environments. London-based, remote-friendly, ~25% travel.",
    },
  };

  // Get current page metadata or use defaults
  const currentPath = pathname || "/";
  const metadata = pageMetadata[currentPath] || { 
    title: baseTitle, 
    description: baseDescription 
  };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: [
      "embedded engineering",
      "agentic AI in production",
      "LLM evals on real traffic",
      "MCP servers",
      "sub-agents",
      "retrieval-augmented generation",
      "fine-tuning",
      "prompt engineering on live data",
      "demo-to-production hardening",
      "AI hand-off",
      "customer infrastructure delivery",
      "AWS",
      "Go",
      "Python",
      "TypeScript",
      "Next.js",
      "Kubernetes",
      "Terraform",
      "OAuth2",
      "distributed systems",
      "London engineer",
    ],
    authors: [{ name: "Aashir Javed", url: "https://aashir.net" }],
    creator: "Aashir Javed",
    // Set the metadataBase to resolve relative URLs for OG and Twitter images
    metadataBase: new URL('https://aashir.net'),
    // Open Graph metadata for social media sharing
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://aashir.net${currentPath}`,
      siteName: "Aashir Javed Portfolio",
      images: [
        {
          url: "/me.png",
          width: 1200,
          height: 630,
          alt: "Aashir Javed - Software Engineer",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    // Twitter metadata
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      creator: "@aashirjaved",
      images: ["/me.png"],
    },
  };
}
