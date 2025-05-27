import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-white font-extralight text-3xl md:text-5xl lg:text-7xl">
          Create Eye-catching site & page and landing pages in minutes with{" "}
          <span className="font-extrabold">AI</span>
        </h1>
        <p className="text-[#9CA3AF] max-w-[600px] mx-auto text-center text-lg md:text-xl lg:text-2xl py-4">
          Just describe your product, and let AI build a stunning page—no coding
          headaches, no stress!
        </p>
        <div className="py-7">
          <button className="rounded-full font-semibold bg-white text-[#4F46E5] text-sm md:text-lg lg:text-xl p-3 cursor-pointer">
            Seo-peak →
          </button>
        </div>
      </div>
      <div className="py-10">
        <Image
          src={"/assets/hero_image.png"}
          alt="about SAAS image"
          width={1024}
          height={604}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;
