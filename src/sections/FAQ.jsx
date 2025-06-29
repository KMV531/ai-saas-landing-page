"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    value: "item-1",
    question: "What kind of landing pages can be created with Webdone?",
    answer:
      "With Webdone, you can create high-converting landing pages for SaaS products, startups, mobile apps, personal portfolios, events, and more — all optimized for performance, design, and speed.",
  },
  {
    value: "item-2",
    question: "How long does it typically take to complete a Landing page ?",
    answer:
      "With Webdone, you can generate and customize a complete landing page in minutes — significantly faster than traditional design and development methods.",
  },
  {
    value: "item-3",
    question:
      "What programming languages does webdone use to build landing pages ?",
    answer:
      "Webdone utilizes modern web technologies to build landing pages efficiently. The platform employs React for dynamic user interfaces, Tailwind CSS for responsive and customizable styling, and Next.js for server-side rendering and optimized performance. Developers can also leverage TypeScript and JavaScript for added flexibility and type safety.",
  },
  {
    value: "item-4",
    question: "What can I get with the Next.js boilerplate?",
    answer:
      "You get a responsive, SEO-friendly, and customizable landing page built with Next.js and Tailwind — ready to launch fast.",
  },
  {
    value: "item-5",
    question: "Is there a free trial?",
    answer:
      "No, Webdone does not offer a free trial. However, we provide a 20% discount on all plans when billed annually using the code.",
  },
  {
    value: "item-6",
    question: "What does the drag-and-drop feature provide?",
    answer:
      "The drag-and-drop feature in Webdone allows you to visually build and arrange landing page sections without writing code — making it easy to customize layouts, reorder components, and design pages quickly and intuitively.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FAQSection = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-20 relative bg-cover bg-center bg-fixed bg-no-repeat bg-[url('/assets/bgCoverImage.png')]">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="bg-gradient-to-r from-[#C084FC] via-[#EC4899] to-[#9333EA] text-transparent bg-clip-text text-center font-bold text-3xl md:text-5xl lg:text-7xl">
          Frequently Asked <br /> Questions
        </h1>
        <hr className="bg-gradient-to-r from-[#C084FC] via-[#EC4899] to-[#9333EA] w-[10%] h-2 mx-auto my-8 rounded-full" />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto text-white px-5 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <Accordion type="single" collapsible>
          {faqItems.map(({ value, question, answer }) => (
            <motion.div key={value} variants={itemVariants}>
              <AccordionItem value={value}>
                <AccordionTrigger className="cursor-pointer">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQSection;
