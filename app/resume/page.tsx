import {
  CRTScreen,
  NavBar,
  Terminal,
  SectionHeader,
  AsciiDivider,
  PageFooter,
  PixelButton,
  Tag,
  CRTLink,
  DataRow,
} from "@/components/crt";

const positions = [
  {
    co: "MoonPay",
    role: "Senior Software Engineer · Consumer Product",
    when: "Present · London, UK",
    pts: [
      "Shipping consumer crypto products at scale across iOS, Android, web.",
      "Polygon transaction path → 8.5× faster after rebuild.",
      "Balance experience rebuilt with ACH / SEPA / Faster Payments rails.",
      "Buy/Sell screens redesigned · Liquid Glass UI refresh · onboarding rework.",
    ],
  },
  {
    co: "Motorway",
    role: "Senior Backend Engineer · Core Engineering Lead",
    when: "Jun 2024 – 2026 · London, UK",
    pts: [
      "Led Core Engineering: foundational services + platform primitives.",
      "Decoupled AuthN/AuthZ migration → +7% conversion.",
      "Operational excellence working group → −15% AWS spend.",
      "AI incident management with LLM categorisation → −40% MTTR.",
    ],
  },
  {
    co: "Deliveroo",
    role: "Software Engineer II · Platform / Customer Care",
    when: "May 2022 – Jun 2024 · London, UK",
    pts: [
      "AI agents shipping 10,000+ daily cases at 95% accuracy.",
      "2× CSAT, 50% reduction in handling time, £2M annual savings.",
      "Multi-region k8s + Terraform; engineering gamedays for 100+.",
    ],
  },
  {
    co: "Zalando",
    role: "Software Engineer · Customer Fulfillment",
    when: "Jan 2021 – May 2022 · Helsinki, FI",
    pts: [
      "Warehouse integration gateway: 1000+ RPS, −15% latency.",
      "AI demand forecasting → +25% inventory optimisation.",
      "Grafana + Prometheus monitoring with custom alerting.",
    ],
  },
  {
    co: "Nordcloud (IBM)",
    role: "Lead Cloud Engineer · Cloud Transformation",
    when: "Aug 2019 – Jan 2021 · Helsinki, FI",
    pts: [
      "Multi-cloud migration platform across AWS / Azure / GCP.",
      "30+ enterprise migrations; £5M+ operational savings.",
      "Zero-data-loss pipelines; +40% deployment velocity.",
    ],
  },
];

export default function Resume() {
  return (
    <>
      <NavBar />
      <CRTScreen width="wide">
        <div className="font-mono text-sm text-dim uppercase tracking-widest mb-2">
          {"> man aashir"}
        </div>
        <h1 className="font-display text-[clamp(1.4rem,4vw,2.2rem)] uppercase glow-strong leading-tight">
          AASHIR(1)
        </h1>
        <p className="mt-3 text-fg/90 font-mono">
          Plain-text resume. The printable version. Source of truth: this page.
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          <PixelButton href="/Aashir-Javed-Resume.pdf" external>
            $ download.pdf
          </PixelButton>
          <PixelButton href="https://github.com/aashirjaved" variant="ghost" external>
            $ ssh github
          </PixelButton>
        </div>

        <SectionHeader index={1} title="NAME" />
        <Terminal command="head -n1 aashir.1">
          <p>aashir — versatile engineer; 8+ years; full-stack, cloud, AI/ML.</p>
        </Terminal>

        <SectionHeader index={2} title="SYNOPSIS" />
        <Terminal command="cat synopsis">
          <p>
            $ aashir [--lead] [--build] [--ship] [--mentor]{"\n"}
            $ aashir --area={"{full-stack | cloud | ai-ml}"} --location=london{"\n"}
            $ aashir --currently=moonpay --status=active
          </p>
        </Terminal>

        <SectionHeader index={3} title="EXPERIENCE" />
        <Terminal command="cat experience">
          <div className="space-y-6">
            {positions.map((p) => (
              <article key={p.co}>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-mono text-bright text-sm sm:text-base uppercase tracking-wider">
                    {p.co}
                  </span>
                  <span aria-hidden className="text-rule">·</span>
                  <span className="font-mono text-fg text-sm">{p.role}</span>
                </div>
                <div className="font-mono text-xs text-dim mb-2">{p.when}</div>
                <ul className="space-y-1">
                  {p.pts.map((pt) => (
                    <li key={pt} className="font-mono text-sm text-fg/90 leading-relaxed">
                      <span className="text-accent select-none mr-2">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Terminal>

        <SectionHeader index={4} title="STACK" />
        <Terminal command="cat stack">
          <div className="space-y-1">
            <DataRow label="Languages" value="go · python · typescript · javascript · java" />
            <DataRow label="Frontend" value="react · next.js · tailwind · radix" />
            <DataRow label="Backend" value="go · python · node · graphql · grpc" />
            <DataRow label="Cloud" value="aws · gcp · azure" />
            <DataRow label="Infra" value="terraform · kubernetes · docker · ci/cd" />
            <DataRow label="Data" value="postgres · redis · dynamodb · mongo · kafka" />
            <DataRow label="AI/ML" value="llms · agents · rag · fine-tune · vector dbs · mlops" />
            <DataRow label="Monitoring" value="grafana · prometheus · datadog · sentry" />
          </div>
        </Terminal>

        <SectionHeader index={5} title="OPEN SOURCE" />
        <Terminal command="ls -la github.com/aashirjaved">
          <div className="flex flex-wrap gap-2 mb-3">
            <Tag>open source</Tag>
            <Tag>tooling</Tag>
            <Tag>llm experiments</Tag>
          </div>
          <p>
            Various tools, side experiments, and the occasional contribution to libraries I rely on.
            Full listing at <CRTLink href="https://github.com/aashirjaved" external>github.com/aashirjaved</CRTLink>.
          </p>
        </Terminal>

        <SectionHeader index={6} title="SEE ALSO" />
        <Terminal command="man -k aashir">
          <ul className="space-y-1 font-mono text-sm">
            <li>
              <span className="text-dim">about(1)</span> — <CRTLink href="/about">/about</CRTLink>{" "}
              the longer story
            </li>
            <li>
              <span className="text-dim">projects(1)</span>{" "}
              — <CRTLink href="/projects">/projects</CRTLink> case files
            </li>
            <li>
              <span className="text-dim">experience(1)</span>{" "}
              — <CRTLink href="/experience">/experience</CRTLink> career timeline
            </li>
            <li>
              <span className="text-dim">writing(1)</span>{" "}
              — <CRTLink href="/writing">/writing</CRTLink> notes from production
            </li>
            <li>
              <span className="text-dim">contact(1)</span>{" "}
              — <CRTLink href="/contact">/contact</CRTLink> get in touch
            </li>
          </ul>
        </Terminal>

        <AsciiDivider variant="block" className="mt-16" />
        <PageFooter />
      </CRTScreen>
    </>
  );
}
