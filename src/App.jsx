import React, { useState, useEffect } from "react";

// motion
import { motion } from "framer-motion";

// Preloader
import { Circle2 } from "react-preloaders";

// Icon
import { IoIosArrowUp } from "react-icons/io";

// Sections
import { Header, Home, About, Projects, Skills, Contact } from "./sections";

const App = () => {
  // Arrow State
  const [active, setActive] = useState(false);

  // Function that keeps tracking the scroll event
  const showArrow = () => {
    if (window.scrollY >= 580) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showArrow);

    return () => window.removeEventListener("scroll", showArrow);
  }, [window]);
  return (
    <>
      <Circle2
        time={1500}
        background="#0a192f"
        color="#57a3c7"
        animation="fade"
      />
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />

      {/* Leading Up */}
      {active && (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.95 }}
          className="inline-block"
        >
          <a
            className="fixed bottom-4 right-[5.6rem] z-50 shadow-md p-2 rounded-md text-center bg-slate-800 hover:text-secondary"
            href="#"
          >
            <IoIosArrowUp size={20} />
          </a>
        </motion.div>
      )}
    </>
  );
};

export default App;
