import React from "react";

// motion
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="w-screen">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      ></motion.div>
    </section>
  );
};

export default Testimonials;
