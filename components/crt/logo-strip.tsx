const logos = [
  { src: "/logos/motorway.svg", alt: "Motorway" },
  { src: "/logos/deliveroo.svg", alt: "Deliveroo" },
  { src: "/logos/zalando.svg", alt: "Zalando" },
  { src: "/logos/ibm.svg", alt: "IBM / Nordcloud" },
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
        {logos.map((l) => (
          <img
            key={l.alt}
            src={l.src}
            alt={l.alt}
            title={l.alt}
            className="h-6 w-auto select-none opacity-90"
            style={{ filter: amberFilter }}
          />
        ))}
      </div>
    </div>
  );
}
