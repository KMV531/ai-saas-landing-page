// app/components/AOSProvider.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      // 👇 Add or adjust these options:
      offset: 100, // triggers sooner (reduce this value to trigger earlier)
      threshold: 0.25, // Trigger animation when 25% of the element is in the viewport
      delay: 0,
      easing: "ease-in-out",
      startEvent: "DOMContentLoaded",
    });

    // Optionally refresh on resize (especially helpful for mobile)
    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null;
};

export default AOSProvider;

/* 
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return null;
};

export default AOSProvider;

*/
