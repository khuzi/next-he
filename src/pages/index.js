import Head from "next/head";
import dynamic from "next/dynamic";

import Slider from "../Components/Slider/Slider";

const About = dynamic(() => import("./about"), { ssr: false });
// import About from "./about";

const Products = dynamic(() => import("./products"), { ssr: false });
// import Products from "./products";

const Contact = dynamic(() => import("./contact"), { ssr: false });
// import Contact from "./contact";

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
