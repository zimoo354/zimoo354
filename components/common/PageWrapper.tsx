import { classNames } from "@/utils/strings";
import Head from "next/head";
import { PropsWithChildren } from "react";

type PageWrapperProps = PropsWithChildren & {
  className?: string;
};

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <>
      <Head>
        <title>Charlie Ruiz 🧑🏻‍💻 | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article
        className={classNames("min-h-fit py-8", className ? className : "")}
      >
        {children}
      </article>
    </>
  );
};
