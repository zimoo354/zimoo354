import { PageWrapper } from "@/components/common/PageWrapper";
import { Profile } from "@/components/profile";
import { CONTENT } from "@/constants/content";

const { statement, location } = CONTENT;

const Homepage = () => {
  return (
    <PageWrapper className="flex flex-col items-center gap-12">
      <Profile homepage />
      <div className="lg:w-3/4 px-4 text-center">
        <p className="text-2xl">{statement}</p>
      </div>
    </PageWrapper>
  );
};

export default Homepage;
