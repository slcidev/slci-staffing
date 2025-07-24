import React from "react";
import Hero from "../components/Sections/Hero";
import AboutUs from "../components/Sections/AboutUs";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/Blog";
import Clients from "../components/Sections/Clients";
import WhyChooseUs from "../components/Sections/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs/>
      <Clients />
      <Blog />
    </main>
  );
};

export default Home;
