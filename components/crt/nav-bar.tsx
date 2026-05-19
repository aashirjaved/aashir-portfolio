"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { name: "home", href: "/" },
  { name: "work", href: "/projects" },
  { name: "experience", href: "/experience" },
  { name: "writing", href: "/writing" },
  { name: "about", href: "/about" },
  { name: "resume", href: "/resume" },
  { name: "contact", href: "/contact" },
];

const social = [
  { label: "github", href: "https://github.com/aashirjaved" },
  { label: "linkedin", href: "https://www.linkedin.com/in/aashirjaved/" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function NavBar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-rule/80 bg-bg/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <span aria-hidden className="h-2.5 w-2.5 bg-accent" />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-dim">Aashir Javed</div>
            <div className="font-display text-lg leading-none text-bright">Systems, product, AI</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
          {items.map((it) => {
            const active = isActive(pathname, it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "px-3 py-2 transition-colors",
                  active ? "text-bright" : "hover:text-bright",
                )}
              >
                {it.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-dim transition-colors hover:text-bright"
            >
              {s.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden border border-rule px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bright"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-rule bg-screen/95">
          <nav className="px-5 py-4 flex flex-col gap-3">
            {items.map((it) => {
              const active = isActive(pathname, it.href);
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.22em]",
                    active ? "text-bright" : "text-dim",
                  )}
                >
                  {it.name}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-wrap gap-4 border-t border-rule pt-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.22em] text-dim"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
