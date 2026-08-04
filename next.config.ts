import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The photography slots ship with local SVG placeholders until the real
    // JPEGs are dropped into /public/images. Safe here: only same-origin
    // files from /public are ever rendered.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
