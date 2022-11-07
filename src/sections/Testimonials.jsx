import React from "react";

// Icons
import { SiUpwork } from "react-icons/si";

// motion
import { motion } from "framer-motion";

// Testimonial
import Testimonial from "../components/Testimonial";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/splide/dist/css/splide.min.css";

// Data
const reviews = [
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
    platform: SiUpwork,
  },
  {
    id: "r4",
    name: "Aaron Sangerson",
    username: "@Aaron",
    description:
      "Amine made significant changes to an existing react project, integrating additional functionality. I can highly recommend him as a frontend dev",
    platform: SiUpwork,
  },
  {
    id: "r5",
    name: "Tireson Emma",
    username: "@EmmaTey",
    description:
      "Amine is a skilled developer that deliver work with great quality",
    platform: SiUpwork,
  },
  {
    id: "r6",
    name: "Rachid Chatoui",
    username: "@Chatouirachid",
    description:
      "Amine helped me a lot with defining the content and layout of my product landing page, definitely recommended!",
    platform: SiUpwork,
  },
  {
    id: "r7",
    name: "Et-thamry Ashraf",
    username: "@Et-Achraf",
    description:
      "A best friend and best developer, helped me to build my own website and launch it to the internet",
    platform: SiUpwork,
  },
];

const Testimonials = () => {
  return (
    <section className="w-screen">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <Splide>
          <SplideSlide>
            {reviews.map((review) => (
              <Testimonial
                key={review.id}
                name={review.name}
                username={review.username}
                description={review.description}
                Platform={review.platform}
              />
            ))}
          </SplideSlide>
        </Splide>
      </motion.div>
    </section>
  );
};

export default Testimonials;
