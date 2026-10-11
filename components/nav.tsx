import Link from "next/link";
import { site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";
import { TrackedLink } from "./tracked-link";

const items = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  return (
    <header className="no-print sticky top-0 z-40 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 sm:px-10">
        <Link href="/" className="leading-tight">
          <span className="label block text-[13px] font-semibold tracking-[0.16em]">Aashir Javed</span>
          <span className="label block text-[10.5px] font-normal tracking-[0.16em] text-mute">Software engineer</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="label text-ink-2 transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <TrackedLink
            event="book_call_click"
            href={site.booking}
            className="label rounded-full bg-ink px-4 py-3 text-paper transition-opacity hover:opacity-85"
          >
            Let&apos;s connect
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
