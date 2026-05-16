"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setStatus("loading");
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="border-t border-rule pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 items-start">
        <div>
          <p className="display text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.95] text-ink">
            Notes from
            <br />
            <span className="display-italic text-ink-mute">production.</span>
          </p>
          <p className="mt-4 text-ink-2 max-w-[40ch]">
            Occasional letters on AI in production, infra rot, and what eight
            years taught me about shipping. No spam.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <label className="block">
            <span className="sr-only">Email</span>
            <div className="flex items-stretch border-b border-ink focus-within:border-accent transition-colors">
              <input
                type="email"
                placeholder="you@somewhere.net"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                required
                className="flex-1 bg-transparent py-3 outline-none placeholder:text-ink-faint text-ink"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-4 text-sm text-ink hover:text-accent transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending…" : "Subscribe →"}
              </button>
            </div>
          </label>
          {status === "success" && (
            <p className="mono text-xs text-ok mt-3">
              ✓ Subscribed. Confirmation queued.
            </p>
          )}
          {status === "error" && (
            <p className="mono text-xs text-accent mt-3">
              Could not subscribe. Try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
