import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCancelClick = () => {
    setSearchValue("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Conduct search here
      console.log("Search conducted with:", searchValue);
      // Add your search logic here
    }
  };

  return (
    <form
      className="flex items-center justify-center rounded-2xl border border-white bg-transparent"
      onSubmit={handleFormSubmit}
    >
      <div className="relative w-[450px] flex items-center">
        <CiSearch size={18} className="absolute left-2 text-white" />
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          className="w-full pl-8 pr-10 py-[10px] rounded-2xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-normal placeholder:text-sm placeholder:text-white"
          placeholder="Search..."
        />
        {searchValue && (
          <div className="absolute right-2 flex items-center justify-center w-6 h-6 rounded-full bg-gray-500">
            <button
              type="button"
              onClick={handleCancelClick}
              className="text-md font-medium text-white"
            >
              x
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
