import React from "react"
import "../styles/search.css"

function Search({ handleInput }) {
  return (
    <div className="search-box search-box-light input-light">
      <div className="input-group flex-nowrap ">
        <span className="input-group-text" id="addon-wrapping">
          O
        </span>
        <input
          className="form-control"
          type="text"
          name="country-search"
          id="search"
          placeholder="Search for a country..."
          onChange={(e) => handleInput(e)}
        />
      </div>
    </div>
  )
}

export default Search
