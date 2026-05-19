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

const markFilter =
  "brightness(0) saturate(100%) invert(91%) sepia(8%) saturate(683%) hue-rotate(342deg) brightness(98%) contrast(91%)";

export function LogoStrip({ label = "Selected teams" }: { label?: string }) {
  return (
    <div className="border-t border-rule/80 pt-5">
      <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-dim mb-4">
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-90">
        {logos.map((l, i) =>
          l.kind === "img" ? (
            <img
              key={i}
              src={l.src}
              alt={l.alt}
              title={l.alt}
              className="h-5 w-auto select-none opacity-85"
              style={{ filter: markFilter }}
            />
          ) : (
            <span
              key={i}
              title={l.alt ?? l.text}
              className="font-mono text-sm tracking-[0.28em] text-bright uppercase select-none"
            >
              {l.text}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
