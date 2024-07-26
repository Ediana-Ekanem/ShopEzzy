import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { GadgetData } from "./data"; // Import your gadget data
import { useCart } from "../../../cart/useCart"; // Import useCart hook

const MobileGadDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const { addToCart } = useCart(); // Use the useCart hook

  // Find the item with the matching ID
  const item = GadgetData.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p className="text-center text-red-600 font-bold">Item not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="md:flex md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={item.img}
            alt={item.title}
            className="max-w-full max-h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

          <div className="flex items-center space-x-2 mb-4">
            <span className="text-lg font-semibold text-gray-800">Rating:</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
                    index < item.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.428 8.207 1.192-5.928 5.768 1.4 8.166L12 18.896l-7.347 3.868 1.4-8.166L.125 9.207l8.207-1.192L12 .587z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex  space-x-3">
            <p className="text-lg font-semibold text-gray-800 mb-2">Price:</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">
              #{item.currentAmt}
            </p>
          </div>
          <p className="text-sm text-red-600 line-through mb-4">
            #{item.prevAmt}
          </p>

          <p className="mt-4 text-base text-gray-700 mb-6">
            {item.description}
          </p>

          <div className="flex items-center space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileGadDetails;
