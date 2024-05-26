//@ts-nocheck
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import CV from "../assets/pdf/Amine-Elkhalidy.pdf";
import { Button } from "@/components/ui/button";
import ParentContainer from "../components/Container";
import { Send } from "lucide-react";
import ShapeSVG from "../assets/shape.svg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#111827] relative">
      <ParentContainer>
        <div className="pb-4">
          <div className="hidden w-full md:flex gap-4 items-center md:flex-row-reverse md:gap-8 md:pt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ x: [-40, 0], opacity: [0, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 1, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="inline-flex items-center gap-2 py-[26px] px-16 font-medium text-lg rounded-full border bg-gray-50 text-black-500 hover:bg-gray-50"
              >
                {/* <Send className="w-5" /> */}
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ x: [-40, 0], opacity: [0, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
            >
              <a
                className="inline-flex gap-2 items-center text-gray-200 text-lg font-medium border py-3 px-5 rounded-full duration-300 hover:text-emerald-600 hover:border-emerald-600"
                href={CV}
                download="Amine Elkhalidy"
                rel="noopener noreferrer"
              >
                <ArrowDownTrayIcon className="w-6" />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div className="relative flex items-center">
            <div className="mt-24 md:mt-14">
              <h1 className="text-white text-center text-[2.5rem] leading-[1.2] font-bold mb-3 sm:text-[51px] md:text-[63px] lg:text-[72px] drop-shadow-sm">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 1] }}
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                  className="gradient-text"
                >
                  Empowering digital dreams
                </motion.span>
                <br />{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 1] }}
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.4 }}
                >
                  &
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 1] }}
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.6 }}
                >
                  Building{" "}
                  <span className="gradient-text">digital experiences</span>{" "}
                  that
                  <span className="gradient-text"> matter</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.7, delay: 0.7 }}
                className="text-gray-200 flex items-center justify-center gap-x-1 text-xl md:text-xl lg:text-2xl "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#37b24d"
                    d="M11.26 7.49c0-.36-.35-.45-.35-.45-1.55-.49-2.49-1.43-2.98-2.99 0 0-.06-.34-.45-.34-.38 0-.44.34-.44.34-.49 1.56-1.42 2.5-2.98 2.99 0 0-.35.09-.35.45s.35.45.35.45c1.56.49 2.49 1.43 2.98 2.99 0 0 .06.34.45.34.38-.01.45-.34.45-.34.49-1.56 1.42-2.5 2.98-2.99 0 .01.34-.08.34-.45 0 .01 0 .01 0 0zm17.06 8.46c0-.53-.44-.88-.94-1 0 0-3.96-1.34-5.43-2.25-.98-.48-1.91-1.45-2.5-2.41v.01c-.89-1.16-2.39-5.73-2.39-5.73-.18-.59-.52-.93-1.05-.94v.04L16 3.63c-.53 0-.88.44-1 .94 0 0-1.34 3.96-2.25 5.43-.48.98-1.45 1.91-2.41 2.5h.01c-1.16.89-5.73 2.39-5.73 2.39-.59.18-.93.52-.94 1.05l.06.01h-.06c0 .53.44.88.94 1 0 0 3.96 1.34 5.43 2.25.98.48 1.91 1.45 2.5 2.41v-.01c.89 1.16 2.39 5.73 2.39 5.73.18.59.52.93 1.05.94l.01-.07.01.07c.53 0 .88-.44 1-.94 0 0 1.34-3.96 2.25-5.43.48-.98 1.45-1.91 2.41-2.5h-.01c1.16-.89 5.73-2.39 5.73-2.39.59-.18.93-.52.94-1.05l-.08-.01h.07zm-.26 8.99c-.47-.24-.92-.58-1.31-.97s-.73-.85-.97-1.31c0 0-.11-.24-.39-.24s-.39.24-.39.24c-.24.47-.58.92-.97 1.31s-.85.73-1.31.97c0 0-.24.11-.24.39s.24.39.24.39c.47.24.92.58 1.31.97s.73.85.97 1.31c0 0 .11.24.39.24s.39-.24.39-.24c.24-.47.58-.92.97-1.31s.85-.73 1.31-.97c0 0 .24-.11.24-.39s-.24-.39-.24-.39z"
                  ></path>
                </svg>
                <span>Next.js Developer</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#37b24d"
                    d="M11.26 7.49c0-.36-.35-.45-.35-.45-1.55-.49-2.49-1.43-2.98-2.99 0 0-.06-.34-.45-.34-.38 0-.44.34-.44.34-.49 1.56-1.42 2.5-2.98 2.99 0 0-.35.09-.35.45s.35.45.35.45c1.56.49 2.49 1.43 2.98 2.99 0 0 .06.34.45.34.38-.01.45-.34.45-.34.49-1.56 1.42-2.5 2.98-2.99 0 .01.34-.08.34-.45 0 .01 0 .01 0 0zm17.06 8.46c0-.53-.44-.88-.94-1 0 0-3.96-1.34-5.43-2.25-.98-.48-1.91-1.45-2.5-2.41v.01c-.89-1.16-2.39-5.73-2.39-5.73-.18-.59-.52-.93-1.05-.94v.04L16 3.63c-.53 0-.88.44-1 .94 0 0-1.34 3.96-2.25 5.43-.48.98-1.45 1.91-2.41 2.5h.01c-1.16.89-5.73 2.39-5.73 2.39-.59.18-.93.52-.94 1.05l.06.01h-.06c0 .53.44.88.94 1 0 0 3.96 1.34 5.43 2.25.98.48 1.91 1.45 2.5 2.41v-.01c.89 1.16 2.39 5.73 2.39 5.73.18.59.52.93 1.05.94l.01-.07.01.07c.53 0 .88-.44 1-.94 0 0 1.34-3.96 2.25-5.43.48-.98 1.45-1.91 2.41-2.5h-.01c1.16-.89 5.73-2.39 5.73-2.39.59-.18.93-.52.94-1.05l-.08-.01h.07zm-.26 8.99c-.47-.24-.92-.58-1.31-.97s-.73-.85-.97-1.31c0 0-.11-.24-.39-.24s-.39.24-.39.24c-.24.47-.58.92-.97 1.31s-.85.73-1.31.97c0 0-.24.11-.24.39s.24.39.24.39c.47.24.92.58 1.31.97s.73.85.97 1.31c0 0 .11.24.39.24s.39-.24.39-.24c.24-.47.58-.92.97-1.31s.85-.73 1.31-.97c0 0 .24-.11.24-.39s-.24-.39-.24-.39z"
                  ></path>
                </svg>
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1, delay: 0.9 }}
            className="w-full flex justify-center items-center my-8"
          >
            <div className="bg-transparent flex gap-10 justify-center items-center">
              {/* <a
                href="https://www.upwork.com/freelancers/~01f55a2d4b119d3119"
                target="_blank"
                aria-label="Upwork Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  className="w-7 h-full  fill-gray-200 duration-300 hover:scale-110"
                >
                  <path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z" />
                </svg>
              </a>

              <a
                href="https://www.fiverr.com/amineelkhalidy/make-responsive-modern-and-pixel-perfect-website"
                target="_blank"
                aria-label="Fiverr Profile"
              >
                <svg
                  className="w-[1.6rem]  fill-gray-200 duration-300 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g>
                    <path d="M13 13V5H5v-.5C5 3.673 5.673 3 6.5 3H8V0H6.5A4.505 4.505 0 0 0 2 4.5V5H0v3h2v5H0v3h7v-3H5V8h5.028v5H8v3h7v-3h-2z" />
                    <circle cx="11.5" cy="1.5" r="1.5" />
                  </g>
                </svg>
              </a> */}

              <a
                href="https://github.com/AmineElkhalidy"
                target="_blank"
                aria-label="Github Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github fill-gray-200 duration-300 hover:scale-110"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/amine-elkhalidy/"
                target="_blank"
                aria-label="Linkedin Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin fill-gray-200 duration-300 hover:scale-110"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a href="" target="_blank" aria-label="Instagram Profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-instagram fill-gray-200 duration-300 hover:scale-110"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a href="" target="_blank" aria-label="Facebook Profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook fill-gray-200 duration-300 hover:scale-110"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <div className="md:hidden w-full flex justify-center items-center mt-8">
            <div className="w-full flex gap-12 items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: [40, 0], opacity: [0, 0.5, 1] }}
                transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="py-6 font-medium text-lg text-black-500 bg-gray-50 hover:bg-gray-50"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: [40, 0], opacity: [0, 0.5, 1] }}
                transition={{ ease: "easeIn", duration: 1, delay: 0.8 }}
              >
                <a
                  className="inline-flex gap-2 items-center text-gray-100 text-lg font-medium"
                  href={CV}
                  download="Amine Elkhalidy"
                  rel="noopener noreferrer"
                >
                  <ArrowDownTrayIcon className="w-6" /> Resume
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </ParentContainer>

      <div className="absolute bottom-0 left-0">
        <img
          src={ShapeSVG}
          className="w-auto h-auto"
          alt="Shape"
          width={150}
          height={150}
        />
      </div>
    </section>
  );
};

export default Hero;
