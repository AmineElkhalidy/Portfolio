import { motion } from "framer-motion";
import Testimonial from "../components/Testimonial";
import { rowreviews1, rowreviews2, allReviews } from "../data/data";

import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <section
      className=" bg-black-900 pt-[6.2rem] pb-8 flex items-center justify-center"
      id="testimonials"
    >
      <div>
        <h2 className="text-white text-3xl text-center font-nav font-bold mb-16 sm:text-4xl md:text-5xl">
          My Clients Reviews
        </h2>

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

        <div className="space-y-6 hidden md:block">
          <div>
            <Marquee className="z-10">
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
            <Marquee direction="right" className="z-10">
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
