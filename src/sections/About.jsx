import React from "react";

// Icons
import { CheckBadgeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// motion
import { motion } from "framer-motion";

// Amine Image
import Amine from "../assets/images/AmineElkhalidy.jpg";

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
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-20 md:px-8 lg:px-0">
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
                  <CheckBadgeIcon className="w-5 h-5" />
                  PSD/Figma to HTML
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Static website
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Components & Layouts dev
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Pixel-perfect development
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Responsiveness
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Cross-browser compatibility
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Google speed optimization (90+)
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
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
                  <ChevronRightIcon className="w-3 h-3" />
                  HTML
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  CSS
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  JavaScript(ES6)
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  Reactjs
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
          </div>

          {/* About Img */}
          <div className="grid place-items-center">
            <div className="relative group">
              <div className="w-[250px] h-[250px] z-50 -translate-x-4 -translate-y-4 duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                <img
                  className="w-full h-full"
                  src={Amine}
                  alt="Amine preview img"
                />
              </div>
              <div className="w-[250px] h-[250px] image -z-10 absolute top-0 left-0 " />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
