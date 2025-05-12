import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhatWeDo from "@/components/what-we-do";
import Training from "@/components/training";
import Industry from "@/components/industry";
import GetReady from "@/components/get-ready";
import Insights from "@/components/insights";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Training />
      <Industry />
      <GetReady />
      <Insights />
      <Contact />
      <Footer />
    </>
  );
}
