import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { TbLogin2, TbLogout2 } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";

const Help = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  return (
    <div className="absolute left-0 mt-12 w-[250px] bg-white text-black shadow-lg z-20">
      <ul className="flex flex-col justify-center items-center">
        <li className="px-4 py-3 hover:bg-slate-500 hover:text-white transition-colors duration-300 w-full  border-b">
          <Link to="/profile" className="w-full block text-center text-sm">
            <span className="flex gap-2 items-center ">Help Center</span>
          </Link>
        </li>
        <li className="px-4 py-3 hover:bg-slate-500 hover:text-white transition-colors duration-300 w-full border-b">
          <Link to="/login" className="w-full block text-center text-sm">
            <span className="flex gap-2 items-center ">Track my order</span>
          </Link>
        </li>
        <li className="px-4 py-3 hover:bg-slate-500 hover:text-white transition-colors duration-300 w-full border-b">
          <Link to="/login" className="w-full block text-center text-sm">
            <span className="flex gap-2 items-center ">
              ShopEzzy return policy
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Help;
