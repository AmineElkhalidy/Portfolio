//@ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";
import {
  ArrowRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import CV from "../assets/pdf/Amine-Elkhalidy.pdf";

const Hero = () => {
  return (
    <section>
      <div className="container">
        {/* Content Container with animation */}
        <div className="flex items-center mt-36 md:mt-24">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.9 }}
              className="flex items-center h-full md:pl-16"
            >
              <div>
                {/* Introduction */}
                <h1 className="hero__title">
                  Hello <span class="wave">👋</span>,
                  <br />
                  <TypeIt
                    options={{
                      afterComplete: function (instance) {
                        instance.destroy();
                      },
                    }}
                  >
                    I'm Amine, <br />
                    <span className="gradient-text italic">
                      Next.js front-end
                    </span>
                    <br />
                    <span className="gradient-text italic">web developer</span>
                  </TypeIt>
                </h1>

                {/* Contact me button */}
                <div className="hero__buttons-container">
                  <div className="relative animate-fade-up animate-duration-[2000ms]">
                    <a
                      className="inline-block px-[31px] py-5 bg-black-900 text-white cursor-pointer text-lg duration-300 font-semibold z-10 hover:translate-x-2 hover:translate-y-2"
                      href="#contact"
                    >
                      Contact Me
                    </a>

                    <span className="contact-btn absolute -z-10 top-2 left-2 px-[4.95rem] py-[2.15rem] bg-red-500" />
                  </div>

                  <div className="">
                    <a
                      className="group inline-flex gap-3 items-center py-5 text-black-900 cursor-pointer text-lg duration-300 font-nav font-semibold animate-fade-up animate-duration-[2500ms]"
                      href={CV}
                      download="Amine Elkhalidy"
                      rel="noopener noreferrer"
                    >
                      Download Resume{" "}
                      <ArrowRightIcon className="w-5 duration-300 group-hover:translate-x-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social container */}
            <motion.div
              whileInView={{ y: [75, 0] }}
              transition={{ ease: "easeIn", duration: 1 }}
              className="hidden md:block absolute bottom-0"
            >
              <div className="header__social-links">
                <a
                  href="https://www.upwork.com/freelancers/~01f55a2d4b119d3119"
                  target="_blank"
                  aria-label="Upwork Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                    className="w-7 h-full dark:fill-white fill-black-900"
                  >
                    <path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z" />
                  </svg>
                </a>

                <a
                  href="https://www.fiverr.com/amineelkhalidy"
                  target="_blank"
                  aria-label="Fiverr Profile"
                >
                  <svg
                    className="w-[1.6rem] dark:fill-white fill-black-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <g>
                      <path d="M13 13V5H5v-.5C5 3.673 5.673 3 6.5 3H8V0H6.5A4.505 4.505 0 0 0 2 4.5V5H0v3h2v5H0v3h7v-3H5V8h5.028v5H8v3h7v-3h-2z" />
                      <circle cx="11.5" cy="1.5" r="1.5" />
                    </g>
                  </svg>
                </a>

                <a
                  href="https://github.com/AmineElkhalidy"
                  target="_blank"
                  aria-label="Github Profile"
                >
                  <svg
                    className="fill-black-900 dark:fill-white w-[1.85rem] -ml-[.20rem] h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.116 5.901a3.883 3.883 0 0 0-.26-.31 4.413 4.413 0 0 0 .21-.76 5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45 12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77 4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3 7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39 4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413 1.179 1.179 0 0 1-.17-.112 1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098.004.268a1 1 0 0 0 1 1H15.026a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85 5.23 5.23 0 0 0-1.11-3.3Z"
                      data-name="Brand Logos"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/amine-elkhalidy/"
                  target="_blank"
                  aria-label="Linkedin Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="24px"
                    height="24px"
                    className="w-7 fill-black-900 dark:fill-white"
                  >
                    <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import { motion } from "framer-motion";
// import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
// import CV from "../assets/pdf/Amine-Elkhalidy.pdf";
// import { Button } from "@/components/ui/button";
// import ParentContainer from "../components/Container";
// import { Send } from "lucide-react";
// import ShapeSVG from "../assets/shape.svg";

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-[#111827] relative">
//       <ParentContainer>
//         <div className="pb-4">
//           <div className="hidden w-full md:flex gap-4 items-center md:flex-row-reverse md:gap-8 md:pt-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ x: [-40, 0], opacity: [0, 0.5, 1] }}
//               transition={{ ease: "easeIn", duration: 1, delay: 0.8 }}
//             >
//               <Button
//                 size="lg"
//                 className="inline-flex items-center gap-2 py-[26px] px-16 font-medium text-lg rounded-full border bg-gray-50 text-black-500 hover:bg-gray-50"
//               >
//                 {/* <Send className="w-5" /> */}
//                 <a href="#contact">Contact Me</a>
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ x: [-40, 0], opacity: [0, 0.5, 1] }}
//               transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
//             >
//               <a
//                 className="inline-flex gap-2 items-center text-gray-200 text-lg font-medium border py-3 px-5 rounded-full duration-300 hover:text-emerald-600 hover:border-emerald-600"
//                 href={CV}
//                 download="Amine Elkhalidy"
//                 rel="noopener noreferrer"
//               >
//                 <ArrowDownTrayIcon className="w-6" />
//                 Download Resume
//               </a>
//             </motion.div>
//           </div>

