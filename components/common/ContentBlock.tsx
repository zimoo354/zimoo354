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
  <div className="px-4 lg:pl-10 mb-4 print:mb-0">
    <div className="relative w-full">
      {/* FOR MOBILE */}
      <div className="block lg:hidden print:block mb-4 print:mb-2 print:mt-2">
        <h4 className="print:text-xs text-lg font-semibold uppercase text-gray-400">
          {title}
        </h4>
      </div>
      {/* FOR DESKTOP */}
      <div className="absolute -rotate-90 w-32  text-right -left-[86px] top-14 mb-0 hidden lg:block print:hidden">
        <h4 className="font-semibold uppercase text-gray-400">{title}</h4>
      </div>
      <div className={className}>{children}</div>
    </div>
  </div>
);
