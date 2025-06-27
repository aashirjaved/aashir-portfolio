import { Metadata } from 'next';

// This function provides dynamic metadata generation for different pages
export function generateMetadata({ params, pathname }: { params: any; pathname: string }): Metadata {
  // Base title and description
  const baseTitle = "Aashir Javed | Software Engineer";
  const baseDescription = "Senior software engineer specializing in full-stack development, AI/ML integration, and cloud infrastructure.";
  
  // Page-specific metadata
  const pageMetadata: Record<string, { title: string; description: string }> = {
    "/": {
      title: baseTitle + " | Home",
      description: baseDescription + " Experienced in Go, Python, React, and AWS.",
    },
    "/about": {
      title: baseTitle + " | About Me",
      description: "Learn about my journey, expertise in AI/ML, full-stack development, and what drives me as an engineer.",
    },
    "/experience": {
      title: baseTitle + " | Experience",
      description: "8+ years of experience at companies like Motorway, Deliveroo, and Zalando building scalable systems.",
    },
    "/projects": {
      title: baseTitle + " | Projects",
      description: "Featured projects including AI-powered customer care, infrastructure platforms, and high-performance systems.",
    },
    "/writing": {
      title: baseTitle + " | Writing",
      description: "Technical articles on AI, full-stack development, infrastructure, and engineering leadership.",
    },
    "/resume": {
      title: baseTitle + " | Resume & Open Source",
      description: "My professional resume and open source contributions in software engineering and AI development.",
    },
    "/contact": {
      title: baseTitle + " | Contact",
      description: "Get in touch to discuss opportunities, collaborations, or just to have a conversation about technology.",
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
