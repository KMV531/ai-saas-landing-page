import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto px-5 lg:px-0 py-5">
      <div className="flex items-center justify-between">
        <div className="cursor-pointer">
          <Image
            src={"/assets/logo.png"}
            alt="Webdone Logo"
            width={184}
            height={90}
          />
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-x-8">
            <h1 className="font-medium text-sm md:text-lg lg:text-xl text-white cursor-pointer">
              Sign in
            </h1>
            <button className="rounded-full bg-[#4F46E5] text-white font-medium text-sm md:text-lg lg:text-xl p-3 cursor-pointer">
              Start Building →
            </button>
          </div>
        </div>
        <div className="block md:hidden cursor-pointer">
          <MenuIcon width={30} height={30} className="text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
