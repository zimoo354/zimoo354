import { classNames } from "@/utils/strings";
import { SkillTag } from "./SkillTag";

export type PortfolioItemProps = {
  title: string;
  description: string | JSX.Element;
  stack: string[];
  imageUrl: string;
  videoUrl: string;
  link?: string;
  using?: string[];
  rtl?: boolean;
};

export const PortfolioItem = ({
  title,
  stack,
  description,
  imageUrl,
  videoUrl,
  link,
  rtl,
}: PortfolioItemProps) => {
  return (
    <div
      className={classNames(
        "flex w-full justify-evenly items-center flex-col gap-16 mb-24",
        !rtl ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <div className="flex justify-center w-full lg:w-1/2">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={imageUrl}
          src={videoUrl}
          className="rounded-lg shadow-xl border border-slate-200 dark:border-none"
        />
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h2>
        <p className="text-xl">{description}</p>
        <p className="flex flex-wrap gap-2">
          {stack.map((tag) => (
            <SkillTag key={tag}>{tag}</SkillTag>
          ))}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            className={classNames(
              // link
              "py-1 px-2 w-fit relative",
              // underline decoration
              `after:contents-[''] after:transition-all after:w-10 after:h-0 after:block after:border 
              after:border-slate-500 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2
              hover:after:w-[150%] hover:after:h-[150%] hover:after:-bottom-[25%]
            `
            )}
          >
            Visit site
          </a>
        )}
      </div>
    </div>
  );
};
