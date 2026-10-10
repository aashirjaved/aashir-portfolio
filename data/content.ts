import type { Tier } from "./console";

export type ServiceIcon = "onboarding" | "rules" | "ai";

export const services: { title: string; line: string; icon: ServiceIcon; tags: string[] }[] = [
  {
    title: "Onboarding and KYC",
    line: "Investor and borrower onboarding that passes audit.",
    icon: "onboarding",
    tags: ["KYC / KYB", "Sanctions", "Accreditation"],
  },
  {
    title: "Risk and rules",
    line: "Rules a regulator can read and you can change.",
    icon: "rules",
    tags: ["Eligibility", "Jurisdictions", "AuthZ"],
  },
  {
    title: "AI in operations",
    line: "Agents that prepare the file. People decide.",
    icon: "ai",
    tags: ["Documents", "Monitoring", "Evals"],
  },
];

export const stats: { value: string; label: string; tier: Tier }[] = [
  { value: "9 yrs", label: "regulated, high volume systems", tier: "reported" },
  { value: "+7%", label: "conversion from an auth split", tier: "reported" },
  { value: "2×", label: "CSAT with agents in production", tier: "reported" },
  { value: "300+", label: "weekly users on a side product", tier: "verified" },
];

export interface ProofCard {
  name: string;
  line: string;
  tier: Tier;
  href: string;
  tag: string;
}

export const proof: ProofCard[] = [
  { name: "Kleido", line: "Sanctions and AML review, live on a customer's own hardware.", tier: "private", href: "/work/kleido", tag: "Compliance" },
  { name: "ID Document Reader", line: "Passports, licences and bank statements, verified offline.", tier: "private", href: "/work/id-reader", tag: "KYC" },
  { name: "MoonPay Identity", line: "Auth, KYC tiers, risk scoring and jurisdiction rules.", tier: "employer", href: "/work/moonpay", tag: "Crypto" },
  { name: "Magzi", line: "A self hosted agent that proves its own code before keeping it.", tier: "private", href: "/work/magzi", tag: "Agents" },
  { name: "moonpay/skills", line: "Public skills that let AI agents move money.", tier: "verified", href: "https://github.com/moonpay/skills", tag: "Open source" },
  { name: "Whatify", line: "Financial diagnosis from public data. 300+ weekly users.", tier: "verified", href: "https://whatify.ai", tag: "Product" },
];

export const steps = [
  { name: "Call", terms: "45 min · free", line: "A written view of what to build, buy or skip." },
  { name: "Sprint", terms: "2 weeks · fixed fee", line: "A go or no go and a plan your team can run." },
  { name: "Lead", terms: "1 to 3 days a week", line: "I own one workstream with your team." },
];

export const companies = [
  { name: "MoonPay", years: "2025 to now" },
  { name: "Motorway", years: "2024" },
  { name: "Deliveroo", years: "2022" },
  { name: "Zalando", years: "2021" },
  { name: "Nordcloud", years: "2020" },
  { name: "CARE", years: "2017" },
];

export const background: { years: string; where: string; what: string }[] = [
  { years: "2025 to now", where: "MoonPay, London", what: "Senior Engineer, Identity Platform. KYC, compliance, risk, authentication, authorisation, jurisdiction rules." },
  { years: "2024 to 2025", where: "Motorway, London", what: "Senior Engineer, Core Engineering. Auth split, Motorway Pro, 15% lower annual AWS cost." },
  { years: "2022 to 2024", where: "Deliveroo, London", what: "Software Engineer II, Customer Care. Agents in production, incident game days for 100+ engineers." },
  { years: "2021 to 2022", where: "Zalando, Helsinki", what: "Software Engineer, Fulfilment. Warehouse gateway at 1000+ requests a second, 15% lower latency." },
  { years: "2020 to 2021", where: "Nordcloud, Helsinki", what: "Cloud Developer. Moved a transport client off a PHP monolith across AWS, Azure and GCP." },
  { years: "2017 to 2019", where: "CARE, Islamabad", what: "Design Engineer. Industry 4.0 systems, secured MQTT, firmware updates under ISO 27001." },
];

export const credentials =
  "B.E. Computer Engineering, NUST. AWS Certified Developer. EIT Digital scholar. P@SHA ICT award.";

export const rule = "The system prepares the file. A person makes the call.";

export interface CaseNote {
  slug: string;
  title: string;
  dek: string;
  tier: Tier;
  facts: [string, string][];
  does: string[];
  transfers: string;
}

export const cases: CaseNote[] = [
  {
    slug: "kleido",
    title: "Kleido",
    dek: "Sanctions and AML review for UK lettings agencies.",
    tier: "private",
    facts: [
      ["Status", "Live for one agency"],
      ["Runs on", "Customer hardware"],
      ["Stack", "TypeScript, Go, PostgreSQL"],
      ["Role", "Sole engineer"],
    ],
    does: [
      "Open a case, add the people, collect their papers",
      "Screen sanctions, PEP, company ownership and adverse media in one run",
      "Re-screen everyone who cleared, every night",
      "Immutable checks, human decisions, OFSI-ready reports",
    ],
    transfers: "Investor and borrower onboarding with a file a regulator can read.",
  },
  {
    slug: "id-reader",
    title: "ID Document Reader",
    dek: "Document intelligence that never leaves the building.",
    tier: "private",
    facts: [
      ["Status", "Demo on request"],
      ["Runs on", "One container, no network"],
      ["Stack", "Python, OpenCV, ONNX"],
      ["Role", "Sole engineer"],
    ],
    does: [
      "Reads passports, licences, bank statements and deeds",
      "Labels every field with how it was verified",
      "Cross-checks the printed name against the machine readable zone",
      "Verifies passport chips against trusted anchors",
    ],
    transfers: "KYC document capture with no cloud vendor in the data path.",
  },
  {
    slug: "moonpay",
    title: "MoonPay Identity",
    dek: "Who may transact, where, and under what limits.",
    tier: "employer",
    facts: [
      ["Status", "Current"],
      ["Team", "Identity Platform"],
      ["Licences", "NY BitLicense, MiCA, FCA"],
      ["Since", "2025"],
    ],
    does: [
      "Authentication, KYC tiers and risk scoring",
      "Sanctions screening and jurisdiction rules",
      "Balancing conversion, fraud risk and compliance",
      "Hackathon win and a live agent demo at the AI x Crypto meetup",
    ],
    transfers: "How a regulated crypto business keeps its controls moving at scale.",
  },
  {
    slug: "magzi",
    title: "Magzi",
    dek: "A self hosted agent that has to be right without supervision.",
    tier: "private",
    facts: [
      ["Status", "Running daily"],
      ["Runs on", "One Rust binary"],
      ["Channels", "WhatsApp, Telegram"],
      ["Role", "Sole engineer"],
    ],
    does: [
      "Answers from its own records first, the model second",
      "Keeps self-written code only when its own test passes",
      "Turns production errors into tested repair tasks",
      "Scrubs names and numbers before anything reaches a model",
    ],
    transfers: "Operations agents that log everything and fail safely.",
  },
];
