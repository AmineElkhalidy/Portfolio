import React, { useState } from "react";

// Icon
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// motion
import { motion } from "framer-motion";

// Data
import Mamiru from "../assets/images/projects/mamiro.webp";
import Tasty from "../assets/images/projects/tasty.webp";
import Omnifood from "../assets/images/projects/omnifood.webp";
import Clipboarding from "../assets/images/projects/clipboarding.webp";
import Shoesit from "../assets/images/projects/shoesit.webp";
import Rotinniajad from "../assets/images/projects/rotinniajad.webp";
import Funiro from "../assets/images/projects/funiro.webp";
import Userhive from "../assets/images/projects/userhive.webp";

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
import Sass from "../assets/images/sass.png";
import Typescript from "../assets/images/typescript.png";

const firstRowOfProjects = [
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

const secondRowOfProjects = [
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
    technologies: [REACT, Sass],
  },
];

const Projects = () => {
  // Show projects state
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="pt-[6.25rem]" id="work">
      <div className="max-w-6xl mx-auto px-6 min-h-screen">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <h2 className="text-black-900 dark:text-white text-2xl text-center font-nav font-bold mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
            My Work
          </h2>

          {/* Work Container */}
          <div className="w-full h-full">
            <div className="grid gap-8 place-items-center lg:gap-10 lg:grid-cols-2 lg:px-0">
              {firstRowOfProjects.map((project, index) => (
                <motion.div whileInView={{ opacity: [0, 1] }} key={index}>
                  {/* Project container */}
                  <div className="max-w-sm sm:max-w-md md:max-w-lg lg:w-full">
                    {/* Container */}
                    <div className="relative">
                      {/* Image container */}
                      <div className="h-[250px] sm:h-[300px]">
                        <img
                          className="h-full w-full border-2 border-black-900 object-cover dark:border-white lg:w-full"
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
                                className="w-full h-full "
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
                            className="p-3 sm:px-5 sm:py-3 gradient group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg cursor-pointer text-white font-semibold"
                          >
                            View Project{" "}
                            <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2 text-white " />
                          </a>

                          <a
                            href={project.githubLink}
                            target="_blank"
                            className="group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg text-white dark:text-black-900 cursor-pointer"
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

              {showMore &&
                secondRowOfProjects.map((project, index) => (
                  <motion.div whileInView={{ opacity: [0, 1] }} key={index}>
                    {/* Project container */}
                    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:w-full">
                      {/* Container */}
                      <div className="relative">
                        {/* Image container */}
                        <div className="h-[250px] sm:h-[300px]">
                          <img
                            className="h-full w-full border-2 border-black-900 object-cover dark:border-white lg:w-full"
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
                                  className="w-full h-full "
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
                              className="p-3 sm:px-5 sm:py-3 gradient group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg cursor-pointer text-white font-semibold"
                            >
                              View Project{" "}
                              <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2 text-white " />
                            </a>

                            <a
                              href={project.githubLink}
                              target="_blank"
                              className="group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg text-white dark:text-black-900 cursor-pointer"
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

            {showMore ? (
              <div className="mt-16 text-center">
                <button
                  className="inline-block px-10 py-5 gradient text-white cursor-pointer text-lg duration-300 font-nav font-semibold hover:scale-105"
                  onClick={() => setShowMore(false)}
                >
                  Show less
                </button>
              </div>
            ) : (
              <div className="mt-16 text-center">
                <button
                  className="inline-block px-10 py-5 gradient text-white cursor-pointer text-lg duration-300 font-nav font-semibold hover:scale-105"
                  onClick={() => setShowMore(true)}
                >
                  Show more
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
