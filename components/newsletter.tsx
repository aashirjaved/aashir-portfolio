"use client";

import { useState } from "react";
import { PixelButton } from "./crt/pixel-button";
import { Cursor } from "./crt/cursor";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setStatus("loading");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="frame frame-amber p-4 sm:p-5 bg-screen/40 my-6">
      <div className="font-mono text-xs uppercase tracking-widest text-dim mb-3">
        $ subscribe --topic=writing
      </div>
      <p className="font-mono text-sm text-fg/90 mb-4">
        New posts on AI, infra, and engineering — straight to your inbox. No spam, unsubscribe with{" "}
        <span className="text-accent">^C</span>.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex items-center flex-1 border border-rule bg-bg px-2">
          <span className="text-accent mr-2 font-mono select-none">{">"}</span>
          <input
            type="email"
            placeholder="you@somewhere.net"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            required
            className="flex-1 bg-transparent text-fg font-mono py-2 outline-none placeholder:text-dim"
          />
          <Cursor />
        </div>
        <PixelButton type="submit" disabled={status === "loading"}>
          {status === "loading" ? "transmitting…" : "$ submit"}
        </PixelButton>
      </form>
      {status === "success" && (
        <p className="font-mono text-sm text-ok mt-3">[OK] subscribed. confirmation queued.</p>
      )}
      {status === "error" && (
        <p className="font-mono text-sm text-danger mt-3">[ERR] could not subscribe. try again.</p>
      )}
    </div>
  );
}
