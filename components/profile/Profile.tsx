import { CONTENT } from "@/constants/content";
import { classNames } from "@/utils/strings";
import Image from "next/image";

const { fullName, jobTitle } = CONTENT;

type ProfileProps = {
  homepage?: boolean;
};

export const Profile = ({ homepage = false }: ProfileProps) => (
  <div
    className={classNames(
      "flex flex-col items-center text-center print:text-left print:items-start print:pl-8",
      homepage ? "" : "lg:pl-8"
    )}
  >
    <Image
      src="/images/profile.webp"
      alt={fullName}
      height={256}
      width={256}
      className={classNames(
        "rounded-full shadow-md print:hidden",
        homepage ? "w-56 mb-8" : "w-40 mb-4"
      )}
    />
    <h1
      className={classNames(
        "font-semibold mb-2 tracking-wide text-slate-800 dark:text-slate-100 print:text-4xl",
        homepage ? "text-8xl" : "text-6xl"
      )}
    >
      {fullName}
    </h1>
    <h3
      className={classNames(
        "font-medium pl-2 print:pl-0 text-slate-500 dark:text-slate-300 tracking-wide print:text-2xl",
        homepage ? "text-4xl" : "text-2xl"
      )}
    >
      {jobTitle}
    </h3>
  </div>
);
