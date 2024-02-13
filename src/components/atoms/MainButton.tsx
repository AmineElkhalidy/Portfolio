import React from "react";

const MainButton = ({ children }) => {
  return (
    <div className="relative">
      <a
        className="inline-block z-50 px-[31px] py-5 bg-black-900 text-white dark:text-black-900 dark:bg-gray-100 cursor-pointer text-lg duration-300 font-nav font-semibold hover:translate-x-2 hover:translate-y-2"
        href="#contact"
      >
        {children}
      </a>

      <div className="contact-btn -z-10 absolute top-2 left-2 px-[4.95rem] py-[2.15rem]" />
    </div>
  );
};

export default MainButton;
