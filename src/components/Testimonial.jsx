import React from "react";

// Icons
import { RiStarSFill } from "react-icons/ri";

const Testimonial = ({ name, username, description, Platform }) => {
  return (
    <div className="bg-grey-800 rounded-xl w-[28rem] h-[12rem] p-8 space-y-4">
      {/* Name, username and logo */}
      <div className="w-full mb-8">
        <h3 className="text-orange-400 text-sm font-medium md:text-md">
          {name}
        </h3>

        {/* Stars */}
        <div className="flex">
          <RiStarSFill size={20} color={"#FDCC0D"} />
          <RiStarSFill size={20} color={"#FDCC0D"} />
          <RiStarSFill size={20} color={"#FDCC0D"} />
          <RiStarSFill size={20} color={"#FDCC0D"} />
          <RiStarSFill size={20} color={"#FDCC0D"} />
        </div>
      </div>

      <p className="max-w-xs font-medium text-gray-100 text-sm md:max-w-md md:text-md">
        {description}
      </p>
    </div>
  );
};

export default Testimonial;
