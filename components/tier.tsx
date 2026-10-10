import { tierNote, type Tier as TierName } from "@/data/console";

export function Tier({ tier }: { tier: TierName }) {
  return (
    <span
      className={`label inline-flex items-center gap-1.5 whitespace-nowrap ${tier === "verified" ? "text-clear" : "text-mute"}`}
      title={tierNote[tier]}
    >
      <span
        aria-hidden
        className={`inline-block h-[7px] w-[7px] rounded-full ${tier === "verified" ? "bg-clear" : "border border-current"}`}
      />
      {tier}
      <span className="sr-only">. {tierNote[tier]}</span>
    </span>
  );
}
