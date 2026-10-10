import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="no-print mt-24 border-t border-rule pb-24 pt-6 md:pb-10">
      <div className="mono flex flex-col gap-2 text-mute sm:flex-row sm:justify-between">
        <span>{site.name} · {site.location} · {new Date().getFullYear()}</span>
        <span>Set in Newsreader and JetBrains Mono. Built with Next.js.</span>
      </div>
    </footer>
  );
}
