import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ConceptAffairs — UPSC current affairs app with daily quiz and revision";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #07070a 0%, #1a1608 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={logoSrc} width={96} height={96} style={{ borderRadius: 20 }} alt="" />
          <div style={{ fontSize: 56, fontWeight: 800 }}>ConceptAffairs</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: "#fdb913" }}>
          UPSC Current Affairs App
        </div>
        <div style={{ marginTop: 24, fontSize: 34, color: "rgba(255,255,255,0.7)" }}>
          Daily news · GS syllabus mapping · Prelims & Mains quizzes · Spaced revision
        </div>
      </div>
    ),
    size,
  );
}
