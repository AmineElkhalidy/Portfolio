import React from "react";

// Icons
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonial = ({ name, description }) => {
  return (
    <div className="bg-grey-800 rounded-xl sm:max-w-sm h-[12rem] lg:max-w-[28rem] lg:h-[14rem] max-w-xs p-6">
      {/* Name, username and logo */}
      <div className="mb-6">
        <div>
          <h3 className="text-grey-400 lg:text-lg font-medium md:text-md">
            {name}
          </h3>
        </div>

        {/* Stars */}
        <div className="flex">
          <StarIcon className="w-5 h-5 text-yellow-500" />
          <StarIcon className="w-5 h-5 text-yellow-500" />
          <StarIcon className="w-5 h-5 text-yellow-500" />
          <StarIcon className="w-5 h-5 text-yellow-500" />
          <StarIcon className="w-5 h-5 text-yellow-500" />
        </div>
      </div>

      <p className="max-w-xs font-medium text-gray-100 text-sm lg:text-lg md:max-w-md md:text-md">
        {description}
      </p>
    </div>
  );
};

export default Testimonial;
// w-[28rem] h-[12rem]
