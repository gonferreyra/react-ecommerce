import React, { useState } from "react";
import BannerSection from "../components/NewReleaseSection/NewReleaseSection";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";
import NewReleaseSection from "../components/NewReleaseSection/NewReleaseSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Services />
      <NewReleaseSection />
    </>
  );
};

export default Home;
