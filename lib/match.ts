// Intent matcher for the console. No imports so it runs under plain Node for tests.
// Replaceable later by a model behind the same ask() signature.

export interface Matchable {
  id: string;
  phrases: string[];
  words: string[];
}

export function normalise(input: string): string {
  return input
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// True when a and b differ by at most one insertion, deletion, substitution or adjacent swap.
function near(a: string, b: string): boolean {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  if (a.length === b.length) {
    if (a.slice(i + 1) === b.slice(i + 1)) return true;
    return a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2);
  }
  return a.length > b.length ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1);
}

export function score(question: string, intent: Matchable): number {
  const q = ` ${normalise(question)} `;
  const tokens = q.trim().split(" ").filter(Boolean);
  let total = 0;
  for (const p of intent.phrases) if (q.includes(` ${normalise(p)} `)) total += 3;
  for (const w of intent.words) {
    if (tokens.includes(w)) total += 1;
    else if (w.length >= 5 && tokens.some((t) => t.length >= 4 && near(t, w))) total += 0.75;
  }
  return total;
}

export function match<T extends Matchable>(question: string, intents: T[]): T | null {
  const tokens = normalise(question).split(" ").filter(Boolean);
  if (tokens.length === 0) return null;
  let best: T | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    const s = score(question, intent);
    if (s > bestScore) {
      best = intent;
      bestScore = s;
    }
  }
  // Long questions need two signals. Short ones such as "pricing" or "kyc" need one.
  const threshold = tokens.length <= 3 ? 0.75 : 1.75;
  return best && bestScore >= threshold ? best : null;
}
