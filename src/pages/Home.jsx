import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import NewReleaseSection from "../components/NewReleaseSection/NewReleaseSection";
import SneakersSection from "../components/SneakersSection/SneakersSection";

const Home = () => {
  return (
    <>
      <Hero />
      <SneakersSection />
      <Services />
      <NewReleaseSection />
    </>
  );
};

export default Home;
