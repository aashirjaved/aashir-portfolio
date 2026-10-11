import type { Tier } from "./console";

export interface WorkCard {
  name: string;
  outcome: string;
  detail: string;
  tags: string[];
  tier: Tier;
  href?: string;
  stat?: string;
  kind: "feature" | "card" | "stat";
}

// Selected work. Outcome first, then the detail.
export const work: WorkCard[] = [
  {
    kind: "feature",
    name: "Kleido",
    outcome: "A UK agency screens every landlord and tenant in one run, then again every night.",
    detail: "Sanctions, PEP, ownership and adverse media. Live on the customer's own hardware.",
    tags: ["Compliance", "Product", "2026"],
    tier: "private",
    href: "/work/kleido",
  },
  {
    kind: "card",
    name: "ID Document Reader",
    outcome: "Passports and bank statements verified without leaving the building.",
    detail: "Every field says how it was verified. Runs with networking off.",
    tags: ["KYC", "Python", "2026"],
    tier: "private",
    href: "/work/id-reader",
  },
  {
    kind: "card",
    name: "Magzi",
    outcome: "An agent that keeps its own code only when the tests pass.",
    detail: "A self hosted agent harness with memory, evals and a supervisor.",
    tags: ["Agents", "Rust", "2026"],
    tier: "private",
    href: "/work/magzi",
  },
  {
    kind: "stat",
    name: "Motorway",
    stat: "+7%",
    outcome: "Top of funnel conversion after splitting authentication from authorisation.",
    detail: "Led the move to separate AuthN and AuthZ services.",
    tags: ["Auth", "2025"],
    tier: "reported",
  },
  {
    kind: "stat",
    name: "Deliveroo",
    stat: "2×",
    outcome: "Customer satisfaction once agents ran the care flow.",
    detail: "Agents and fine tuned models on Go services, in production.",
    tags: ["Agents", "2024"],
    tier: "reported",
  },
  {
    kind: "card",
    name: "Identity work",
    outcome: "Sign-in, KYC and risk features, shipped as an engineer at MoonPay.",
    detail: "My day job since 2025.",
    tags: ["Day job", "2025"],
    tier: "employer",
    href: "/work/moonpay",
  },
];

export const alsoBuilt = [
  { name: "moonpay/skills", href: "https://github.com/moonpay/skills", note: "public agent skills" },
  { name: "alchemy-infra", href: "https://github.com/aashirjaved/alchemy-infra", note: "infra as TypeScript for agents" },
  { name: "Whatify", href: "https://whatify.ai", note: "300+ weekly users" },
];

export const stats: { value: string; label: string }[] = [
  { value: "9", label: "years in fintech and crypto" },
  { value: "+7%", label: "conversion, auth split" },
  { value: "2×", label: "CSAT, agent-led care" },
  { value: "300+", label: "weekly users, side product" },
];

export const about =
  "I'm Aashir, a senior software engineer based in London. I build AI agents and the KYC, risk and payment systems around them. My work sits between engineering and compliance. Over nine years I have shipped in fintech and crypto, from marketplaces to a live AML platform. I keep a person in charge of every decision an agent prepares.";

export const steps = [
  { name: "Call", terms: "45 min · free", line: "A written view of what to build, buy or skip." },
  { name: "Sprint", terms: "2 weeks · fixed fee", line: "A go or no go and a plan your team can run." },
  { name: "Lead", terms: "1 to 3 days a week", line: "I own one workstream with your team." },
];

export const companies = ["MoonPay", "Motorway", "Deliveroo", "Zalando", "Nordcloud", "CARE"];

export const background: { years: string; where: string; what: string }[] = [
  { years: "2025 to now", where: "MoonPay, London", what: "Senior Software Engineer on the identity team. Work on sign-in, KYC and risk features." },
  { years: "2024 to 2025", where: "Motorway, London", what: "Senior Software Engineer, Core Engineering. Auth split, Motorway Pro, 15% lower annual AWS cost." },
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
  tag: string;
  headline: string;
  challenge: string;
  role: string;
  decisions: { title: string; body: string }[];
  outcome: { value: string; label: string }[];
  facts: [string, string][];
  tier: Tier;
}

