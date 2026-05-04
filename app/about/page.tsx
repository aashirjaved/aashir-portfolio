import {
  CRTScreen,
  NavBar,
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
  {
    category: "AI & Machine Learning",
    items: ["LLM Integration", "Prompt Engineering", "Agentic AI", "Fine-tuning", "Vector DBs", "MLOps"],
  },
  {
    category: "Full-Stack Development",
    items: ["React/Next.js", "TypeScript", "Go", "Python", "Java", "Node.js"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD", "Monitoring"],
  },
  {
    category: "Data & Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Modeling", "Query Opt"],
  },
  {
    category: "Leadership",
    items: ["Team Lead", "Project Mgmt", "Stakeholders", "Mentoring", "Tech Strategy"],
  },
];

const achievements = [
  {
    title: "AI Innovation Lead",
    body: "Built production AI agents processing 10,000+ customer-service cases daily at 95% accuracy.",
  },
  {
    title: "Cost Optimisation",
    body: "£2M+ annual savings via AI automation and infrastructure optimisation. Another £5M earlier in cloud migrations.",
  },
  {
    title: "Technical Mentor",
    body: "Led cross-functional teams and mentored 100+ engineers across multiple organisations.",
  },
  {
    title: "Performance",
    body: "Architected systems handling 1000+ RPS with 15% latency improvements and 99.9% uptime.",
  },
];

export default function About() {
  return (
    <>
      <NavBar />
      <CRTScreen>
        <div className="font-mono text-sm text-dim uppercase tracking-widest mb-2">
          {"> open about.txt"}
        </div>
        <h1 className="font-display text-[clamp(1.4rem,4vw,2.2rem)] uppercase glow-strong leading-tight">
          ABOUT.TXT
        </h1>
        <p className="mt-3 text-fg/90 font-mono">
          The longer version. Who, where, why I do this — and what I&apos;d like to do next.
        </p>

        <FigCaption index={2} title="OPERATOR">
          <CRTImage src="/me.png" alt="Aashir Javed" width={720} height={720} priority />
        </FigCaption>

        <SectionHeader index={1} title="JOURNEY" />
        <Terminal command="cat journey.md">
          <p>
            I&apos;m a versatile engineer with{" "}
            <span className="text-bright">8+ years</span> building scalable systems that span the
            entire stack. The journey began with the cliché — solve hard problems with elegant code —
            and turned into the more grown-up version: lead teams, own outcomes, and make systems
            that survive Monday.
          </p>
          <p className="mt-3">
            Based in <span className="text-accent">London</span>, currently Senior Software Engineer
            at <span className="text-accent">MoonPay</span> — shipping consumer crypto products at
            scale across iOS, Android, and web. Previously led Core Engineering at Motorway,
            built customer-care AI at Deliveroo, and warehouse gateways at Zalando.
          </p>
          <p className="mt-3">
            I work end-to-end. Pixel-perfect React, distributed Go services, AWS infra, AI agents —
            I like understanding how the pieces fit. Beyond the code I care about{" "}
            <span className="text-accent">mentoring engineers</span> and building practices that
            promote both speed and operational sanity.
          </p>
        </Terminal>

        <SectionHeader index={2} title="ACHIEVEMENTS" />
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {achievements.map((a, i) => (
            <div key={a.title} className="frame frame-amber p-4 bg-screen/40">
              <div className="font-display text-[10px] sm:text-xs uppercase text-accent glow mb-1">
                {">>>"} ACHIEVEMENT_{String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-mono text-bright text-sm uppercase tracking-wider mb-2">
                {a.title}
              </div>
              <p className="font-mono text-sm text-fg/90 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>

        <SectionHeader index={3} title="STACK" />
        <Terminal command="cat skills.dat">
          <div className="space-y-4">
            {skills.map((s) => (
              <div key={s.category}>
                <DataRow label={s.category} value={`${s.items.length} entries`} />
                <div className="flex flex-wrap gap-1 mt-1.5 pl-1">
                  {s.items.map((it) => (
                    <Tag key={it}>{it.toLowerCase()}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Terminal>

        <SectionHeader index={4} title="CURRENT FOCUS" />
        <Terminal command="cat focus.now">
          <p>
            The intersection of traditional engineering and AI. <Tag tone="accent">production-ready agents</Tag>{" "}
            <Tag tone="accent">LLM automation</Tag> <Tag tone="accent">MLOps at scale</Tag> — the
            unsexy plumbing that keeps a clever demo from collapsing in production.
          </p>
          <p className="mt-3">
            Also: <Tag>infra optimisation</Tag> and cost discipline. Methodical analysis cut AWS
            spend 15% at Motorway while improving reliability — not by buying more, by buying right.
          </p>
          <p className="mt-3">
            On the leadership side: building high-performing teams, setting technical standards,
            and creating environments where engineers can do their best work.
          </p>
        </Terminal>

        <SectionHeader index={5} title="BEYOND WORK" />
        <Terminal command="cat after-hours.txt">
          <p>
            When not coding: reading the latest in AI/ML, contributing to open source, writing
            things on this site that I hope one engineer somewhere finds useful.
          </p>
          <p className="mt-3">
            I attend conferences, hang around engineering communities, and enjoy mentoring people
            starting out. Always interested in the gap between technology and business — the place
            where good engineering becomes real impact.
          </p>
        </Terminal>

        <SectionHeader index={6} title="CONNECT" />
        <p className="font-mono text-fg/90">
          If any of this resonates, the door is open.{" "}
          <CRTLink href="/contact">$ mail aashir</CRTLink> or{" "}
          <CRTLink href="/projects">$ ls projects</CRTLink>.
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
