import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AnimatePresence } from "framer-motion";

type Props = {
  Component: React.ElementType;
  pageProps: {};
  router: any;
};

const MyApp = ({ Component, pageProps, router }: Props) => {
  return (
    <div className="text-blue-900">
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
};

export default MyApp;
