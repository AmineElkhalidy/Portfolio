import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return <h2 className={`heading  ${className}`}>{children}</h2>;
};

export default Heading;
