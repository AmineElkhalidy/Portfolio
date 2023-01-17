import React from "react";

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
import Funiro from "../assets/images/projects/funiro.png";
import Userhive from "../assets/images/projects/userhive.png";

// Images
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/javascript.png";
import REACT from "../assets/images/react.png";
import Next from "../assets/images/next.png";
import NextLight from "../assets/images/nextjs-light.png";
import Tailwind from "../assets/images/tailwind.png";
import Redux from "../assets/images/redux.png";
import Node from "../assets/images/node.png";
import Typescript from "../assets/images/typescript.png";

const Projects = () => {
  const projects = [
    {
      name: "Funiro",
      image: Funiro,
      hrefLink: "https://funiro-app.vercel.app/",
      githubLink: "https://github.com/AmineElkhalidy/funiro",
      technologies: [NextLight, Tailwind],
    },
    {
      name: "Mamiru",
      image: Mamiru,
      hrefLink: "https://mamirou.vercel.app/",
      githubLink: "https://github.com/SamoudiAnas/Mamirou",
      technologies: [REACT, Redux, Typescript],
    },
    {
      name: "Clipboarding",
      image: Clipboarding,
      hrefLink: "https://clipboarding.vercel.app/",
      githubLink: "https://github.com/AmineElkhalidy/clipboarding",
      technologies: [Html, Tailwind],
    },
    {
      name: "Tasty",
      image: Tasty,
      hrefLink: "https://tasty.vercel.app/",
      githubLink: "https://github.com/AmineElkhalidy/restauranttasty",
      technologies: [Html, Css, Js],
    },
    {
      name: "Omnifood",
      image: Omnifood,
      hrefLink: "https://foodformood.vercel.app/",
      githubLink: "https://github.com/AmineElkhalidy/omnifood",
      technologies: [Html, Css, Js],
    },
    {
      name: "Shoesit",
      image: Shoesit,
      hrefLink: "https://shoesit.vercel.app/",
      githubLink: "https://github.com/AmineElkhalidy/shoesit",
      technologies: [REACT],
    },
    {
      name: "Rotin Niajad",
      image: Rotinniajad,
      hrefLink: "https://rotinniajad.com",
      githubLink: "https://github.com/AmineElkhalidy/rotinniajad",
      technologies: [Html, Tailwind],
    },
    {
      name: "Userhive",
      image: Userhive,
      hrefLink: "https://www.userhive.co/",
      githubLink: "https://github.com/AmineElkhalidy/userhive",
      technologies: [NextLight, Tailwind],
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
        <h2 className="text-black-900 dark:text-white text-2xl text-center font-nav font-semibold mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
          My Work
        </h2>

        {/* Work Container */}
        <div className="grid gap-24 place-items-center lg:gap-12 lg:grid-cols-2 lg:px-0">
          {projects.map((project, index) => (
            <motion.div whileInView={{ opacity: [0, 1] }} key={index}>
              {/* Project container */}
              <div className="max-w-sm sm:max-w-md md:max-w-lg lg:w-full">
                {/* Container */}
                <div className="relative">
                  {/* Image container */}
                  <div className="h-[250px] sm:h-[300px]">
                    <img
                      className="h-full w-full lg:w-full"
                      src={project.image}
                      alt={project.name}
                    />
                  </div>

                  {/* Project description */}
                  <div className="bg-black-900 dark:bg-gray-50 p-5 sm:p-8 lg:p-12">
                    {/* <span className="gradient-text text-sm uppercase tracking-widest font-semibold">
                      Featured Project
                    </span> */}
                    <h2 className="text-white dark:text-black-900 text-xl font-bold mb-4 lg:text-2xl lg:mb-6 2xl:text-3xl">
                      {project.name}
                    </h2>

                    {/* Technologies used */}
                    <div className="w-full flex gap-4  mb-5">
                      {project.technologies.map((tech, index) => (
                        <div className="w-[12%]" key={index}>
                          <img
                            className="w-full h-full"
                            src={tech}
                            alt={tech}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Buttons container */}
                    <div className="flex justify-between lg:text-lg">
                      <a
                        href={project.hrefLink}
                        target="_blank"
                        className="gradient-text group inline-flex items-center gap-1 cursor-pointer text-white"
                      >
                        View Project{" "}
                        <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2 text-orange-400" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="group inline-flex items-center gap-1 text-white dark:text-black-900 cursor-pointer"
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
      </motion.div>
    </section>
  );
};

export default Projects;
