import Link from "next/link";
import { site } from "@/data/site";
import { TrackedLink } from "./tracked-link";

const items = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-rule/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
          <span aria-hidden className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-[12px] font-semibold text-paper">
            AJ
          </span>
          Aashir Javed
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-[14px] text-ink-2 md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <TrackedLink
            event="book_call_click"
            href={site.booking}
            className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-opacity hover:opacity-85"
          >
            Book a call
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
