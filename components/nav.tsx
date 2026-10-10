import Link from "next/link";
import { site } from "@/data/site";
import { TrackedLink } from "./tracked-link";

const items = [
  { label: "Work", href: "/#evidence" },
  { label: "Engagement", href: "/#engagement" },
  { label: "Background", href: "/#background" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-[6px]">
      <div className="mx-auto flex h-14 max-w-wide items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-0">
        <Link href="/" className="display text-[21px] leading-none">
          Aashir Javed
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5">
          <ul className="mono hidden items-center gap-5 text-mute md:flex">
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
            className="mono rounded-[6px] bg-ink px-3 py-1.5 text-paper transition-opacity hover:opacity-85"
          >
            Book a call
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
