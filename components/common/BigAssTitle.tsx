import { classNames } from "@/utils/strings";
import { PropsWithChildren } from "react";

type BigAssTitleProps = PropsWithChildren & {
  className?: string;
};

export const BigAssTitle = ({ children, className }: BigAssTitleProps) => (
  <h1
    className={classNames(
      "text-4xl sm:text-[120px] lg:text-[200px] text-slate-200 font-bold text-center my-32",
      className ? className : ""
    )}
  >
    {children}
  </h1>
);