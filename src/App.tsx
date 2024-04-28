//@ts-ignore
import { useState, useEffect } from "react";
import {
  Hero,
  About,
  Projects,
  Contact,
  Testimonials,
  Hobbies,
} from "./sections";
import { RingLoader } from "react-spinners";
import MenuDialog from "./components/MenuDialog";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <RingLoader
          color={"#15aabf"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <>
      <main className="overflow-hidden relative">
        <Hero />
        {/* <About /> */}
        <Projects />

        <Testimonials />
        <Hobbies />
        <Contact />

        <MenuDialog isShown={showArrow} />

        <a
          href="#"
          className={`fixed p-1.5 duration-300 opacity-50 bottom-2 gradient hover:opacity-100 z-50 inline-flex w-12 h-12 md:w-16 md:h-16 rounded-full items-center justify-center border ${
            !showArrow ? "-right-20" : "right-2"
          }`}
          aria-label="go up"
        >
          <ArrowUpIcon className="w-6 h-6 text-white" />
        </a>
      </main>
    </>
  );
};

export default App;
