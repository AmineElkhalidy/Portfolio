import React from "react";

// Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// motion
import { motion } from "framer-motion";

// Amine Image
import AmineLightGrey from "../assets/images/Amine-lightgrey.webp";
import Heading from "../components/atoms/Heading";

const About = () => {
  return (
    <section className="pt-[6rem]" id="about">
      <div className="p-container">
        <div>
          {/* Heading */}
          <Heading>Who Am I?</Heading>

          {/* Content Container */}
          <motion.div className="about__container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <p className="about__desc mb-3">
                Hello, My name is{" "}
                <span className=" gradient-text font-medium">
                  Amine Elkhalidy
                </span>
                , I am a{" "}
                <span className="gradient-text font-medium">
                  Web developer{" "}
                </span>
                and I enjoy building stunning web applications for my clients.
              </p>

              <p className="about__desc mb-3">
                I am working as a freelancer on{" "}
                <a
                  href="https://www.upwork.com/"
                  target="_blank"
                  rel="referrer noopener"
                  className="gradient-text font-medium"
                >
                  Upwork
                </a>
                , I've helped many clients to bring their vision to life.
              </p>

              <p className="about__desc mb-2">
                Here are a few technologies I’ve been working with:
              </p>

              {/* Technologies list */}
              <ul className="about__techlist">
                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  HTML5
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  CSS3
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  JavaScript(ES6)
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  React
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  TypeScript
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  TailwindCSS
                </li>
              </ul>
            </motion.div>

            {/* About Img */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="about__img-container"
            >
              <div className="relative group">
                <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] z-50 -translate-x-4 -translate-y-4 duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                  <img
                    className="w-full h-full object-contain"
                    src={AmineLightGrey}
                    alt="Amine Elkhalidy"
                  />
                </div>
                <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] image -z-10 absolute top-0 left-0" />

                <div className="hidden xl:block w-[120px] h-[120px] lg:w-[170px] lg:h-[170px] image rounded-full absolute -top-24 -right-24 opacity-70 -z-20"></div>
                <div className="hidden xl:block w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] image rounded-full absolute -bottom-10 -left-12 opacity-50 z-20"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
