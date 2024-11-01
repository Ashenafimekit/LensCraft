import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Service_page from "../components/Service_page";

const ServicePage = () => {
  return (
    <div className="bg-[#232323]">
      <Header />
      <Hero />
      <Service_page/>
      <Footer />
    </div>
  );
};

export default ServicePage;
