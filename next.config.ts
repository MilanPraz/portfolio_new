import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  output: "export", // This enables static export
  distDir: "out", // Optional: ensure that 'out' is used as the output directory
};

export default nextConfig;
