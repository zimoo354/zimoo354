import { PageWrapper } from "@/components/common/PageWrapper";
import { Profile } from "@/components/profile";
import { CONTENT } from "@/constants/content";

const { statement, location } = CONTENT;

const Homepage = () => {
  return (
    <PageWrapper className="flex flex-col items-center gap-12">
      <Profile homepage />
      <div className="lg:w-1/2 px-4 text-center">
        <p className="text-xl">
          {statement}
          <br />
          <br />
          <span className="font-semibold">{location}</span>
        </p>
      </div>
    </PageWrapper>
  );
};

export default Homepage;
