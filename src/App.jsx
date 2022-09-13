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
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={16}
        color="17, 163, 231"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
      /> */}

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
    </>
  );
};

export default App;
