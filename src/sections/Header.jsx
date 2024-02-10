import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  // Changing the header shadow
  const [headerShadow, setHeaderShadow] = useState(false);

  // Function that keeps tracking the scroll event
  const changeHeaderShadow = () => {
    if (window.scrollY >= 400) {
      setHeaderShadow(true);
    } else {
      setHeaderShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderShadow);

    return () => window.removeEventListener("scroll", changeHeaderShadow);
  }, [window]);

  return (
    <header
      className={`header ${
        headerShadow ? "shadow-xl dark:shadow-gray-300/10" : ""
      }`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
