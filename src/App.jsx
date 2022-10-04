import React from "react";
import "./App.css";

// Sections
import { Header, Home, About, Projects, Skills, Contact } from "./sections";

const App = () => {
  return (
    <>
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
