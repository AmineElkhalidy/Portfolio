import React, { useState } from "react";

// Icons
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

// motion
import { motion } from "framer-motion";

// Data
import Omnifood from "../assets/images/projects/project-01.png";
import LandingPage from "../assets/images/projects/project-02.png";
import ShopStore from "../assets/images/projects/project-03.png";
import TeslaClone from "../assets/images/projects/project-04.png";
import Crypto from "../assets/images/projects/project-05.png";
import Clipboarding from "../assets/images/projects/project-06.png";

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <section
      className="max-w-6xl mx-auto px-6 min-h-screen select-none"
      id="work"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-2xl text-center font-nav font-semibold mb-12 select-none md:text-3xl lg:text-4xl">
          My Work
        </h2>

        {/* Work Container */}
        <motion.div className="flex flex-col space-y-28">
          {/* Omnifood */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="relative grid bg-slate-800 rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
          >
            {/* Project Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50 duration-300 hover:cursor-pointer hover:bg-transparent"></div>
              <img className="h-full" src={Omnifood} alt="Project preview" />
            </div>

            {/* Project Description */}
            <div className="mt-6 text-center md:text-right">
              <h4 className="font-nav font-medium text-secondary tracking-wider">
                Featured Project
              </h4>

              <h3 className="text-lg font-semibold mb-4 lg:text-2xl">
                Omnifood
              </h3>

              <p className="max-w-md mx-auto text-slate-200 text-left my-6 md:text-right md:p-4 md:bg-slate-800 md:shadow-xl md:rounded-md md:mr-0">
                Omnifood is an AI-powered food suscription that will make you
                eat healty again, 365 days per days. It's tailored to your
                personal tastes and nutritional needs
              </p>

              <ul className="max-w-md mx-auto flex flex-wrap justify-start items-center font-nav text-slate-300 md:justify-end gap-6 mb-6 mr-0">
                <li className="">HTML</li>
                <li className="">CSS</li>
                <li className="">JavaScript</li>
              </ul>

              <div className="max-w-md mx-auto text-slate-200 flex justify-start items-center md:justify-end gap-6 mr-0 md:mb-4">
                <a
                  href="https://github.com/AmineElkhalidy/Omnifood.git"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  <FiGithub size={23} className="cursor-pointer" />
                </a>

                <a
                  href="https://foromnifood.netlify.app/"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  <HiOutlineExternalLink size={24} className="cursor-pointer" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Clipboarding */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="relative grid bg-slate-800 rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
          >
            {/* Project Description */}
            <div className="mb-6 text-center md:text-left">
              <h4 className="font-nav font-medium text-secondary tracking-wider">
                Featured Project
              </h4>

              <h3 className="text-lg font-semibold mb-4 lg:text-2xl">
                Clipboarding
              </h3>

              <p className="max-w-md mx-auto text-slate-200 text-left my-6 md:p-4 md:bg-slate-800 md:shadow-xl md:rounded-md md:ml-0">
                Clipboard allows you to track and organize everything you copy.
                Instantly access your clipboard on all your devices.
              </p>

              <ul className="max-w-md mx-auto text-slate-300 flex flex-wrap justify-start items-center font-nav md:justify-start gap-6 mb-6 ml-0">
                <li className="">HTML</li>
                <li className="">TailwindCss</li>
              </ul>

              <div className="max-w-md mx-auto text-slate-200 flex justify-start items-center md:justify-start gap-6 ml-0 mb-4">
                <a
                  href="https://github.com/AmineElkhalidy/Clipboard"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  <FiGithub size={23} className="cursor-pointer" />
                </a>

                <a
                  href="https://clipboarding.netlify.app/"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  <HiOutlineExternalLink size={23} className="cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50 duration-300 hover:cursor-pointer hover:bg-transparent"></div>
              <img
                className="h-full"
                src={Clipboarding}
                alt="Project preview"
              />
            </div>
          </motion.div>

          {/* Landing Page */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="relative grid bg-slate-800 rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
          >
            {/* Project Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50 duration-300 hover:cursor-pointer hover:bg-transparent"></div>
              <img className="h-full" src={LandingPage} alt="Project preview" />
            </div>

            {/* Project Description */}
            <div className="mt-6 text-center md:text-right">
              <h4 className="font-nav font-medium text-secondary tracking-wider">
                Featured Project
              </h4>

              <h3 className="text-lg font-semibold mb-4 lg:text-2xl">
                Startup Landing
              </h3>

              <p className="max-w-md mx-auto text-slate-200 text-left my-6 md:text-right md:p-4 md:bg-slate-800 md:shadow-xl md:rounded-md md:mr-0">
                Simple startup landing page that was built using Next.js, a
                React framework for production, with amazing curves, color
                scheme and animation...
              </p>

              <ul className="max-w-md mx-auto flex flex-wrap justify-start items-center font-nav text-slate-300 md:justify-end gap-6 mb-6 mr-0">
                <li className="">React</li>
                <li className="">Next.js</li>
              </ul>

              <div className="max-w-md mx-auto text-slate-200 flex justify-start items-center md:justify-end gap-6 mr-0 md:mb-4">
                <a
                  href="https://github.com/AmineElkhalidy/Landing-Page"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  <FiGithub size={23} className="cursor-pointer" />
                </a>

                <a
                  href="https://landing-page-startup.vercel.app/"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  <HiOutlineExternalLink size={24} className="cursor-pointer" />
                </a>
              </div>
            </div>
          </motion.div>

          {!show && (
            <motion.div
              className="inline-block text-center"
              whileInView={{ opacity: [0, 1] }}
            >
              <button
                onClick={() => setShow(true)}
                className="px-8 py-4 border text-secondary font-medium border-secondary rounded-md duration-200 hover:bg-secondary/20"
              >
                Show more
              </button>
            </motion.div>
          )}

          {show && (
            <>
              {/* Shop Store */}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                className="relative grid bg-slate-800 rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
              >
                {/* Project Description */}
                <div className="mb-6 text-center md:text-left">
                  <h4 className="font-nav font-medium text-secondary tracking-wider">
                    Featured Project
                  </h4>

                  <h3 className="text-lg font-semibold mb-4 lg:text-2xl">
                    Shop Store
                  </h3>

                  <p className="max-w-md mx-auto text-slate-200 text-left my-6 md:p-4 md:bg-slate-800 md:shadow-xl md:rounded-md md:ml-0">
                    Shop store is a web app that is under development, to allow
                    to users to be able to purchase whatever products they
                    want...
                  </p>

                  <ul className="max-w-md mx-auto text-slate-300 flex flex-wrap justify-start items-center font-nav md:justify-start gap-6 mb-6 ml-0">
                    <li className="">HTML</li>
                    <li className="">TailwindCss</li>
                  </ul>

                  <div className="max-w-md mx-auto text-slate-200 flex justify-start items-center md:justify-start gap-6 ml-0 mb-4">
                    <a
                      href="https://github.com/AmineElkhalidy/Shopping-App"
                      target="_blank"
                      className="hover:text-secondary"
                    >
                      <FiGithub size={23} className="cursor-pointer" />
                    </a>

                    <a
                      href="https://shop-store.netlify.app/"
                      target="_blank"
                      className="hover:text-secondary"
                    >
                      <HiOutlineExternalLink
                        size={23}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50 duration-300 hover:cursor-pointer hover:bg-transparent"></div>
                  <img
                    className="h-full"
                    src={ShopStore}
                    alt="Project preview"
                  />
                </div>
              </motion.div>

              {/* Crypto */}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                className="relative grid bg-slate-800 rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
              >
                {/* Project Image */}
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50 duration-300 hover:cursor-pointer hover:bg-transparent"></div>
                  <img className="h-full" src={Crypto} alt="Project preview" />
                </div>

                {/* Project Description */}
                <div className="mt-6 text-center md:text-right">
                  <h4 className="font-nav font-medium text-secondary tracking-wider">
                    Featured Project
                  </h4>

                  <h3 className="text-lg font-semibold mb-4 lg:text-2xl">
                    Crypto
                  </h3>

                  <p className="max-w-md mx-auto text-slate-200 text-left my-6 md:text-right md:p-4 md:bg-slate-800 md:shadow-xl md:rounded-md md:mr-0">
                    Crypto is a web app that allow you to send transactions
                    through the blockchain network, after connecting to your
                    wallet.
                  </p>

                  <ul className="max-w-md mx-auto flex flex-wrap justify-start items-center font-nav text-slate-300 md:justify-end gap-6 mb-6 mr-0">
                    <li className="">React</li>
                    <li className="">Solidity</li>
                  </ul>

                  <div className="max-w-md mx-auto text-slate-200 flex justify-start items-center md:justify-end gap-6 mr-0 md:mb-4">
                    <a
                      href="https://github.com/AmineElkhalidy/Krypto"
                      target="_blank"
                      className="hover:text-secondary"
                    >
                      <FiGithub size={23} className="cursor-pointer" />
                    </a>

                    <a
                      href="https://krypto-app.netlify.app/"
                      target="_blank"
                      className="hover:text-secondary"
                    >
                      <HiOutlineExternalLink
                        size={24}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Tesla Clone */}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                className="relative grid bg-slate-800 rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
              >
                {/* Project Description */}
                <div className="mb-6 text-center md:text-left">
                  <h4 className="font-nav font-medium text-secondary tracking-wider">
                    Featured Project
                  </h4>

                  <h3 className="text-lg font-semibold mb-4 lg:text-2xl">
                    Tesla Clone
                  </h3>

                  <p className="max-w-md mx-auto text-slate-200 text-left my-6 md:p-4 md:bg-slate-800 md:shadow-xl md:rounded-md md:ml-0">
                    A simple wesbite where I cloned the official website of
                    Tesla.
                  </p>

                  <ul className="max-w-md mx-auto text-slate-300 flex flex-wrap justify-start items-center font-nav md:justify-start gap-6 mb-6 ml-0">
                    <li className="">React</li>
                  </ul>

                  <div className="max-w-md mx-auto text-slate-200 flex justify-start items-center md:justify-start gap-6 ml-0 mb-4">
                    <a
                      href="https://github.com/AmineElkhalidy/tesla-clone"
                      target="_blank"
                      className="hover:text-secondary"
                    >
                      <FiGithub size={23} className="cursor-pointer" />
                    </a>

                    <a
                      href="https://elon-tesla-clone.netlify.app/"
                      target="_blank"
                      className="hover:text-secondary"
                    >
                      <HiOutlineExternalLink
                        size={23}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50 duration-300 hover:cursor-pointer hover:bg-transparent"></div>
                  <img
                    className="h-full"
                    src={TeslaClone}
                    alt="Project preview"
                  />
                </div>
              </motion.div>

              {show && (
                <motion.div
                  className="inline-block text-center"
                  whileInView={{ opacity: [0, 1] }}
                >
                  <button
                    onClick={() => setShow(false)}
                    className="px-8 py-4 border text-secondary font-medium border-secondary rounded-md duration-200 hover:bg-secondary/20"
                  >
                    Show less
                  </button>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
