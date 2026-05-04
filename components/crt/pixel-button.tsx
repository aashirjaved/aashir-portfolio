import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "danger";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-screen text-bright border border-accent hover:bg-accent hover:text-bg transition-none",
  ghost:
    "bg-transparent text-fg border border-rule hover:border-accent hover:text-bright transition-none",
  danger:
    "bg-transparent text-danger border border-danger hover:bg-danger hover:text-bg transition-none",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

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
  const cls = cn(
    "inline-flex items-center gap-2 px-4 py-2 font-mono text-sm uppercase tracking-wider bevel select-none",
    "active:bevel-pressed",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    className,
  );
  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
