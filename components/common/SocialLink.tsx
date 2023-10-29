import { classNames } from "@/utils/strings";
import Image from "next/image";

export type SocialLinkProps = {
  image: string;
  title: string;
  subtitle?: string;
  url: string;
  hiddenForPrint?: boolean;
};

export const SocialLink = ({
  image,
  title,
  url,
  subtitle,
  hiddenForPrint,
}: SocialLinkProps) => (
  <a
    href={url}
    target="_blank"
    className={classNames(
      "social-link block w-1/2 lg:w-full",
      hiddenForPrint ? "print:hidden" : ""
    )}
  >
    <div className="flex gap-4 items-center mb-4 lg:hover:translate-x-2 transition-all">
      <Image
        src={image}
        alt={title}
        height={256}
        width={256}
        className="rounded-md shadow-md w-10 print:w-8"
      />
      <div className="flex flex-col gap-1 text-slate-700 dark:text-slate-200">
        <span className="tracking-wider">{title}</span>
        <span className="text-xs tracking-wider hidden sm:block">
          {subtitle || url}
        </span>
      </div>
    </div>
  </a>
);
