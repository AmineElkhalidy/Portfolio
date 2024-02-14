import React from "react";

const Paragraph = ({
  styles,
  children,
}: {
  styles: string;
  children: React.ReactNode;
}) => {
  return <p className={styles}>{children}</p>;
};

export default Paragraph;
