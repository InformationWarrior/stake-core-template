import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/games/template",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
