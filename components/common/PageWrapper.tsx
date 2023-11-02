import { DEFAULT_SEO } from "@/constants/seo";
import { classNames } from "@/utils/strings";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { PropsWithChildren } from "react";
import { ContactModal } from "../header/ContactModal";

type PageWrapperProps = PropsWithChildren & {
  className?: string;
};

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article
        className={classNames("min-h-fit py-8", className ? className : "")}
      >
        {children}
      </article>
      <ContactModal />
    </>
  );
};
