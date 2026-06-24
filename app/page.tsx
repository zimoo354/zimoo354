import { Profile } from "@/components/profile";
import { CONTENT } from "@/constants/content";

const { statement } = CONTENT;

export default function Homepage() {
  return (
    <article className="min-h-fit py-8 flex flex-col items-center gap-12">
      <Profile homepage />
      <div className="lg:w-3/4 px-4 text-center">
        <p className="text-2xl">{statement}</p>
      </div>
    </article>
  );
}
