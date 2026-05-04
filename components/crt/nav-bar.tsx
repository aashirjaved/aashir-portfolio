"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Cursor } from "./cursor";

const items = [
  { name: "home", href: "/" },
  { name: "work", href: "/projects" },
  { name: "exp", href: "/experience" },
  { name: "writing", href: "/writing" },
  { name: "about", href: "/about" },
  { name: "resume", href: "/resume" },
  { name: "contact", href: "/contact" },
];

const social = [
  { label: "gh", href: "https://github.com/aashirjaved" },
  { label: "in", href: "https://www.linkedin.com/in/aashirjaved/" },
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
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/95 border-b border-rule backdrop-blur-sm">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-12 flex items-center justify-between font-mono text-sm">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
          <span aria-hidden className="inline-block w-3 h-3 bg-accent group-hover:bg-bright" />
          <span className="text-bright uppercase tracking-[0.18em] text-xs sm:text-sm">
            AASHIR<span className="text-dim">.SYS</span>
          </span>
          <Cursor className="hidden sm:inline" />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {items.map((it) => {
            const active = isActive(pathname, it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "px-2 py-1 uppercase text-xs tracking-widest",
                  active ? "bg-accent text-bg" : "text-fg hover:text-bright hover:bg-screen",
                )}
              >
                <span aria-hidden className="text-dim">[</span>
                {it.name}
                <span aria-hidden className="text-dim">]</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 uppercase text-xs tracking-widest text-fg hover:bg-screen hover:text-bright border border-rule hover:border-accent"
            >
              <span aria-hidden className="text-dim">[</span>
              {s.label}
              <span aria-hidden className="text-dim">]</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden px-2 py-1 border border-rule text-bright uppercase text-xs tracking-widest hover:border-accent"
        >
          {open ? "[ × ]" : "[ ≡ ]"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rule bg-bg/98">
          <nav className="px-4 py-3 flex flex-col gap-1 font-mono text-sm">
            {items.map((it) => {
              const active = isActive(pathname, it.href);
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={cn(
                    "px-2 py-1.5 uppercase text-xs tracking-widest",
                    active ? "bg-accent text-bg" : "text-fg hover:bg-screen",
                  )}
                >
                  <span aria-hidden className="text-dim">[</span>
                  {it.name}
                  <span aria-hidden className="text-dim">]</span>
                </Link>
              );
            })}
            <div className="flex gap-2 pt-2 border-t border-rule mt-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-1 uppercase text-xs tracking-widest text-fg border border-rule"
                >
                  <span aria-hidden className="text-dim">[</span>
                  {s.label}
                  <span aria-hidden className="text-dim">]</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
