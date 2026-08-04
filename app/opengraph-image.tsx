import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Michael's Treasures — Vintage Watches in Prague";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#14110E",
          color: "#F3EEE4",
        }}
      >
        <div style={{ fontSize: 72, fontStyle: "italic", display: "flex" }}>
          {site.name}
        </div>
        <div
          style={{
            width: 64,
            height: 2,
            background: "#B08A45",
            marginTop: 36,
            marginBottom: 36,
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#A79C8C",
            display: "flex",
          }}
        >
          Exceptional Vintage Watches · Prague
        </div>
      </div>
    ),
    size
  );
}
