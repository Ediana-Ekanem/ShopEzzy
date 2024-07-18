import React from "react";
import Carousel from "./Carousel";

const HeroSection = () => {
  const imageUrl =
    "https://res.cloudinary.com/dminu0vmy/image/upload/v1721325704/yfqnlhpowmcu9bl5ylf6.png";
  return (
    <div className=" flex justify-between space-x-3">
      <div className="w-[800px] h-[600px]">
        <img
          src={imageUrl}
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="w-[800px] h-[600px]">
        <img
          src={imageUrl}
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
