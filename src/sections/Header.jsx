import React, { useState, useEffect } from "react";

// Navbar
import Navbar from "../components/Navbar";

const Header = () => {
  // Changing the header shadow
  const [headerShadow, setHeaderShadow] = useState(false);

  // Function that keeps tracking the scroll event
  const changeHeaderShadow = () => {
    if (window.scrollY >= 250) {
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
    <header className={`header select-none ${headerShadow ? "shadow-xl" : ""}`}>
      <Navbar />
    </header>
  );
};

export default Header;
