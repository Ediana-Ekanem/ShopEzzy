import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { TbLogin2, TbLogout2 } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";

const AccountDropdown = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div className="absolute left-0 md:mt-12 w-32 bg-white text-black shadow-lg z-20">
      <ul className="flex flex-col justify-center items-center">
        <li className="px-4 py-3 hover:bg-blue-300 hover:text-white transition-colors duration-300 w-full border-b">
          <Link to="/profile" className="w-full block text-center text-sm">
            <span className="flex gap-2 items-center ">
              <FaRegUser size={12} />
              Profile
            </span>
          </Link>
        </li>
        <li className="px-4 py-3 hover:bg-blue-300 hover:text-white transition-colors duration-300 w-full border-b">
          <Link to="/login" className="w-full block text-center text-sm">
            <span className="flex gap-2 items-center ">
              <TbLogin2 size={15} />
              Login
            </span>
          </Link>
        </li>
        <li
          className="px-4 py-3 hover:bg-blue-300 hover:text-white transition-colors duration-300 w-full relative cursor-pointer border-b"
          onClick={toggleSubmenu}
        >
          <div className="flex items-center gap-1 justify-center">
            <span className="flex gap-2 items-center text-sm">
              <SiGnuprivacyguard size={12} />
              SignUp
            </span>
            <FaChevronDown
              size={12}
              className={`transform transition-transform duration-300 ms-2 ${
                showSubmenu ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {showSubmenu && (
            <ul className="absolute left-[135px] top-0 mt-2 w-20 bg-white text-black shadow-lg z-30">
              <li className="px-4 py-2 hover:bg-blue-400 hover:text-white transition-colors duration-300 border-b">
                <Link
                  to="/signup/seller"
                  className="w-full block text-center text-sm"
                >
                  Seller
                </Link>
              </li>
              <li className="px-2 py-2 hover:bg-blue-400 hover:text-white transition-colors duration-300">
                <Link
                  to="/signup/buyer"
                  className="w-full block text-center text-sm"
                >
                  Buyer
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};
export default AccountDropdown;
