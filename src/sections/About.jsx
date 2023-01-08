import React from "react";

// Icons
import { BsCheck2Circle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

// motion
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 min-h-screen" id="about">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-black-900 text-2xl text-center font-nav font-semibold mb-10 md:text-3xl lg:text-4xl">
          Get to know me
        </h2>

        {/* Content Container */}
        <div className="max-w-3xl mx-auto md:px-8 lg:px-0">
          <div>
            <div>
              <p className="text-grey-400 mb-3 md:text-lg">
                Hello, My name is{" "}
                <span className=" gradient-text font-medium">
                  Amine Elkhalidy
                </span>
                , I am a{" "}
                <span className="gradient-text font-medium">
                  Front-End web developer
                </span>
                , and I enjoy creating things that live on the internet.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="text-grey-400 mb-3 md:text-lg">
                I am working as a freelancer on{" "}
                <a
                  href="https://www.upwork.com/"
                  target="_blank"
                  rel="referrer noopener"
                  className=" text-secondary font-medium"
                >
                  Upwork
                </a>
                , and here are some of the services that I provide for my
                clients:
              </p>

              <ul className=" text-grey-400 grid gap-1 font-nav font-thin mt-1 mb-4  md:grid-cols-2 md:text-[1.05rem]">
                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  PSD/Figma to HTML
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  Static website
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  Components & Layouts dev
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  Pixel-perfect development
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  Responsiveness
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  Cross-browser compatibility
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  Google speed optimization (90+)
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  Mobile-first development
                </li>
              </ul>
            </div>

            {/* Technologies list */}
            <div>
              <p className="text-grey-400 mb-2 md:text-lg">
                Here are a few technologies I’ve been working with recently:
              </p>

              <ul className="max-w-sm grid grid-cols-2 -mt-2 text-grey-400 font-nav font-thin  md:text-[1.05rem]">
                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <MdKeyboardArrowRight />
                  </span>
                  HTML
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <MdKeyboardArrowRight />
                  </span>
                  CSS
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <MdKeyboardArrowRight />
                  </span>
                  JavaScript(ES6)
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <MdKeyboardArrowRight />
                  </span>
                  Reactjs
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <MdKeyboardArrowRight />
                  </span>
                  TypeScript
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-secondary">
                    <MdKeyboardArrowRight />
                  </span>
                  TailwindCSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
