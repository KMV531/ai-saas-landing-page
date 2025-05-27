import AboutSection from "@/sections/About";
import Header from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[#030013]">
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default HomePage;
