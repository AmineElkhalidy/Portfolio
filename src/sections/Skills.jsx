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
        <div className="container">
          <div>
            {/* Heading */}
            <Heading>Skills & Experiences</Heading>

            {/* Skills & Experience */}
            <div className="skillsexperience__container">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: [-100, 0], opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="skills__container"
              >
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
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: [100, 0], opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="experience__container"
              >
                {/* 2023 */}
                <div className="experience__info">
                  <p className="experience__year">2023</p>

                  <div>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="experience__profession">Freelancer</h3>
                      <p className="experience__desc">
                        I am working as a freelancer
                      </p>
                      <p className="experience__company">Upwork || Fiverr</p>
                    </motion.div>
                  </div>
                </div>

                {/* 2022 */}
                <div className="experience__info">
                  <p className="experience__year">2022</p>

                  <div>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="experience__profession">Freelancer</h3>
                      <p className="experience__desc">
                        I am working as a freelancer on Upwork
                      </p>
                      <p className="experience__company">Upwork</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
