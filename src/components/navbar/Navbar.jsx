import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import logo from "/assets/icons/logo.svg";
import Searchbar from "../searchbar/SearchBar";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Add your search logic here
  };

  return (
    <div className="bg-[#002147] text-white py-10 font-Roboto">
      <Container>
        <nav className="flex gap-20  text-lg items-center justify-between">
          <div className="flex gap-5 items-center">
            <div className="w-32">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div>
              <Searchbar onsearch={handleSearch} />
            </div>
          </div>
          <ul className="flex gap-5 items-center">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="shop">
              <li>Shop</li>
            </Link>
            <Link to="account">
              <li>Account</li>
            </Link>
            <Link to="cart">
              <li>
                <FaShoppingCart size={25} />
              </li>
            </Link>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
