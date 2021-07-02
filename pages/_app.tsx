import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { localTracker } from "../lib/local-tracker";
import { UniformTracker } from "@uniformdev/optimize-tracker-react";

function MyApp({ Component, pageProps }) {
  return (
    <UniformTracker trackerInstance={localTracker}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UniformTracker>
  );
}

export default MyApp;
