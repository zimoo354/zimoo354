import { Header } from "@/components/header";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransitions } from "@/utils/animations";
import "./styles/globals.css";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import Script from "next/script";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

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
      {/* Google Analytics */}
      {GOOGLE_ANALYTICS_ID && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          ></Script>
          <Script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GOOGLE_ANALYTICS_ID}');
            `}
          </Script>
        </>
      )}
    </AnimatePresence>
  );
};

export default App;
