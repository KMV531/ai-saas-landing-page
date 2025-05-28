import Image from "next/image";

// Componnents
import { ArrowUpRight, CheckCircleIcon } from "lucide-react";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Effortless Control",
    title:
      "Easily customize colors, backgrounds, and more with a simple and intuitive tool",
    results: [
      { title: "Background color" },
      { title: "Real-time Updates" },
      { title: "Scalability" },
    ],
    image: "/assets/project1.png",
  },
  {
    company: "High Converting Landing Page With AI",
    title:
      "Create optimised landing pages with AI that drive conversions and enhance user engagement.",
    results: [
      { title: "Smart Color Schemes" },
      { title: "AI-Layout Options" },
      { title: "Drag and Drop Builder" },
    ],
    image: "/assets/dark-saas-landing-page.png",
  },
  {
    company: "Performance Optimization",
    title:
      "Unlock Superior landing page performance, SEO improvements and accessibility with AI-driven optimixations.",
    results: [
      { title: "SEO Optimization" },
      { title: "Accessibility Enhancement" },
      { title: "Search Engine Ranking" },
      { title: "User Engagement" },
    ],
    image: "/assets/light-saas-landing-page.png",
  },
  {
    company: "Typescript & Javascript",
    title:
      "Unlock Perfect Landing Page with AI and Seamless Conversion Metrics",
    results: [
      { title: "React" },
      { title: "Tailwind CSS" },
      { title: "Typescript & Javascript" },
    ],
    image: "/assets/ai-startup-landing-page.png",
  },
  {
    company: "Redefining Quick Edits Page Creation With AI Assistance",
    title:
      "Accelerate the creation of high-quality landing pages Redefining with AI tools that optimize Layout, performance and content",
    results: [
      { title: "Instant Layout Change" },
      { title: "One-Click Customization" },
    ],
    image: "/assets/project1.png",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] inline-flex font-bold uppercase tracking-widest text-lg md:text-xl lg:text-2xl gap-2 text-transparent bg-clip-text">
                    <h1 className="font-bold">{project.company}</h1>
                  </div>

                  <p className="font-serif text-sm md:text-lg lg:text-xl mt-2 md:mt-5 text-[#4B5563]">
                    {project.title}
                  </p>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5 shadow-xl bg-[#93C5FD] rounded-lg p-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <Image
                          src={"/assets/dot.png"}
                          alt="dots"
                          width={24}
                          height={24}
                        />
                        <span className="text-[#4B5563]">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#9333EA_0%,#2563EB_100%)] w-max mt-8">
                    <button className="bg-white cursor-pointer text-gray-950 h-12 w-full md:w-auto px-6 rounded-full font-semibold gap-2 flex items-center justify-center">
                      <span className="text-xl text-[#1F2937]">Begin Now</span>
                    </button>
                  </div>
                </div>
                <div className="relative ">
                  <Image
                    width={400}
                    height={400}
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
