"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Variants for section text
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

// Grid container variant for staggering
const container = {
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Each grid item zoom-in animation
const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const ReviewsSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-20">
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center justify-center py-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-center text-white font-bold text-3xl md:text-5xl lg:text-7xl"
          variants={fadeUp}
          custom={0.1}
        >
          Stories From Happy Customers
        </motion.h1>

        <motion.p
          className="text-[#9CA3AF] max-w-[600px] mx-auto text-center text-lg md:text-xl lg:text-2xl py-4"
          variants={fadeUp}
          custom={0.2}
        >
          Hear directly from customers about their experiences and how webdone
          has made a difference.
        </motion.p>
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          "review1",
          "review2",
          "review3",
          "review4",
          "review5",
          "review6",
          "review7",
          "review8",
          "review9",
        ].map((review, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl"
            variants={zoomIn}
          >
            <Image
              src={`/assets/${review}.png`}
              alt={review}
              width={373.33}
              height={231.25}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
