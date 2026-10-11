import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="no-print mx-auto mt-24 flex max-w-[1320px] flex-col gap-3 border-t border-rule px-5 py-8 sm:flex-row sm:justify-between sm:px-10">
      <span className="label text-mute">© {new Date().getFullYear()} {site.name} · {site.location}</span>
      <span className="label flex gap-6 text-ink-2">
        <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
        <a href={site.links.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
        <a href="/cv" className="hover:text-ink">CV</a>
      </span>
    </footer>
  );
}
