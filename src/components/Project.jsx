import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "./atoms/Link";

const Project = ({ project }) => {
  return (
    <div className="project__container">
      {/* Container */}
      <div className="relative">
        {/* Image container */}
        <div className="h-[250px] sm:h-[300px]">
          <img
            className="h-full w-full border-2 border-black-900 object-cover dark:border-white lg:w-full cursor-pointer"
            src={project.image}
            alt={project.name}
          />
        </div>

        {/* Project description */}
        <div className="bg-black-900 dark:bg-gray-50 p-5 sm:p-8 lg:p-12">
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
            <Link
              href={project.hrefLink}
              target="_blank"
              className="p-3 sm:px-5 sm:py-3 gradient group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg cursor-pointer text-white font-semibold"
            >
              {" "}
              View Project{" "}
              <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2 text-white " />
            </Link>

            <Link
              href={project.githubLink}
              target="_blank"
              className="group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg text-white dark:text-black-900 cursor-pointer"
            >
              Github Repo{" "}
              <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
