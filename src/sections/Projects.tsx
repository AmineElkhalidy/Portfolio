import { useState } from "react";
import { motion } from "framer-motion";
import Heading from "../components/atoms/Heading";
import { firstRowOfProjects, secondRowOfProjects } from "../data/data";
import Project from "../components/Project";
import ParentContainer from "../components/Container";
import Button from "../components/atoms/Button";

const Projects = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section className="min-h-screen" id="work">
      <ParentContainer>
        <div className="mb-20 pt-[6rem]">
          <Heading>My Latest Work</Heading>

          <div>
            <div className="projects">
              <div className="projects__container">
                {firstRowOfProjects.map((project: any, index: any) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [50, 0], opacity: [0, 0.5, 1] }}
                    transition={{
                      ease: "easeIn",
                      duration: 1,
                      delay: 0.2 * index,
                    }}
                    key={index}
                  >
                    <Project project={project} />
                  </motion.div>
                ))}

                {showMore &&
                  secondRowOfProjects.map((project: any, index: any) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ y: [30, 0], opacity: [0, 0.5, 1] }}
                      transition={{
                        ease: "easeIn",
                        duration: 1,
                        delay: 0.2 * index,
                      }}
                      key={index}
                    >
                      <Project project={project} />
                    </motion.div>
                  ))}
              </div>
            </div>

            {showMore ? (
              <div className="mt-16 text-center">
                <Button
                  styles="inline-block px-10 py-5 gradient text-white cursor-pointer text-lg duration-300 font-nav font-semibold hover:scale-105"
                  onClick={() => setShowMore(false)}
                >
                  Show less
                </Button>
              </div>
            ) : (
              <div className="mt-16 text-center">
                <Button
                  styles="inline-block px-10 py-5 gradient text-white cursor-pointer text-lg duration-300 font-nav font-semibold hover:scale-105"
                  onClick={() => setShowMore(true)}
                >
                  Show more
                </Button>
              </div>
            )}
          </div>
        </div>
      </ParentContainer>
    </section>
  );
};

export default Projects;