//           <motion.div className="relative flex items-center">
//             <div className="mt-24 md:mt-14">
//               <h1 className="text-white text-center text-[2.5rem] leading-[1.2] font-bold mb-3 sm:text-[51px] md:text-[63px] lg:text-[72px] drop-shadow-sm">
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: [0, 0.5, 1] }}
//                   transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
//                   className="gradient-text"
//                 >
//                   Empowering digital dreams
//                 </motion.span>
//                 <br />{" "}
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: [0, 0.5, 1] }}
//                   transition={{ ease: "easeIn", duration: 0.5, delay: 0.4 }}
//                 >
//                   &
//                 </motion.span>
//                 <br />
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: [0, 0.5, 1] }}
//                   transition={{ ease: "easeIn", duration: 0.5, delay: 0.6 }}
//                 >
//                   Building{" "}
//                   <span className="gradient-text">digital experiences</span>{" "}
//                   that
//                   <span className="gradient-text"> matter</span>
//                 </motion.span>
//               </h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ ease: "easeIn", duration: 0.7, delay: 0.7 }}
//                 className="text-gray-200 flex items-center justify-center gap-x-1 text-xl md:text-xl lg:text-2xl "
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="32"
//                   height="32"
//                   viewBox="0 0 32 32"
//                 >
//                   <path
//                     fill="#37b24d"
//                     d="M11.26 7.49c0-.36-.35-.45-.35-.45-1.55-.49-2.49-1.43-2.98-2.99 0 0-.06-.34-.45-.34-.38 0-.44.34-.44.34-.49 1.56-1.42 2.5-2.98 2.99 0 0-.35.09-.35.45s.35.45.35.45c1.56.49 2.49 1.43 2.98 2.99 0 0 .06.34.45.34.38-.01.45-.34.45-.34.49-1.56 1.42-2.5 2.98-2.99 0 .01.34-.08.34-.45 0 .01 0 .01 0 0zm17.06 8.46c0-.53-.44-.88-.94-1 0 0-3.96-1.34-5.43-2.25-.98-.48-1.91-1.45-2.5-2.41v.01c-.89-1.16-2.39-5.73-2.39-5.73-.18-.59-.52-.93-1.05-.94v.04L16 3.63c-.53 0-.88.44-1 .94 0 0-1.34 3.96-2.25 5.43-.48.98-1.45 1.91-2.41 2.5h.01c-1.16.89-5.73 2.39-5.73 2.39-.59.18-.93.52-.94 1.05l.06.01h-.06c0 .53.44.88.94 1 0 0 3.96 1.34 5.43 2.25.98.48 1.91 1.45 2.5 2.41v-.01c.89 1.16 2.39 5.73 2.39 5.73.18.59.52.93 1.05.94l.01-.07.01.07c.53 0 .88-.44 1-.94 0 0 1.34-3.96 2.25-5.43.48-.98 1.45-1.91 2.41-2.5h-.01c1.16-.89 5.73-2.39 5.73-2.39.59-.18.93-.52.94-1.05l-.08-.01h.07zm-.26 8.99c-.47-.24-.92-.58-1.31-.97s-.73-.85-.97-1.31c0 0-.11-.24-.39-.24s-.39.24-.39.24c-.24.47-.58.92-.97 1.31s-.85.73-1.31.97c0 0-.24.11-.24.39s.24.39.24.39c.47.24.92.58 1.31.97s.73.85.97 1.31c0 0 .11.24.39.24s.39-.24.39-.24c.24-.47.58-.92.97-1.31s.85-.73 1.31-.97c0 0 .24-.11.24-.39s-.24-.39-.24-.39z"
//                   ></path>
//                 </svg>
//                 <span>Next.js Developer</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="32"
//                   height="32"
//                   viewBox="0 0 32 32"
//                 >
//                   <path
//                     fill="#37b24d"
//                     d="M11.26 7.49c0-.36-.35-.45-.35-.45-1.55-.49-2.49-1.43-2.98-2.99 0 0-.06-.34-.45-.34-.38 0-.44.34-.44.34-.49 1.56-1.42 2.5-2.98 2.99 0 0-.35.09-.35.45s.35.45.35.45c1.56.49 2.49 1.43 2.98 2.99 0 0 .06.34.45.34.38-.01.45-.34.45-.34.49-1.56 1.42-2.5 2.98-2.99 0 .01.34-.08.34-.45 0 .01 0 .01 0 0zm17.06 8.46c0-.53-.44-.88-.94-1 0 0-3.96-1.34-5.43-2.25-.98-.48-1.91-1.45-2.5-2.41v.01c-.89-1.16-2.39-5.73-2.39-5.73-.18-.59-.52-.93-1.05-.94v.04L16 3.63c-.53 0-.88.44-1 .94 0 0-1.34 3.96-2.25 5.43-.48.98-1.45 1.91-2.41 2.5h.01c-1.16.89-5.73 2.39-5.73 2.39-.59.18-.93.52-.94 1.05l.06.01h-.06c0 .53.44.88.94 1 0 0 3.96 1.34 5.43 2.25.98.48 1.91 1.45 2.5 2.41v-.01c.89 1.16 2.39 5.73 2.39 5.73.18.59.52.93 1.05.94l.01-.07.01.07c.53 0 .88-.44 1-.94 0 0 1.34-3.96 2.25-5.43.48-.98 1.45-1.91 2.41-2.5h-.01c1.16-.89 5.73-2.39 5.73-2.39.59-.18.93-.52.94-1.05l-.08-.01h.07zm-.26 8.99c-.47-.24-.92-.58-1.31-.97s-.73-.85-.97-1.31c0 0-.11-.24-.39-.24s-.39.24-.39.24c-.24.47-.58.92-.97 1.31s-.85.73-1.31.97c0 0-.24.11-.24.39s.24.39.24.39c.47.24.92.58 1.31.97s.73.85.97 1.31c0 0 .11.24.39.24s.39-.24.39-.24c.24-.47.58-.92.97-1.31s.85-.73 1.31-.97c0 0 .24-.11.24-.39s-.24-.39-.24-.39z"
//                   ></path>
//                 </svg>
//               </motion.p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ ease: "easeIn", duration: 1, delay: 0.9 }}
//             className="w-full flex justify-center items-center my-8"
//           >
//             <div className="bg-transparent flex gap-10 justify-center items-center">
//               {/* <a
//                 href="https://www.upwork.com/freelancers/~01f55a2d4b119d3119"
//                 target="_blank"
//                 aria-label="Upwork Profile"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 50 50"
//                   width="50px"
//                   height="50px"
//                   className="w-7 h-full  fill-gray-200 duration-300 hover:scale-110"
//                 >
//                   <path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z" />
//                 </svg>
//               </a>

