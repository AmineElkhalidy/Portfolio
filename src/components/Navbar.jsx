import React, { useState } from "react";

// motion
import { motion } from "framer-motion";

// Icons
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// pdf
import Cv from "../assets/pdf/Amine-Elkhalidy.pdf";

// Avatar
import Avatar from "../assets/images/Amine.png";

const Navbar = () => {
  // Nav state
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <a
        className="flex items-center space-x-1 font-nav font-bold tracking-wide duration-300 text-black md:text-xl hover:text-grey-300"
        href="#"
      >
        <img className="h-[2rem]" src={Avatar} alt="Avatar" />
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
                <span className="font-normal">01.</span> About
              </a>
            </li>

            <li>
              <a
                className="nav__link"
                href="#work"
                onClick={() => setOpen(false)}
              >
                <span className="font-normal">02.</span> Work
              </a>
            </li>

            <li>
              <a
                className="nav__link"
                href="#skills"
                onClick={() => setOpen(false)}
              >
                <span className="font-normal">03.</span> Skills
              </a>
            </li>

            <li>
              <a
                className="nav__link"
                href="#feedbacks"
                onClick={() => setOpen(false)}
              >
                <span className="font-normal">04.</span> Feedbacks
              </a>
            </li>

            <li>
              <a
                className="nav__link"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                <span className="font-normal">05.</span> Contact
              </a>
            </li>
          </ul>

          <div
            className="inline-block absolute top-6 right-8 cursor-pointer hover:text-secondary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose className="w-6 h-6" />
          </div>
        </motion.div>
      ) : (
        <div
          className="nav__toggle"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <BiMenuAltRight className="w-8 h-8" />
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
              className="font-nav font-semibold text-md duration-300 hover:text-secondary"
              href="#about"
            >
              <span className="text-lg font-normal">01.</span> About
            </a>
          </li>

          <li>
            <a
              className="font-nav font-semibold text-md duration-300 hover:text-secondary"
              href="#work"
            >
              <span className="text-lg font-normal">02.</span> Work
            </a>
          </li>

          <li>
            <a
              className="font-nav font-semibold text-md duration-300 hover:text-secondary"
              href="#skills"
            >
              <span className="text-lg font-normal">03.</span> Skills
            </a>
          </li>

          <li>
            <a
              className="font-nav font-semibold text-md duration-300 hover:text-secondary"
              href="#feedbacks"
            >
              <span className="text-lg font-normal">04.</span> Feedbacks
            </a>
          </li>

          <li>
            <a
              className="font-nav font-semibold text-md duration-300 hover:text-secondary"
              href="#contact"
            >
              <span className="text-lg font-normal">05.</span> Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
