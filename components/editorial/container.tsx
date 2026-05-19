import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
}) {
  const widths = {
    narrow: "max-w-[640px]",
    default: "max-w-[860px]",
    wide: "max-w-[1180px]",
  };
  return (
    <main
      id="main"
      className={cn(
        "mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-32",
        widths[size],
        className,
      )}
    >
      {children}
    </main>
  );
}
