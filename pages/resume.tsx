import { ContentBlock } from "@/components/common/ContentBlock";
import { PageWrapper } from "@/components/common/PageWrapper";
import { PastExperience } from "@/components/past-experience";
import { Profile } from "@/components/profile";
import { SocialLinks } from "@/components/social-links";
import { CONTENT } from "@/constants/content";

const { statement } = CONTENT;

const Home = () => {
  return (
    <PageWrapper className="flex flex-col lg:flex-row gap-8 relative">
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
    </PageWrapper>
  );
};

export default Home;
