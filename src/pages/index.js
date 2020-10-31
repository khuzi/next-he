import Head from "next/head";

import Slider from "../Components/Slider/Slider";
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
