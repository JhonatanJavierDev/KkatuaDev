
import Head from "next/head";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Skills from "../src/components/Skills";
import Layout from "../src/layout/Layout";



const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <Layout dark>
      <Head>
        <title>Kkatua Dev | Home</title>
      </Head>
      <Home dark />
      {/* HERO */}
      {/* PROCESS */}
      <Process dark />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About dark />
      {/* /ABOUT */}
      {/* SKILLS */}
      <Skills dark />
      {/* /SKILLS */}
      {/* PARTNERS */}
      <Partners dark />
      {/* /PARTNERS */}
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;
