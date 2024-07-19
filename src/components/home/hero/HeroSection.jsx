import React from "react";
import Carousel from "./Carousel";
import Category from "../category/Category";

const HeroSection = () => {
  const bannerOne =
    "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/aygvthaepmunafoqip2d.png";
  const bannerTwo =
    "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/hsbvko58hqejac3x1wa2.png";
  const bannerThree =
    "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/eyfvwtex6qauwenz3ldw.png";

  return (
    <div className=" flex justify-between">
      <div className="flex flex-col items-center justify-center">
        <Category />
      </div>
      <div className="flex flex-col">
        <div>
          <Carousel />
        </div>

        <div className="flex space-x-5">
          <div className="w-[400px] h-[300px]">
            <img
              src={bannerOne}
              alt="Description"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-[400px] h-[300px]">
            <img
              src={bannerTwo}
              alt="Description"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-[400px] h-[300px]">
            <img
              src={bannerThree}
              alt="Description"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
