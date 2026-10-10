import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Aashir Javed. Compliance and risk infrastructure for crypto and private credit.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const font = await readFile(
    join(process.cwd(), "node_modules/@fontsource/newsreader/files/newsreader-latin-400-normal.woff"),
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
          fontFamily: "Newsreader",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, color: "#686C65" }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#1B7F5A" }} />
          Aashir Javed · London
        </div>
        <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -1, maxWidth: 980 }}>
          Compliance and risk infrastructure for crypto and private credit.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#3E423E" }}>
          <span>KYC · sanctions · risk rules · authorisation · AI agents</span>
          <span>aashir.net</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Newsreader", data: font, style: "normal", weight: 400 }] },
  );
}
