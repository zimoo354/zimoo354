import Image from "next/image";

export type SocialLinkProps = {
  image: string;
  title: string;
  subtitle?: string;
  url: string;
};

export const SocialLink = ({
  image,
  title,
  url,
  subtitle,
}: SocialLinkProps) => (
  <a href={url} target="_blank" className="block w-1/2 lg:w-full">
    <div className="flex gap-4 items-center mb-4 lg:hover:translate-x-2 transition-all">
      <Image
        src={image}
        alt={title}
        height={256}
        width={256}
        className="rounded-2xl shadow-md w-16 print:w-8 print:rounded-md"
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
