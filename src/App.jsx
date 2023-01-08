import React from "react";
import "./App.css";

// Sections
import {
  Header,
  Hero,
  About,
  Projects,
  Skills,
  Contact,
  Testimonials,
} from "./sections";

const App = () => {
  React.useEffect(() => {
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

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </>
  );
};

export default App;
