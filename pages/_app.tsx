import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { createUniformContext } from "../lib/local-tracker";
import { UniformContext } from "@uniformdev/context-react";

const context = createUniformContext();

function MyApp({ Component, pageProps }) {
  return (
    <UniformContext context={context}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UniformContext>
  );
}

export default MyApp;
