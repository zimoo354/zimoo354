import { HTMLAttributes, PropsWithChildren } from "react";

type ContentBlockProps = PropsWithChildren & {
  title: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export const ContentBlock = ({
  title,
  className,
  children,
}: ContentBlockProps) => (
  <div className="px-4 sm:pl-10 mb-4">
    <div className="relative w-full">
      <div className="block sm:hidden print:block mb-4">
        <h4 className="text-lg font-semibold uppercase text-gray-400">
          {title}
        </h4>
      </div>
      <div className="absolute -rotate-90 w-32  text-right -left-[86px] top-14 mb-0 hidden sm:block print:hidden">
        <h4 className="text-lg sm:text-sm font-semibold uppercase text-gray-400">
          {title}
        </h4>
      </div>
      <div className={className}>{children}</div>
    </div>
  </div>
);
