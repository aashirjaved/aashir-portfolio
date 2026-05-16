import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Pill({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "strong" | "accent" | "ok";
  className?: string;
}) {
  const tones = {
    default: "pill",
    strong: "pill pill-strong",
    accent: "pill pill-accent",
    ok: "pill border-ok/40 text-ok",
  };
  return <span className={cn(tones[tone], className)}>{children}</span>;
}
