import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleIconClick = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <form className="flex items-center justify-center ">
        <CiSearch size={25} onClick={handleIconClick} />
        {showSearch && (
          <div>
            <input
              type="text"
              className="border-0 border-b bg-transparent border-yellow-300 focus:outline-none focus:ring-0 focus:border-white"
              placeholder=""
            />
          </div>
        )}
      </form>
    </>
  );
};

export default SearchBar;
