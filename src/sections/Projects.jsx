import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Heading from "../components/atoms/Heading";
import { firstRowOfProjects, secondRowOfProjects } from "../data/data";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="pt-[6rem]" id="projects">
      <div className="p-container mb-20">
        <div>
          {/* Heading */}
          <Heading>My Latest Work</Heading>

          {/* Work Container */}
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.75 }}
          >
            <div className="projects">
              <div className="projects__container">
                {firstRowOfProjects.map((project, index) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.75 }}
                    key={index}
                  >
                    {/* Project container */}
                    <div className="project__container">
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
                                  className="w-full h-full rounded-full"
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
                      <div className="project__container">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
