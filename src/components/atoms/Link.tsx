import React from "react";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
}

const Link = ({ className, children, href, target }: LinkProps) => {
  return (
    <a className={className} href={href} target={target}>
      {children}
    </a>
  );
};

export default Link;
