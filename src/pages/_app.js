import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Spinner from "../Components/Spinner/Spinner";
const Layout = dynamic(() => import("../Components/Layout/Layout"), {
  ssr: false,
});

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };
    const handleRouteComplete = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", () => handleRouteChange);
      router.events.off("routeChangeStart", () => handleRouteComplete);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <Spinner />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
