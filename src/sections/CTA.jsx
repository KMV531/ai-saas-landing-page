"use client";

import React from "react";

const CTASection = () => {
  return (
    <main className="container mx-auto px-5 lg:px-0 py-10">
      <section
        className="bg-[linear-gradient(to_right,_#0D9488_0%,_#DB2777_100%)] text-white rounded-xl max-w-[1000px] h-[386px] mx-auto"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-start justify-start max-w-[923px] space-y-10 p-16">
          <h1
            className="text-xl md:text-3xl lg:text-5xl font-semibold"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Create a Stunning Page/site Without the Work
          </h1>
          <p
            className="text-sm md:text-lg lg:text-xl max-w-[700px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            No coding, no stress! Create eye-catching pages/site with AI,
            customize themes, and refresh your product page in seconds.
          </p>
          <button
            className="rounded-full font-semibold bg-white text-[#0D9488] text-sm md:text-lg lg:text-xl p-3 cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Start Creating →
          </button>
        </div>
      </section>
    </main>
  );
};

export default CTASection;
