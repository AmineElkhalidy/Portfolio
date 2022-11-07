import React from "react";

const Testimonial = ({ name, username, description, Platform }) => {
  return (
    <div className="bg-[#171e2f] rounded-[2rem] space-y-6 w-max p-12 m-6">
      {/* Name, username and logo */}
      <div className="flex items-center justify-between">
        <div className="">
          <span className="block text-[#585e6e] font-thin text-xs mb-1 tracking-widest">
            {name}
          </span>
          <h3 className="font-medium text-[#585e6e]">{username}</h3>
        </div>

        <Platform className="" size="30" color="green" />
      </div>

      <p className="max-w-md">{description}</p>
    </div>
  );
};

export default Testimonial;
