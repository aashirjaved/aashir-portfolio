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
          "block h-auto w-full select-none",
          tone === "amber"
            ? "[filter:grayscale(1)_sepia(0.24)_contrast(1.02)_brightness(0.94)]"
            : "[filter:grayscale(1)_contrast(1.08)]",
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06), transparent 24%), radial-gradient(circle at center, rgba(0,0,0,0) 54%, rgba(0,0,0,0.28) 100%)",
        }}
      />
    </div>
  );
}
