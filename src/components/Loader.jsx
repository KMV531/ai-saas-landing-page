import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full min-h-screen z-50 bg-[#00002A] p-10 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <Image
          src={"/assets/check-loader-gif.gif"}
          alt="Check Loader Gif"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
