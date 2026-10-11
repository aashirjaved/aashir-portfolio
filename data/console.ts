// Console content. No imports: this file is also loaded by the matcher test under plain Node.

export type Tier = "verified" | "private" | "employer" | "reported";

export interface Evidence {
  label: string;
  href: string;
  tier?: Tier;
}

export interface Intent {
  id: string;
  question: string;
  chip?: string;
  phrases: string[];
  words: string[];
  answer: string;
  points?: string[];
  evidence: Evidence[];
}

export const tierNote: Record<Tier, string> = {
  verified: "Public. You can open it.",
  private: "Real and running. Shown on a call.",
  employer: "Done inside a company. Scope only.",
  reported: "My figure, from my CV.",
};

const kleido: Evidence = { label: "Kleido", href: "/work/kleido", tier: "private" };
const reader: Evidence = { label: "ID Document Reader", href: "/work/id-reader", tier: "private" };
const moonpay: Evidence = { label: "MoonPay scope", href: "/work/moonpay", tier: "employer" };
const magzi: Evidence = { label: "Magzi", href: "/work/magzi", tier: "private" };
const skills: Evidence = { label: "moonpay/skills", href: "https://github.com/moonpay/skills", tier: "verified" };
const engagement: Evidence = { label: "Engagement", href: "/#engagement" };
const contact: Evidence = { label: "Contact", href: "/#contact" };

