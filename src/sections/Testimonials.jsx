import React from "react";
import { motion } from "framer-motion";
import Testimonial from "../components/Testimonial";
import { rowreviews1, rowreviews2, allReviews } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const Testimonials = () => {
  return (
    <section
      className=" bg-black-900 dark:bg-white pt-[6.2rem] pb-8"
      id="testimonials"
    >
      <div>
        {/* Heading */}
        <motion.h2
          whileInView={{ y: [-20, 0] }}
          className="text-white dark:text-black-900 text-3xl text-center font-nav font-bold mb-16 sm:text-4xl md:text-5xl"
        >
          My Clients Reviews
        </motion.h2>

        {/* All reviews */}

        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="md:hidden"
        >
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
        </motion.div>

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
              {rowreviews1.map((review, index) => (
                <SplideSlide key={index}>
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
              {rowreviews2.map((review, index) => (
                <SplideSlide key={index}>
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
      </div>
    </section>
  );
};

export default Testimonials;
