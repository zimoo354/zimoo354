import { Header } from "@/components/header";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";
import { pageTransitions } from "@/utils/animations";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Header />
        <motion.main
          className="block m-auto max-w-7xl"
          {...pageTransitions.fadeOutIn}
        >
          <Component {...pageProps} />
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
