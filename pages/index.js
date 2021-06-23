import Layout from "../components/Layout";
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import HowToUse from "../components/HowToUse";
import Discover from "../components/Discover";
import OurMission from "../components/OurMission";

const HomePage = () => {
  return (
    <Layout
      title="Seventh Avenue"
      description="Pull up to our space to come together, create shared experiences, and explore the limits of our imaginations."
    >
      <Hero />
      <About />
      <HowToUse />
      <Discover />
      <OurMission />
    </Layout>
  );
};

export default HomePage;
