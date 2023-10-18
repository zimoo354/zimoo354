import { ContentBlock } from "@/components/ContentBlock";
import { JobExperience } from "@/components/JobExperience";
import { SocialLink } from "@/components/SocialLink";
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
            <ContentBlock title="Links">
              {socialLinks.map((link) => (
                <SocialLink key={link.title} {...link} />
              ))}
            </ContentBlock>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 w-full lg:w-3/5 lg:min-h-screen">
        <ContentBlock title="Experience">
          {jobExperiences.map((position) => (
            <JobExperience key={position.companyName} {...position} />
          ))}
        </ContentBlock>
        <div className="block lg:hidden">
          <ContentBlock title="Links">
            {socialLinks.map((link) => (
              <SocialLink key={link.title} {...link} />
            ))}
          </ContentBlock>
        </div>
      </div>
    </article>
  );
};

export default Home;
