import Head from "next/head";
import dynamic from "next/dynamic";

import Spinner from "../Components/Spinner/Spinner";

const Slider = dynamic(() => import("../Components/Slider/Slider"), {
  loading: () => <Spinner />,
  ssr: false,
});

const About = dynamic(() => import("./about"), {
  ssr: false,
});

const Products = dynamic(() => import("./products"), {
  ssr: false,
});

const Contact = dynamic(() => import("./contact"), {
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
