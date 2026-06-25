"use client";

import { BigAssTitle } from "@/components/common/BigAssTitle";
import { BlogPostCard, type BlogPost } from "@/components/common/BlogPostCard";
import { blog } from "@/constants/content/blog";
import { useEffect, useState } from "react";

type BlogChannel = {
  title: string;
  description: string;
};

function parseRSS(xml: string): { channel: BlogChannel; posts: BlogPost[] } {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const channel = doc.querySelector("channel");

  const channelData: BlogChannel = {
    title: channel?.querySelector("title")?.textContent ?? "Blog",
    description:
      channel?.querySelector("description")?.textContent ??
      "I also write things.",
  };

  const items = doc.querySelectorAll("item");
  const posts: BlogPost[] = Array.from(items).map((item) => ({
    title: item.querySelector("title")?.textContent ?? "",
    description: item.querySelector("description")?.textContent ?? "",
    link: item.querySelector("link")?.textContent ?? "",
    pubDate: item.querySelector("pubDate")?.textContent ?? "",
    imageUrl: item.querySelector("enclosure")?.getAttribute("url") ?? null,
  }));

  return { channel: channelData, posts };
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [channel, setChannel] = useState<BlogChannel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/blog/feed")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load posts");
        return res.text();
      })
      .then((xml) => {
        const { channel, posts } = parseRSS(xml);
        setChannel(channel);
        setPosts(posts);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <article className="min-h-fit py-8 flex flex-col px-8">
      <BigAssTitle>BLOG</BigAssTitle>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl text-center mx-auto">
        {channel?.description ?? "I also write things."} Read more on{" "}
        <a
          href={blog.substackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
        >
          {channel?.title ?? "Substack"}
        </a>
        .
      </p>

      {loading && (
        <div className="flex justify-center py-16">
          <p className="text-slate-500 dark:text-slate-400">Loading posts...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center py-16">
          <p className="text-red-500">
            Could not load posts. Visit{" "}
            <a href={blog.substackUrl} target="_blank" className="underline">
              Substack
            </a>{" "}
            directly.
          </p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <BlogPostCard key={post.link} {...post} />
          ))}
        </div>
      )}
    </article>
  );
}
