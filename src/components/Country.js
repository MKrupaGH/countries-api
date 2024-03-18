import React from "react";
import "../styles/country.css";

function Country({ country, handleClick }) {
  return (
    <div
      className="country-box"
      onClick={() => {
        handleClick({ status: true, type: { name: country.name } });
      }}
    >
      <img className="box-image" src={country.flag} alt="" />
      <div className="box-name">{country.name}</div>
      <div className="box-info">
        <div>
          <span className="topic">Population:</span> {country.population}
        </div>
        <div>
          <span className="topic">Region:</span> {country.region}
        </div>
        <div>
          <span className="topic">Capital:</span> {country.capital}
        </div>
      </div>
    </div>
  );
}

export default Country;
