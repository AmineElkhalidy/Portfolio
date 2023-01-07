import React, { useState } from "react";

// Icons
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

// motion
import { motion } from "framer-motion";

// Data
import Mamiru from "../assets/images/projects/mamiro.png";
import Tasty from "../assets/images/projects/tasty.png";
import Omnifood from "../assets/images/projects/omnifood.png";
import ShopStore from "../assets/images/projects/shoppingstore.png";
import Clipboarding from "../assets/images/projects/clipboarding.png";
import Shoesit from "../assets/images/projects/shoesit.png";
import Rotinniajad from "../assets/images/projects/rotinniajad.png";
import Blogr from "../assets/images/projects/blogr.png";

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 min-h-screen" id="work">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-black-900 text-2xl text-center font-nav font-semibold mb-12 md:text-3xl lg:text-4xl">
          My Work
        </h2>

        {/* Work Container */}
        <motion.div className="flex flex-col space-y-28">
          {/* Blogr */}

          {/* Mamiru */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="relative grid rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
          >
            {/* Project Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <img
                className="h-full border-2 border-black-900 overflow-hidden"
                src={Mamiru}
                alt="Project preview"
              />
            </div>

            {/* Project Description */}
            <div className="mt-6 text-center md:text-right">
              <h4 className="gradient-text font-nav font-medium text-secondary tracking-wider">
                Featured Project
              </h4>

              <h3 className="text-lg text-black-900 font-semibold mb-4 lg:text-2xl">
                Mamiru
              </h3>

              <p className="max-w-md mx-auto text-black text-left my-6 md:text-right md:p-4 md:bg-black-900 md:text-white md:shadow-xl md:rounded-md md:mr-0">
                Mamiru is an e-commerce website under construction built using
                react and redux with Typescript.
              </p>

              <ul className="max-w-md mx-auto flex flex-wrap justify-start items-center font-nav text-grey-400 md:justify-end gap-6 mb-6 mr-0">
                <li className="">React</li>
                <li className="">Redux</li>
                <li className="">TypeScript</li>
              </ul>

              <div className="max-w-md mx-auto text-black-900 flex justify-start items-center md:justify-end gap-6 mr-0 md:mb-4">
                <a
                  href="https://github.com/SamoudiAnas/Mamirou"
                  target="_blank"
                  className="duration-300 hover:text-orange-500"
                >
                  <FiGithub size={23} className="cursor-pointer" />
                </a>

                <a
                  href="https://mamirou.vercel.app/"
                  target="_blank"
                  className="duration-300 hover:text-orange-500"
                >
                  <HiOutlineExternalLink size={24} className="cursor-pointer" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Shoesit */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="relative grid rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
          >
            {/* Project Description */}
            <div className="mb-6 text-center md:text-left">
              <h4 className="gradient-text font-nav font-medium text-secondary tracking-wider">
                Featured Project
              </h4>

              <h3 className="text-black-900 text-lg font-semibold mb-4 lg:text-2xl">
                Shoesit
              </h3>

              <p className="max-w-md mx-auto text-black text-left my-6 md:p-4 md:bg-black-900 md:shadow-xl md:text-white md:rounded-md md:ml-0">
                Shoesit is an e-commerce website which you can use to choose
                your favorite shoes from you favorite brand.
              </p>

              <ul className="max-w-md mx-auto text-grey-400 flex flex-wrap justify-start items-center font-nav md:justify-start gap-6 mb-6 ml-0">
                <li className="">HTML</li>
                <li className="">SASS</li>
              </ul>

              <div className="max-w-md mx-auto text-black-900 flex justify-start items-center md:justify-start gap-6 ml-0 mb-4">
                <a
                  href="https://github.com/AmineElkhalidy/shoesit"
                  target="_blank"
                  className="duration-300 hover:text-orange-500"
                >
                  <FiGithub size={23} className="cursor-pointer" />
                </a>

                <a
                  href="https://shoesit.vercel.app/"
                  target="_blank"
                  className="duration-300 hover:text-orange-500"
                >
                  <HiOutlineExternalLink size={23} className="cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <img
                className="h-full border-2 border-black-900 overflow-hidden"
                src={Shoesit}
                alt="Project preview"
              />
            </div>
          </motion.div>

          {/* Omnifood */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="relative grid rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
          >
            {/* Project Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <img
                className="h-full border-2 border-black-900 overflow-hidden"
                src={Omnifood}
                alt="Project preview"
              />
            </div>

            {/* Project Description */}
            <div className="mt-6 text-center md:text-right">
              <h4 className="gradient-text font-nav font-medium text-secondary tracking-wider">
                Featured Project
              </h4>

              <h3 className="text-black-900  text-lg font-semibold mb-4 lg:text-2xl">
                Omnifood
              </h3>

              <p className="max-w-md mx-auto text-black-900 text-left my-6 md:text-right md:p-4 md:bg-black-900 md:text-white md:shadow-xl md:rounded-md md:mr-0">
                Omnifood is an AI-powered food suscription that will make you
                eat healty again, 365 days per days. It's tailored to your
                personal tastes and nutritional needs
              </p>

              <ul className="max-w-md mx-auto flex flex-wrap justify-start items-center font-nav text-grey-400 md:justify-end gap-6 mb-6 mr-0">
                <li className="">HTML</li>
                <li className="">CSS</li>
                <li className="">JavaScript</li>
              </ul>

              <div className="max-w-md mx-auto text-black-900 flex justify-start items-center md:justify-end gap-6 mr-0 md:mb-4">
                <a
                  href="https://github.com/AmineElkhalidy/Omnifood.git"
                  target="_blank"
                  className="duration-300 hover:text-orange-500"
                >
                  <FiGithub size={23} className="cursor-pointer" />
                </a>

                <a
                  href="https://foodformood.vercel.app/"
                  target="_blank"
                  className="duration-300 hover:text-orange-500"
                >
                  <HiOutlineExternalLink size={24} className="cursor-pointer" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Rotin Niajad */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="relative grid rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
          >
            {/* Project Description */}
            <div className="mb-6 text-center md:text-left">
              <h4 className="gradient-text font-nav font-medium text-secondary tracking-wider">
                Featured Project
              </h4>

              <h3 className="text-black-900 text-lg font-semibold mb-4 lg:text-2xl">
                Rotin Niajad
              </h3>

              <p className="max-w-md mx-auto text-black-900 text-left my-6 md:p-4 md:bg-black-900 md:text-white md:shadow-xl md:rounded-md md:ml-0">
                Rotin Niajad is a static website which list broad variety of
                products related to home furniture.
              </p>

              <ul className="max-w-md mx-auto text-grey-400 flex flex-wrap justify-start items-center font-nav md:justify-start gap-6 mb-6 ml-0">
                <li className="">HTML</li>
                <li className="">CSS</li>
                <li className="">JavaScript</li>
              </ul>

              <div className="max-w-md mx-auto text-balck-900 flex justify-start items-center md:justify-start gap-6 ml-0 mb-4">
                <a
                  href="https://github.com/AmineElkhalidy/rotinniajad"
                  target="_blank"
                  className="duration-300 hover:text-orange-500"
                >
                  <FiGithub size={23} className="cursor-pointer" />
                </a>

                <a
                  href="https://www.rotinniajad.com/"
                  target="_blank"
                  className="duration-300 hover:text-orange-500"
                >
                  <HiOutlineExternalLink size={23} className="cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <img
                className="h-full border-2 border-black-900 overflow-hidden"
                src={Rotinniajad}
                alt="Project preview"
              />
            </div>
          </motion.div>

          {!show && (
            <motion.div
              className="text-center"
              whileInView={{ opacity: [0, 1] }}
            >
              {/* <button
                onClick={() => setShow(true)}
                className="px-8 py-4 border text-secondary font-medium border-secondary rounded-md duration-200 hover:bg-secondary/20"
              >
                Show more
              </button> */}
              <button
                onClick={() => setShow(true)}
                className="inline-block px-[31px] py-5 bg-black-900 text-white cursor-pointer text-lg duration-300 font-nav font-semibold"
              >
                Show more
              </button>
            </motion.div>
          )}

          {show && (
            <>
              {/* Tasty */}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                className="relative grid rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
              >
                {/* Project Image */}
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <img
                    className="h-full border-2 border-black-900 overflow-hidden"
                    src={Tasty}
                    alt="Project preview"
                  />
                </div>

                {/* Project Description */}
                <div className="mt-6 text-center md:text-right">
                  <h4 className="gradient-text  font-nav font-medium text-secondary tracking-wider">
                    Featured Project
                  </h4>

                  <h3 className=" text-black-900 text-lg font-semibold mb-4 lg:text-2xl">
                    Tasty
                  </h3>

                  <p className="max-w-md mx-auto text-black-900 text-left my-6 md:text-right md:p-4 md:bg-black-900 md:text-white  md:shadow-xl md:rounded-md md:mr-0">
                    Tasty is a simple landing page of restaurant which show some
                    of its best salad and food.
                  </p>

                  <ul className="max-w-md mx-auto flex flex-wrap justify-start items-center font-nav text-grey-400 md:justify-end gap-6 mb-6 mr-0">
                    <li className="">HTML</li>
                    <li className="">CSS</li>
                    <li className="">JavaScript</li>
                  </ul>

                  <div className="max-w-md mx-auto text-black-900 flex justify-start items-center md:justify-end gap-6 mr-0 md:mb-4">
                    <a
                      href="https://github.com/AmineElkhalidy/tasty.git"
                      target="_blank"
                      className="duration-300 hover:text-orange-500"
                    >
                      <FiGithub size={23} className="cursor-pointer" />
                    </a>

                    <a
                      href="https://tasty.vercel.app/"
                      target="_blank"
                      className="duration-300 hover:text-orange-500"
                    >
                      <HiOutlineExternalLink
                        size={24}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Clipboarding */}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                className="relative grid rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
              >
                {/* Project Description */}
                <div className="mb-6 text-center md:text-left">
                  <h4 className="gradient-text font-nav font-medium text-secondary tracking-wider">
                    Featured Project
                  </h4>

                  <h3 className="text-black-900 text-lg font-semibold mb-4 lg:text-2xl">
                    Clipboarding
                  </h3>

                  <p className="max-w-md mx-auto text-black-900 text-left my-6 md:p-4 md:bg-black-900 md:text-white md:shadow-xl md:rounded-md md:ml-0">
                    Clipboard allows you to track and organize everything you
                    copy. Instantly access your clipboard on all your devices.
                  </p>

                  <ul className="max-w-md mx-auto text-grey-400 flex flex-wrap justify-start items-center font-nav md:justify-start gap-6 mb-6 ml-0">
                    <li className="">HTML</li>
                    <li className="">TailwindCss</li>
                  </ul>

                  <div className="max-w-md mx-auto text-black-900 flex justify-start items-center md:justify-start gap-6 ml-0 mb-4">
                    <a
                      href="https://github.com/AmineElkhalidy/Clipboard"
                      target="_blank"
                      className="duration-300 hover:text-orange-500"
                    >
                      <FiGithub size={23} className="cursor-pointer" />
                    </a>

                    <a
                      href="https://clipboarding.vercel.app/"
                      target="_blank"
                      className="duration-300 hover:text-orange-500"
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
                  <img
                    className="h-full border-2 border-black-900 overflow-hidden"
                    src={Clipboarding}
                    alt="Project preview"
                  />
                </div>
              </motion.div>

              {/* Shopping store */}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                className="relative grid  rounded-md shadow-xl p-4 md:bg-transparent md:rounded-none md:shadow-none md:p-0 md:grid-cols-2 md:px-16"
              >
                {/* Project Image */}
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <img
                    className="h-full border-2 border-black-900 overflow-hidden"
                    src={ShopStore}
                    alt="Project preview"
                  />
                </div>

                {/* Project Description */}
                <div className="mt-6 text-center md:text-right">
                  <h4 className="gradient-text font-nav font-medium text-secondary tracking-wider">
                    Featured Project
                  </h4>

                  <h3 className="text-black-900 text-lg font-semibold mb-4 lg:text-2xl">
                    Shopping store
                  </h3>

                  <p className="max-w-md mx-auto text-black-900 text-left my-6 md:text-right md:p-4 md:bg-black-900 md:text-white md:shadow-xl md:rounded-md md:mr-0">
                    Shopping store is a web app that is under development, to
                    allow to users to be able to purchase whatever products they
                    want...
                  </p>

                  <ul className="max-w-md mx-auto flex flex-wrap justify-start items-center font-nav text-grey-400 md:justify-end gap-6 mb-6 mr-0">
                    <li className="">HTML</li>
                    <li className="">CSS</li>
                    <li className="">JavaScript</li>
                  </ul>

                  <div className="max-w-md mx-auto text-black-900 flex justify-start items-center md:justify-end gap-6 mr-0 md:mb-4">
                    <a
                      href="https://github.com/AmineElkhalidy/shopStore"
                      target="_blank"
                      className="duration-300 hover:text-orange-500"
                    >
                      <FiGithub size={23} className="cursor-pointer" />
                    </a>

                    <a
                      href="https://shoppingstore.vercel.app/"
                      target="_blank"
                      className="duration-300 hover:text-orange-500"
                    >
                      <HiOutlineExternalLink
                        size={24}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>

              {show && (
                <motion.div
                  className="inline-block text-center"
                  whileInView={{ opacity: [0, 1] }}
                >
                  <button
                    onClick={() => setShow(false)}
                    className="inline-block px-[31px] py-5 bg-black-900 text-white cursor-pointer text-lg duration-300 font-nav font-semibold"
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
