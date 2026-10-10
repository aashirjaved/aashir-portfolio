import type { Tier } from "./console";

export interface Offer {
  title: string;
  promise: string;
  included: string;
  evidence: { label: string; href: string }[];
}

export const offers: Offer[] = [
  {
    title: "Onboarding and compliance controls",
    promise: "Investor and borrower onboarding that passes audit and does not lose the investor on the way.",
    included:
      "KYC and KYB with beneficial owner mapping, accredited investor and qualified purchaser gating, document verification, sanctions and PEP screening, wallet allowlisting, ongoing monitoring, case files with an immutable record, reporting packs. Measured on completion rate and drop off as well as on findings.",
    evidence: [
      { label: "Kleido", href: "/work/kleido" },
      { label: "ID Document Reader", href: "/work/id-reader" },
      { label: "MoonPay", href: "/work/moonpay" },
    ],
  },
  {
    title: "Risk, rules and authorisation",
    promise: "Rules you can explain to a regulator and change without a release.",
    included:
      "Eligibility and limit engines, jurisdiction tiering, authentication and authorisation boundaries, permissioned access to on-chain products, transfer restrictions at the token level, identity registries and compliance modules for restricted tokens.",
    evidence: [
      { label: "MoonPay", href: "/work/moonpay" },
      { label: "Motorway auth split", href: "#background" },
    ],
  },
  {
    title: "AI in operations",
    promise: "Agents that prepare the work and never make the decision.",
    included:
      "Document ingestion and extraction, underwriting preparation, covenant and compliance certificate monitoring, portfolio monitoring and reporting agents, evaluation suites, private models on your own infrastructure when data cannot leave.",
    evidence: [
      { label: "ID Document Reader", href: "/work/id-reader" },
      { label: "Magzi", href: "/work/magzi" },
      { label: "Deliveroo care automation", href: "#background" },
    ],
  },
];

export interface EvidenceRow {
  what: string;
  context: string;
  outcome: string;
  tier: Tier;
  href?: string;
}

export const evidence: EvidenceRow[] = [
  {
    what: "Kleido",
    context: "Sanctions and AML review for UK lettings agencies. Live for one agency on its own hardware.",
    outcome:
      "Sanctions, PEP, company ownership and adverse media screening in one run. Nightly re-screening. Auditable case files and OFSI packs.",
    tier: "private",
    href: "/work/kleido",
  },
  {
    what: "ID Document Reader",
    context: "Document intelligence for KYC pipelines that cannot send documents to a cloud.",
    outcome:
      "Passports, licences, bank statements and chip reads, each field labelled with how it was verified. Runs with networking disabled.",
    tier: "private",
    href: "/work/id-reader",
  },
  {
    what: "Identity Platform, MoonPay",
    context: "A licensed crypto payments business at consumer scale.",
    outcome:
      "The systems that establish who a customer is, from sign in through KYC clearance: authentication, KYC tiers, risk scoring, sanctions screening, rules that change by jurisdiction.",
    tier: "employer",
    href: "/work/moonpay",
  },
  {
    what: "Magzi",
    context: "A self hosted agent for owner operated businesses. One Rust binary.",
    outcome:
      "Runs around the clock on WhatsApp and Telegram. Code it writes for itself is kept only when its own test passes. A supervisor turns production errors into repair tasks.",
    tier: "private",
    href: "/work/magzi",
  },
  {
    what: "moonpay/skills",
    context: "Public skills that let AI agents move money through MoonPay.",
    outcome: "On-ramps, swaps, wallets and deposits for agent tooling. Contributor.",
    tier: "verified",
    href: "https://github.com/moonpay/skills",
  },
  {
    what: "alchemy-infra",
    context: "An agent skill for infrastructure as TypeScript.",
    outcome: "Provisions Cloudflare and AWS resources from code with strict secret hygiene. 32 of 32 checks against 27 without it.",
    tier: "verified",
    href: "https://github.com/aashirjaved/alchemy-infra",
  },
  {
    what: "Auth split, Motorway",
    context: "A used car marketplace.",
    outcome: "Decoupled authentication and authorisation services. Top of funnel conversion up 7%.",
    tier: "reported",
  },
  {
    what: "Care automation, Deliveroo",
    context: "A three sided marketplace.",
    outcome: "Agents and fine tuned models in production on Go services. CSAT doubled, handling time halved.",
    tier: "reported",
  },
  {
    what: "Whatify",
    context: "A public tool I run on my own.",
    outcome: "Financial position diagnosis from public data. 300+ weekly users.",
    tier: "verified",
    href: "https://whatify.ai",
  },
];

