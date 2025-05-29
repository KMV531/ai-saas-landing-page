"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const TutoSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 pt-16 md:pt-20">
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-white font-extralight text-3xl md:text-5xl lg:text-7xl"
          variants={fadeUp}
          custom={0.1}
        >
          Generate Stunning Themes with AI
        </motion.h1>

        <motion.p
          className="text-[#9CA3AF] text-lg md:text-xl lg:text-2xl"
          variants={fadeUp}
          custom={0.2}
        >
          Give your landing page a fresh, professional look with AI-powered
          theme generation.
        </motion.p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="py-8 md:py-10"
        variants={zoomIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={"/assets/a 93.png"}
          alt="Youtube SAAS image"
          width={970}
          height={576}
          className="mx-auto"
          priority
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="relative p-8 md:p-14 flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-center md:space-x-5 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/assets/bgImage.png')" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Block */}
        <motion.div
          className="flex flex-col space-y-6 flex-1"
          variants={fadeRight}
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
        </motion.div>

        {/* Right Block */}
        <motion.div
          className="flex flex-col space-y-6 max-w-lg flex-1"
          variants={fadeLeft}
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full w-[200px] h-[52px] font-semibold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm md:text-lg lg:text-xl p-3 cursor-pointer hover:brightness-110 transition"
          >
            Start Creating ✨
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TutoSection;
