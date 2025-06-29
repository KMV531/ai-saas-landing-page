"use client";

import Loader from "@/components/Loader";
import AboutSection from "@/sections/About";
import CTASection from "@/sections/CTA";
import FAQSection from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import HIWSection from "@/sections/HIW";
import PricingSection from "@/sections/Pricing";
import { ProjectsSection } from "@/sections/Projects";
import ReviewsSection from "@/sections/Reviews";
import TutoSection from "@/sections/Tuto";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="bg-[#030013]">
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
      <div className="bg-[linear-gradient(to_right,_#E3FDFD_0%,_#FFE6FA_50%,_#F6F5FF_100%)]">
        <HIWSection />
        <CTASection />
      </div>
      <div className="bg-[#F1F5F9]">
        <ProjectsSection />
      </div>
      <div className="bg-[#0A0A0A]">
        <TutoSection />
      </div>
      <div className="bg-[linear-gradient(to_right,_#000000_0%,_#09090B_50%,_#000000_100%)]">
        <ReviewsSection />
      </div>
      <div className="bg-[linear-gradient(to_bottom,_#111827_0%,_#000000_40%)]">
        <PricingSection />
        <FAQSection />
      </div>
      <div className="bg-[#0A0A0A]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
