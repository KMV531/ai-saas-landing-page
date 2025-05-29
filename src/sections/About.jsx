"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-10">
      {/* Text Block */}
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          className="text-center text-white font-extralight text-3xl md:text-5xl lg:text-7xl py-4"
          variants={fadeUp}
        >
          Create Eye-catching site & page and landing pages in minutes with{" "}
          <span className="font-extrabold">AI</span>
        </motion.h1>

        <motion.p
          className="text-[#9CA3AF] max-w-[600px] mx-auto text-center text-lg md:text-xl lg:text-2xl py-4"
          variants={fadeUp}
        >
          Just describe your product, and let AI build a stunning page—no coding
          headaches, no stress!
        </motion.p>

        <motion.div className="py-7" variants={fadeUp}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full font-semibold bg-white text-[#4F46E5] text-sm md:text-lg lg:text-xl p-3 cursor-pointer transition-transform"
          >
            Seo-peak →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image Block */}
      <motion.div
        className="py-10"
        variants={zoomIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={"/assets/hero_image.png"}
          alt="about SAAS image"
          width={1024}
          height={604}
          className="mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
