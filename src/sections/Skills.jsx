import React from "react";

// motion
import { motion } from "framer-motion";

// Skills data
import { skills } from "../data/data";

const Skills = () => {
  return (
    <section className="w-full h-full" id="skills">
      <div className="relative mb-10">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-6 lg:max-w-7xl"
        >
          <div className="pt-24">
            {/* Heading */}
            <h2 className="text-black-900 dark:text-white text-2xl text-center font-nav font-semibold mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
              Skills & Experience
            </h2>

            {/* Skills & Experience */}
            <motion.div className="flex flex-col space-y-20 md:flex-row md:space-y-0">
              {/* Skills */}
              <div className="flex flex-wrap gap-10 justify-center items-center md:w-1/2 md:max-w-sm md:mx-auto lg:mb-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center items-center"
                  >
                    {/* Image container */}
                    <div className="bg-gray-100 w-[90px] h-[90px] rounded-full mb-[.75rem] flex justify-center items-center hover:border hover:border-orange-500">
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
                      <h4 className="text-black-900 dark:text-white text-md sm:text-lg lg:text-xl xl:text-2xl font-medium uppercase mb-[.75rem]">
                        FrontEnd Developer
                      </h4>
                      <p className="text-black-400 dark:text-gray-300 mb-[.5rem] xl:text-lg">
                        I am working as a freelancer on Upwrok
                      </p>
                      <p className="text-sm font-nav dark:text-gray-300 text-black-400 xl:text-base">
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
                      <h4 className="text-black-900 dark:text-white text-md sm:text-lg lg:text-xl xl:text-2xl font-medium uppercase mb-[.75rem]">
                        FrontEnd Developer
                      </h4>
                      <p className="text-black-400 dark:text-gray-300 mb-[.5rem] xl:text-lg">
                        I am working as a freelancer
                      </p>
                      <p className="text-sm font-nav dark:text-gray-300 text-black-400 xl:text-base">
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
                      <h4 className="text-black-900 dark:text-white text-md sm:text-lg lg:text-xl xl:text-2xl font-medium uppercase mb-[.75rem]">
                        FrontEnd & Alfresco Dev
                      </h4>
                      <p className="text-black-400 dark:text-gray-300  mb-[.5rem] xl:text-lg">
                        I have worked on customising Alfresco (CMS) for a large
                        organization
                      </p>
                      <p className="text-sm font-nav dark:text-gray-300 text-black-400 xl:text-base">
                        Prefecture d'arrondissement de Ben M'sick
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* 2020 */}
                <div className="flex space-x-12">
                  <p className="gradient-text text-md sm:text-lg lg:text-xl xl:text-2xl font-semibold">
                    2020
                  </p>

                  <div>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="text-black-900 dark:text-white text-md sm:text-lg lg:text-xl xl:text-2xl font-medium uppercase mb-[.75rem]">
                        FrontEnd Developer
                      </h4>
                      <p className="text-grey-400 dark:text-gray-300 mb-[.5rem] xl:text-lg">
                        I have developped many frontend projects
                      </p>
                      <p className="text-sm font-nav dark:text-gray-300 text-grey-400 xl:text-base">
                        By myslef
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
