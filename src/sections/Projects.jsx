import React, { useState } from "react";
import { motion } from "framer-motion";
import Heading from "../components/atoms/Heading";
import { firstRowOfProjects, secondRowOfProjects } from "../data/data";
import Project from "../components/Project";
import ParentContainer from "../components/Container";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="pt-[6rem]" id="projects">
      <ParentContainer>
        <div className="mb-20">
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
                    <Project project={project} />
                  </motion.div>
                ))}

                {showMore &&
                  secondRowOfProjects.map((project, index) => (
                    <motion.div whileInView={{ opacity: [0, 1] }} key={index}>
                      <Project project={project} />
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
      </ParentContainer>
    </section>
  );
};

export default Projects;
