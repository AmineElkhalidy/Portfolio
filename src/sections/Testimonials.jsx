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
    <section
      className="min-h-screen hidden lg:block bg-black-900"
      id="feedbacks"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-white text-2xl text-center font-nav font-semibold mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
          Testimonials
        </h2>

        {/* Reviews container */}
        <div className="space-y-3  mx-auto flex flex-col">
          {/* Row 1 */}
          <div>
            <Splide
              options={{
                type: "loop",
                drag: "free",
                arrows: false,
                pagination: false,
                perPage: 2,
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
          </div>

          {/* Row 2 */}
          <div>
            <Splide
              options={{
                type: "loop",
                drag: "free",
                arrows: false,
                pagination: false,
                perPage: 2,
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
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
