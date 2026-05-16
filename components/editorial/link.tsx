import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function EditorialLink({
  href,
  children,
  external,
  className,
  variant = "static",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  variant?: "static" | "grow";
}) {
  const cls = cn(variant === "grow" ? "link-grow" : "link-static", className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(cls, "inline-flex items-baseline gap-1")}
      >
        {children}
        <span aria-hidden className="text-ink-faint">↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const inner = (
    <span className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent transition-colors group">
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
