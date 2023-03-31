import React from "react";

const Form = ({ search }) => {
  return (
    <input
      type="text"
      name="search"
      id="search-field"
      className="search-input"
      onChange={search}
    ></input>
  );
};

export default Form;
