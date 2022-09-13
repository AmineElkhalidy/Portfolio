import React from "react";

// Preloader
import { Circle2 } from "react-preloaders";

// Animated Cursor
import AnimatedCursor from "react-animated-cursor";

// Sections
import { Header, Home, About, Projects, Skills, Contact } from "./sections";

const App = () => {
  return (
    <>
      <Circle2
        time={1250}
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

      {/* <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="#0a192f"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
      /> */}
    </>
  );
};

export default App;
