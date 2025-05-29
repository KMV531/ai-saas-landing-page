"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const pricingData = {
  yearly: {
    starter: {
      price: "$12/mo",
      original: "$18/mo",
      note: "Ideal for beginners or individuals building their first project. Save 20% with yearly billing at $162/year.",
      features: [
        "Up to 4-Page",
        "Drag-and-Drop Builder",
        "SEO-Optimized Pages",
        "Typescript/Javascript",
        "Landing Page Theme",
        "Email Support (support@webd.one)",
        "Access 200 Premium Request/month",
      ],
    },
    pro: {
      price: "$29/mo",
      original: "$39/mo",
      note: "Perfect for creators and freelancers seeking advanced designs. Save 20% with yearly billing at just $468/yea.",
      features: [
        "Up to 10-Page",
        "Drag-and-Drop Builder",
        "Typescript/Javascript",
        "SEO-Optimized Pages",
        "Landing Page Theme",
        "24/7 Customer Support",
        "Access Unlimited Premium Request/month",
        "Export Code",
      ],
    },
  },
  monthly: {
    starter: {
      price: "$22/mo",
      original: "$28/mo",
      note: "Ideal for beginners or individuals building their first project. Save 20% with yearly billing at $162/year.",
      features: [
        "Up to 4-Page",
        "Drag-and-Drop Builder",
        "SEO-Optimized Pages",
        "Typescript/Javascript",
        "Landing Page Theme",
        "Email Support (support@webd.one)",
        "Access 200 Premium Request/month",
      ],
    },
    pro: {
      price: "$49/mo",
      original: "$59/mo",
      note: "Perfect for creators and freelancers seeking advanced designs. Save 20% with yearly billing at just $468/yea.",
      features: [
        "Up to 10-Page",
        "Drag-and-Drop Builder",
        "Typescript/Javascript",
        "SEO-Optimized Pages",
        "Landing Page Theme",
        "24/7 Customer Support",
        "Access Unlimited Premium Request/month",
        "Export Code",
      ],
    },
  },
  oneTime: {
    nextjs: {
      price: "$189",
      original: "$285",
      note: "Empowering Unique Minds with Cutting-Edge Tools .",
      features: [
        "Complete Next.js Setup",
        "Payment Processing",
        "Email System",
        "Easy Authentication",
        "Lifetime Updates",
        "Database Choice",
        "Modern Development",
        "Export Code",
      ],
    },
  },
};

const PricingSection = () => {
  const [billing, setBilling] = useState("yearly");

  return (
    <section className="container mx-auto px-5 lg:px-0 pt-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="bg-gradient-to-r from-white to-[#9CA3AF] bg-clip-text text-transparent font-bold text-3xl md:text-5xl lg:text-7xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#9CA3AF] text-lg md:text-xl lg:text-2xl py-4 max-w-2xl mx-auto">
          Choose the perfect plan for your needs with simple pricing options.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto py-16">
        <Tabs
          defaultValue="yearly"
          onValueChange={(value) => setBilling(value)}
          className="w-full"
        >
          <motion.div
            className="mx-auto bg-[#161E2C] p-2 rounded-full flex w-fit"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <TabsList className="flex">
              <TabsTrigger
                value="yearly"
                className={`p-4 px-5 rounded-full transition-colors cursor-pointer ${
                  billing === "yearly"
                    ? "bg-[#3B82F6] text-black"
                    : "text-[#9CA3AF]"
                }`}
              >
                Yearly Save 20%
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className={`p-4 px-5 rounded-full transition-colors cursor-pointer ${
                  billing === "monthly"
                    ? "bg-[#3B82F6] text-black"
                    : "text-[#9CA3AF]"
                }`}
              >
                Monthly
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <motion.div
            className="py-8 mx-auto flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image
              src={"/assets/banner.png"}
              alt="discount banner"
              width={768}
              height={102}
            />
          </motion.div>

          <TabsContent value={billing}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {["starter", "pro"].map((plan, index) => (
                <motion.div
                  key={plan}
                  className={`bg-gradient-to-b from-[#1F2937] to-[#111827] p-6 rounded-xl text-[#D1D5DB] flex flex-col justify-between ${
                    plan === "pro"
                      ? "border-2 border-[#2563EB] shadow shadow-[#2563EB]"
                      : ""
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <h3 className="text-xl font-bold capitalize">
                      {plan === "starter" ? "Starter" : "Pro"}
                    </h3>
                    <div className="flex items-center justify-start space-x-3">
                      <p className="bg-gradient-to-r from-white to-[#9CA3AF] bg-clip-text text-transparent text-3xl font-bold mt-5">
                        {pricingData[billing][plan].price}
                      </p>
                      <p className="line-through text-sm text-gray-400 mt-4">
                        {pricingData[billing][plan].original}
                      </p>
                    </div>
                    <p className="text-sm mt-2 text-[#9CA3AF] max-w-[270px]">
                      {pricingData[billing][plan].note}
                    </p>
                    <ul className="mt-4 text-sm space-y-2 text-gray-300">
                      {pricingData[billing][plan].features.map((feature) => (
                        <li key={feature} className="flex gap-4">
                          <Image
                            src={"/assets/checkIcon.png"}
                            alt="checkIcon"
                            width={16}
                            height={16}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className={`mt-6 w-full py-2 px-4 rounded-lg text-white font-medium cursor-pointer ${
                      plan === "pro"
                        ? "bg-[#3B82F6]"
                        : "bg-[#1F2937] hover:bg-blue-600"
                    }`}
                  >
                    Choose Plan
                  </motion.button>
                </motion.div>
              ))}

              {/* One-time plan */}
              <motion.div
                className="bg-gradient-to-b from-[#1F2937] to-[#111827] p-6 rounded-xl text-[#D1D5DB] border border-white/10 flex flex-col justify-between"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div>
                  <h3 className="text-xl font-bold">
                    Nextjs Framework + Starter
                  </h3>
                  <div className="flex items-center justify-start space-x-3">
                    <p className="bg-gradient-to-r from-white to-[#9CA3AF] bg-clip-text text-transparent text-3xl font-bold mt-4">
                      {pricingData.oneTime.nextjs.price}
                    </p>
                    <p className="line-through text-sm text-gray-400 mt-5">
                      {pricingData.oneTime.nextjs.original}
                    </p>
                  </div>
                  <p className="text-sm mt-2 text-[#9CA3AF]">
                    {pricingData.oneTime.nextjs.note}
                  </p>
                  <ul className="mt-4 text-sm space-y-2 text-gray-300">
                    {pricingData.oneTime.nextjs.features.map((feature) => (
                      <li key={feature} className="flex gap-4">
                        <Image
                          src={"/assets/checkIcon.png"}
                          alt="checkIcon"
                          width={16}
                          height={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full py-2 px-4 rounded-lg bg-[#1F2937] text-[#E5E7EB] font-medium hover:bg-blue-600 cursor-pointer">
                  Get Started
                </button>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
