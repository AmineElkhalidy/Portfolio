import React from "react";
import { motion } from "framer-motion";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ y: [20, 0], opacity: [0, 0.5, 1] }}
      transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      layout
      className={`heading  ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
