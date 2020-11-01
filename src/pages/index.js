import Head from "next/head";
import dynamic from "next/dynamic";

import { Skeleton } from "@material-ui/lab";

const Slider = dynamic(() => import("../Components/Slider/Slider"), {
  loading: () => (
    <Skeleton animation="wave" variant="rect" width="100%" height="100vh" />
  ),
  ssr: false,
});

const About = dynamic(() => import("./about"), {
  loading: () => <p>Loading..!</p>,
  ssr: false,
});

const Products = dynamic(() => import("./products"), {
  loading: () => <p>Loading..!</p>,
  ssr: false,
});

const Contact = dynamic(() => import("./contact"), {
  loading: () => <p>Loading..!</p>,
  ssr: false,
});

export default function Home() {
  return (
    <section>
      <Head>
        <title>Hamza Enterprises | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <About />
      <Products />
      <Contact />
    </section>
  );
}
