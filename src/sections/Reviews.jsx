"use client";

import Image from "next/image";
import React from "react";

const ReviewsSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-20">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center py-10">
        <h1
          className="text-center text-white font-bold text-3xl md:text-5xl lg:text-7xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Stories From Happy Customers
        </h1>
        <p
          className="text-[#9CA3AF] max-w-[600px] mx-auto text-center text-lg md:text-xl lg:text-2xl py-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hear directly from customers about their experiences and how webdone
          has made a difference.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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
          <div
            key={review}
            className="overflow-hidden rounded-xl"
            data-aos="zoom-in"
            data-aos-delay={100 + index * 100}
          >
            <Image
              src={`/assets/${review}.png`}
              alt={review}
              width={373.33}
              height={231.25}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
