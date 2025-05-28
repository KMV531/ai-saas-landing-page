import Image from "next/image";
import React from "react";

const TutoSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 pt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-white font-extralight text-3xl md:text-5xl lg:text-7xl">
          Generate Stunning Themes with AI
        </h1>
        <p className="text-[#9CA3AF] max-w-[600px] mx-auto text-center text-lg md:text-xl lg:text-2xl py-4">
          Give your landing page a fresh, professional look with AI-powered
          theme generation.
        </p>
      </div>
      <div className="py-10">
        <Image
          src={"/assets/a 93.png"}
          alt="Youtube SAAS image"
          width={970}
          height={576}
          className="mx-auto"
        />
      </div>
      <div className="p-20 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-center lg:space-x-10 relative bg-cover bg-center bg-no-repeat bg-[url('/assets/bgImage.png')]">
        <div className="flex flex-col space-y-4 p-14">
          <div className="bg-gradient-to-r from-[#A78BFA] to-[#E879F9] font-bold uppercase tracking-widest text-lg md:text-xl lg:text-2xl gap-2 text-transparent bg-clip-text">
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
              Build with Next.js
            </h1>
          </div>
          <Image
            src={"/assets/tools.png"}
            alt="Tools"
            width={546.51}
            height={336}
          />
        </div>
        <div className="flex flex-col space-y-8 max-w-[482.5px]">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl text-white">
            <span className="bg-gradient-to-r from-[#C4B5FD] via-[#86EFAC] to-[#E879F9] font-bold text-transparent bg-clip-text">
              Next.js from Scratch
            </span>{" "}
            Building a Full-Stack Application
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-[#D1D5DB]">
            Build, Scale, Launch: A Complete Next.js Setup
          </p>
          <button className="rounded-full w-[200px] h-[52px] font-semibold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm md:text-lg lg:text-xl p-3 cursor-pointer">
            Start Creating ✨
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutoSection;
