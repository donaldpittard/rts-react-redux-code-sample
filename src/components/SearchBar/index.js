import React, { useState } from "react";
import "./index.css";
import SearchIcon from "../SearchIcon";

function SearchBar({
  onQuery,
  label = "",
  placeholder = "Search...",
  className = "",
  ...props
}) {
  const [query, setQuery] = useState("");
  const handleQueryEvent = event => {
    event.preventDefault();

    if (query.length > 0) {
      onQuery(query);
    }
  };

  return (
    <form className="SearchBar__form" onSubmit={handleQueryEvent}>
      <label>{label}</label>
      <br />
      <input
        className={`SearchBar__input ${className}`}
        placeholder={placeholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
        {...props}
      ></input>
      <button onClick={handleQueryEvent}>
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
