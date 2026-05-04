"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export function SectionHeader({
  index,
  title,
  className,
  id,
}: {
  index: string | number;
  title: string;
  className?: string;
  id?: string;
}) {
  const num = String(index).padStart(2, "0");
  const reduce = useReducedMotion();
  return (
    <div className={cn("mt-16 mb-6 select-none", className)} id={id}>
      <div className="text-dim font-mono text-xs uppercase tracking-[0.25em] mb-1">
        {`> SECTION ${num}`}
      </div>
      <h2 className="font-display text-[clamp(0.95rem,2.4vw,1.5rem)] uppercase glow-strong leading-tight">
        {title}
      </h2>
      <motion.div
        aria-hidden
        className="mt-3 text-dim font-mono text-sm leading-none whitespace-nowrap overflow-hidden origin-left"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
      >
        {"═".repeat(120)}
      </motion.div>
    </div>
  );
}
