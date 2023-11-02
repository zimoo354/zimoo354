import { Header } from "@/components/header";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransitions } from "@/utils/animations";
import "./styles/globals.css";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import Script from "next/script";

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-98280332-2"
      />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-98280332-2');
        `}
      </Script>
    </AnimatePresence>
  );
};

export default App;
