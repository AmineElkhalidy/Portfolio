//@ts-ignore

import { useState, useEffect } from "react";
import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  Testimonials,
} from "./sections";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { RingLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }, []);

  // Show arrow code
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
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <RingLoader
            color={"#15aabf"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Header />
          <main className="overflow-hidden">
            <Hero />
            <About />
            <Projects />
            <Testimonials />
            {/* <Hobbies /> */}
            <Contact />
          </main>

          <a
            href="#"
            className={`scrollup z-50 ${!showArrow ? "-right-20" : "right-2"}`}
            aria-label="go up"
          >
            <ArrowUpIcon className="scrollup-icon" />
          </a>
        </>
      )}
    </>
  );
};

export default App;
