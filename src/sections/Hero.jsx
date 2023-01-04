import React from "react";

// motion
import { motion } from "framer-motion";

// Typeit effect
import TypeIt from "typeit-react";

// Icons
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import Fiverr from "../assets/images/fiverr.svg";

const Hero = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-8 h-screen">
      <div className="w-full h-full">
        {/* Content Container with animation */}
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex items-center h-full md:pl-16 2xl:pt-24"
        >
          <div>
            {/* Introduction */}
            <h1 className="text-slate-300 text-5xl font-semibold mb-4 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              Hello,
              <br />
              I am Amine,
              <br />
              <span className="circled-line">Web developer</span>
            </h1>

            {/* Profession */}
            <p className="text-slate-400 text-lg font-nav mb-10 md:text-xl lg:text-2xl">
              <TypeIt
                options={{
                  afterComplete: function (instance) {
                    instance.destroy();
                  },
                }}
              >
                Front-End developer ~ React developer
              </TypeIt>
            </p>

            {/* Contact me button */}
            <a
              className="px-8 py-4 border text-secondary border-secondary rounded-md cursor-pointer duration-300 font-nav font-medium text-md tracking-widest hover:bg-secondary/20"
              href="#contact"
            >
              Contact me
            </a>
          </div>
        </motion.div>

        {/* Social container */}
        <motion.div
          whileInView={{ y: [100, 0] }}
          transition={{ delay: 0.1 }}
          className="hidden md:block fixed -bottom-1.5"
        >
          <ul className="flex flex-col gap-6 justify-center items-center">
            {/* <li className="hover:-translate-y-1 duration-200">
              <a
                className="text-slate-400 hover:text-secondary"
                href="https://www.facebook.com/amine.elkhalidy.73"
                target="_blank"
              >
                <FiFacebook size={21} />
              </a>
            </li> */}

            <li className="hover:-translate-y-1 duration-200">
              <a
                className="text-slate-400 hover:text-secondary"
                href="https://twitter.com/ElkhalidyAmine"
                target="_blank"
              >
                <FiTwitter size={21} />
              </a>
            </li>

            <li className="hover:-translate-y-1 duration-200">
              <a
                className="text-slate-400 hover:text-secondary"
                href="https://www.linkedin.com/in/amine-elkhalidy/"
                target="_blank"
              >
                <FiLinkedin size={20} />
              </a>
            </li>

            <li className="hover:-translate-y-1 duration-200">
              <a
                className="text-slate-400 hover:text-secondary"
                href="https://github.com/AmineElkhalidy"
                target="_blank"
              >
                <FiGithub size={20} />
              </a>
            </li>

            <a
              className="cursor-pointer hover:-translate-y-1 duration-200 "
              href="https://www.fiverr.com/amineelkhalidy"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="17"
                height="17"
              >
                <g fill="#94a3b8">
                  <path d="M13 13V5H5v-.5C5 3.673 5.673 3 6.5 3H8V0H6.5A4.505 4.505 0 0 0 2 4.5V5H0v3h2v5H0v3h7v-3H5V8h5.028v5H8v3h7v-3h-2z" />
                  <circle cx="11.5" cy="1.5" r="1.5" />
                </g>
              </svg>
            </a>

            <li className="hover:-translate-y-1 duration-200">
              <a
                className="text-slate-400 hover:text-secondary"
                href="https://www.upwork.com/freelancers/aminee12"
                target="_blank"
              >
                <SiUpwork size={20} />
              </a>
            </li>

            <li>
              <span className="inline-block w-[.05rem] h-24 bg-slate-300" />
            </li>
          </ul>
        </motion.div>

        {/* Email Container */}
        <motion.div
          whileInView={{ y: [100, 0] }}
          transition={{ delay: 0.1 }}
          className="hidden md:block fixed -bottom-1.5 -right-16 xl:-right-6"
        >
          <ul className="flex flex-col justify-center items-center">
            <li className="rotate-90 text-sm duration-200 hover:-translate-y-1">
              <a
                className="text-slate-400 hover:text-secondary"
                href="mailto:a.amineelkhalidy@gmail.com"
              >
                a.amineelkhalidy@gmail.com
              </a>
            </li>

            <li className="mt-28">
              <span className="inline-block w-[.05rem] h-24 bg-slate-300" />
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
