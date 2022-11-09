import React from "react";

// Icons
import { SiUpwork } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

// motion
import { motion } from "framer-motion";

// Testimonial
import Testimonial from "../components/Testimonial";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/splide/dist/css/splide.min.css";

// Data
const rowreviews1 = [
  {
    id: "r1",
    name: "Mossaab Talbi",
    username: "@Mossaab",
    description:
      "Amine is one of the best and skilled developers I have known, he did an amazing job with my project, I will definitely work with him again",
    platform: SiUpwork,
  },
  {
    id: "r2",
    name: "Hi Ba",
    username: "@Hiba",
    description:
      "Amine is a great developer who helped me greatly in a very short amount of time and done all the work I required, I would definitely work with him again!",
    platform: SiUpwork,
  },
  {
    id: "r3",
    name: "Sacreed Groves",
    username: "@Grooves",
    description: "Amine did an amazing job with my react project",
    platform: BsWhatsapp,
  },
  {
    id: "r4",
    name: "Aaron Sangerson",
    username: "@Aaron",
    description:
      "Amine made significant changes to an existing react project, integrating additional functionality. I can highly recommend him as a frontend dev",
    platform: SiUpwork,
  },
];

const rowreviews2 = [
  {
    id: "r5",
    name: "Tireson Emma",
    username: "@EmmaTey",
    description: "Amine is a skilled developer that deliver quality work.",
    platform: BsWhatsapp,
  },
  {
    id: "r6",
    name: "Rachid Chatoui",
    username: "@Chatouirachid",
    description:
      "Amine helped me a lot with defining the content and layout of my product landing page, definitely recommended!",
    platform: BsWhatsapp,
  },
  {
    id: "r7",
    name: "Et-thamry Ashraf",
    username: "@Et-Achraf",
    description:
      "A best friend and best developer, helped me to build my own website and launch it to the internet",
    platform: BsWhatsapp,
  },
  {
    id: "r8",
    name: "Anas Samoudi",
    username: "@Unlimiteddez",
    description: "Great developer, with sharpen eye on quality check.",
    platform: BsWhatsapp,
  },
];

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

        <div className="flex flex-col space-y-6">
          {/* Row 1 */}
          <Splide
            className="w-full"
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
            className="w-full"
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
