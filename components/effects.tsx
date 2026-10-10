"use client";

import { useEffect } from "react";

// Draws section hairlines once as they enter the viewport.
export function Effects() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const lines = Array.from(document.querySelectorAll<HTMLElement>(".hairline"));
    if (!("IntersectionObserver" in window)) {
      lines.forEach((l) => l.classList.add("is-drawn"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-drawn");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    lines.forEach((l) => io.observe(l));
    return () => io.disconnect();
  }, []);
  return null;
}
