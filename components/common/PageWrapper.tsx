import { classNames } from "@/utils/strings";
import { PropsWithChildren } from "react";

type PageWrapperProps = PropsWithChildren & {
  className?: string;
};

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <article
      className={classNames("min-h-fit pt-8", className ? className : "")}
    >
      {children}
    </article>
  );
};
