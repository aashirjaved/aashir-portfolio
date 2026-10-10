import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await readFile(
    join(process.cwd(), "node_modules/@fontsource/newsreader/files/newsreader-latin-500-normal.woff"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111311",
          color: "#F5F3EC",
          borderRadius: 12,
          fontSize: 40,
          fontFamily: "Newsreader",
        }}
      >
        AJ
      </div>
    ),
    { ...size, fonts: [{ name: "Newsreader", data: font, style: "normal", weight: 500 }] },
  );
}
