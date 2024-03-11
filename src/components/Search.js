import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Function to handle input change and perform search
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex relative">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-5 top-[25%] -translate-x-2/4"
      />
      <input
        value={query}
        onChange={handleChange}
        placeholder="Seach for..."
        className="input input-sm input-bordered pl-[2.3rem]"
      />
    </div>
  );
};

export default Search;
