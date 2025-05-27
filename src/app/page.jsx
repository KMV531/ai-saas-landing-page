import AboutSection from "@/sections/About";
import Header from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import HIWSection from "@/sections/HIW";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[#030013]">
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
      <div className="bg-[linear-gradient(to_right,_#E3FDFD_0%,_#FFE6FA_50%,_#F6F5FF_100%)]">
        <HIWSection />
      </div>
    </div>
  );
};

export default HomePage;
