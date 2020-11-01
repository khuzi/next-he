import Head from "next/head";
import dynamic from "next/dynamic";

// import Slider from "../Components/Slider/Slider";

// import About from "./about";
// import Products from "./products";
// import Contact from "./contact";

const Slider = dynamic(() => import("../Components/Slider/Slider"), {
  loading: () => <p>Loading..!</p>,
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
