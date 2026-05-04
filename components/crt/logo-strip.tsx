type LogoItem =
  | { kind: "img"; src: string; alt: string }
  | { kind: "text"; text: string; alt?: string };

const logos: LogoItem[] = [
  { kind: "text", text: "MOONPAY" },
  { kind: "img", src: "/logos/motorway.svg", alt: "Motorway" },
  { kind: "img", src: "/logos/deliveroo.svg", alt: "Deliveroo" },
  { kind: "img", src: "/logos/zalando.svg", alt: "Zalando" },
  { kind: "img", src: "/logos/ibm.svg", alt: "IBM / Nordcloud" },
];

const amberFilter =
  "brightness(0) saturate(100%) invert(72%) sepia(56%) saturate(2200%) hue-rotate(0deg) brightness(96%) contrast(101%)";

export function LogoStrip({ label = "PROOF" }: { label?: string }) {
  return (
    <div className="mt-6 border-t border-rule pt-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim mb-3">
        {label} · BUILT THINGS AT
      </div>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        {logos.map((l, i) =>
          l.kind === "img" ? (
            <img
              key={i}
              src={l.src}
              alt={l.alt}
              title={l.alt}
              className="h-6 w-auto select-none opacity-90"
              style={{ filter: amberFilter }}
            />
          ) : (
            <span
              key={i}
              title={l.alt ?? l.text}
              className="font-display text-[11px] tracking-[0.25em] text-bright glow uppercase select-none"
            >
              {l.text}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
