import React from "react";

const Testimonial = ({ name, username, description, Platform }) => {
  return (
    <div className="space-y-6 w-max">
      {/* Name, username and logo */}
      <div className="flex items-center justify-between">
        <div className="">
          <span>{name}</span>
          <h3>{username}</h3>
        </div>

        <Platform className="" size="30" color="green" />
      </div>

      <p className="max-w-md">{description}</p>
    </div>
  );
};

export default Testimonial;
