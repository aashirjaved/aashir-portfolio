import { CRTLink } from "./crt-link";
import { AsciiDivider } from "./ascii-divider";

export function PageFooter() {
  return (
    <footer className="mt-24 font-mono text-xs sm:text-sm text-dim">
      <AsciiDivider variant="double" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-block w-2 h-2 bg-ok animate-pulse" />
          <span className="uppercase tracking-widest">[CONNECTION ACTIVE]</span>
        </div>
        <div className="flex items-center gap-3">
          <CRTLink href="https://github.com/aashirjaved" external>
            $ ssh github
          </CRTLink>
          <span aria-hidden className="text-rule">·</span>
          <CRTLink href="https://www.linkedin.com/in/aashirjaved/" external>
            $ open linkedin
          </CRTLink>
          <span aria-hidden className="text-rule">·</span>
          <CRTLink href="mailto:hello@aashir.net">$ mail</CRTLink>
        </div>
      </div>
      <div className="mt-4 text-rule uppercase tracking-widest text-[10px] sm:text-xs">
        © {new Date().getFullYear()} AASHIR.SYS · BUILT WITH NEXT.JS · BEST VIEWED IN AMBER
      </div>
    </footer>
  );
}
