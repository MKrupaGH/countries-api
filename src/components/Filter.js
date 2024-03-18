import React from "react";
import "../styles/filter.css";

const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Filter({ handleChange }) {
  return (
    <div className="select-box select-box-light">
      <select
        className="form-select"
        name="continents"
        id="continents"
        defaultValue="filter"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value="filter" disabled>
          Filter by Region
        </option>
        <option value="All">All</option>

        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
