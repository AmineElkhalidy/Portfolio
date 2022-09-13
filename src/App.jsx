import React from "react";

// Preloader
import { Circle2 } from "react-preloaders";

// Sections
import { Header, Home, About, Projects, Skills, Contact } from "./sections";

const App = () => {
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
    </>
  );
};

export default App;
