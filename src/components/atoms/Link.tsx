import React from "react";

const Link = ({ styles, children, ...props }) => {
  return (
    <a className={styles} {...props}>
      {children}
    </a>
  );
};

export default Link;
