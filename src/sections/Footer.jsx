import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-20">
      <hr />
      <section className="container mx-auto">
        {/* Inner wrapper with padding to reduce outer height */}
        <div className="p-16 lg:p-20">
          <div className="flex flex-col space-y-8 lg:flex-row lg:items-start lg:justify-between lg:space-x-4 my-5">
            {/* Left Block */}
            <div className="flex flex-col space-y-5">
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  alt="Webdone Logo"
                  width={184}
                  height={90}
                />
              </Link>
              <div className="flex items-start justify-center space-x-4">
                <Image
                  src={"/assets/Link [w-10].png"}
                  alt="Envelope icon"
                  width={40}
                  height={40}
                />
                <Image
                  src={"/assets/Link [w-10] (1).png"}
                  alt="X icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* Other Sections */}
            {[
              {
                title: "PRODUCT",
                items: [
                  "Next js Complete setup",
                  "Ai Landing page builder",
                  "Drag and Drop Builder",
                  "landing page Theme",
                  "Documentation",
                  "AI Builder",
                ],
              },
              {
                title: "COMPANY",
                items: ["About Us", "Terms of Service", "Privacy Policy"],
              },
              {
                title: "RESOURCES",
                items: ["Blog"],
              },
              {
                title: "SOLUTION",
                items: ["Getting Started"],
                extraItem: {
                  text: "website maker >",
                  extraClass:
                    "text-white text-lg cursor-pointer hover:translate-x-2 hover:text-[#9CA3AF] transition-all",
                },
              },
            ].map(({ title, items, extraItem }, i) => (
              <div key={title} className="flex flex-col space-y-3 w-max">
                <h1 className="text-white font-semibold text-xl">{title}</h1>
                {items.map((item) => (
                  <p
                    key={item}
                    className="text-[#9CA3AF] text-lg cursor-pointer hover:translate-x-2 hover:text-white transition-all"
                  >
                    {item}
                  </p>
                ))}
                {extraItem && (
                  <p className={extraItem.extraClass}>{extraItem.text}</p>
                )}
              </div>
            ))}
          </div>

          <hr className="py-5" />

          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-center space-x-4">
              <p className="text-[#9CA3AF] text-lg">
                © {new Date().getFullYear()} Webdone. All rights reserved.
              </p>
              <Image
                src={"/assets/Span [w-1.5].png"}
                alt="dot image"
                width={6}
                height={6}
              />
            </div>
            <div className="flex items-center justify-center space-x-4">
              <p className="text-[#9CA3AF] text-lg cursor-pointer hover:text-white transition-all">
                Privacy
              </p>
              <p className="text-[#9CA3AF] text-lg cursor-pointer hover:text-white transition-all">
                Terms
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
