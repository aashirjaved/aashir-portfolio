import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-prose px-4 pt-24 sm:px-8">
      <p className="label text-mute">404</p>
      <h1 className="display mt-4 text-[44px]">Nothing on file here.</h1>
      <p className="mt-4 text-ink-2">
        The page moved or never existed.{" "}
        <Link href="/" className="link text-ink">
          Ask me directly instead.
        </Link>
      </p>
    </main>
  );
}
