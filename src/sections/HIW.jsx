"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HIWSection = () => {
  return (
    <main>
      <section className="container mx-auto px-5 lg:px-0 py-10">
        {/* Top Text Block */}
        <motion.div
          className="flex flex-col space-y-5 items-start justify-start p-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-[#171717] font-semibold text-2xl md:text-3xl lg:text-5xl max-w-[500px]"
            variants={fadeUp}
          >
            ✨ Make Landing Pages Modern, Fast, and High-Performance
          </motion.h1>

          <motion.p
            className="text-[#525252] text-lg max-w-[500px]"
            variants={fadeUp}
          >
            Easily build landing pages that fit your product. Use AI assistant
            to generate layout, and change backgrounds in minutes
          </motion.p>

          <motion.button
            className="rounded-full font-semibold bg-[#0D9488] text-white text-sm md:text-lg lg:text-xl p-3 cursor-pointer"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a project ✨ →
          </motion.button>
        </motion.div>

        {/* Central Image */}
        <motion.div
          className="relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/assets/about_image.png"
            alt="Image Showing How Our SAAS Functions"
            width={928}
            height={551}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Decorative Background Blur */}
        <Image
          src="/assets/bgDiv [absolute].png"
          alt="blur background"
          width={100}
          height={128}
          className="w-full"
        />

        {/* Split Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Image */}
          <motion.div variants={zoomIn}>
            <Image
              src="/assets/Div [absolute] (3).png"
              alt="Our SAAS Landing Page Screenshots"
              width={658.5}
              height={400}
            />
          </motion.div>

          {/* Right Text Block */}
          <motion.div
            className="flex flex-col space-y-4 items-start justify-center relative"
            variants={fadeUp}
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

            <motion.button
              className="rounded-full font-semibold bg-white ring ring-gradient-to-r from-[#2563EB] to-[#9333EA] text-[#1F2937] text-sm md:text-lg lg:text-xl p-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building
            </motion.button>
          </motion.div>
        </motion.div>
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
