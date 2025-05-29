"use client";

import Image from "next/image";
import React from "react";

const HIWSection = () => {
  return (
    <main>
      <section className="container mx-auto px-5 lg:px-0 py-10">
        {/* Top Text Block */}
        <div
          className="flex flex-col space-y-5 items-start justify-start p-20"
          data-aos="fade-up"
        >
          <h1 className="text-[#171717] font-semibold text-2xl md:text-3xl lg:text-5xl max-w-[500px]">
            ✨ Make Landing Pages Modern, Fast, and High-Performance
          </h1>
          <p className="text-[#525252] text-lg max-w-[500px]">
            Easily build landing pages that fit your product. Use AI assistant
            to generate layout, and change backgrounds in minutes
          </p>
          <button
            className="rounded-full font-semibold bg-[#0D9488] text-white text-sm md:text-lg lg:text-xl p-3 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Start a project ✨ →
          </button>
        </div>

        {/* Central Image */}
        <div className="relative" data-aos="fade-up" data-aos-delay="300">
          <Image
            src="/assets/about_image.png"
            alt="Image Showing How Our SAAS Functions"
            width={928}
            height={551}
            className="mx-auto object-cover"
          />
        </div>

        {/* Decorative Background Blur */}
        <Image
          src="/assets/bgDiv [absolute].png"
          alt="blur background"
          width={100}
          height={128}
          className="w-full"
        />

        {/* Split Section */}
        <div
          className="flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Left Image */}
          <div data-aos="fade-up" data-aos-delay="500">
            <Image
              src="/assets/Div [absolute] (3).png"
              alt="Our SAAS Landing Page Screenshots"
              width={658.5}
              height={400}
            />
          </div>

          {/* Right Text Block */}
          <div
            className="flex flex-col space-y-4 items-start justify-center relative"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h1 className="max-w-[389px] font-black text-2xl md:text-3xl lg:text-5xl">
              Build site Like a Pro with AI
            </h1>
            <p className="text-lg bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">
              - No coding skill needed
            </p>
            <p className="text-xl py-3 max-w-[400px]">
              Create a stunning site/page without any design or coding skills.
            </p>
            <button className="rounded-full font-semibold bg-white ring ring-gradient-to-r from-[#2563EB] to-[#9333EA] text-[#1F2937] text-sm md:text-lg lg:text-xl p-3 cursor-pointer">
              Start Building
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Decorative Blur */}
      <Image
        src="/assets/bgDiv [absolute].png"
        alt="blur background"
        width={100}
        height={128}
        className="w-full"
      />
    </main>
  );
};

export default HIWSection;
