import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Heading from "../components/atoms/Heading";
import Project from "../components/Project";
import ParentContainer from "../components/Container";
import Button from "../components/atoms/Button";
import { client } from "@/client";

const Projects = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'works' && !(_id in path('drafts.**'))]";
    client.fetch(query).then((data) => setWorks(data));
  }, []);

  return (
    <section
      className="h-full flex items-center justify-center mt-32"
      id="work"
    >
      <ParentContainer>
        <div className="mb-20">
          <Heading>My Latest Work</Heading>

          <div>
            <div className="projects">
              <div className="projects__container">
                {works.map((project: any, index: any) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [50, 0], opacity: [0, 0.5, 1] }}
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

                {/* {showMore &&
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
                  ))} */}
              </div>
            </div>

            {/* {showMore ? (
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
            )} */}
          </div>
        </div>
      </ParentContainer>
    </section>
  );
};

export default Projects;
