import React from "react";
import AmineLightGrey from "../assets/images/Amine-lightgrey.webp";

const ImageBox = () => {
  return (
    <div className="relative group">
      <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] z-50 -translate-x-4 -translate-y-4 duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
        <img
          className="w-full h-full object-contain"
          src={AmineLightGrey}
          alt="Amine Elkhalidy"
        />
      </div>
      <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] image -z-10 absolute top-0 left-0" />

      <div className="hidden xl:block w-[120px] h-[120px] lg:w-[170px] lg:h-[170px] image rounded-full absolute -top-24 -right-24 opacity-70 -z-20"></div>
      <div className="hidden xl:block w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] image rounded-full absolute -bottom-10 -left-12 opacity-50 z-20"></div>
    </div>
  );
};

export default ImageBox;
