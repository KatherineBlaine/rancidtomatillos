import React from "react";

const Form = ({ search, resetSearch }) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search-field"
        className="search-input"
        onChange={search}
        placeholder="Search for movie..."
      ></input>
      <button className="reset-search-btn" onClick={resetSearch}>
        Reset Search
      </button>
    </div>
  );
};

export default Form;
