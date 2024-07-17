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
          <div className="w-80">
            <input
              type="text"
              className=" w-full rounded-md  md:rounded-none py-2 border-0 border-b text-black md:text-white bg-white md:bg-transparent  md:border-white focus:outline-none focus:ring-0 focus:border-white ps-3 md:ps-0 ms-2 text-sm"
              placeholder=""
            />
          </div>
        )}
      </form>
    </>
  );
};

export default SearchBar;
