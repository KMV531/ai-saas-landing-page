"use client";

import Image from "next/image";
import React from "react";

const TutoSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 pt-16 md:pt-20">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center space-y-6">
        <h1
          className="text-white font-extralight text-3xl md:text-5xl lg:text-7xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Generate Stunning Themes with AI
        </h1>
        <p
          className="text-[#9CA3AF] text-lg md:text-xl lg:text-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Give your landing page a fresh, professional look with AI-powered
          theme generation.
        </p>
      </div>

      {/* Image */}
      <div className="py-8 md:py-10" data-aos="zoom-in-up" data-aos-delay="300">
        <Image
          src={"/assets/a 93.png"}
          alt="Youtube SAAS image"
          width={970}
          height={576}
          className="mx-auto"
          priority
        />
      </div>

      {/* Content Section */}
      <div
        className="relative p-8 md:p-14 flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-center md:space-x-5 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/assets/bgImage.png')" }}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Left Block */}
        <div
          className="flex flex-col space-y-6 flex-1"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <h2 className="bg-gradient-to-r from-[#A78BFA] to-[#E879F9] font-bold uppercase tracking-widest text-lg md:text-xl lg:text-2xl gap-2 text-transparent bg-clip-text">
            Build with Next.js
          </h2>
          <Image
            src={"/assets/tools.png"}
            alt="Tools"
            width={547}
            height={336}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Right Block */}
        <div
          className="flex flex-col space-y-6 max-w-lg flex-1"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white leading-tight">
            <span className="bg-gradient-to-r from-[#C4B5FD] via-[#86EFAC] to-[#E879F9] font-bold text-transparent bg-clip-text">
              Next.js from Scratch
            </span>{" "}
            Building a Full-Stack Application
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#D1D5DB]">
            Build, Scale, Launch: A Complete Next.js Setup
          </p>
          <button className="rounded-full w-[200px] h-[52px] font-semibold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm md:text-lg lg:text-xl p-3 cursor-pointer hover:brightness-110 transition">
            Start Creating ✨
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutoSection;
