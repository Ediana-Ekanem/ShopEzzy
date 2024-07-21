import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const backgroundImageUrl =
    "https://res.cloudinary.com/dminu0vmy/image/upload/v1721479467/apx3oodt6laswn5qzgwq.jpg";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-20 ">
      <div className="flex w-[80%] max-w-[1000px] bg-white shadow-xl rounded-xl overflow-hidden ">
        <div
          className="w-1/2 bg-cover bg-center text-white hidden md:flex justify-center items-center text-xl"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
        <form
          action=""
          className="md:w-1/2 flex flex-col justify-center items-center px-10 py-32 "
        >
          <h2 className="text-2xl font-bold mb-10 font-mono">SignIn</h2>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="username"
              type="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
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
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                className="absolute  right-2 bottom-3  cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <AiOutlineEye
                className="absolute right-2 bottom-3  cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="flex text-end justify-end w-full mb-4">
            <p className="text-blue-500 cursor-pointer underline underline-offset-4">
              Forgot password?
            </p>
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-blue-400 text-white font-bold mt-5   py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            SignIn
          </button>

          <Link to="/signup/buyer">
            <p className="mt-10 text-gray-500">
              Don't have an account yet?
              <span className="text-blue-500 cursor-pointer underline underline-offset-4 ms-2">
                Sign Up
              </span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
