import React, { useState } from "react";

function Select({ options, placeholder }) {
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle change in selected option
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      className="select select-sm select-bordered lg:w-32 sm:w-20 min-[320px]:w-20 min-[220px]:w-20 max-w-xs"
      value={selectedOption}
      onChange={handleChange}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {/* Render options dynamically */}
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
