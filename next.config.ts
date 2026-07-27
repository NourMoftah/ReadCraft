import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the development compiler isolated from production build output so
  // concurrent local workflows cannot serve mismatched webpack chunks.
  distDir: process.env.NODE_ENV === "development" ? ".next/dev" : ".next",
};

export default nextConfig;
