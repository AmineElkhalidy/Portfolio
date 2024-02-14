import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Switcher from "./Switcher";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div
          className={`fixed top-0 z-50 w-[80%] border-l-2 h-screen bg-white drop-shadow-md md:hidden ${
            open ? "right-0" : "right-[-100%]"
          } `}
        >
          <div className="h-full flex flex-col justify-center items-center">
            <ul className="nav__list">
              {["about", "work", "testimonials", "contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      className="nav__link"
                      href={`#${link}`}
                      onClick={() => setOpen(false)}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>

            <div
              className="inline-block absolute top-6 right-8 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="w-6 h-6 hover:text-grey-300 dark:text-gray-100 " />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 md:hidden">
          <Switcher />
          <div
            className="nav__toggle"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <Bars3Icon className="w-7 h-7 dark:text-white hover:text-gray-600" />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