export const background: { years: string; where: string; what: string }[] = [
  { years: "2025 to now", where: "MoonPay, London", what: "Senior Engineer, Identity Platform. KYC, compliance, risk, authentication, authorisation, jurisdiction rules." },
  { years: "2024 to 2025", where: "Motorway, London", what: "Senior Engineer, Core Engineering. Auth split, Motorway Pro, 15% lower annual AWS cost." },
  { years: "2022 to 2024", where: "Deliveroo, London", what: "Software Engineer II, Customer Care. Agents in production, incident game days for 100+ engineers." },
  { years: "2021 to 2022", where: "Zalando, Helsinki", what: "Software Engineer, Fulfilment. Warehouse integration gateway at 1000+ requests a second, 15% lower latency." },
  { years: "2020 to 2021", where: "Nordcloud, Helsinki", what: "Cloud Developer. Moved a transport client off a PHP monolith across AWS, Azure and GCP." },
  { years: "2017 to 2019", where: "CARE, Islamabad", what: "Design Engineer. Industry 4.0 systems, secured MQTT, firmware updates under ISO 27001." },
];

export const credentials =
  "B.E. Computer Engineering, NUST. AWS Certified Developer. EIT Digital scholar. P@SHA ICT award.";

export const principles = {
  lead: "The system prepares the file. A person makes the call.",
  rest: ["Nothing leaves your perimeter that does not need to.", "Every decision is logged and reproducible."],
  not: "I do not custody keys, give legal advice, or let a model sign off a compliance outcome.",
};

export const formats = [
  {
    name: "Diagnostic call",
    terms: "45 minutes. No charge.",
    body: "Bring the problem and its constraints. You leave with a written view of what to build, buy or skip.",
  },
  {
    name: "Diligence sprint",
    terms: "Two weeks. Fixed fee.",
    body: "I review what you have or plan: architecture, vendors, compliance design, data handling. You get a written go or no go view and a build plan your team can run.",
  },
  {
    name: "Fractional lead",
    terms: "One to three days a week. Monthly.",
    body: "I own one workstream end to end with your team: onboarding, risk rules, or agent operations.",
  },
];

