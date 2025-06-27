// Types for blog posts
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    slug: "building-llm-powered-applications",
    title: "Building Production-Ready LLM-Powered Applications",
    description: "A comprehensive guide to architecting, implementing, and deploying applications powered by Large Language Models",
    date: "2023-06-15",
    readingTime: "12 min read",
    category: "AI & Machine Learning",
    tags: ["LLM", "AI", "Software Architecture", "Production"],
    image: "/me.png",
    featured: true,
  },
  {
    slug: "scaling-golang-microservices",
    title: "Scaling Golang Microservices in High-Traffic Environments",
    description: "Lessons learned from scaling a Go microservices architecture to handle millions of requests per day",
    date: "2023-04-22",
    readingTime: "8 min read",
    category: "Backend Development",
    tags: ["Go", "Microservices", "Performance", "Scalability"],
    image: "/me.png",
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components in Next.js",
    description: "A deep dive into React Server Components and how they change the way we build React applications",
    date: "2023-03-10",
    readingTime: "10 min read",
    category: "Frontend Development",
    tags: ["React", "Next.js", "Server Components", "Performance"],
    image: "/me.png",
    featured: true,
  },
  {
    slug: "machine-learning-pipelines-aws",
    title: "Building End-to-End ML Pipelines on AWS",
    description: "How to design, implement, and maintain production-grade machine learning pipelines on AWS",
    date: "2023-02-05",
    readingTime: "15 min read",
    category: "Cloud & DevOps",
    tags: ["AWS", "Machine Learning", "MLOps", "Infrastructure"],
    image: "/me.png",
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    description: "Leveraging TypeScript's type system to build more robust and maintainable enterprise applications",
    date: "2023-01-18",
    readingTime: "11 min read",
    category: "Frontend Development",
    tags: ["TypeScript", "Enterprise", "Patterns", "Best Practices"],
    image: "/me.png",
  },
  {
    slug: "building-engineering-culture",
    title: "Building a Strong Engineering Culture in Remote Teams",
    description: "Strategies and practices for fostering a collaborative and innovative engineering culture in distributed teams",
    date: "2022-12-12",
    readingTime: "9 min read",
    category: "Engineering Leadership",
    tags: ["Culture", "Remote Work", "Leadership", "Teams"],
    image: "/me.png",
    featured: true,
  },
];

// Types for content calendar
export interface ContentCalendarItem {
  title: string;
  type: "blog" | "tutorial" | "video" | "talk";
  targetDate: string;
  status: "planned" | "in-progress" | "published";
  topics: string[];
  description?: string;
}

// Sample content calendar
export const contentCalendar: ContentCalendarItem[] = [
  {
    title: "Building RAG Applications with Vector Databases",
    type: "blog",
    targetDate: "2023-07-15",
    status: "planned",
    topics: ["AI", "RAG", "Vector Databases", "LLM"],
    description: "A detailed guide on implementing Retrieval-Augmented Generation with various vector database options"
  },
  {
    title: "Performance Optimization Techniques for React Applications",
    type: "tutorial",
    targetDate: "2023-08-01",
    status: "in-progress",
    topics: ["React", "Performance", "Optimization", "Frontend"],
    description: "Step-by-step techniques to improve React application performance including code splitting, memoization, and more"
  },
  {
    title: "Infrastructure as Code with Terraform and AWS",
    type: "video",
    targetDate: "2023-08-20",
    status: "planned",
    topics: ["Terraform", "AWS", "IaC", "DevOps"],
    description: "Video tutorial series on setting up a complete cloud infrastructure using Terraform"
  },
  {
    title: "Implementing Event-Driven Architecture with Kafka",
    type: "blog",
    targetDate: "2023-09-10",
    status: "planned",
    topics: ["Kafka", "Event-Driven", "Microservices", "Architecture"],
    description: "Comprehensive guide to implementing and scaling event-driven systems using Apache Kafka"
  },
];
