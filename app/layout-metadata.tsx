import { Metadata } from 'next';

export function generateMetadata({ params, pathname }: { params: any; pathname: string }): Metadata {
  const baseTitle = "Aashir Javed | Senior Software Engineer";
  const baseDescription =
    "Senior engineer building backend, infrastructure, crypto payment and AI-agent systems. Eight years across MoonPay, Motorway, Deliveroo, Zalando and Nordcloud, with quantified work across conversion, cost, latency, CSAT and product launches.";

  const pageMetadata: Record<string, { title: string; description: string }> = {
    "/": {
      title: baseTitle,
      description:
        "Senior engineer building crypto payment rails, AI-agent workflows and platform systems. Current MoonPay work spans public agent skills, AI x crypto demos, product launches and 8.5x faster Polygon buys.",
    },
    "/about": {
      title: baseTitle + " | About",
      description:
        "London-based senior engineer across product, infrastructure and AI: crypto payments at MoonPay, marketplace platforms at Motorway and Deliveroo, fulfillment systems at Zalando, and cloud migration at Nordcloud.",
    },
    "/experience": {
      title: baseTitle + " | Experience",
      description:
        "Impact timeline across MoonPay, Motorway, Deliveroo, Zalando, Nordcloud and CARE: 8.5x faster Polygon buys, +15% platform volume, +7% conversion, -15% AWS cost, 2x CSAT and 1000+ RPS gateways.",
    },
    "/projects": {
      title: baseTitle + " | Projects",
      description:
        "Selected builds: MoonPay AI agents and crypto payments, Whatify with 300+ weekly users, alchemy-infra, Deliveroo customer-care automation, Motorway core engineering and Zalando gateway systems.",
    },
    "/writing": {
      title: baseTitle + " | Writing",
      description:
        "Notes on backend engineering, AI agents, crypto payments, infrastructure, product systems and production tradeoffs.",
    },
    "/resume": {
      title: baseTitle + " | Résumé",
      description:
        "Résumé for Aashir Javed: senior software engineer focused on backend, infrastructure, crypto payments, AI agents, cloud platforms and high-impact product engineering.",
    },
    "/contact": {
      title: baseTitle + " | Contact",
      description:
        "Contact Aashir Javed for senior backend, infrastructure, AI-agent, crypto payments and platform engineering work. London-based.",
    },
  };

  const currentPath = pathname || "/";
  const metadata = pageMetadata[currentPath] || { 
    title: baseTitle, 
    description: baseDescription 
  };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: [
      "backend engineering",
      "AI agents",
      "crypto payments",
      "MoonPay",
      "agent skills",
      "infrastructure as code",
      "Whatify",
      "retrieval-augmented generation",
      "fine-tuning",
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
    metadataBase: new URL('https://aashir.net'),
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
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      creator: "@aashirjaved",
      images: ["/me.png"],
    },
  };
}
