import { ContentBlock } from "@/components/common/ContentBlock";
import { JobExperience } from "@/components/common/JobExperience";
import { SocialLink } from "@/components/common/SocialLink";
import { PastExperience } from "@/components/past-experience";
import { SocialLinks } from "@/components/social-links";
import { HOMEPAGE_CONTENT } from "@/constants/content";
import Image from "next/image";

const { fullName, jobTitle, statement, socialLinks, jobExperiences } =
  HOMEPAGE_CONTENT;

const Home = () => {
  return (
    <article className="flex flex-col lg:flex-row gap-8 min-h-screen relative pt-8">
      <div className="w-full lg:w-2/5 lg:min-h-screen">
        <div className="flex flex-col gap-12 sticky top-12">
          <div className="flex flex-col items-center lg:pl-8">
            <Image
              src="/images/profile.webp"
              alt={fullName}
              height={160}
              width={160}
              className="rounded-full mb-4 shadow-md print:hidden"
            />
            <h1 className="text-6xl font-semibold mb-2 tracking-wide text-center text-slate-800 dark:text-slate-100">
              {fullName}
            </h1>
            <h3 className="text-2xl font-medium pl-2 text-slate-500 dark:text-slate-300 tracking-wide text-center">
              {jobTitle}
            </h3>
          </div>
          <ContentBlock title="Statement">
            <p>{statement}</p>
          </ContentBlock>
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 w-full lg:w-3/5 lg:min-h-screen">
        <PastExperience />
        <div className="block lg:hidden">
          <SocialLinks />
        </div>
      </div>
    </article>
  );
};

export default Home;
