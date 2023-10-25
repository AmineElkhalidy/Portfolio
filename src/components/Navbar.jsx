import React, { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import Switcher from "./Switcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <a
        className="inline-flex dark:text-white items-center font-nav font-bold tracking-wide duration-300 text-black text-lg sm:text-xl"
        href="#"
      >
        <span>Amine Elkhalidy</span>
      </a>

      {/* Mobile navigation */}
      {open ? (
        <div
          className={`fixed top-0 z-50 w-[80%] border-l-2 h-screen bg-opacity-50 backdrop-blur-xl duration-300 drop-shadow-md md:hidden ${
            open ? "right-0" : "right-[-100%]"
          } `}
        >
          <div className="h-full flex flex-col justify-center items-center">
            <ul className="nav__list">
              <li>
                <a
                  className="nav__link"
                  href="#about"
                  onClick={() => setOpen(false)}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="nav__link"
                  href="#projects"
                  onClick={() => setOpen(false)}
                >
                  Work
                </a>
              </li>

              <li>
                <a
                  className="nav__link"
                  href="#skills"
                  onClick={() => setOpen(false)}
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  className="nav__link"
                  href="#testimonials"
                  onClick={() => setOpen(false)}
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  className="nav__link"
                  href="#contact"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div
              className="inline-block absolute top-6 right-8 cursor-pointer duration-300"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="w-6 h-6 hover:text-grey-300 dark:text-gray-100 " />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 duration-300 md:hidden">
          <Switcher />
          <div
            className="nav__toggle"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <Bars3Icon className="w-7 h-7 dark:text-white hover:text-gray-600 duration-300" />
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <motion.div
        className="navigation hidden md:block"
        whileInView={{ opacity: [0, 1] }}
      >
        <div className="flex items-center gap-8 duration-300">
          <ul className="flex gap-8">
            <li>
              <a
                className="font-nav font-semibold text-[1.05rem] duration-300 dark:text-gray-50"
                href="#about"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="font-nav font-semibold text-[1.05rem] duration-300 dark:text-gray-50"
                href="#projects"
              >
                Work
              </a>
            </li>

            <li>
              <a
                className="font-nav font-semibold text-[1.05rem] duration-300 dark:text-gray-50"
                href="#skills"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                className="font-nav font-semibold text-[1.05rem] duration-300 dark:text-gray-50"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>

            <li>
              <a
                className="font-nav font-semibold text-[1.05rem] duration-300 dark:text-gray-50"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          <div>
            <Switcher />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
