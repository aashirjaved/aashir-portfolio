import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Aashir Javed. I build AI agents for regulated finance.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const font = await readFile(
    join(process.cwd(), "node_modules/@fontsource/geist/files/geist-latin-800-normal.woff"),
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
          background: "#0A0A0A",
          color: "#F5F5F2",
          padding: "72px 80px",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, color: "#A3ABA6", textTransform: "uppercase", letterSpacing: 4 }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#6EE7B7" }} />
          Aashir Javed · London
        </div>
        <div style={{ fontSize: 112, lineHeight: 0.9, letterSpacing: -5, maxWidth: 1040, textTransform: "uppercase" }}>
          I build AI agents for regulated finance.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#A3ABA6", textTransform: "uppercase", letterSpacing: 3 }}>
          <span>Agent harnesses · KYC · risk · payments</span>
          <span>aashir.net</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Geist", data: font, style: "normal", weight: 800 }] },
  );
}
