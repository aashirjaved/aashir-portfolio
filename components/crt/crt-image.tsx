import Image from "next/image";
import { cn } from "@/lib/utils";

export function CRTImage({
  src,
  alt,
  width = 720,
  height = 720,
  className,
  tone = "amber",
  priority,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  tone?: "amber" | "mono";
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          "block w-full h-auto select-none",
          tone === "amber"
            ? "[filter:grayscale(1)_contrast(1.05)_sepia(1)_hue-rotate(-12deg)_saturate(2.6)_brightness(0.95)]"
            : "[filter:grayscale(1)_contrast(1.1)]",
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0 1px, transparent 1px 3px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
