import React from "react";

// Icons
import { MdOutlinePlayArrow } from "react-icons/md";
import { RiVipDiamondFill } from "react-icons/ri";

// motion
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 min-h-screen" id="about">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24 select-none"
      >
        {/* Heading */}
        <h2 className="text-2xl text-center font-nav font-semibold mb-10 md:text-3xl lg:text-4xl">
          Get to know me
        </h2>

        {/* Content Container */}
        <div className="max-w-3xl mx-auto md:px-8  lg:px-0">
          <div>
            <p className="text-slate-400 mb-3 md:text-lg">
              Hi! My name is{" "}
              <span className=" text-secondary font-medium">
                Amine Elkhalidy
              </span>
              , I am a{" "}
              <span className=" text-secondary font-medium">
                Front End Developer
              </span>
              , and I enjoy creating things that live on the internet.
            </p>

            <p className="text-slate-400 mb-3 md:text-lg">
              I am working as a freelancer on{" "}
              <a
                href="https://www.upwork.com/"
                target="_blank"
                rel="referrer noopener"
                className=" text-secondary font-medium"
              >
                Upwork
              </a>
              , and here are some of the services that I provide to my clients:
            </p>

            <ul className=" text-slate-400 grid gap-1 font-nav font-thin mt-1 mb-4  md:grid-cols-2 md:text-[1.05rem]">
              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <RiVipDiamondFill />
                </span>
                PSD to HTML
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <RiVipDiamondFill />
                </span>
                Front web app
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <RiVipDiamondFill />
                </span>
                Components & Layouts dev
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <RiVipDiamondFill />
                </span>
                Pixel Perfect design
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <RiVipDiamondFill />
                </span>
                Responsive design
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <RiVipDiamondFill />
                </span>
                API integration
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <RiVipDiamondFill />
                </span>
                Database integration
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <RiVipDiamondFill />
                </span>
                Authentication
              </li>
            </ul>

            <p className="text-slate-400 mb-2 md:text-lg">
              Here are a few technologies I’ve been working with recently:
            </p>

            <ul className="max-w-sm grid grid-cols-2 -mt-2 text-slate-400 font-nav font-thin  md:text-[1.05rem]">
              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <MdOutlinePlayArrow />
                </span>
                HTML
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <MdOutlinePlayArrow />
                </span>
                CSS
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <MdOutlinePlayArrow />
                </span>
                JavaScript
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <MdOutlinePlayArrow />
                </span>
                React
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <MdOutlinePlayArrow />
                </span>
                TypeScript
              </li>

              <li className="flex items-center gap-2">
                <span className="text-secondary">
                  <MdOutlinePlayArrow />
                </span>
                TailwindCss
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
