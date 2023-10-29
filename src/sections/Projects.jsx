import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import Mamiru from "../assets/images/projects/mamiro.webp";
import Tasty from "../assets/images/projects/tasty.webp";
import Omnifood from "../assets/images/projects/omnifood.webp";
import Clipboarding from "../assets/images/projects/clipboarding.webp";
import Shoesit from "../assets/images/projects/shoesit.webp";
import Rotinniajad from "../assets/images/projects/rotinniajad.webp";
import Funiro from "../assets/images/projects/funiro.webp";
import Userhive from "../assets/images/projects/userhive.webp";
import AirTransfer from "../assets/images/projects/airtransfer.webp";
import AirTransferY from "../assets/images/projects/airtransfer-yellow.webp";
import EcoCentar from "../assets/images/projects/Eco-centar.webp";
import Miriam from "../assets/images/projects/miriamsimon.webp";
import GradesBar from "../assets/images/projects/dashboard.webp";
import Shoes from "../assets/images/projects/shoes.webp";
import Shoppy from "../assets/images/projects/shoppy.webp";
import FixClinic from "../assets/images/projects/fixclinic.webp";
import BodyReset from "../assets/images/projects/bodyreset.webp";
import Railflow from "../assets/images/projects/railflow.webp";
import Noormedia from "../assets/images/projects/noormedia.webp";
import Cars from "../assets/images/projects/cars.webp";

// Images
import Html from "../assets/images/html.webp";
import Css from "../assets/images/css.webp";
import Js from "../assets/images/javascript.webp";
import REACT from "../assets/images/react.webp";
import Next from "../assets/images/next.webp";
import NextLight from "../assets/images/nextjs-light.webp";
import Tailwind from "../assets/images/tailwind.webp";
import Redux from "../assets/images/redux.webp";
import Node from "../assets/images/node.webp";
import Sass from "../assets/images/sass.webp";
import Typescript from "../assets/images/typescript.webp";
import Wordpress from "../assets/images/wordpress.webp";
import MUI from "../assets/images/mui.webp";
import Bootstrap from "../assets/images/bootstrap.webp";
import MongoDB from "../assets/images/mongodb.webp";

// Components
import Heading from "../components/atoms/Heading";

const firstRowOfProjects = [
  {
    name: "Cars",
    image: Cars,
    hrefLink: "https://cars-exhibition.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [NextLight, Tailwind, MongoDB],
  },
  {
    name: "Fix Clinic",
    image: FixClinic,
    hrefLink: "https://thefixclinic.com/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [Html, Css, Js, Bootstrap],
  },
  {
    name: "Mindset Body Reset",
    image: BodyReset,
    hrefLink: "https://mindsetbodyreset.com/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [Html, Css, Js, Bootstrap],
  },
  {
    name: "Railflow",
    image: Railflow,
    hrefLink: "https://railflow-website-v2.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/railflow",
    technologies: [NextLight, Tailwind, Node],
  },
];

const secondRowOfProjects = [
  // {
  //   name: "Noormedia",
  //   image: Noormedia,
  //   hrefLink: "https://noormedia-agency.vercel.app/",
  //   githubLink: "https://github.com/AmineElkhalidy/noormedia",
  //   technologies: [Html, Css, Js],
  // },
  {
    name: "Shoppy(Under construction)",
    image: Shoppy,
    hrefLink: "https://e-shoppy.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/e-commerce",
    technologies: [REACT, Redux, Bootstrap, Node],
  },
  {
    name: "Shoesit",
    image: Shoes,
    hrefLink: "https://shoesit.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/shoesit",
    technologies: [NextLight, REACT, Tailwind, Redux],
  },

  // {
  //   name: "Miriam Simon Retail",
  //   image: Miriam,
  //   hrefLink: "https://miriamsimon.ie/",
  //   githubLink: "https://github.com/AmineElkhalidy",
  //   technologies: [Wordpress],
  // },
  // {
  //   name: "IPTV Premium",
  //   image: IPTVPREMIUM,
  //   hrefLink: "https://iptvsmarterspremium.net/",
  //   githubLink: "https://github.com/AmineElkhalidy",
  //   technologies: [Wordpress],
  // },
  // {
  //   name: "IPTV Pole",
  //   image: Iptv,
  //   hrefLink: "https://iptvpole.com/",
  //   githubLink: "https://github.com/AmineElkhalidy",
  //   technologies: [Wordpress],
  // },
  // {
  //   name: "Digital Pole",
  //   image: DigitalPole,
  //   hrefLink: "https://digitalpole.shop",
  //   githubLink: "https://github.com/AmineElkhalidy/",
  //   technologies: [Wordpress],
  // },
  {
    name: "Mamiru",
    image: Mamiru,
    hrefLink: "https://mamirou.vercel.app/",
    githubLink: "https://github.com/SamoudiAnas/Mamirou",
    technologies: [REACT, Redux, Typescript],
  },
  {
    name: "GradesBar",
    image: GradesBar,
    hrefLink: "#",
    githubLink: "https://github.com/AmineElkhalidy/",
    technologies: [MUI, Tailwind, REACT],
  },
  {
    name: "Eco-Centar",
    image: EcoCentar,
    hrefLink: "https://eco-centar.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/EcoCentar.git",
    technologies: [Html, Tailwind],
  },

  {
    name: "Rotin Niajad",
    image: Rotinniajad,
    hrefLink: "https://rotinniajad.netlify.app",
    githubLink: "https://github.com/AmineElkhalidy/rotinniajad",
    technologies: [NextLight, Tailwind],
  },
  {
    name: "Userhive",
    image: Userhive,
    hrefLink: "https://www.userhive.co/",
    githubLink: "https://github.com/AmineElkhalidy/userhive",
    technologies: [NextLight, Tailwind],
  },
  {
    name: "Funiro",
    image: Funiro,
    hrefLink: "https://funiro-app.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/funiro",
    technologies: [NextLight, Tailwind],
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
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="pt-[6.25rem]" id="projects">
      <div className="container min-h-screen">
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