export const cases: CaseNote[] = [
  {
    slug: "kleido",
    title: "Kleido",
    tag: "Compliance · 2026",
    headline: "A UK agency screens every landlord and tenant in one run, then again every night.",
    challenge:
      "Letting agents must show that nobody on a file is sanctioned, politically exposed or hiding behind a company. They were doing it with spreadsheets and a subscription they half trusted.",
    role: "Sole engineer. Product, backend, the screening pipeline and the appliance release.",
    decisions: [
      { title: "Checks are immutable", body: "A new run writes new checks, so the file is the audit trail." },
      { title: "People make the call", body: "The system prepares the file. Staff decide every concern." },
      { title: "It runs on their hardware", body: "An appliance with its own database keeps client data in the building." },
    ],
    outcome: [
      { value: "Live", label: "for one UK agency" },
      { value: "Nightly", label: "re-screening of everyone cleared" },
      { value: "4", label: "sources in one run" },
    ],
    facts: [
      ["Stack", "TypeScript, Go, PostgreSQL"],
      ["Status", "Live, private repository"],
    ],
    tier: "private",
  },
  {
    slug: "id-reader",
    title: "ID Document Reader",
    tag: "KYC · 2026",
    headline: "Passports, licences and bank statements verified without leaving the building.",
    challenge:
      "KYC needs data from identity documents. Sending passports to a cloud vendor is a risk many teams cannot take.",
    role: "Sole engineer. Document pipeline, verification rules and the API.",
    decisions: [
      { title: "Say how each field was verified", body: "Checksum, cross-check or cryptographic proof, labelled per field." },
      { title: "Read the name twice", body: "The printed and machine readable names are cross-checked. A mismatch goes to review." },
      { title: "No network, no logs", body: "One container with networking off. Nothing about a document is logged." },
    ],
    outcome: [
      { value: "0", label: "network calls at runtime" },
      { value: "5", label: "verification tiers per field" },
      { value: "5", label: "document types read" },
    ],
    facts: [
      ["Stack", "Python, OpenCV, ONNX"],
      ["Status", "Private, demo on request"],
    ],
    tier: "private",
  },
  {
    slug: "magzi",
    title: "Magzi",
    tag: "Agents · 2026",
    headline: "An agent that keeps its own code only when the tests pass.",
    challenge:
      "An always-on agent for a small business cannot be babysat, and one confident wrong answer costs trust.",
    role: "Sole engineer. Agent loop, memory, tools, channels and the supervisor.",
    decisions: [
      { title: "Records first, model second", body: "Every turn pulls from its own stores. The model only does the thinking." },
      { title: "Self-written code is gated", body: "It is kept only when a real interpreter or compiler passes its test." },
      { title: "Scrub before sending", body: "Names and numbers become placeholders before any model sees them." },
    ],
    outcome: [
      { value: "1", label: "Rust binary" },
      { value: "2", label: "channels, WhatsApp and Telegram" },
      { value: "Daily", label: "use" },
    ],
    facts: [
      ["Stack", "Rust, SQLite"],
      ["Status", "Running daily, private repository"],
    ],
    tier: "private",
  },
  {
    slug: "moonpay",
    title: "Identity work",
    tag: "Day job · 2025",
    headline: "Shipping sign-in, KYC and risk features as an engineer at MoonPay.",
    challenge:
      "People have to get through sign-in and verification quickly without weakening fraud or compliance checks.",
    role: "Senior software engineer on the identity team.",
    decisions: [
      { title: "Sign-in", body: "I work on authentication features." },
      { title: "KYC and risk", body: "I work on verification and risk checks in onboarding." },
      { title: "Agents", body: "I build with AI agents and contributed to the public agent skills." },
    ],
    outcome: [
      { value: "2025", label: "joined the team" },
      { value: "Win", label: "popular vote, internal AI hackathon" },
    ],
    facts: [
      ["Role", "Senior Software Engineer"],
      ["Detail", "Internal, not shared"],
    ],
    tier: "employer",
  },
];
