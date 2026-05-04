import { CRTScreen, NavBar, Terminal, PixelButton, AsciiDivider, PageFooter } from "@/components/crt";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <CRTScreen>
        <div className="font-mono text-sm text-dim uppercase tracking-widest mb-2">
          {"> kernel panic"}
        </div>
        <h1 className="font-display text-[clamp(2rem,8vw,4.5rem)] uppercase glow-strong leading-none text-accent">
          404
        </h1>
        <h2 className="font-display text-[clamp(0.9rem,2.4vw,1.4rem)] uppercase mt-3 text-bright glow">
          SEGMENTATION FAULT
        </h2>

        <Terminal command="dmesg | tail -n 4" className="mt-8">
          <pre className="font-mono text-sm whitespace-pre-wrap m-0">
{`[  0.000001] mounting /aashir... ok
[  0.000010] resolving requested page... fail
[  0.000017] reason: page not located in memory
[  0.000023] suggestion: try a known route below`}
          </pre>
        </Terminal>

        <div className="flex flex-wrap gap-3 mt-8">
          <PixelButton href="/">$ cd /home</PixelButton>
          <PixelButton href="/projects" variant="ghost">$ ls projects</PixelButton>
          <PixelButton href="/contact" variant="ghost">$ mail aashir</PixelButton>
        </div>

        <AsciiDivider variant="block" className="mt-16" />
        <PageFooter />
      </CRTScreen>
    </>
  );
}
