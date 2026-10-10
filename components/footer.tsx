import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="no-print mx-auto mt-24 flex max-w-wide flex-col gap-2 border-t border-rule px-4 py-8 text-[13px] text-mute sm:flex-row sm:justify-between sm:px-8">
      <span>© {new Date().getFullYear()} {site.name} · {site.location}</span>
      <span className="flex gap-5">
        <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
        <a href={site.links.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
        <a href="/cv" className="hover:text-ink">CV</a>
      </span>
    </footer>
  );
}
