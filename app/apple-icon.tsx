import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          CPG
        </span>
      </div>
    ),
    size
  );
}
