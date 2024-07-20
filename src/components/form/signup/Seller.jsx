import React from "react";

const Seller = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-[80%] max-w-[700px] rounded-xl bg-white shadow-xl py-10 ">
        <form
          action=""
          className="flex flex-col justify-center items-center md:px-24"
        >
          <h2 className="text-2xl font-bold mb-14 font-mono">
            Business Registration
          </h2>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="businessName"
            >
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              placeholder="Business Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="businessAddress"
            >
              Business Address
            </label>
            <input
              id="businessAddress"
              type="text"
              placeholder="Business Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="homeAddress"
            >
              Home Address
            </label>
            <input
              id="homeAddress"
              type="text"
              placeholder="Home Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cacNumber"
            >
              CAC Number (optional)
            </label>
            <input
              id="cacNumber"
              type="text"
              placeholder="CAC Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="businessCategory"
            >
              Business Category
            </label>
            <select
              id="businessCategory"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Category</option>
              <option value="Retail">Retail</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <div className="flex">
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-10 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register Business
          </button>
        </form>
      </div>
    </div>
  );
};

export default Seller;
