import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import logo from "/assets/icons/logo.svg";
import SearchBar from "../searchbar/SearchBar";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-cyan-700 text-white py-10 font-Roboto">
      <Container>
        <nav className="flex gap-20  text-lg items-center justify-between">
          <div className="flex gap-5 items-center">
            <div className="w-32">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div>
              <SearchBar />
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
