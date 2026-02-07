import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: `l1nq.com`,
      },
      {
        protocol: "https",
        hostname: `encr.pw`,
      },
      {
        protocol: "https",
        hostname: `acesse.dev`,
      },
      {
        protocol: "https",
        hostname: `i.ytimg.com`,
      },
    ],
  },
};

export default nextConfig;
