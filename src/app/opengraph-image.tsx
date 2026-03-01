import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "RestaurantTools.ai — AI-Powered Tools for Modern Restaurants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #1c1917 0%, #292524 40%, #44403c 100%)",
          position: "relative",
        }}
      >
        {/* Subtle accent gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #f97316, #fb923c, #f97316)",
            display: "flex",
          }}
        />

        {/* Icon */}
        <div
          style={{
            fontSize: 64,
            marginBottom: 24,
            display: "flex",
          }}
        >
          🍽️
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#fefce8",
            letterSpacing: "-0.02em",
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
          }}
        >
          Restaurant
          <span style={{ color: "#f97316", marginLeft: 4 }}>Tools</span>
          <span style={{ color: "#a8a29e", fontWeight: 400, marginLeft: 4 }}>.ai</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#a8a29e",
            fontWeight: 400,
            letterSpacing: "0.02em",
            display: "flex",
          }}
        >
          AI-Powered Tools for Modern Restaurants
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#78716c",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          50+ tools across 8 categories — restauranttools.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
