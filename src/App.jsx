import React from "react";
import "./App.css";

import ReactGA from "react-ga";
const TRACKING_ID = "G-49J1KPT5P7"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
// Sections
import { Header, Hero, About, Projects, Skills, Contact } from "./sections";

const App = () => {
  // Google analytics
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
