import React from "react";
import "./App.css";

// Sections
import { Header, Hero, About, Projects, Skills, Contact } from "./sections";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
