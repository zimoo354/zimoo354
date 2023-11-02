import type { NextSeoProps } from "next-seo";

const BASE_URL = "https://charlieruiz.dev";
const DEFAULT_TITLE = `Charlie Ruiz 🧑🏻‍💻 | Software Engineer`;
const DEFAULT_DESCRIPTION =
  "Full-stack Software Engineer with 9 years of experience specialized in building user-centric products that deliver real value by leveraging a wide range of technologies and skills, including (but not limited to) Javascript/Typescript, React, Next.js, Solidity, SQL/No-SQL, AWS, and more.";

/**
 * Default SEO settings. These are the fallbacks if a `NextSeo` component is not
 * found on the page. For all options, @see https://github.com/garmeeh/next-seo
 */
export const DEFAULT_SEO: NextSeoProps = {
  titleTemplate: DEFAULT_TITLE,
  defaultTitle: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    url: BASE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en-US",
    images: [
      {
        // OG image paths must include the host in the URL
        url: `${BASE_URL}/images/default-share.webp`,
        width: 1200,
        height: 640,
        alt: "Charlie Ruiz",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@zimoo354",
    site: "@zimoo354",
    cardType: "summary_large_image",
  },
};
