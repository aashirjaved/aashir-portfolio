import { Container, Footer, LinkButton } from "@/components/editorial";

export default function NotFound() {
  return (
    <Container>
      <section className="pt-12 pb-32">
        <div className="eyebrow mb-8">Error · 404</div>
        <h1 className="display text-[clamp(5rem,18vw,14rem)] leading-[0.85] text-ink">
          Lost.
          <br />
          <span className="display-italic text-ink-mute">Not found.</span>
        </h1>
        <p className="lede mt-10 max-w-[36ch] text-ink-2 font-light">
          The page you&rsquo;re looking for doesn&rsquo;t exist — or has been
          renamed since you last visited.
        </p>
        <div className="mt-12 flex flex-wrap gap-3">
          <LinkButton href="/">Back home →</LinkButton>
          <LinkButton href="/projects" variant="ghost">
            See selected work
          </LinkButton>
          <LinkButton href="/contact" variant="ghost">
            Get in touch
          </LinkButton>
        </div>
      </section>
      <Footer />
    </Container>
  );
}
