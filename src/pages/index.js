import Head from "next/head";
import dynamic from "next/dynamic";

import Spinner from "../Components/Spinner/Spinner";

const Slider = dynamic(() => import("../Components/Slider/Slider"), {
  loading: () => <Spinner />,
  ssr: false,
});

import About from "./about";
import Products from "./products";
import Contact from "./contact";

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
