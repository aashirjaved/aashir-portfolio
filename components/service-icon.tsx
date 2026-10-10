import type { ServiceIcon as Kind } from "@/data/content";

// Small looping illustrations. Pure CSS, paused under reduced motion.
export function ServiceIcon({ kind }: { kind: Kind }) {
  if (kind === "onboarding") {
    return (
      <div aria-hidden className="flex h-24 flex-col justify-center gap-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="h-5 w-5 rounded-full bg-surface-2" />
            <span className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
              <span
                className="anim absolute inset-0 origin-left rounded-full bg-clear/70"
                style={{ animation: `fill 3.6s ${i * 0.45}s cubic-bezier(.22,1,.36,1) infinite` }}
              />
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "rules") {
    return (
      <div aria-hidden className="relative h-24">
        <span className="absolute left-0 right-0 top-1/2 h-px bg-rule" />
        <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md border border-ink/30 bg-surface" />
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="anim absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full"
            style={{
              background: i === 1 ? "rgb(var(--mute))" : "rgb(var(--clear))",
              animation: `${i === 1 ? "travel-stop" : "travel"} 3.6s ${i * 1.2}s linear infinite`,
            }}
          />
        ))}
      </div>
    );
  }
  return (
    <div aria-hidden className="relative flex h-24 items-center justify-center">
      <div className="relative h-20 w-16 overflow-hidden rounded-lg border border-rule bg-surface p-2">
        {[70, 90, 55, 80, 65].map((w, i) => (
          <span key={i} className="mb-1.5 block h-1.5 rounded-full bg-surface-2" style={{ width: `${w}%` }} />
        ))}
        <span className="anim absolute left-0 right-0 top-1 h-4 bg-clear/20" style={{ animation: "scan 2.8s ease-in-out infinite" }} />
      </div>
      <div className="ml-3 flex flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="anim h-2 w-12 origin-left rounded-full bg-clear/70"
            style={{ animation: `fill 2.8s ${0.4 + i * 0.35}s ease-out infinite` }}
          />
        ))}
      </div>
    </div>
  );
}
