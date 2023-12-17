import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

// Components
import Heading from "../components/atoms/Heading";
import { techs, projects } from "../data/data";

const {
  Html,
  Css,
  JavaScript,
  ReactImg,
  NextLight,
  Node,
  Bootstrap,
  Sass,
  Tailwind,
  MUI,
  MongoDB,
  TypeScript,
  Redux,
  Git,
  Chakra,
  Wordpress,
} = techs;

const {
  Mamiru,
  Tasty,
  Omnifood,
  Clipboarding,
  Shoesit,
  Rotinniajad,
  Funiro,
  Userhive,
  EcoCentar,
  GradesBar,
  Shoes,
  Shoppy,
  FixClinic,
  BodyReset,
  Railflow,
  Cars,
  Veezen,
  Shippium,
} = projects;

const firstRowOfProjects = [
  {
    name: "Veezen",
    image: Veezen,
    hrefLink: "https://veezen-official.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/veezen",
    technologies: [NextLight, Tailwind, Git],
  },
  {
    name: "Shippium",
    image: Shippium,
    hrefLink: "https://veezen-official.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/veezen",
    technologies: [ReactImg, Tailwind, TypeScript, Git],
  },
  {
    name: "Cars",
    image: Cars,
    hrefLink: "https://cars-exhibition.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [NextLight, Tailwind, MongoDB, Git],
  },
  {
    name: "Fix Clinic",
    image: FixClinic,
    hrefLink: "https://thefixclinic.com/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [Html, Css, JavaScript, Bootstrap, Git],
  },
];
const secondRowOfProjects = [
  {
    name: "Mindset Body Reset",
    image: BodyReset,
    hrefLink: "https://mindsetbodyreset.com/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [Html, Css, JavaScript, Bootstrap, Git],
  },
  {
    name: "Railflow",
    image: Railflow,
    hrefLink: "https://railflow-website-v2.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/railflow",
    technologies: [NextLight, Tailwind, Node, Git],
  },
  {
    name: "Shoppy(Under construction)",
    image: Shoppy,
    hrefLink: "https://e-shoppy.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/e-commerce",
    technologies: [ReactImg, Redux, Bootstrap, Css, Node],
  },
  {
    name: "Shoesit",
    image: Shoes,
    hrefLink: "https://shoesit.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/shoesit",
    technologies: [NextLight, ReactImg, Tailwind, Redux],
  },
  {
    name: "Mamiru",
    image: Mamiru,
    hrefLink: "https://mamirou.vercel.app/",
    githubLink: "https://github.com/SamoudiAnas/Mamirou",
    technologies: [ReactImg, Redux, TypeScript, Git],
  },
  {
    name: "GradesBar",
    image: GradesBar,
    hrefLink: "#",
    githubLink: "https://github.com/AmineElkhalidy/",
    technologies: [MUI, Tailwind, ReactImg, Git],
  },
  {
    name: "Eco-Centar",
    image: EcoCentar,
    hrefLink: "https://eco-centar.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/EcoCentar.git",
    technologies: [Html, Tailwind, Git],
  },

  {
    name: "Rotin Niajad",
    image: Rotinniajad,
    hrefLink: "https://rotinniajad.netlify.app",
    githubLink: "https://github.com/AmineElkhalidy/rotinniajad",
    technologies: [NextLight, Tailwind, Git],
  },
  {
    name: "Userhive",
    image: Userhive,
    hrefLink: "https://www.userhive.co/",
    githubLink: "https://github.com/AmineElkhalidy/userhive",
    technologies: [NextLight, Tailwind, Git],
  },
  {
    name: "Funiro",
    image: Funiro,
    hrefLink: "https://funiro-app.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/funiro",
    technologies: [NextLight, Tailwind, Git],
  },
  {
    name: "Clipboarding",
    image: Clipboarding,
    hrefLink: "https://clipboarding.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/clipboarding",
    technologies: [Html, Tailwind, Git],
  },
  {
    name: "Tasty",
    image: Tasty,
    hrefLink: "https://tasty.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/restauranttasty",
    technologies: [Html, Css, JavaScript, Git],
  },
  {
    name: "Omnifood",
    image: Omnifood,
    hrefLink: "https://foodformood.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/omnifood",
    technologies: [Html, Css, JavaScript, Git],
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="pt-[6rem]" id="projects">
      <div className="p-container">
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
