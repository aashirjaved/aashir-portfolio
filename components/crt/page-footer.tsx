import { CRTLink } from "./crt-link";

export function PageFooter() {
  return (
    <footer className="mt-24 border-t border-rule/80 pt-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-dim">
            Based in London · available for high-leverage product and platform work
          </div>
          <div className="mt-3 font-display text-2xl text-bright">Built with taste, not templates.</div>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
          <CRTLink href="https://github.com/aashirjaved" external>
            github
          </CRTLink>
          <CRTLink href="https://www.linkedin.com/in/aashirjaved/" external>
            linkedin
          </CRTLink>
          <CRTLink href="mailto:hello@aashir.net">email</CRTLink>
        </div>
      </div>
      <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-dim/80">
        © {new Date().getFullYear()} Aashir Javed
      </div>
    </footer>
  );
}
