import { ContentBlock } from "@/components/common/ContentBlock";
import { PastExperience } from "@/components/past-experience";
import { Profile } from "@/components/profile";
import { SocialLinks } from "@/components/social-links";
import { HOMEPAGE_CONTENT } from "@/constants/content";

const { statement } = HOMEPAGE_CONTENT;

const Home = () => {
  return (
    <article className="flex flex-col lg:flex-row gap-8 min-h-screen relative pt-8">
      <div className="w-full lg:w-2/5 lg:min-h-screen">
        <div className="flex flex-col gap-12 sticky top-12">
          <Profile />
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
