import React from "react";

// motion
import { motion } from "framer-motion";

// Testimonial
import Testimonial from "../components/Testimonial";

// Splide
import Marquee from "react-fast-marquee";

// Data
import { rowreviews1, rowreviews2, allReviews } from "../data/data";
import Heading from "../components/atoms/Heading";

const Testimonials = () => {
  return (
    <section
      className="lg:h-screen bg-black-900 dark:bg-white pt-[6.2rem] pb-8"
      id="feedbacks"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <h2 className="text-white dark:text-black-900 text-2xl text-center font-nav font-bold mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
          My Clients Reviews
        </h2>

        {/* All reviews */}
        <div className="h-full w-full flex justify-center items-center">
          <Marquee className="overflow-hidden" pauseOnHover={true}>
            {allReviews.map((review) => (
              <Testimonial
                key={review.id}
                name={review.name}
                description={review.description}
              />
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
