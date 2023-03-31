import React from "react";

const Form = ({ search }) => {
  return (
    <form>
      <input type='text' name="search" id="search-field" className="search-input"></input>
      <button type="submit" onClick={(event) => {
        event.preventDefault()
        search(document.getElementById('search-field').value)}}>Search</button>
    </form>
  )
}

export default Form;