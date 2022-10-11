import React, { useContext } from "react";
import Hero from "../components/Hero/Hero";
import NewReleaseSection from "../components/NewReleaseSection/NewReleaseSection";
import SneakersSection from "../components/SneakersSection/SneakersSection";
import ServicesSection from "../components/ServicesSection/Services";
// import Sidebar from "../components/Sidebar/Sidebar";
// import Navbar from "../components/Navbar/Navbar";
// import { UserContext } from "../components/Context/UserContext";
import Footer from "../components/Footer/Footer";

const Home = () => {
  // const { isOpen, toggle } = useContext(UserContext);

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} /> */}
      <Hero />
      <SneakersSection />
      <ServicesSection />
      <NewReleaseSection />
      <Footer />
    </>
  );
};

export default Home;
