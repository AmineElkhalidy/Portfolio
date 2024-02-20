import React from "react";

const ParentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className=" max-w-6xl mx-auto px-6 xl:px-0">{children}</div>;
};

export default ParentContainer;
