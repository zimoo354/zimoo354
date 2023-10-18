import { HOMEPAGE_CONTENT } from "@/constants/content";
import Image from "next/image";

const { fullName, jobTitle } = HOMEPAGE_CONTENT;

export const Profile = () => (
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
);
