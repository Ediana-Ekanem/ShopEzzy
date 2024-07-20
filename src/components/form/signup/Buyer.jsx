import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Buyer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const countryCodes = [
    { code: "+1", name: "US" },
    { code: "+234", name: "NG" },
    { code: "+44", name: "UK" },
  ];

  return (
    <div className="flex justify-center items-center my-20">
      <form
        action=""
        className="flex flex-col justify-center items-center px-5 md:px-28 w-[80%] max-w-[600px]  py-10 rounded-xl bg-white shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4 font-mono">SignUp</h2>

        <div className="relative w-full mb-4">
          <input
            id="googleSignup"
            type="text"
            placeholder="Sign up with Google"
            className="shadow appearance-none border rounded w-full ps-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FcGoogle size={18} className="absolute top-1/3 left-2" />
        </div>

        <div className="flex items-center w-full my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <div className="w-full mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
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
            <select
              className="shadow appearance-none border rounded-l w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={countryCodes[1].code}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} {country.code}
                </option>
              ))}
            </select>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              className="shadow appearance-none border rounded-r w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="w-full mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showPassword ? (
            <AiOutlineEyeInvisible
              className="absolute right-2 bottom-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <AiOutlineEye
              className="absolute right-2 bottom-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>

        <div className="w-full mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showConfirmPassword ? (
            <AiOutlineEyeInvisible
              className="absolute right-2 bottom-3 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          ) : (
            <AiOutlineEye
              className="absolute right-2 bottom-3 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Buyer;
