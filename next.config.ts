import type { NextConfig } from "next";
import { blog } from "./constants/content/blog";

const nextConfig: NextConfig = {};

if (blog.substackUrl) {
  nextConfig.rewrites = async () => [
    {
      source: "/blog/feed",
      destination: `${blog.substackUrl}/feed`,
    },
  ];
}

export default nextConfig;
