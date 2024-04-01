import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Project from "../components/Project";
import ParentContainer from "../components/Container";
import { client } from "@/client";

const Projects = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'works' && !(_id in path('drafts.**'))]";
    client.fetch(query).then((data) => setWorks(data));
  }, []);

  return (
    <section
      className="h-full flex items-center justify-center py-24 sm:py-32"
      id="work"
    >
      <ParentContainer>
        <div className="mb-16 mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight gradient-text">
            Projects
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Selected Work
          </p>
        </div>

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
            </div>
          </div>
        </div>
      </ParentContainer>
    </section>
  );
};

export default Projects;
