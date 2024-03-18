import React from "react";
import "../styles/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ handleInput }) {
  return (
    <div className="search-box search-box-light input-light">
      <FontAwesomeIcon
        className="icon-search"
        icon={faMagnifyingGlass}
        style={{ color: "#c7c7c7" }}
      />
      <input
        type="text"
        name="country-search"
        id="search"
        placeholder="Search for a country..."
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
}

export default Search;
