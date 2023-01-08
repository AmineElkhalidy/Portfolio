import React from "react";

// Icons
import { RiStarSFill } from "react-icons/ri";

const Testimonial = ({ name, username, description, Platform }) => {
  return (
    <div className="bg-grey-800 rounded-xl w-[28rem] h-[12rem] p-8 space-y-4">
      {/* Name, username and logo */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h3 className="gradient-text text-sm font-medium md:text-md">
              {name}
            </h3>
          </div>

          <Platform className="" size="28" color="green" />
        </div>

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
