import { tierNote, type Tier as TierName } from "@/data/console";

const styles: Record<TierName, string> = {
  verified: "bg-clear-soft text-clear",
  private: "bg-surface-2 text-ink-2",
  employer: "bg-surface-2 text-ink-2",
  reported: "bg-surface-2 text-mute",
};

export function Tier({ tier }: { tier: TierName }) {
  return (
    <span
      title={tierNote[tier]}
      className={`mono inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] ${styles[tier]}`}
    >
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${tier === "verified" ? "bg-clear" : "bg-current opacity-50"}`} />
      {tier}
      <span className="sr-only">. {tierNote[tier]}</span>
    </span>
  );
}
