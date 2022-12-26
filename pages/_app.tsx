import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <div className="text-blue-900">
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
};

export default MyApp;
