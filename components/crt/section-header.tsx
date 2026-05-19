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
    <div className={cn("mb-6 mt-16 select-none", className)} id={id}>
      <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Section {num}</div>
      <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] leading-[0.96] text-bright">{title}</h2>
      <motion.div
        aria-hidden
        className="mt-4 h-px origin-left bg-rule"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
      />
    </div>
  );
}
