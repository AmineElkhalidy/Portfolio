import React from "react";

// motion
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      className="max-w-6xl mx-auto px-6 h-screen border border-secondary"
      id="skills"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </section>
  );
};

export default Skills;
