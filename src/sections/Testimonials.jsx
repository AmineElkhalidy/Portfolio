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
    <section
      className="md:min-h-screen bg-black-900 dark:bg-white"
      id="feedbacks"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="h-full w-full pt-24 pb-12 mb-12"
      >
        {/* Heading */}
        <h2 className="text-white dark:text-black-900 text-2xl text-center font-nav font-semibold mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
          Client Testimonials
        </h2>

        {/* All reviews */}
        <div className="md:hidden">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              arrows: false,
              pagination: false,
              perPage: 1,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: 1.5,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {allReviews.map((review, index) => (
              <SplideSlide key={index}>
                <Testimonial
                  name={review.name}
                  description={review.description}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Reviews container */}
        <div className="space-y-4 hidden md:block">
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
