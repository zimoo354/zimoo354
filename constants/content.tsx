import { JobExperienceProps } from "@/components/common/JobExperience";
import { PortfolioItemProps } from "@/components/common/PortfolioItem";
import { SocialLinkProps } from "@/components/common/SocialLink";

export const LINKS = [
  {
    label: "Home",
    url: "/",
    classes: "delay-100",
  },
  {
    label: "Resume",
    url: "/resume",
    classes: "delay-200",
  },
  {
    label: "Portfolio",
    url: "/portfolio",
    classes: "delay-300",
  },
];

export const CONTENT: Record<string, any> & {
  fullName: string;
  jobTitle: string;
  resumeStatement: string;
  statement: string | JSX.Element;
  socialLinks: SocialLinkProps[];
  education: JobExperienceProps;
  jobExperiences: JobExperienceProps[];
  portfolioItems: PortfolioItemProps[];
} = {
  fullName: "Charlie Ruiz",
  jobTitle: "Software Engineer",
  statement: (
    <>
      <b>Hi there! 👋🏻</b>
      <br />
      <br />
      I'm a Front-end leaning, Full-stack Software engineer with 9 years of
      experience. Proficient in{" "}
      <b>Javascript/Typescript, React, Next.js, Solidity, SQL/No-SQL, AWS</b>,
      and more, with diverse skills and leadership experience.
      <br />
      <br />
      <span className="font-semibold">📍 Austin, TX</span>
    </>
  ),
  resumeStatement:
    "I'm a SWE with 9-yoe. Proficient in Javascript/Typescript, React, Next.js, Solidity, SQL/No-SQL, AWS, and more, with diverse skills and leadership experience.",
  location: "📍 Austin, TX",
  jobExperiences: [
    {
      image: "/images/work/yuga.webp",
      jobTitle: "Sr. Software Engineer",
      companyName: "Yuga Labs",
      startDate: "Jun 2022",
      endDate: "Oct 2023",
      location: "Austin, TX (Remote)",
      children:
        "Led technically a web3 physical/digital collaboration with Gucci that generated ~$6 Million in revenue in 24 hours. Built Opensea-like capability for our internal testnet; resulted in savings of 60 hrs/wk in QA testing effort. Worked in multiple smart-contracts life-cycle. Wrote multiple documents on team-culture, beginners guides and tech specs. Designed and implemented a blockchain + shopify purchase flow. Used Next.js, Typescript, SQL, AWS & Solidity.",
    },
    {
      image: "/images/work/wenew.webp",
      jobTitle: "Sr. Software Engineer",
      companyName: "WENEW",
      startDate: "Jun 2022",
      endDate: "Nov 2022",
      location: "Austin, TX (Remote)",
      children:
        "Created a tailor-made CMS for our product team. Built and maintained multiple web apps. Led the in-browser 3D efforts for our web apps. Worked close to the design team to start implementing motion and SFX in our websites. Wenew was acquired by Yuga Labs.",
    },
    {
      image: "/images/work/resideo.webp",
      jobTitle: "Sr. Software Engineer",
      companyName: "Resideo",
      startDate: "Apr 2021",
      endDate: "Jun 2022",
      location: "Austin, TX",
      children:
        "Maintained 2 admin portals to manage the interaction with the companies distributing our products. Led the effort to hire 8+ engineers and fully staff a team. Led technically the development of the centralized auth portal. Proposed and implemented a workflow with free tooling to optimize the engineering-design collaboration process. Used React.js, Next.js, Typescript and GraphQL.",
    },
    {
      image: "/images/work/sofia.webp",
      jobTitle: "Sr. Software Engineer",
      companyName: "Sofía",
      startDate: "Jan 2020",
      endDate: "Apr 2021",
      location: "Mexico City, Mexico (Remote)",
      children:
        "Built and maintained multiple modules of the mobile app, the admin panel, the backend and the website. Led the efforts to get our API service audited and improved in terms of security. Led the app release unit for +6 months. Built internal tooling and automated multiple stages of the QA process cutting the avg. time to run an end-to-end test by 40%. Used Next.JS, React native, Python and SQL.",
    },
    {
      image: "/images/work/mmlafleur.webp",
      jobTitle: "Software Engineer",
      companyName: "MM LaFleur",
      startDate: "Jun 2019",
      endDate: "Jan 2020",
      location: "NYC, New York (Remote)",
      children:
        "Built the checkout micro-frontend and integrated it with the e-commerce API we were using. Maintained the shared UI components library to make it reusable and easily accessible from other micro-frontend projects. Used React.js / Next.js.",
    },
    {
      image: "/images/work/mienvio.webp",
      jobTitle: "Software Engineer",
      companyName: "mienvio",
      startDate: "Oct 2018",
      endDate: "Jun 2019",
      location: "Queretaro, Mexico",
      children:
        "Reduced the database load times by 85% using stored procedures and materialized views. Built the search engine both in the front-end and backend. Used React.js / SQL / Laravel (PHP).",
    },
    {
      image: "/images/work/iw.webp",
      jobTitle: "Software Engineer",
      companyName: "Innovation Workshop",
      startDate: "Oct 2015",
      endDate: "Oct 2018",
      location: "Queretaro, Mexico",
      children:
        "Built & maintained +50 web apps mainly for e-commerce & real estate. Used PHP, SQL, Wordpress & CentOS servers with Nginx.",
    },
    {
      image: "/images/work/uaq.webp",
      jobTitle: "Software Engineer Intern",
      companyName: "Universidad Autonoma de Queretaro",
      startDate: "Jul 2014",
      endDate: "Dec 2016",
      location: "Queretaro, Mexico",
      children:
        "Built & maintained a tool for the HR department to track vacation and sick days for all the employees. Using PHP / MySQL.",
    },
  ],
  education: {
    image: "/images/work/uaq.webp",
    jobTitle: "B.Sc. Software Engineering",
    companyName: "Universidad Autonoma de Queretaro",
    startDate: "Jul 2014",
    endDate: "Dec 2017",
    location: "GPA 93 / 100",
    children: "",
  },
  portfolioItems: [
    {
      title: "Kodapendant",
      videoUrl: "/videos/kodapendant.mp4",
      imageUrl: "/videos/kodapendant.webp",
      description:
        "Acted as Tech Lead, Front End, Backend, Smart Contract and purchase flow.",
      link: "https://kodapendant.otherside.xyz/",
      using: ["React", "Next.JS", "JS/TS", "DynamoDB", "AWS", "Solidity"],
    },
    {
      title: "Battle.Town",
      videoUrl: "/videos/bt.mp4",
      imageUrl: "/videos/bt.webp",
      description:
        "Front End, Backend, SFX, Animations, Database optimization and Blockchain (Smart contracts) interaction",
      link: "https://battle.town/",
      using: ["React", "Next.JS", "JS/TS", "PostgreSQL", "AWS", "Solidity"],
    },
    {
      title: "Slipstream",
      videoUrl: "/videos/slipstream.mp4",
      imageUrl: "/videos/slipstream.webp",
      description:
        "Front End, Backend, Purchase flow, 3D Dynamic Model and Blockchain (Smart contracts) interaction",
      link: "https://10ktf.shop/",
      using: [
        "React",
        "Next.JS",
        "WebGL (3D)",
        "JS/TS",
        "PostgreSQL",
        "Solidity",
      ],
    },
    {
      title: "Renga",
      videoUrl: "/videos/renga.mp4",
      imageUrl: "/videos/renga.webp",
      description:
        "Front End, Animations and Blockchain (Smart contracts) interaction",
      link: "https://renga.art/",
      using: ["React", "Next.JS", "WebGL (3D)", "JS/TS"],
    },
  ],
  socialLinks: [
    {
      image: "/images/social/linkedin.webp",
      title: "LinkedIn",
      subtitle: "linkedin.com/in/zimoo354",
      url: "https://www.linkedin.com/in/zimoo354",
    },
    {
      image: "/images/social/github.webp",
      title: "GitHub",
      subtitle: "github.com/zimoo354",
      url: "https://github.com/zimoo354",
    },
    {
      image: "/images/social/x.webp",
      title: "X (formerly Twitter)",
      subtitle: "x.com/zimoo354",
      url: "https://x.com/zimoo354",
    },
    {
      image: "/images/social/resume.webp",
      title: "Resume",
      subtitle: "CVCharlieRuiz",
      url: "/pdf/CVCharlieRuiz.pdf",
    },
  ],
};
