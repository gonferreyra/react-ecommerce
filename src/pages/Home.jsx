import React from "react";
import Hero from "../components/Hero/Hero";
import NewReleaseSection from "../components/NewReleaseSection/NewReleaseSection";
import SneakersSection from "../components/SneakersSection/SneakersSection";
import ServicesSection from "../components/ServicesSection/Services";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";

const Home = () => {
  return (
    <>
      <Cart />
      <Hero />
      <SneakersSection />
      <ServicesSection />
      <NewReleaseSection />
      <Footer />
    </>
  );
};

export default Home;
