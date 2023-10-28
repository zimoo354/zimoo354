import { PortfolioItemProps } from "@/components/common/PortfolioItem";
import { skills as sk } from "./skills";

export const portfolioItems: PortfolioItemProps[] = [
  {
    title: "Kodapendant",
    videoUrl: "/videos/kodapendant.mp4",
    imageUrl: "/videos/kodapendant.webp",
    description:
      "Acted as Tech Lead, Front End, Backend, Smart Contract and purchase flow. Built while working with Yuga Labs.",
    link: "https://kodapendant.otherside.xyz/",
    stack: [sk.jsts, sk.react, sk.next, sk.aws, sk.solidity, sk.nosql],
  },
  {
    title: "Battle.Town",
    videoUrl: "/videos/bt.mp4",
    imageUrl: "/videos/bt.webp",
    description:
      "Front End, Backend, SFX, Animations, Database optimization and Blockchain (Smart contracts) interaction. Built while working with Yuga Labs.",
    link: "https://battle.town/",
    stack: [sk.jsts, sk.react, sk.next, sk.aws, sk.framerMotion, sk.sql],
  },
  {
    title: "Slipstream",
    videoUrl: "/videos/slipstream.mp4",
    imageUrl: "/videos/slipstream.webp",
    description:
      "Front End, Backend, Purchase flow, 3D Dynamic Model and Blockchain (Smart contracts) interaction. Built while working with Yuga Labs.",
    link: "https://10ktf.shop/",
    stack: [sk.jsts, sk.react, sk.next, sk.webGl, sk.sql],
  },
  {
    title: "Renga",
    videoUrl: "/videos/renga.mp4",
    imageUrl: "/videos/renga.webp",
    description:
      "Front End, Animations and Blockchain (Smart contracts) interaction. Built while working with Yuga Labs.",
    link: "https://renga.art/",
    stack: [sk.jsts, sk.react, sk.next],
  },
];
