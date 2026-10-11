import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Aashir Javed. I build AI agents that work inside regulated finance.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const font = await readFile(
    join(process.cwd(), "node_modules/@fontsource/geist/files/geist-latin-600-normal.woff"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F3EC",
          color: "#111311",
          padding: "72px 80px",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, color: "#626660" }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#158054" }} />
          Aashir Javed · London
        </div>
        <div style={{ fontSize: 72, lineHeight: 1.04, letterSpacing: -2.5, maxWidth: 980 }}>
          I build AI agents that work inside regulated finance.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#3E423E" }}>
          <span>Agent harnesses · KYC · risk · payments</span>
          <span>aashir.net</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Geist", data: font, style: "normal", weight: 600 }] },
  );
}
