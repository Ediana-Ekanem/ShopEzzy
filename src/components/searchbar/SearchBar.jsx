import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
