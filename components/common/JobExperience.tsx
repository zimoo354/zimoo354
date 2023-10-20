import Image from "next/image";
import { PropsWithChildren } from "react";

export type JobExperienceProps = PropsWithChildren & {
  image: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
};

export const JobExperience = ({
  image,
  jobTitle,
  companyName,
  startDate,
  endDate,
  location,
  children,
}: JobExperienceProps) => (
  <div className="job-experience flex flex-col gap-4 mb-8">
    <div className="flex gap-4 items-center">
      <Image
        src={image}
        alt={companyName}
        height={256}
        width={256}
        className="rounded-2xl shadow-md w-20 print:w-12 print:rounded-md"
      />
      <div className="flex flex-col gap-1">
        <span className="text-xl font-medium">
          {jobTitle} • <span className="text-[1rem]">{companyName}</span>
        </span>
        <span className="text-sm text-slate-400">
          <span className="py-1 px-2 text-white bg-slate-400 dark:bg-slate-500 rounded-lg print:text-slate-400 print:p-0">
            {startDate} → {endDate}
          </span>{" "}
          <span className="hidden print:inline"> | </span>
          <span className=" mt-2 print:-mt-0 lg:mt-0 inline-block">
            {location}
          </span>
        </span>
      </div>
    </div>
    <p>{children}</p>
  </div>
);
