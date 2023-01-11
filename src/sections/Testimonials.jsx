import React from "react";

// motion
import { motion } from "framer-motion";

// Testimonial
import Testimonial from "../components/Testimonial";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/splide/dist/css/splide.min.css";

// Data
import { rowreviews1, rowreviews2, allReviews } from "../data/data";

const Testimonials = () => {
  return (
    <section className="h-screen bg-black-900" id="feedbacks">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="h-full w-full"
      >
        {/* Heading */}
        <h2 className="text-white text-2xl text-center font-nav font-semibold mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
          Testimonials
        </h2>
      </motion.div>
    </section>
  );
};

export default Testimonials;
