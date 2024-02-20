import { motion } from "framer-motion";
import Switcher from "./Switcher";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="nav">
      <a
        className="inline-flex dark:text-white items-center font-nav font-bold tracking-wide text-black text-lg sm:text-xl"
        href="#"
      >
        Amine Elkhalidy
      </a>

      <MobileNavbar />

      <motion.div className="hidden md:block" whileInView={{ opacity: [0, 1] }}>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {["about", "work", "testimonials", "contact"].map((link, index) => (
              <li key={index}>
                <a
                  className="font-nav capitalize font-semibold text-[1.05rem] dark:text-gray-50"
                  href={`#${link}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <Switcher />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
