import React from "react";
import "./search-box.style.css";
function SearchBox({ onChangeHandler, placeholder, className }) {
  return (
    <div>
      <input
        type="search"
        name="search-box"
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchBox;
