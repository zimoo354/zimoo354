import { PropsWithChildren } from "react";

export const SkillTag = ({ children }: PropsWithChildren) => (
  <span className="px-2 py-1 print:p-0 text-sm bg-slate-200 dark:bg-slate-700 rounded-md inline-block">
    {children}
  </span>
);
