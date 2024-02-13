import React from "react";
import { motion } from "framer-motion";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
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
