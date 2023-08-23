import React from "react";

// motion
import { motion } from "framer-motion";

// Skills data
import { skills } from "../data/data";
import Heading from "../components/atoms/Heading";

const Skills = () => {
  return (
    <section className="pt-[6.25rem] pb-8" id="skills">
      <div className="relative">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-6 lg:max-w-7xl"
        >
          <div>
            {/* Heading */}
            <Heading>Skills & Experiences</Heading>

            {/* Skills & Experience */}
            <motion.div className="flex flex-col space-y-20 md:flex-row md:space-y-0 md:space-x-20">
              {/* Skills */}
              <div className="flex flex-wrap gap-8 justify-center items-center md:w-1/2 md:mx-auto lg:mb-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center items-center"
                  >
                    {/* Image container */}
                    <div className="bg-gray-100 dark:bg-gray-100/20 w-[90px] h-[90px] rounded-full mb-[.75rem] flex justify-center items-center hover:border hover:border-orange-500">
                      <img
                        className="w-[60%]"
                        src={skill.image}
                        alt={skill.name}
                      />
                    </div>

                    {/* skill name */}
                    <p className="text-sm font-medium sm:text-md xl:text-lg text-black-400 dark:text-gray-100">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Experience */}
              <div className="flex flex-col space-y-12 md:w-1/2 md:pt-4">
                {/* 2023 */}
                <div className="flex space-x-12">
                  <p className="gradient-text text-md sm:text-lg lg:text-xl xl:text-2xl font-semibold">
                    2023
                  </p>

                  <div>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-black-900 dark:text-white text-md sm:text-lg lg:text-xl xl:text-2xl font-medium uppercase mb-[.75rem]">
                        Web Developer
                      </h3>
                      <p className="text-black-400 dark:text-gray-300 mb-[.5rem] xl:text-lg">
                        I am Working with an agency and a freelancer on Upwrok
                        as well.
                      </p>
                      <p className="text-sm font-nav dark:text-gray-300 text-black-400 xl:text-base underline">
                        Upwork
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* 2022 */}
                <div className="flex space-x-12">
                  <p className="gradient-text text-md sm:text-lg lg:text-xl xl:text-2xl font-semibold ">
                    2022
                  </p>

                  <div>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-black-900 dark:text-white text-md sm:text-lg lg:text-xl xl:text-2xl font-medium uppercase mb-[.75rem]">
                        Web Developer
                      </h3>
                      <p className="text-black-400 dark:text-gray-300 mb-[.5rem] xl:text-lg">
                        I am working as a freelancer
                      </p>
                      <p className="text-sm font-nav dark:text-gray-300 text-black-400 xl:text-base underline">
                        Freelancer
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* 2021 */}
                <div className="flex space-x-12">
                  <p className="gradient-text text-md sm:text-lg lg:text-xl xl:text-2xl  font-semibold">
                    2021
                  </p>

                  <div>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="ml-1"
                    >
                      <h3 className="text-black-900 dark:text-white text-md sm:text-lg lg:text-xl xl:text-2xl font-medium uppercase mb-[.75rem]">
                        FrontEnd & Alfresco Dev
                      </h3>
                      <p className="text-black-400 dark:text-gray-300  mb-[.5rem] xl:text-lg">
                        I have worked on customising Alfresco (CMS) for a large
                        organization
                      </p>
                      <p className="text-sm font-nav dark:text-gray-300 text-black-400 xl:text-base underline">
                        Prefecture d'arrondissement de Ben M'sick - Casablanca
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
