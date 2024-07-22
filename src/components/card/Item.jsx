import React from "react";

const Item = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col w-[280px] h-[350px] bg-white shadow px-6 relative hover:shadow-md"
        >
          <div className="flex justify-center items-center w-full h-52 overflow-hidden my-4 py-2">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-contain"
            />
            {item.discountTag && (
              <p className="absolute w-10 h-10 left-2 top-1 text-sm text-white grid place-content-center bg-red-400 rounded-full">
                {item.discountTag}
              </p>
            )}
          </div>
          <h3 className="text-lg font-bold mt-2">{item.title}</h3>
          <div className="flex gap-3">
            <p className="text-sm text-red-600 line-through">#{item.prevAmt}</p>
            <p className="text-sm text-gray-800">#{item.currentAmt}</p>
          </div>

          <div>
            <button className="hidden mt-1 group-hover:flex justify-center items-center w-full py-2 bg-blue-600 text-white transition-opacity duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
