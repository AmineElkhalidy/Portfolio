import React from "react";

// motion
import { motion } from "framer-motion";

// Typeit effect
import TypeIt from "typeit-react";

// Icons
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Fiverr from "../assets/svg/fiverr.svg";
import Upwork from "../assets/svg/upwork.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import Github from "../assets/svg/github.svg";

// CV
import CV from "../assets/pdf/Amine-Elkhalidy.pdf";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 xl:px-0">
      {/* Content Container with animation */}
      <div className="relative mt-40 md:mt-32 lg:mt-28">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
          className="flex items-center h-full md:pl-16 "
        >
          <div>
            {/* Introduction */}
            <h1 className=" text-black-900 text-[2.5rem]  leading-none font-bold mb-3 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              Hello,
              <br />
              I am Amine,
              <br />
              <span className="gradient-text">Web developer</span>
            </h1>

            {/* Profession */}
            <p className="text-grey-400 font-medium text-xl font-nav mb-10 md:text-xl lg:text-2xl">
              <TypeIt
                options={{
                  afterComplete: function (instance) {
                    instance.destroy();
                  },
                }}
              >
                Front-End ~ React developer
              </TypeIt>
            </p>

            {/* Contact me button */}

            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-12">
              <div className="relative">
                <a
                  className="inline-block px-[31px] py-5 bg-black-900 text-white cursor-pointer text-lg duration-300 font-nav font-semibold z-10 hover:translate-x-2 hover:translate-y-2"
                  href="#contact"
                >
                  Contact me
                </a>

                <span className="contact-btn absolute -z-10 top-2 left-2 px-[4.95rem] py-[2.15rem] bg-red-500" />
              </div>

              <div>
                <a
                  className="group inline-flex gap-3 items-center py-5 text-black-900  cursor-pointer text-lg duration-300 font-nav font-semibold"
                  href={CV}
                  download="Amine Elkhalidy"
                  rel="noopener noreferrer"
                >
                  Download CV{" "}
                  <ArrowRightIcon className="w-5 duration-300 group-hover:translate-x-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social container */}
        <motion.div
          whileInView={{ y: [100, 0] }}
          transition={{ delay: 0.1 }}
          className="hidden md:block absolute -bottom-8"
        >
          <div className="bg-transparent flex flex-col gap-6 justify-center items-center">
            <a
              className="cursor-pointer hover:-translate-y-1 duration-200"
              href="https://www.upwork.com/freelancers/~01f55a2d4b119d3119"
              target="_blank"
            >
              <img src={Upwork} className="w-7 h-full" alt="" />
            </a>

            <a
              className="cursor-pointer hover:-translate-y-1 duration-200"
              href="https://www.fiverr.com/amineelkhalidy"
              target="_blank"
            >
              <img src={Fiverr} className="w-8 h-full" alt="" />
            </a>

            <a
              className="cursor-pointer hover:-translate-y-1 duration-200"
              href="https://github.com/AmineElkhalidy"
              target="_blank"
            >
              <img src={Github} className="w-[1.9rem] -ml-1 h-full" alt="" />
            </a>

            <a
              className="cursor-pointer hover:-translate-y-1 duration-200 "
              href="https://www.linkedin.com/in/amine-elkhalidy/"
              target="_blank"
            >
              <img src={Linkedin} className="w-[1.4rem]" alt="" />
            </a>

            <span className="inline-block w-[.05rem] h-20 bg-black-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
