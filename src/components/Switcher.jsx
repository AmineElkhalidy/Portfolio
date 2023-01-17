import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={28} />
    </>
  );
};

export default Switcher;
