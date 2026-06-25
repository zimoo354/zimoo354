import { blog } from "./blog";

export const LINKS = [
  {
    label: "Resume",
    url: "/resume",
  },
  {
    label: "Portfolio",
    url: "/portfolio",
  },
  ...(blog.rssFeedUrl
    ? [
        {
          label: "Blog",
          url: "/blog",
        },
      ]
    : []),
  {
    label: "Contact",
    url: "#contact",
  },
];
