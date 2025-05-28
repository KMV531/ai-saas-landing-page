import Image from "next/image";
import React from "react";

const ReviewsSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-20">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-center text-white font-bold text-3xl md:text-5xl lg:text-7xl">
          Stories From Happy Customers
        </h1>
        <p className="text-[#9CA3AF] max-w-[600px] mx-auto text-center text-lg md:text-xl lg:text-2xl py-4">
          Hear directly from customers about their experiences and how webdone
          has made a difference.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <Image
          src={"/assets/review1.png"}
          alt="review1"
          width={373.33}
          height={231.25}
        />
        <Image
          src={"/assets/review2.png"}
          alt="review2"
          width={373.33}
          height={163.5}
        />
        <Image
          src={"/assets/review3.png"}
          alt="review3"
          width={373.33}
          height={186.25}
        />
        <Image
          src={"/assets/review4.png"}
          alt="review4"
          width={373.33}
          height={186.25}
        />
        <Image
          src={"/assets/review5.png"}
          alt="review5"
          width={373.33}
          height={186.25}
        />
        <Image
          src={"/assets/review6.png"}
          alt="review6"
          width={373.33}
          height={254.5}
        />
        <Image
          src={"/assets/review7.png"}
          alt="review7"
          width={373.33}
          height={186.25}
        />
        <Image
          src={"/assets/review8.png"}
          alt="review8"
          width={373.33}
          height={185.75}
        />
        <Image
          src={"/assets/review9.png"}
          alt="review9"
          width={373.33}
          height={163.5}
        />
      </div>
    </section>
  );
};

export default ReviewsSection;