//               <a
//                 href="https://www.fiverr.com/amineelkhalidy/make-responsive-modern-and-pixel-perfect-website"
//                 target="_blank"
//                 aria-label="Fiverr Profile"
//               >
//                 <svg
//                   className="w-[1.6rem]  fill-gray-200 duration-300 hover:scale-110"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 16 16"
//                 >
//                   <g>
//                     <path d="M13 13V5H5v-.5C5 3.673 5.673 3 6.5 3H8V0H6.5A4.505 4.505 0 0 0 2 4.5V5H0v3h2v5H0v3h7v-3H5V8h5.028v5H8v3h7v-3h-2z" />
//                     <circle cx="11.5" cy="1.5" r="1.5" />
//                   </g>
//                 </svg>
//               </a> */}

//               <a
//                 href="https://github.com/AmineElkhalidy"
//                 target="_blank"
//                 aria-label="Github Profile"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="29"
//                   height="29"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-github fill-gray-200 duration-300 hover:scale-110"
//                 >
//                   <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//                   <path d="M9 18c-4.51 2-5-2-7-2" />
//                 </svg>
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/elkhalidyamine"
//                 target="_blank"
//                 aria-label="Linkedin Profile"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="29"
//                   height="29"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-linkedin fill-gray-200 duration-300 hover:scale-110"
//                 >
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                   <rect width="4" height="12" x="2" y="9" />
//                   <circle cx="4" cy="4" r="2" />
//                 </svg>
//               </a>

