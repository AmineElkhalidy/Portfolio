import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Heading from "../components/atoms/Heading";
import Project from "../components/Project";
import ParentContainer from "../components/Container";
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
          <Heading>Selected Work</Heading>

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
        </div>
      </ParentContainer>
    </section>
  );
};

export default Projects;
