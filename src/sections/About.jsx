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
    <section className="pt-[6.25rem]" id="about">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div>
          {/* Heading */}
          <Heading>Who Am I?</Heading>

          {/* Content Container */}
          <motion.div className="grid gap-20 md:gap-0 md:grid-cols-2 lg:pl-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <div>
                <p className="text-grey-500 dark:text-gray-200 mb-3 md:text-lg lg:text-xl">
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
              </div>

              {/* Services */}
              <div>
                <p className="text-grey-500 dark:text-gray-200 mb-3 md:text-lg lg:text-xl">
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
              </div>

              {/* Technologies list */}
              <div>
                <p className="text-grey-500 dark:text-gray-200 mb-2 md:text-lg lg:text-xl">
                  Here are a few technologies I’ve been working with:
                </p>

                <ul className="max-w-sm grid grid-cols-2 text-grey-400 dark:text-gray-300  font-nav font-thin  md:text-[1.05rem] lg:text-lg">
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
              </div>
            </motion.div>

            {/* About Img */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="grid place-items-center lg:mt-6"
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

                <div className="hidden xl:block w-[120px] h-[120px] lg:w-[170px] lg:h-[170px] image rounded-full absolute -top-24 -right-24 opacity-70"></div>
                <div className="hidden xl:block w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] image rounded-full absolute -bottom-10 -left-12 opacity-50"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
