import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function CRTScreen({
  children,
  className,
  width = "narrow",
}: {
  children: ReactNode;
  className?: string;
  width?: "narrow" | "wide";
}) {
  return (
    <main
      id="main"
      className={cn(
        "mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-24",
        width === "narrow" ? "max-w-[1180px]" : "max-w-[1320px]",
        className,
      )}
    >
      {children}
    </main>
  );
}