export const intents: Intent[] = [
  {
    id: "shipped-compliance",
    question: "What have you shipped in compliance?",
    chip: "Compliance work",
    phrases: ["shipped in compliance", "track record", "what have you built", "what have you shipped", "compliance experience"],
    words: ["shipped", "compliance", "aml", "sanctions", "screening", "built", "proof", "portfolio", "work", "examples"],
    answer: "Kleido, a live sanctions and AML platform, plus the identity platform at MoonPay.",
    points: ["Kleido screens sanctions, PEP, ownership and adverse media, nightly", "An on-prem reader verifies passports, licences and bank statements", "At MoonPay: KYC, risk, auth and jurisdiction rules"],
    evidence: [kleido, reader, moonpay],
  },
  {
    id: "build-onboarding",
    question: "Can you build our onboarding and KYC?",
    chip: "Onboarding and KYC",
    phrases: ["build our onboarding", "investor onboarding", "borrower onboarding", "kyc for investors", "onboarding flow", "know your customer"],
    words: ["onboarding", "kyc", "kyb", "investor", "investors", "borrower", "borrowers", "verification", "verify", "identity", "ubo", "pep", "lp", "lps"],
    answer: "Yes. Investor and borrower onboarding is the work I do most.",
    points: ["KYC and KYB with beneficial owners and accreditation", "Sanctions and PEP screening, wallet allowlists, monitoring", "Every decision recorded, documents kept inside your perimeter"],
    evidence: [kleido, reader, engagement],
  },
  {
    id: "work-with-fund",
    question: "How would you work with a fund?",
    chip: "Working with a fund",
    phrases: ["how would you work", "how do you work", "work with a fund", "work with us", "work together", "engagement model"],
    words: ["fund", "process", "engagement", "advisory", "advisor", "adviser", "fractional", "freelance", "consulting", "consultant", "retainer", "sprint", "diligence", "help"],
    answer: "Start with a free call, then a two week sprint if it fits.",
    points: ["Diagnostic call: 45 minutes, written view after", "Diligence sprint: two weeks, fixed fee, build plan", "Fractional lead: one to three days a week"],
    evidence: [engagement, contact],
  },
  {
    id: "ai-underwriting",
    question: "Where does AI belong in underwriting?",
    chip: "AI in underwriting",
    phrases: ["where does ai belong", "ai in underwriting", "ai agents", "language model", "machine learning"],
    words: ["ai", "harness", "harnesses", "underwriting", "llm", "llms", "agent", "agents", "agentic", "model", "models", "automation", "automate", "gpt", "claude", "ml"],
    answer: "In preparation, never in the decision.",
    points: ["Read documents, extract fields, flag gaps, draft the memo", "A person approves the borrower, the investor, the exception", "Every agent ships with evals, a log and a fallback"],
    evidence: [reader, magzi, { label: "Deliveroo care automation", href: "/#background", tier: "reported" }],
  },
  {
    id: "availability-cost",
    question: "Are you available, and what does it cost?",
    chip: "Availability and cost",
    phrases: ["how much", "what does it cost", "when can you start", "day rate", "are you available"],
    words: ["available", "availability", "cost", "costs", "price", "pricing", "rate", "rates", "fee", "fees", "budget", "start", "capacity"],
    answer: "Available for advisory and build work now.",
    points: ["Diagnostic call is free", "Sprint is a fixed fee agreed up front", "Retainer is a day rate, billed monthly"],
    evidence: [contact],
  },
  {
    id: "tokenised-credit",
    question: "How do you think about tokenised private credit?",
    phrases: ["private credit", "real world asset", "transfer restriction", "qualified purchaser", "accredited investor", "erc 3643", "erc3643"],
    words: ["tokenised", "tokenized", "tokenisation", "tokenization", "token", "tokens", "rwa", "rwas", "permissioned", "allowlist", "whitelist", "whitelisting", "nav", "feeder", "accredited", "accreditation", "securitize", "centrifuge", "credit"],
    answer: "Mostly a permissioning problem, not a contracts problem.",
    points: ["Allowlist wallets after KYC and accreditation", "Enforce transfer, lock up and jurisdiction rules on every transfer", "Keep the off-chain file and on-chain state in step"],
    evidence: [moonpay, kleido],
  },
  {
    id: "defi-crypto",
    question: "What is your experience in crypto and DeFi?",
    phrases: ["on chain", "smart contract", "crypto experience", "experience in crypto", "defi experience"],
    words: ["defi", "crypto", "onchain", "blockchain", "web3", "wallet", "wallets", "stablecoin", "stablecoins", "ethereum", "solana", "bitcoin", "moonpay"],
    answer: "Crypto payments at MoonPay since 2025, on the identity side.",
    points: ["Who may hold the token, and where", "What happens when a sanctioned wallet appears", "Off-chain records that match on-chain state"],
    evidence: [moonpay, skills],
  },
  {
    id: "risk-rules",
    question: "Do you build risk and rules engines?",
    phrases: ["rules engine", "risk engine", "risk rules", "access control"],
    words: ["risk", "rules", "rule", "limits", "geolocation", "geo", "geofencing", "jurisdiction", "jurisdictions", "authorisation", "authorization", "authz", "authn", "authentication", "auth", "permissions", "fraud", "eligibility"],
    answer: "Yes, rules a compliance officer can read and change.",
    points: ["Eligibility, limits, geography and jurisdiction", "Jurisdiction rules at MoonPay", "Auth split at Motorway lifted conversion 7%"],
    evidence: [moonpay, { label: "Motorway", href: "/#background", tier: "reported" }],
  },
  {
    id: "privacy-onprem",
    question: "Can this run without our data leaving?",
    phrases: ["on prem", "on premise", "on premises", "self hosted", "data residency", "data cannot leave", "data leaving"],
    words: ["privacy", "private", "onprem", "gdpr", "residency", "vendor", "vendors", "cloud", "security", "secure", "confidential"],
    answer: "Yes. If data cannot leave, it does not.",
    points: ["Document reader runs with networking disabled", "Kleido runs on the customer's own hardware", "Cloud is a choice, not a default"],
    evidence: [reader, kleido, magzi],
  },
  {
    id: "background",
    question: "What is your background?",
    phrases: ["who are you", "about you", "where have you worked", "tell me about yourself"],
    words: ["background", "cv", "resume", "career", "history", "worked", "education", "degree", "deliveroo", "zalando", "motorway"],
    answer: "Senior engineer in London, nine years in regulated and high volume systems.",
    points: ["Now: MoonPay identity platform", "Before: Motorway, Deliveroo, Zalando, Nordcloud", "Computer engineering at NUST, AWS certified"],
    evidence: [{ label: "Background", href: "/#background" }, { label: "CV", href: "/cv" }],
  },
  {
    id: "stack",
    question: "What do you build with?",
    phrases: ["tech stack", "what do you build with"],
    words: ["stack", "languages", "language", "tech", "technology", "typescript", "go", "golang", "rust", "python", "cloudflare", "aws", "postgres", "kubernetes"],
    answer: "TypeScript and Go for product, Rust for always-on, Python for documents.",
    points: ["Cloudflare Workers, AWS, PostgreSQL", "Chosen for the team that maintains it"],
    evidence: [kleido, magzi],
  },
  {
    id: "role",
    question: "Would you join full time?",
    phrases: ["full time", "join us", "join the team", "head of engineering"],
    words: ["role", "job", "hire", "hiring", "join", "employee", "cto", "permanent", "position"],
    answer: "Open to the right full role, ideally after a short engagement.",
    points: ["Two weeks of real work beats six interviews"],
    evidence: [engagement],
  },
  {
    id: "contact",
    question: "How do I reach you?",
    phrases: ["get in touch", "book a call", "reach you", "talk to you"],
    words: ["contact", "email", "call", "book", "meet", "meeting", "linkedin", "phone", "chat"],
    answer: "Email me@aashir.net or book a call below.",
    points: ["Reply within two working days", "Say what you are building and what you need"],
    evidence: [contact],
  },
];

export const fallback: Intent = {
  id: "fallback",
  question: "",
  phrases: [],
  words: [],
  answer:
    "No written answer for that yet. Email me@aashir.net and I will reply in person.",
  evidence: [contact],
};

export const chips = intents.filter((i) => i.chip);
