import React from "react";

// Icons
import { RiStarSFill } from "react-icons/ri";

const Testimonial = ({ name, username, description, Platform }) => {
  return (
    <div className="bg-[#0a192f] rounded-[2rem] w-[28rem] h-[12rem] p-8 space-y-4">
      {/* Name, username and logo */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-1">
          <div>
            <span className="block text-[#585e6e] font-thin text-xs mb-1 tracking-widest">
              {name}
            </span>
            <h3 className="text-sm font-medium text-[#585e6e] md:text-md">
              {username}
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

      <p className="max-w-xs font-medium text-gray-200 text-sm md:max-w-md md:text-md">
        {description}
      </p>
    </div>
  );
};

export default Testimonial;
