import { motion } from "framer-motion";
import Testimonial from "../components/Testimonial";
import { rowreviews1, rowreviews2, allReviews } from "../data/data";

import Marquee from "react-fast-marquee";

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

        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
          transition={{ duration: 1 }}
          className="md:hidden"
        >
          <Marquee>
            {allReviews.map((review: any, index: any) => (
              <Testimonial
                key={index}
                name={review.name}
                description={review.description}
              />
            ))}
          </Marquee>
        </motion.div>

        {/* Reviews container */}
        <div className="space-y-6 hidden md:block">
          <div>
            <Marquee>
              {rowreviews1.map((review: any, index: any) => (
                <Testimonial
                  key={index}
                  name={review.name}
                  description={review.description}
                />
              ))}
            </Marquee>
          </div>

          <div>
            <Marquee direction="right">
              {rowreviews2.map((review: any, index: any) => (
                <Testimonial
                  key={index}
                  name={review.name}
                  description={review.description}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
