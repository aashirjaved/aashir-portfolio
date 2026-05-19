"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "danger";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-bright text-bg border border-bright hover:bg-accent hover:border-accent hover:text-bright shadow-[0_20px_50px_rgba(191,109,58,0.18)]",
  ghost:
    "bg-transparent text-bright border border-rule hover:border-accent hover:text-bright hover:bg-screen/70",
  danger:
    "bg-transparent text-danger border border-danger hover:bg-danger hover:text-bg",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

function Inner({ children, hovered }: { children: ReactNode; hovered: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span>{children}</span>
      <span
        aria-hidden
        className={cn(
          "text-[0.9em] transition-transform duration-300",
          hovered ? "translate-x-0.5 opacity-100" : "opacity-70",
        )}
      >
        ↗
      </span>
    </span>
  );
}

export function PixelButton({
  href,
  external,
  onClick,
  type,
  children,
  className,
  variant = "primary",
  disabled,
}: Common & {
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const cls = cn(
    "inline-flex items-center px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-300",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    className,
  );
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };
  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={cls} {...handlers}>
        <Inner hovered={hovered}>{children}</Inner>
      </a>
    ) : (
      <Link href={href} className={cls} {...handlers}>
        <Inner hovered={hovered}>{children}</Inner>
      </Link>
    );
  }
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      {...handlers}
    >
      <Inner hovered={hovered}>{children}</Inner>
    </button>
  );
}
