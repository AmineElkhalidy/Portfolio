import React from "react";

const MainButton = ({ children }) => {
  return (
    <div className="relative">
      <a
        className="inline-block px-[31px] py-5 bg-black-900 dark:text-black-900 dark:bg-gray-100 text-white cursor-pointer text-lg duration-300 font-nav font-semibold z-10 hover:translate-x-2 hover:translate-y-2"
        href="#contact"
      >
        {children}
      </a>

      <span className="contact-btn absolute -z-10 top-2 left-2 px-[4.95rem] py-[2.15rem]" />
    </div>
  );
};

export default MainButton;
