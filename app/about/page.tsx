import {
  CRTScreen,
  NavBar,
  StatusBar,
  Terminal,
  SectionHeader,
  AsciiDivider,
  Tag,
  PageFooter,
  PixelButton,
  CRTLink,
  FigCaption,
  CRTImage,
  DataRow,
} from "@/components/crt";

const skills = [
  { category: "AI / ML", items: ["llms", "agents", "rag", "fine-tune", "vector dbs", "mlops"] },
  { category: "Full-stack", items: ["react", "next.js", "go", "python", "java", "node"] },
  { category: "Cloud / Infra", items: ["aws", "terraform", "kubernetes", "docker", "ci/cd"] },
  { category: "Data", items: ["postgres", "mongo", "redis", "dynamodb", "kafka"] },
  { category: "Leadership", items: ["team lead", "strategy", "stakeholders", "mentoring"] },
];

const achievements = [
  { title: "AI Innovation", body: "Production agents · 10K+ cases/day · 95% accuracy." },
  { title: "Cost Optimisation", body: "£7M+ delivered across AI automation and cloud migrations." },
  { title: "Mentorship", body: "100+ engineers across multiple orgs." },
  { title: "Performance", body: "1000+ RPS systems · 99.9% uptime." },
];

const sysinfo = [
  ["uptime", "8+ years"],
  ["location", "London, UK"],
  ["current", "MoonPay · senior swe"],
  ["languages", "go · python · ts · java"],
  ["focus", "ai agents · infra · scale"],
];

export default function About() {
  return (
    <>
      <NavBar />
      <CRTScreen>
        <StatusBar
          items={[
            { label: "page", value: "/about" },
            { label: "operator", value: "aashir.javed", tone: "accent" },
            { label: "status", value: "online", tone: "ok" },
          ]}
        />

        <section className="pt-8 mb-12">
          <div className="font-mono text-xs sm:text-sm text-dim uppercase tracking-[0.25em] mb-2">
            {"> open about.txt"}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,5vw,2.6rem)] uppercase glow-strong leading-[1.1]">
            ABOUT.TXT
          </h1>
          <p className="mt-4 text-fg/90 font-mono max-w-[58ch]">
            Senior software engineer. Eight years. AI in production where it earns its keep.
          </p>
        </section>

        <FigCaption index={1} title="OPERATOR">
          <CRTImage src="/me.png" alt="Aashir Javed" width={720} height={720} priority />
        </FigCaption>

        <SectionHeader index={2} title="SYSINFO" />
        <div className="frame frame-amber p-4 sm:p-5 bg-screen/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {sysinfo.map(([k, v]) => (
              <DataRow key={k} label={k} value={v} />
            ))}
          </div>
        </div>

        <SectionHeader index={3} title="JOURNEY" />
        <Terminal command="cat journey.md">
          <p>
            Started solving hard problems with elegant code. Now solving harder ones with{" "}
            <span className="text-bright">teams</span> that ship.
          </p>
          <p className="mt-3">
            Currently <CRTLink href="https://moonpay.com" external>MoonPay</CRTLink> — consumer
            crypto at scale. Previously Motorway, Deliveroo, Zalando, IBM/Nordcloud.
          </p>
          <p className="mt-3">
            End-to-end ownership: pixel-perfect React → distributed Go → AWS → AI agents.
          </p>
        </Terminal>

        <SectionHeader index={4} title="ACHIEVEMENTS" />
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {achievements.map((a, i) => (
            <div key={a.title} className="frame frame-amber p-4 bg-screen/40">
              <div className="font-display text-[10px] uppercase text-accent glow mb-2">
                ACHIEVEMENT_{String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-mono text-bright text-sm uppercase tracking-wider mb-1.5">
                {a.title}
              </div>
              <p className="font-mono text-sm text-fg/90 max-w-[40ch]">{a.body}</p>
            </div>
          ))}
        </div>

        <SectionHeader index={5} title="STACK" />
        <div className="frame frame-amber p-4 sm:p-5 bg-screen/40 space-y-4">
          {skills.map((s) => (
            <div key={s.category}>
              <DataRow label={s.category} value={`${s.items.length} entries`} />
              <div className="flex flex-wrap gap-1 mt-2 pl-1">
                {s.items.map((it) => (
                  <Tag key={it}>{it}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionHeader index={6} title="FOCUS" />
        <Terminal command="cat focus.now">
          <div className="flex flex-wrap gap-2 mb-3">
            <Tag tone="accent">production agents</Tag>
            <Tag tone="accent">llm automation</Tag>
            <Tag tone="accent">mlops at scale</Tag>
            <Tag>infra cost</Tag>
            <Tag>team leadership</Tag>
          </div>
          <p className="text-fg/95">
            The unsexy plumbing that keeps clever demos from collapsing in production.
          </p>
        </Terminal>

        <SectionHeader index={7} title="CONNECT" />
        <p className="font-mono text-fg/90 max-w-[55ch]">
          Door is open. <CRTLink href="/contact">$ mail aashir</CRTLink> ·{" "}
          <CRTLink href="/projects">$ ls projects</CRTLink>
        </p>
        <div className="flex gap-3 mt-5 flex-wrap">
          <PixelButton href="/contact">$ get in touch</PixelButton>
          <PixelButton href="/projects" variant="ghost">$ view work</PixelButton>
        </div>

        <AsciiDivider variant="block" className="mt-16" />
        <PageFooter />
      </CRTScreen>
    </>
  );
}
