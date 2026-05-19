"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { name: "Work", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-rule-soft"
          : "bg-transparent",
      )}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-baseline gap-2"
          aria-label="Home"
        >
          <span className="display text-[22px] leading-none text-ink">
            Aashir
          </span>
          <span className="display-italic text-[22px] leading-none text-ink-mute group-hover:text-accent transition-colors">
            Javed
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => {
            const active = isActive(pathname, it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3 py-1.5 text-sm transition-colors",
                  active ? "text-ink" : "text-ink-mute hover:text-ink",
                )}
              >
                {it.name}
                {active && (
                  <span
                    aria-hidden
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 btn"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden h-10 w-10 inline-flex flex-col items-center justify-center gap-[5px] -mr-2"
        >
          <span
            className={cn(
              "block w-5 h-px bg-ink transition-transform",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-ink transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-ink transition-transform",
              open && "-translate-y-[6px] -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-rule-soft animate-fade-in">
          <nav className="px-5 py-6 flex flex-col gap-1">
            {items.map((it) => {
              const active = isActive(pathname, it.href);
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "display text-3xl py-2 transition-colors",
                    active ? "text-accent" : "text-ink hover:text-accent",
                  )}
                >
                  {it.name}
                </Link>
              );
            })}
            <Link href="/contact" className="btn mt-4 self-start">
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
