import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function CRTLink({
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
  const cls = cn(
    "underline decoration-rule underline-offset-4 hover:decoration-accent text-accent hover:text-bright",
    "transition-none",
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
        <span aria-hidden className="text-dim"> ↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
