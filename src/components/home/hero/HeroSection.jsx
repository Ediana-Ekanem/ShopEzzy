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
    <div className="md:flex justify-between">
      <div className="flex flex-col flex-[1_0_33%] order-1 md:order-2">
        <div>
          <Carousel />
        </div>
        <div className="hidden md:flex space-x-5">
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
      <div className="flex flex-col items-center justify-center flex-grow order-2 md:order-1 ">
        <Category />
      </div>
    </div>
  );
};

export default HeroSection;
