import React from "react";

// motion
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 h-screen" id="work">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-2xl text-center font-nav font-semibold mb-12 select-none md:text-3xl lg:text-4xl">
          My Work
        </h2>

        {/* Work list */}
        <div></div>
      </motion.div>
    </section>
  );
};

export default Projects;
