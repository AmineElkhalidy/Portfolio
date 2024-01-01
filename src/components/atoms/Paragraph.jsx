import React from "react";

const Paragraph = ({ styles, children }) => {
  return <p className={styles}>{children}</p>;
};

export default Paragraph;
