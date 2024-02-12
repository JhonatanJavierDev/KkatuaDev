
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Skills from "../src/components/Skills";
import Layout from "../src/layout/Layout";


const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Kkatua Dev | Home</title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* PARTNERS */}
      <Partners />
      {/* /PARTNERS */}
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;
