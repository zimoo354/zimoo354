import { Profile } from "@/components/profile";
import { CONTENT } from "@/constants/content";

const { statement, location } = CONTENT;

const Homepage = () => {
  return (
    <article className="flex flex-col items-center gap-12 min-h-screen relative pt-8">
      <Profile homepage />
      <div className="lg:w-1/2 px-4 text-center">
        <p className="text-xl">
          {statement}
          <br />
          <br />
          <span className="font-semibold">{location}</span>
        </p>
      </div>
    </article>
  );
};

export default Homepage;
