import React, { useState } from "react";

// motion
import { motion } from "framer-motion";

// Icons
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// pdf
import Cv from "../assets/pdf/Amine-Elkhalidy.pdf";

const Navbar = () => {
  // Nav state
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-20 max-w-6xl mx-auto px-6 flex justify-between items-center">
      <a
        className="text-lg font-nav font-medium tracking-wide duration-300 text-secondary hover:text-white"
        href="#"
      >
        Amine Elkhalidy
      </a>

      {open ? (
        <motion.div
          whileInView={{ x: [200, 0] }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="fixed top-0 right-0 z-50 w-[80%] bg-primary border-l-2 h-screen flex flex-col justify-center items-center bg-opacity-50 backdrop-blur-xl drop-shadow-md md:hidden"
        >
          <ul className="flex flex-col gap-8">
            <li>
              <a
                className="font-nav text-lg transition-colors duration-300 hover:text-secondary"
                href="#about"
                onClick={() => setOpen(false)}
              >
                <span className="text-secondary">02.</span> About
              </a>
            </li>

            <li>
              <a
                className="font-nav text-lg transition-colors duration-300 hover:text-secondary"
                href="#work"
                onClick={() => setOpen(false)}
              >
                <span className="text-secondary">03.</span> Work
              </a>
            </li>

            <li>
              <a
                className="font-nav text-lg transition-colors duration-300 hover:text-secondary"
                href="#skills"
                onClick={() => setOpen(false)}
              >
                <span className="text-secondary">04.</span> Skills
              </a>
            </li>

            <li>
              <a
                className="font-nav text-lg transition-colors duration-300 hover:text-secondary"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                <span className="text-secondary">05.</span> Contact
              </a>
            </li>

            <li className="mt-3">
              <a
                className="font-nav text-lg text-secondary duration-300 py-3 px-6 border border-secondary rounded-md hover:bg-secondary/20"
                href={Cv}
                download="Amine Elkhalidy"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>

          <div
            className="inline-block absolute top-6 right-8 cursor-pointer hover:text-secondary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose size={28} />
          </div>
        </motion.div>
      ) : (
        <div
          className="inline-block cursor-pointer hover:text-secondary transition-colors duration-300 md:hidden"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <BiMenuAltRight size={40} />
        </div>
      )}

      <motion.div className="hidden md:block" whileInView={{ opacity: [0, 1] }}>
        <ul className="flex gap-8">
          <li>
            <a
              className="font-nav text-md transition-colors duration-300 hover:text-secondary"
              href="#about"
            >
              <span className="text-secondary">02.</span> About
            </a>
          </li>

          <li>
            <a
              className="font-nav text-md transition-colors duration-300 hover:text-secondary"
              href="#work"
            >
              <span className="text-secondary">03.</span> Work
            </a>
          </li>

          <li>
            <a
              className="font-nav text-md transition-colors duration-300 hover:text-secondary"
              href="#skills"
            >
              <span className="text-secondary">04.</span> Skills
            </a>
          </li>

          <li>
            <a
              className="font-nav text-md transition-colors duration-300 hover:text-secondary"
              href="#contact"
            >
              <span className="text-secondary">05.</span> Contact
            </a>
          </li>

          <li>
            <a
              className="font-nav text-md text-secondary duration-300 py-2 px-4 border border-secondary rounded-md hover:bg-secondary/20"
              href={Cv}
              download="Amine Elkhalidy"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
