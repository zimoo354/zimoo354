"use client";

import { classNames } from "@/utils/strings";
import { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageWrapperProps = PropsWithChildren & {
  className?: string;
};

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <AnimatePresence>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.25 }}
        className={classNames("min-h-screen pt-8", className ? className : "")}
      >
        {children}
      </motion.article>
    </AnimatePresence>
  );
};
