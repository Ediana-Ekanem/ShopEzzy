import React from "react";
import Container from "../../container/Container";
import { Link } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";

const Category = () => {
  return (
    <div className="bg-white shadow-2xl my-5 rounded-lg">
      <Container>
        <nav className="space-y-10 py-5 px-10 text-slate-950 font-Montserrat">
          <div className="flex items-center gap-2">
            <TbCategoryFilled />
            <h3 className="font-bold">Category</h3>
          </div>
          <ul className="list-none space-y-10">
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/electronic">Electronic</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/fashion">Fashion</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/health">Health and Beauty</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/sports">Sports and Outdoors</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/toys">Toys and Games</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/books">Books and Media</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/groceries">Groceries</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/babies">Babies and Kids</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/pet">Pet Supplies</Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="/office">Office Supplies</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Category;
