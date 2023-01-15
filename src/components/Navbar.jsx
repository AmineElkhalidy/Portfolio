import React, { useState } from "react";

// motion
import { motion } from "framer-motion";

// Icons
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

// Avatar
import Avatar from "../assets/images/Amine.png";

const Navbar = () => {
  // Nav state
  const [open, setOpen] = useState(false);
  const [darkModeToggle, setDarkModeToggle] = useState(false);

  return (
    <nav className="nav">
      <a
        className="inline-flex items-center font-nav font-bold tracking-wide duration-300 text-black sm:text-xl"
        href="#"
      >
        {/* <img className="h-[2rem]" src={Avatar} alt="Avatar" /> */}
        <span>Amine Elkhalidy</span>
      </a>

      {/* Mobile navigation */}
      {open ? (
        <motion.div
          whileInView={{ x: [200, 0] }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="nav__menu"
        >
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
                href="#work"
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
                href="#feedbacks"
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
            className="inline-block absolute top-6 right-8 cursor-pointer hover:text-secondary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="w-7 h-7 hover:text-grey-300" />
          </div>
        </motion.div>
      ) : (
        <div className="flex items-center gap-3 duration-300">
          {darkModeToggle ? (
            <div>
              <SunIcon
                className="w-7 h-7 cursor-pointer"
                onClick={() => setDarkModeToggle(false)}
              />
            </div>
          ) : (
            <div>
              <MoonIcon
                className="w-[1.7rem] h-[1.7rem] cursor-pointer"
                onClick={() => setDarkModeToggle(true)}
              />
            </div>
          )}

          <div
            className="nav__toggle"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <Bars3Icon className="w-8 h-8" />
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <motion.div
        className="navigation hidden md:block"
        whileInView={{ opacity: [0, 1] }}
      >
        <ul className="flex gap-8">
          <li>
            <a
              className="font-nav font-semibold text-[1.05rem] duration-300"
              href="#about"
            >
              About
            </a>
          </li>

          <li>
            <a
              className="font-nav font-semibold text-[1.05rem] duration-300"
              href="#work"
            >
              Work
            </a>
          </li>

          <li>
            <a
              className="font-nav font-semibold text-[1.05rem] duration-300"
              href="#skills"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              className="font-nav font-semibold text-[1.05rem] duration-300"
              href="#feedbacks"
            >
              Testimonials
            </a>
          </li>

          <li>
            <a
              className="font-nav font-semibold text-[1.05rem] duration-300"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
