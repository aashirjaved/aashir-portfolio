import Link from "next/link";

const social = [
  { label: "Email", href: "mailto:me@aashir.net" },
  { label: "GitHub", href: "https://github.com/aashirjaved" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashirjaved/" },
  { label: "X", href: "https://x.com/aasjav" },
];

const nav = [
  { label: "Work", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-rule-soft pt-12 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-10 gap-x-6">
        <div className="sm:col-span-6">
          <p className="display text-[clamp(2rem,5vw,3rem)] leading-[0.95] text-ink">
            Got a problem
            <br />
            <span className="display-italic text-ink-mute">worth solving?</span>
          </p>
          <Link
            href="mailto:me@aashir.net"
            className="link-static mono text-sm mt-6 inline-block"
          >
            me@aashir.net
          </Link>
        </div>

        <div className="sm:col-span-3 sm:col-start-8">
          <p className="eyebrow mb-4">Site</p>
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-ink-2 hover:text-ink transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-3">
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-sm text-ink-2 hover:text-ink transition-colors inline-flex items-center gap-1"
                >
                  {s.label}
                  {s.href.startsWith("http") && (
                    <span aria-hidden className="text-ink-faint">↗</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-ink-mute">
        <div className="mono">
          © {new Date().getFullYear()} Aashir Javed — London
        </div>
        <div className="mono flex items-center gap-2">
          <span aria-hidden className="inline-block w-1.5 h-1.5 rounded-full bg-ok" />
          Available · responds within 24–48h
        </div>
      </div>
    </footer>
  );
}
