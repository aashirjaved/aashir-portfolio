import {
  CRTScreen,
  NavBar,
  StatusBar,
  Tag,
  PageFooter,
  PixelButton,
  CRTLink,
  Reveal,
} from "@/components/crt";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  team: string;
  year: string;
  description: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "MoonPay",
    location: "London, UK · Remote",
    period: "Present",
    team: "Consumer Product",
    year: "Now",
    description: [
      "Shipping consumer crypto products at scale across iOS, Android, and web.",
      "Rebuilt Polygon transaction path to run 8.5× faster.",
      "Rebuilt Balance experience with ACH, SEPA, and Faster Payments rails.",
      "Refreshed Buy/Sell flows, device security, and onboarding surfaces.",
    ],
    metrics: [
      { label: "Polygon", value: "8.5×" },
      { label: "Rails", value: "ACH · SEPA · FPS" },
      { label: "Surface", value: "iOS · Android · Web" },
    ],
    technologies: ["React", "Next.js", "Go", "Python", "AWS", "TypeScript", "AI"],
  },
  {
    title: "Senior Backend Engineer",
    company: "Motorway",
    location: "London, UK",
    period: "Jun 2024 – 2026",
    team: "Core Engineering",
    year: "2024",
    description: [
      "Led foundational services that helped product teams ship reliably.",
      "Decoupled AuthN/AuthZ and improved conversion by 7%.",
      "Built AI incident management workflows that cut response time by 40%.",
      "Reduced annual AWS spend by 15% through operational-excellence work.",
    ],
    metrics: [
      { label: "Volume", value: "+15%" },
      { label: "Conv", value: "+7%" },
      { label: "AWS", value: "−15%" },
    ],
    technologies: ["Go", "Python", "React", "Next.js", "AWS", "Terraform", "Kubernetes", "LLMs"],
  },
  {
    title: "Software Engineer II",
    company: "Deliveroo",
    location: "London, UK",
    period: "May 2022 – Jun 2024",
    team: "Platform · Customer Care",
    year: "2022",
    description: [
      "Built customer-care automation with fine-tuned GenAI and Go APIs.",
      "Shipped production AI agents handling 10,000+ cases/day at 95% accuracy.",
      "Delivered 2× CSAT, 50% lower handling time, and £2M annual savings.",
      "Led gamedays and incident-response training for 100+ engineers.",
    ],
    metrics: [
      { label: "CSAT", value: "2×" },
      { label: "Saved", value: "£2M" },
      { label: "Auto", value: "60%" },
    ],
    technologies: ["React", "Go", "Python", "LLMs", "Kubernetes", "Terraform", "Postgres"],
  },
  {
    title: "Software Engineer",
    company: "Zalando",
    location: "Helsinki, Finland",
    period: "Jan 2021 – May 2022",
    team: "Customer Fulfillment",
    year: "2021",
    description: [
      "Owned warehouse integration gateway connecting IDCs with Zalando core.",
      "Optimised Java APIs handling 1000+ RPS and reduced latency by 15%.",
      "Improved inventory accuracy by 25% with AI demand forecasting.",
      "Built Grafana and Prometheus monitoring with custom alerting.",
    ],
    metrics: [
      { label: "RPS", value: "1k+" },
      { label: "Latency", value: "−15%" },
      { label: "Stock", value: "+25%" },
    ],
    technologies: ["Java", "React", "TypeScript", "Postgres", "Kubernetes", "Grafana", "ML"],
  },
  {
    title: "Lead Cloud Engineer",
    company: "Nordcloud / IBM",
    location: "Helsinki, Finland",
    period: "Aug 2019 – Jan 2021",
    team: "Cloud Transformation",
    year: "2019",
    description: [
      "Led enterprise migrations across AWS, Azure, and GCP.",
      "Delivered 30+ migrations and £5M+ operational savings.",
      "Built patterns for turning monoliths into cloud-native services.",
      "Improved deployment velocity by 40% with secure CI/CD pipelines.",
    ],
    metrics: [
      { label: "Migrations", value: "30+" },
      { label: "Speed", value: "+40%" },
      { label: "Saved", value: "£5M" },
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Python", "Go"],
  },
];

function TimelineNode({ e, index }: { e: Experience; index: number }) {
  return (
    <article className="grid gap-6 border-t border-rule/80 py-8 lg:grid-cols-[160px_minmax(0,1fr)_300px]">
      <div>
        <div className="font-display text-4xl leading-none text-bright">{e.year}</div>
        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.26em] text-dim">{String(index + 1).padStart(2, "0")}</div>
      </div>
      <div>
        <h2 className="text-[clamp(2.2rem,4.5vw,4.4rem)] leading-[0.96]">{e.company}</h2>
        <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{e.title}</div>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
          <span>{e.period}</span>
          <span>{e.location}</span>
          <span>{e.team}</span>
        </div>
        <ul className="mt-6 space-y-2 text-sm leading-7 text-fg/82">
          {e.description.map((d) => (
            <li key={d} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
      <aside className="flex flex-wrap content-start gap-2 lg:justify-end">
        {e.metrics.map((m) => (
          <Tag key={m.label} tone="ok">{m.label} {m.value}</Tag>
        ))}
        {e.technologies.map((t) => (
          <Tag key={t} tone="dim">{t}</Tag>
        ))}
      </aside>
    </article>
  );
}

export default function Experience() {
  return (
    <>
      <NavBar />
      <CRTScreen width="wide">
        <StatusBar
          items={[
            { label: "page", value: "experience" },
            { label: "span", value: "8 years", tone: "accent" },
            { label: "current", value: "MoonPay", tone: "ok" },
          ]}
        />

        <section className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-16">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-dim">Experience</div>
            <h1 className="mt-5 max-w-[10ch] text-[clamp(4rem,10vw,8rem)] leading-[0.9]">
              A career in production.
            </h1>
          </div>
          <p className="self-end text-lg leading-8 text-fg/80">
            Eight years across consumer products, core platforms, cloud transformations, and AI
            systems with real operational consequences.
          </p>
        </section>

        <Reveal>
          <div>
            {experiences.map((e, i) => (
              <TimelineNode key={e.company + e.year} e={e} index={i} />
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          <PixelButton href="/contact">Talk about a role</PixelButton>
          <PixelButton href="/resume" variant="ghost">Resume</PixelButton>
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
          Prefer projects? <CRTLink href="/projects">Selected work</CRTLink>.
        </p>

        <PageFooter />
      </CRTScreen>
    </>
  );
}
