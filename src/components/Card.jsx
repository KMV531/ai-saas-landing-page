import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ className, children, ...other }) => {
  return (
    <div
      className={twMerge(
        "bg-[linear-gradient(to_right,_#F3F4F6_0%,_#BFDBFE_100%)] rounded-3xl relative z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default Card;
