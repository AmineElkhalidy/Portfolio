import React from "react";

const Button = ({ styles, children, onClick }) => {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
