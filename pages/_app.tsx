import { Header } from "@/components/header";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";
import { classNames } from "@/utils/strings";

const slideIn = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 1,
  },
  transition: {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  },
};
const slideOut = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 0,
  },
  transition: {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const slidesClasses = "absolute top-0 left-0 w-full h-screen bg-black";

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Header />
        <main className="block m-auto max-w-7xl">
          <Component {...pageProps} />
        </main>
        <motion.div
          id="slide-in"
          {...slideIn}
          className={classNames(slidesClasses, "origin-bottom")}
        />
        <motion.div
          id="slide-out"
          {...slideOut}
          className={classNames(slidesClasses, "origin-top")}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
