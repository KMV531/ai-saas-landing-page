"use client";

import React from "react";
import { motion } from "framer-motion";

// Variants
const zoomFade = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      delay: 0.2,
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
      delay: 0.4,
    },
  },
};

const CTASection = () => {
  return (
    <main className="container mx-auto px-5 lg:px-0 py-10">
      <motion.section
        className="bg-[linear-gradient(to_right,_#0D9488_0%,_#DB2777_100%)] text-white rounded-xl max-w-[1000px] h-[386px] mx-auto"
        variants={zoomFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-start justify-start max-w-[923px] space-y-10 p-16">
          <motion.h1
            className="text-xl md:text-3xl lg:text-5xl font-semibold"
            variants={fadeRight}
          >
            Create a Stunning Page/site Without the Work
          </motion.h1>

          <motion.p
            className="text-sm md:text-lg lg:text-xl max-w-[700px]"
            variants={fadeUp}
          >
            No coding, no stress! Create eye-catching pages/site with AI,
            customize themes, and refresh your product page in seconds.
          </motion.p>

          <motion.button
            className="rounded-full font-semibold bg-white text-[#0D9488] text-sm md:text-lg lg:text-xl p-3 cursor-pointer"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Creating →
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
};

export default CTASection;
