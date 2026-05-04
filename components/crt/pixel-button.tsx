"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "danger";

const variantClasses: Record<Variant, string> = {
  primary: "bg-screen text-bright border border-accent hover:bg-accent hover:text-bg",
  ghost:
    "bg-transparent text-fg border border-rule hover:border-accent hover:text-bright",
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
    <span className="inline-flex items-baseline">
      <span>{children}</span>
      <span
        aria-hidden
        className={cn(
          "ml-1 inline-block w-[0.5em]",
          hovered ? "opacity-100 cursor-blink text-current" : "opacity-0",
        )}
      >
        ▌
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
    "inline-flex items-center gap-2 px-4 py-2 font-mono text-sm uppercase tracking-wider bevel select-none transition-none",
    "active:bevel-pressed",
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