export interface CaseNote {
  slug: string;
  title: string;
  dek: string;
  tier: Tier;
  facts: [string, string][];
  body: string[];
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
      ["Form", "On-prem appliance and hosted"],
      ["Stack", "TypeScript, Effect, Hono, Cloudflare Workers, PostgreSQL, Go"],
      ["Role", "Sole engineer"],
    ],
    body: [
      "A letting agent has to show, for every landlord and tenant, that nobody on the file is sanctioned, politically exposed, hidden behind a company, or in the news for the wrong reasons. Most agencies do this with a spreadsheet and a subscription they half trust.",
      "Kleido gives them one place to open a case, add the people on it, collect their papers, run every check together, decide what to do about a concern, and keep the file. There are four case types and four person states. Checks are immutable. A new run writes new checks. People who clear go on a watch and are re-screened every night against the current lists.",
      "The screening layer combines the UK Sanctions List, PEP data, Companies House ownership and adverse media through an open sanctions engine. Documents go through an OCR service, and identity fields are extracted and matched. Reports come out as person files, case files, concern files and OFSI packs.",
      "The first customer runs it as an appliance on their own hardware with PostgreSQL, a Go agent, and a release pipeline that promotes through a staging ring first. One product rule shaped every screen: the system prepares the file, a person makes the call. Nothing shows as done until the server confirms it.",
    ],
    transfers:
      "Investor and borrower onboarding, beneficial ownership, ongoing monitoring, and a file a regulator can read.",
  },
  {
    slug: "id-reader",
    title: "ID Document Reader",
    dek: "Document intelligence that never leaves the building.",
    tier: "private",
    facts: [
      ["Status", "Private. Demo on request."],
      ["Form", "One Docker image, networking disabled"],
      ["Stack", "Python, OpenCV, ONNX, ZXing"],
      ["Role", "Sole engineer"],
    ],
    body: [
      "Send it a passport, a driving licence, a bank statement or a deed. It returns all the text, the structured fields, a portrait, and for every field a label that says how it was verified.",
      "A passport number is checksum verified because an ICAO check digit proved it. A surname on the same page is not, because no check covers it. A bank statement balance is verified when the running balance chain reconciles. A chip read is cryptographically verified only when the data groups hash, the signature verifies and the signer chains to a trusted anchor.",
      "It reads the name twice, once from the machine readable zone and once from the printed page, and cross validates them through the transliteration rules each issuing state may use. A genuine mismatch goes to review rather than being resolved away.",
      "It runs as a single container with networking disabled. Nothing about a document is logged. Large jobs go through an idempotent queue, so a retry joins the running job instead of starting a second one. It does not claim to detect forgery or liveness, and it says so.",
    ],
    transfers:
      "KYC document capture without a cloud vendor in the data path, and a definition of verified that holds up in an audit.",
  },
  {
    slug: "moonpay",
    title: "MoonPay, Identity Platform",
    dek: "The team that decides who may transact, where, and under what limits.",
    tier: "employer",
    facts: [
      ["Status", "Current"],
      ["Team", "Identity Platform"],
      ["Scope", "KYC, compliance, risk, authentication, authorisation, jurisdiction rules"],
      ["Since", "2025"],
    ],
    body: [
      "The identity platform covers the systems that establish and verify who a customer is, from sign in through KYC clearance: authentication, KYC tiers, risk scoring, sanctions screening, and rules where the same feature behaves differently by jurisdiction.",
      "The job is balancing onboarding conversion, fraud risk and regulatory compliance at once. MoonPay holds a New York BitLicense, a MiCA licence and an FCA registration, so the controls have to satisfy several regulators at the same time.",
      "The detail stays inside MoonPay. The public side is a popular vote win at the AI Agentic Engineering Hackathon, a demo at the London AI x Crypto meetup of a personal agent that went from daily tasks to its first crypto transaction, and contributions to MoonPay's public agent skills.",
    ],
    transfers:
      "How a regulated crypto business draws its compliance controls and keeps them moving at consumer scale.",
  },
  {
    slug: "magzi",
    title: "Magzi",
    dek: "A self hosted agent that has to be right without supervision.",
    tier: "private",
    facts: [
      ["Status", "Running daily. Private repository."],
      ["Form", "One Rust binary, Linux, macOS, Windows"],
      ["Stack", "Rust, SQLite, WhatsApp and Telegram channels"],
      ["Role", "Sole engineer"],
    ],
    body: [
      "Magzi runs around the clock on a messaging channel for its owner or a small business. It starts with no identity and learns the owner and the business from conversation and from documents it is given.",
      "Retrieval comes first. Every turn pulls durable records, knowledge and memory from its own stores before the model is asked anything. If the model is unavailable, the turn still completes from those stores and says so, rather than failing.",
      "It can write code for itself, but code is kept only when its own test passes under a real interpreter or compiler. A model cannot fake that check. A supervision process watches the running service, turns recurring errors into findings, and prepares a repair packet that has to pass the full test suite before it ships.",
      "Names, numbers and addresses are replaced with stable placeholders before anything reaches a model, and restored locally afterwards.",
    ],
    transfers:
      "Agents for operations work that log what they did, fall back cleanly, and never treat a model's opinion as verification.",
  },
];
