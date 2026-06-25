import type { NextConfig } from "next";
import { blog } from "./constants/content/blog";

const nextConfig: NextConfig = {};

if (blog.rssFeedUrl) {
  nextConfig.rewrites = async () => [
    {
      source: "/blog/feed",
      destination: blog.rssFeedUrl,
    },
  ];
}

export default nextConfig;
