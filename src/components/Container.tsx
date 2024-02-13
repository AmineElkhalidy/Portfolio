import React from "react";

const ParentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-container">{children}</div>;
};

export default ParentContainer;
