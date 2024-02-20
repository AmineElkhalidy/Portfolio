//@ts-ignore
import { useState, useEffect } from "react";
import { Hero, About, Projects, Contact, Testimonials } from "./sections";
import { RingLoader } from "react-spinners";
import MenuDialog from "./components/MenuDialog";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
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
        <About />
        <Projects />
        <Testimonials />
        {/* <Hobbies /> */}
        <Contact />

        <MenuDialog />
      </main>
    </>
  );
};

export default App;
