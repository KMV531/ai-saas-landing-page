"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const HeroSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-1">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 z-20 relative">
        {/* Hero Left */}
        <motion.div
          className="flex flex-col space-y-10 order-2 lg:order-none"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div variants={fade} transition={{ delay: 0.6 }}>
            <Image
              src="/assets/Image [w-[250px]].png"
              alt="notification"
              width={250}
              height={54}
              className="lg:mb-36"
            />
          </motion.div>

          <motion.h1
            className="font-bold text-white text-2xl md:text-3xl lg:text-5xl max-w-[518px]"
            variants={fade}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Create Stunning Site&page with AI and Launch Your Product Fast with{" "}
            <span className="text-[#34D399]"> AI</span>
          </motion.h1>

          <motion.p
            className="text-[#f0f0f0] max-w-[576px] text-xl"
            variants={fade}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Skip the intense coding week! Use AI to creating Eye-catching
            landing page/site/page with AI! And Publish your product Quickly
            with Next.js setup
          </motion.p>

          <motion.div
            className="flex items-center justify-start space-x-5"
            variants={fade}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="rounded-full bg-white text-[#4F46E5] font-medium text-sm md:text-lg lg:text-xl p-3 cursor-pointer">
              Create with AI →
            </button>
            <Image
              src="/assets/Div [flex].png"
              alt="No generic layout"
              width={144.71}
              height={56}
            />
          </motion.div>

          <motion.div
            variants={fade}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Image
              src="/assets/reviews.png"
              alt="customer reviews"
              width={576}
              height={36}
            />
          </motion.div>

          {/* blur image */}
          <div className="hidden lg:block -z-10">
            <Image
              src="/assets/Div [absolute] (1).png"
              alt="blur background"
              width={384}
              height={384}
              className="absolute bottom-4 left-4"
            />
          </div>
        </motion.div>

        {/* Hero Right */}
        <motion.div
          className="order-1 lg:order-none"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.p
            className="text-[#A3A3A3] max-w-[500px] text-xl pt-8"
            variants={fade}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Create, Customize & Launch Next.js-setup without worry about
            designing page, payment, auth and more
          </motion.p>

          <motion.div
            className="relative z-20"
            variants={fade}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Image
              src="/assets/hero_right.png"
              alt="hero left images"
              width={526}
              height={580}
              className="pb-4 lg:pb-0"
            />
            <Image
              src="/assets/Div [absolute] (2).png"
              alt="blur background"
              width={384}
              height={384}
              className="absolute bottom-4 -z-10 hidden lg:block"
            />
          </motion.div>

          <div className="hidden lg:block -z-10">
            <Image
              src="/assets/Div [absolute].png"
              alt="blur background"
              width={384}
              height={384}
              className="absolute top-4 right-4"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
