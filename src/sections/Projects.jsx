import React, { useState } from "react";

// Icon
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// motion
import { motion } from "framer-motion";

// Data
import Mamiru from "../assets/images/projects/mamiro.png";
import Tasty from "../assets/images/projects/tasty.png";
import Omnifood from "../assets/images/projects/omnifood.png";
import ShopStore from "../assets/images/projects/shoppingstore.png";
import Clipboarding from "../assets/images/projects/clipboarding.png";
import Shoesit from "../assets/images/projects/shoesit.png";
import Rotinniajad from "../assets/images/projects/rotinniajad.png";
import Blogr from "../assets/images/projects/blogr.png";

const Projects = () => {
  const projects = [
    {
      name: "Mamiru",
      image: Mamiru,
      hrefLink: "https://mamirou.vercel.app/",
      githubLink: "https://github.com/SamoudiAnas/Mamirou",
    },
    {
      name: "Clipboarding",
      image: Clipboarding,
      hrefLink: "https://mamirou.vercel.app/",
      githubLink: "https://github.com/SamoudiAnas/Mamirou",
    },
    {
      name: "Tasty",
      image: Tasty,
      hrefLink: "https://mamirou.vercel.app/",
      githubLink: "https://github.com/SamoudiAnas/Mamirou",
    },
    {
      name: "Omnifood",
      image: Omnifood,
      hrefLink: "https://mamirou.vercel.app/",
      githubLink: "https://github.com/SamoudiAnas/Mamirou",
    },
    {
      name: "Shoesit",
      image: Shoesit,
      hrefLink: "https://mamirou.vercel.app/",
      githubLink: "https://github.com/SamoudiAnas/Mamirou",
    },
    {
      name: "Rotin Niajad",
      image: Rotinniajad,
      hrefLink: "https://mamirou.vercel.app/",
      githubLink: "https://github.com/SamoudiAnas/Mamirou",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 min-h-screen" id="work">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-black-900 text-2xl text-center font-nav font-semibold mb-12 md:text-3xl lg:text-4xl">
          My Work
        </h2>

        {/* Work Container */}
        <div className="grid gap-24 place-items-center lg:gap-12 lg:grid-cols-2 lg:px-12">
          {projects.map((project, index) => (
            <motion.div whileInView={{ opacity: [0, 1] }} key={index}>
              {/* Project container */}
              <div className="max-w-sm sm:max-w-md md:max-w-lg lg:w-full">
                {/* Container */}
                <div className="relative">
                  {/* Image container */}
                  <div className="h-[250px] sm:h-[300px]">
                    <img
                      className="h-full w-[95%] lg:w-full"
                      src={project.image}
                      alt={project.name}
                    />
                  </div>

                  {/* Project description */}
                  <div className="bg-black-900 p-5 absolute top-[70%] -right-5 sm:p-8 sm:-right-16 sm:top-[72%] lg:relative lg:left-0 lg:p-12">
                    <span className="gradient-text text-sm uppercase tracking-widest font-semibold">
                      Featured Project
                    </span>
                    <h2 className="text-white text-xl font-bold mb-4 lg:text-2xl lg:mb-6 2xl:text-3xl">
                      {project.name}
                    </h2>

                    {/* Technologies used */}
                    <div></div>

                    {/* Buttons container */}
                    <div className="flex gap-4 lg:gap-8">
                      <a
                        href={project.hrefLink}
                        target="_blank"
                        className="group inline-flex items-center gap-1 text-white cursor-pointer"
                      >
                        View Project{" "}
                        <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="group inline-flex items-center gap-1 text-white cursor-pointer"
                      >
                        Github Repo{" "}
                        <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div className="grid gap-36 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              className="relative w-full h-full md:max-w-2xl md:mx-auto lg:w-full"
              whileInView={{ opacity: [0, 1] }}
              key={index}
            >
              <div>
                <div className="w-[95%] h-[250px] lg:w-full lg:h-full">
                  <img
                    className="h-full"
                    src={project.image}
                    alt={project.name}
                  />
                </div>

                <div className="absolute top-[70%] md:top-[55%] -right-5 lg:top-[100%] lg:left-0 lg:right-0 p-5 bg-black-900 sm:p-10 md:p-14">
                  <span className="gradient-text text-sm uppercase tracking-widest font-semibold">
                    Featured Project
                  </span>
                  <h2 className="text-xl text-white mb-6 font-bold sm:text-2xl">
                    {project.name}
                  </h2>

                  <div></div>

                  <div className="flex gap-6">
                    <a
                      href={project.hrefLink}
                      target="_blank"
                      className="group inline-flex items-center gap-1 text-white cursor-pointer"
                    >
                      View Project{" "}
                      <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="group inline-flex items-center gap-1 text-white cursor-pointer"
                    >
                      Github Repo{" "}
                      <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Projects;
