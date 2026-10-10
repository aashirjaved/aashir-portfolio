import { intents, chips } from "../data/console.ts";
import { match } from "../lib/match.ts";

const cases: [string, string | null][] = [
  // chips must map to themselves
  ...chips.map((c) => [c.chip as string, c.id] as [string, string]),
  ["do you do kyc for investors", "build-onboarding"],
  ["Could you build investor onboarding for our fund?", "build-onboarding"],
  ["we need KYB and UBO checks for borrowers", "build-onboarding"],
  ["kyc", "build-onboarding"],
  ["What compliance work have you actually shipped?", "shipped-compliance"],
  ["show me your track record", "shipped-compliance"],
  ["have you built anything for AML or sanctions screening", "shipped-compliance"],
  ["How do you work with clients?", "work-with-fund"],
  ["is this a fractional engagement or consulting", "work-with-fund"],
  ["what does a diligence sprint look like", "work-with-fund"],
  ["Can AI help our underwriting team?", "ai-underwriting"],
  ["what do you think about llm agents in credit decisions", "ai-underwriting"],
  ["pricing", "availability-cost"],
  ["how much do you charge", "availability-cost"],
  ["when can you start?", "availability-cost"],
  ["We are tokenising a private credit fund", "tokenised-credit"],
  ["how would you handle accredited investor whitelisting", "tokenised-credit"],
  ["RWA", "tokenised-credit"],
  ["what's your crypto experience", "defi-crypto"],
  ["do you know defi and stablecoins", "defi-crypto"],
  ["can you build a rules engine for jurisdictions", "risk-rules"],
  ["authz and authentication", "risk-rules"],
  ["our data cannot leave the building", "privacy-onprem"],
  ["can it be self hosted for GDPR", "privacy-onprem"],
  ["tell me about yourself", "background"],
  ["where have you worked before", "background"],
  ["what languages and tech stack do you use", "stack"],
  ["would you take a full time CTO role", "role"],
  ["how do I get in touch", "contact"],
  ["email", "contact"],
  // misspellings
  ["onbaording for investers", "build-onboarding"],
  ["complaince track recrd", "shipped-compliance"],
  ["tokenzied private credit", "tokenised-credit"],
  ["avaliability and pricng", "availability-cost"],
  ["undewriting with agnets", "ai-underwriting"],
  ["jurisdiciton rules engine", "risk-rules"],
  ["backgruond", "background"],
  ["sanctons screening", "shipped-compliance"],
  ["fractinal advisory", "work-with-fund"],
  ["blockchian experience", "defi-crypto"],
  // must fall back
  ["what is the weather", null],
  ["asdf qwer zxcv", null],
  ["", null],
  ["who won the football last night", null],
  ["recipe for banana bread", null],
];

let pass = 0;
const fails: string[] = [];
for (const [q, expected] of cases) {
  const got = match(q, intents)?.id ?? null;
  if (got === expected) pass++;
  else fails.push(`  "${q}" expected ${expected} got ${got}`);
}
const nonsense = cases.filter(([, e]) => e === null);
const falseConfident = nonsense.filter(([q]) => match(q, intents) !== null).length;
const rate = pass / cases.length;
console.log(`console matcher: ${pass}/${cases.length} (${(rate * 100).toFixed(0)}%), false confident on nonsense: ${falseConfident}`);
if (fails.length) console.log(fails.join("\n"));
const chipFails = chips.filter((c) => match(c.chip as string, intents)?.id !== c.id).length;
if (rate < 0.9 || falseConfident > 0 || chipFails > 0) process.exit(1);
