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
import { rowreviews1, rowreviews2 } from "../data/data";

const Testimonials = () => {
  return (
    <section className="max-w-4xl mx-auto" id="feedbacks">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-2xl text-center font-nav font-semibold mb-10 md:text-3xl lg:text-4xl">
          Clients Feedbacks
        </h2>

        <div className="flex flex-col space-y-4">
          {/* Row 1 */}
          <Splide
            className="w-full h-full"
            options={{
              type: "loop",
              drag: "free",
              gap: "33rem",
              arrows: false,
              pagination: false,
              perPage: 3,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: 2,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {rowreviews1.map((review) => (
              <SplideSlide key={review.id}>
                <Testimonial
                  name={review.name}
                  username={review.username}
                  description={review.description}
                  Platform={review.platform}
                />
              </SplideSlide>
            ))}
          </Splide>

          {/* Row 2 */}
          <Splide
            className="w-full h-full"
            options={{
              type: "loop",
              drag: "free",
              gap: "33rem",
              arrows: false,
              pagination: false,
              perPage: 3,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: -2,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {rowreviews2.map((review) => (
              <SplideSlide key={review.id}>
                <Testimonial
                  name={review.name}
                  username={review.username}
                  description={review.description}
                  Platform={review.platform}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