//               <a
//                 href="https://www.instagram.com/elkhalidyamine/"
//                 target="_blank"
//                 aria-label="Instagram Profile"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="29"
//                   height="29"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="lucide lucide-instagram fill-gray-200 duration-300 hover:scale-110"
//                 >
//                   <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                   <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//                 </svg>
//               </a>

//               <a
//                 href="https://web.facebook.com/profile.php?id=61560347909437&ref=xav_ig_profile_web&_rdc=1&_rdr"
//                 target="_blank"
//                 aria-label="Facebook Profile"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="29"
//                   height="29"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-facebook fill-gray-200 duration-300 hover:scale-110"
//                 >
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//                 </svg>
//               </a>
//             </div>
//           </motion.div>

//           <div className="md:hidden w-full flex justify-center items-center mt-8">
//             <div className="w-full flex gap-12 items-center justify-center">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ y: [40, 0], opacity: [0, 0.5, 1] }}
//                 transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
//               >
//                 <Button
//                   size="lg"
//                   className="py-6 font-medium text-lg text-black-500 bg-gray-50 hover:bg-gray-50"
//                 >
//                   <a href="#contact">Contact Me</a>
//                 </Button>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ y: [40, 0], opacity: [0, 0.5, 1] }}
//                 transition={{ ease: "easeIn", duration: 1, delay: 0.8 }}
//               >
//                 <a
//                   className="inline-flex gap-2 items-center text-gray-100 text-lg font-medium"
//                   href={CV}
//                   download="Amine Elkhalidy"
//                   rel="noopener noreferrer"
//                 >
//                   <ArrowDownTrayIcon className="w-6" /> Resume
//                 </a>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </ParentContainer>

//       <div className="absolute bottom-0 left-0">
//         <img
//           src={ShapeSVG}
//           className="w-auto h-auto"
//           alt="Shape"
//           width={150}
//           height={150}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;
