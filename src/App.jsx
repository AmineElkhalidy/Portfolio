import React, { useState, useEffect } from "react";

// Sections
import {
  Header,
  Hero,
  About,
  Projects,
  Skills,
  Contact,
  Testimonials,
  Hobbies,
} from "./sections";

// icons
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const App = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 5;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".navigation a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".navigation a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }

    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) setShowArrow(true);
      else setShowArrow(false);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        if (window.scrollY) setShowArrow(true);
        else setShowArrow(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="w-full h-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Hobbies />
        <Contact />
      </main>

      {/* Arrow up */}
      <a
        href="#"
        className={`fixed p-1.5 duration-300 opacity-50 -right-10 bottom-2 gradient hover:opacity-100 ${
          showArrow ? "right-2" : ""
        }`}
      >
        <ArrowUpIcon className="w-6 h-6 text-white" />
      </a>
    </>
  );
};

export default App;
