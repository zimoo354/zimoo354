import { Header } from "@/components/header";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransitions } from "@/utils/animations";
import "./styles/globals.css";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <NoiseOverlay />
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
