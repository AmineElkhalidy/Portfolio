import React from "react";
import { motion } from "framer-motion";

const Heading = ({ children, className }) => {
  return (
    <motion.h2
      whileInView={{ y: [-20, 0] }}
      className={`text-black-900 dark:text-white text-2xl text-center font-nav font-bold mb-12 lg:mb-16 sm:text-3xl md:text-4xl lg:text-5xl  ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
