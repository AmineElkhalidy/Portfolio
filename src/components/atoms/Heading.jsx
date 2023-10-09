import React from "react";
import { motion } from "framer-motion";

const Heading = ({ children, className }) => {
  return (
    <motion.h2
      whileInView={{ y: [-20, 0] }}
      className={`heading  ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
