"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const winHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / winHeight) * 100;
    setScrollProgress(scrolled);
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative w-14 cursor-pointer h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white/20 transition"
        >
          {/* Progress circle using SVG */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 36 36"
          >
            <path
              className="text-white/10"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="text-blue-500"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={`${scrollProgress}, 100`}
            />
          </svg>

          {/* Arrow Icon */}
          <ArrowUp className="text-white z-10" size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
