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
      name: "Rotinniajad",
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
        <motion.div className="grid gap-44">
          {projects.map((project, index) => (
            <motion.div whileInView={{ opacity: [0, 1] }} key={index}>
              <div className="relative w-full h-full">
                <div className="w-[95%] h-[200px] bg-black-500">
                  <img
                    className="h-full"
                    src={project.image}
                    alt={project.name}
                  />
                </div>

                <div className="absolute top-[70%] -right-5 p-5 bg-black-900">
                  <span className="gradient-text text-sm uppercase tracking-widest font-semibold">
                    Featured Project
                  </span>
                  <h2 className="text-xl text-white mb-6 font-bold">
                    {project.name}
                  </h2>

                  <div></div>

                  <div className="flex gap-6">
                    <a className="group inline-flex items-center gap-1 text-white cursor-pointer">
                      View Project{" "}
                      <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2" />
                    </a>
                    <a className="group inline-flex items-center gap-1 text-white cursor-pointer">
                      Github Repo{" "}
                      <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
