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
    chip: "What have you shipped in compliance?",
    phrases: ["shipped in compliance", "track record", "what have you built", "what have you shipped", "compliance experience"],
    words: ["shipped", "compliance", "aml", "sanctions", "screening", "built", "proof", "portfolio", "work", "examples"],
    answer:
      "I built Kleido, a sanctions and AML review platform that a UK lettings agency runs in production on its own hardware. It screens people against the UK Sanctions List, PEP data, company ownership and adverse media, re-screens nightly and keeps an auditable file. I also built an on-prem reader for passports, licences and bank statements. At MoonPay I work on the identity platform: KYC, risk, auth and jurisdiction rules.",
    evidence: [kleido, reader, moonpay],
  },
  {
    id: "build-onboarding",
    question: "Can you build our onboarding and KYC?",
    chip: "Can you build our onboarding and KYC?",
    phrases: ["build our onboarding", "investor onboarding", "borrower onboarding", "kyc for investors", "onboarding flow", "know your customer"],
    words: ["onboarding", "kyc", "kyb", "investor", "investors", "borrower", "borrowers", "verification", "verify", "identity", "ubo", "pep", "lp", "lps"],
    answer:
      "Yes. Onboarding is the work I do most. For a fund that means investor and borrower KYC and KYB, document capture and verification, sanctions and PEP screening, accreditation evidence, a wallet or account allowlist, and ongoing monitoring. I build it so every decision has a record, and so the parts that touch personal documents can run inside your perimeter. Start with the diagnostic call and I will tell you what to build and what to buy.",
    evidence: [kleido, reader, engagement],
  },
  {
    id: "work-with-fund",
    question: "How would you work with a fund?",
    chip: "How would you work with a fund?",
    phrases: ["how would you work", "how do you work", "work with a fund", "work with us", "work together", "engagement model"],
    words: ["fund", "process", "engagement", "advisory", "advisor", "adviser", "fractional", "freelance", "consulting", "consultant", "retainer", "sprint", "diligence", "help"],
    answer:
      "Three ways. A 45 minute diagnostic call, free, where you bring the problem and leave with a written view. A two week diligence sprint, fixed fee, that ends in a go or no go view and a build plan. Or a fractional lead role, one to three days a week, where I own one workstream with your team. Most funds start with the call, then the sprint, then decide whether they need me for longer.",
    evidence: [engagement, contact],
  },
  {
    id: "ai-underwriting",
    question: "Where does AI belong in underwriting?",
    chip: "Where does AI belong in underwriting?",
    phrases: ["where does ai belong", "ai in underwriting", "ai agents", "language model", "machine learning"],
    words: ["ai", "underwriting", "llm", "llms", "agent", "agents", "agentic", "model", "models", "automation", "automate", "gpt", "claude", "ml"],
    answer:
      "AI belongs in preparation, not decision. It should read the documents, extract the fields, flag the gaps, draft the memo and watch for changes. A person should approve the borrower, the investor and the exception. I build it that way because it is what an auditor will accept and because it is what works. Every agent I ship has an evaluation suite, a log of what it did, and a fallback when the model is unavailable.",
    evidence: [reader, magzi, { label: "Deliveroo care automation", href: "/#background", tier: "reported" }],
  },
  {
    id: "availability-cost",
    question: "Are you available, and what does it cost?",
    chip: "Are you available, and what does it cost?",
    phrases: ["how much", "what does it cost", "when can you start", "day rate", "are you available"],
    words: ["available", "availability", "cost", "costs", "price", "pricing", "rate", "rates", "fee", "fees", "budget", "start", "capacity"],
    answer:
      "I take advisory and build work alongside my role at MoonPay, and I am open to a full role for the right team. The diagnostic call is free. The diligence sprint is a fixed fee agreed before we start. The fractional retainer is priced per day, monthly. I give numbers on the call once I understand the scope, and I do not change them afterwards.",
    evidence: [contact],
  },
  {
    id: "tokenised-credit",
    question: "How do you think about tokenised private credit?",
    phrases: ["private credit", "real world asset", "transfer restriction", "qualified purchaser", "accredited investor", "erc 3643", "erc3643"],
    words: ["tokenised", "tokenized", "tokenisation", "tokenization", "token", "tokens", "rwa", "rwas", "permissioned", "allowlist", "whitelist", "whitelisting", "nav", "feeder", "accredited", "accreditation", "securitize", "centrifuge", "credit"],
    answer:
      "Tokenised private credit is mostly a permissioning problem. The issuer allowlists a wallet after KYC and accreditation. The token enforces transfer restrictions, lock ups, holder caps and jurisdiction rules on every transfer, through an identity registry and a compliance module, or a plain permissioned token. NAV is computed off-chain and published on-chain. I design and build the onboarding, the registry and the rules, and keep the audit trail on both sides.",
    evidence: [moonpay, kleido],
  },
  {
    id: "defi-crypto",
    question: "What is your experience in crypto and DeFi?",
    phrases: ["on chain", "smart contract", "crypto experience", "experience in crypto", "defi experience"],
    words: ["defi", "crypto", "onchain", "blockchain", "web3", "wallet", "wallets", "stablecoin", "stablecoins", "ethereum", "solana", "bitcoin", "moonpay"],
    answer:
      "I have worked in crypto payments at MoonPay since 2025, on the identity side that decides who may transact and where. For a credit fund going on-chain the hard problems are rarely the contracts. They are who is allowed to hold the token, what happens when a sanctioned wallet shows up, which jurisdictions you can serve, and keeping the off-chain file in step with the on-chain state. That is where I am useful.",
    evidence: [moonpay, skills],
  },
  {
    id: "risk-rules",
    question: "Do you build risk and rules engines?",
    phrases: ["rules engine", "risk engine", "risk rules", "access control"],
    words: ["risk", "rules", "rule", "limits", "geolocation", "geo", "geofencing", "jurisdiction", "jurisdictions", "authorisation", "authorization", "authz", "authn", "authentication", "auth", "permissions", "fraud", "eligibility"],
    answer:
      "Yes. I build rules engines that a compliance officer can read and change without an engineering release: eligibility, limits, geography, jurisdiction, and who may do what. At MoonPay that means rules where the same feature behaves differently by jurisdiction. At Motorway I led the split into separate authentication and authorisation services, which lifted top of funnel conversion by 7%.",
    evidence: [moonpay, { label: "Motorway", href: "/#background", tier: "reported" }],
  },
  {
    id: "privacy-onprem",
    question: "Can this run without our data leaving?",
    phrases: ["on prem", "on premise", "on premises", "self hosted", "data residency", "data cannot leave", "data leaving"],
    words: ["privacy", "private", "onprem", "gdpr", "residency", "vendor", "vendors", "cloud", "security", "secure", "confidential"],
    answer:
      "Yes, if that is the constraint. The document reader runs as one container with networking disabled. Kleido runs as an appliance on the customer's hardware. Magzi runs on a home server. I treat the cloud as a choice rather than a default, which means you keep the choice.",
    evidence: [reader, kleido, magzi],
  },
  {
    id: "background",
    question: "What is your background?",
    phrases: ["who are you", "about you", "where have you worked", "tell me about yourself"],
    words: ["background", "cv", "resume", "career", "history", "worked", "education", "degree", "deliveroo", "zalando", "motorway"],
    answer:
      "Senior engineer in London. MoonPay identity platform now. Before that Motorway core engineering, the Deliveroo customer care platform, Zalando fulfilment, cloud migration at Nordcloud, and industrial automation at CARE in Islamabad. Computer engineering at NUST, AWS certified. Nine years shipping in regulated and high volume environments.",
    evidence: [{ label: "Background", href: "/#background" }, { label: "CV", href: "/cv" }],
  },
  {
    id: "stack",
    question: "What do you build with?",
    phrases: ["tech stack", "what do you build with"],
    words: ["stack", "languages", "language", "tech", "technology", "typescript", "go", "golang", "rust", "python", "cloudflare", "aws", "postgres", "kubernetes"],
    answer:
      "TypeScript and Go for most product work, Rust where it needs to run for months on a small box, Python for document and model pipelines. Cloudflare Workers, AWS, PostgreSQL. I pick for the team that has to maintain it, not for me.",
    evidence: [kleido, magzi],
  },
  {
    id: "role",
    question: "Would you join full time?",
    phrases: ["full time", "join us", "join the team", "head of engineering"],
    words: ["role", "job", "hire", "hiring", "join", "employee", "cto", "permanent", "position"],
    answer:
      "I am open to the right full role, and I prefer to start with a short engagement. Two weeks of real work tells both of us more than six interviews. If it goes well, we talk.",
    evidence: [engagement],
  },
  {
    id: "contact",
    question: "How do I reach you?",
    phrases: ["get in touch", "book a call", "reach you", "talk to you"],
    words: ["contact", "email", "call", "book", "meet", "meeting", "linkedin", "phone", "chat"],
    answer:
      "Email me at me@aashir.net or book a call from the contact section. I reply within two working days. Include what you are building, where you are in it, and whether you need advice, a build, or both.",
    evidence: [contact],
  },
];

export const fallback: Intent = {
  id: "fallback",
  question: "",
  phrases: [],
  words: [],
  answer:
    "I have not written an answer for that yet. Email me at me@aashir.net and I will reply in person, usually within two working days.",
  evidence: [contact],
};

export const chips = intents.filter((i) => i.chip);
