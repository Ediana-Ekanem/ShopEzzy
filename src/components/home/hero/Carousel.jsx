import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/aygvthaepmunafoqip2d.png",
    },
    {
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/eyfvwtex6qauwenz3ldw.png",
    },
    {
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/hsbvko58hqejac3x1wa2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="w-[800px] h-[600px] relative group py-5  ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded bg-center bg-cover duration-500"
      ></div>
      {/* Dots */}
      <div className=" w-full flex justify-center ">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="mx-2">
            <RxDotFilled
              className={`cursor-pointer ${
                slideIndex === currentIndex ? "text-[#feab3a]" : "text-gray-600"
              }`}
              onClick={() => setCurrentIndex(slideIndex)}
              size={25}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
